import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { hash } from "https://deno.land/x/bcrypt@v0.4.1/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  console.log('auth-signup function called')
  
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { full_name, email, password, role } = await req.json()
    console.log('Received data:', { full_name, email, role })

    if (!full_name || !email || !password || !role) {
      console.error('Missing required fields')
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Initialize Supabase client using environment variables from edge function context
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    console.log('Supabase URL available:', !!supabaseUrl)
    console.log('Service key available:', !!supabaseServiceKey)
    
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

    // Check if user already exists
    console.log('Checking if user exists with email:', email)
    const { data: existingUser, error: checkError } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('email', email)
      .maybeSingle()

    if (checkError) {
      console.error('Error checking existing user:', checkError)
      return new Response(
        JSON.stringify({ error: 'Database error while checking existing user' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (existingUser) {
      console.log('User already exists')
      return new Response(
        JSON.stringify({ error: 'User already exists with this email' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Hash the password
    console.log('Hashing password')
    const hashedPassword = await hash(password, 10)

    // Insert user into database
    console.log('Inserting new user')
    const { data: newUser, error } = await supabaseAdmin
      .from('users')
      .insert({
        full_name,
        email,
        password: hashedPassword,
        role
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to create user: ' + error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('User created successfully:', newUser.id)
    
    // Return user data without password
    const { password: _, ...userWithoutPassword } = newUser
    
    return new Response(
      JSON.stringify({ user: userWithoutPassword, message: 'User created successfully' }),
      { status: 201, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Signup error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error: ' + error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})