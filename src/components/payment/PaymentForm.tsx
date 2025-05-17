
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";

interface PaymentFormProps {
  selectedPlan: string;
  onBack: () => void;
  onComplete: () => void;
}

const paymentSchema = z.object({
  cardName: z.string().min(2, "Please enter the cardholder name"),
  cardNumber: z.string().refine((val) => /^\d{16}$/.test(val), {
    message: "Please enter a valid 16-digit card number",
  }),
  expiration: z.string().refine((val) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(val), {
    message: "Please use MM/YY format",
  }),
  cvv: z.string().refine((val) => /^\d{3,4}$/.test(val), {
    message: "CVV must be 3 or 4 digits",
  }),
});

export function PaymentForm({ selectedPlan, onBack, onComplete }: PaymentFormProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiration: "",
      cvv: "",
    },
  });

  function onSubmit(values: z.infer<typeof paymentSchema>) {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful",
        description: `Your ${selectedPlan} plan subscription is now active.`,
      });
      onComplete();
    }, 2000);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cardholder Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="1234 5678 9012 3456" 
                      {...field}
                      onChange={(e) => {
                        // Remove spaces and limit to 16 digits
                        const value = e.target.value.replace(/\s+/g, '').substring(0, 16);
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expiration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiration (MM/YY)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="MM/YY" 
                        {...field}
                        onChange={(e) => {
                          let value = e.target.value.replace(/[^\d]/g, '');
                          if (value.length > 2) {
                            value = value.substring(0, 2) + '/' + value.substring(2, 4);
                          }
                          field.onChange(value);
                        }}
                        maxLength={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input 
                        type="text" 
                        placeholder="123" 
                        {...field}
                        onChange={(e) => {
                          // Only allow up to 4 digits
                          const value = e.target.value.replace(/\D/g, '').substring(0, 4);
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={onBack}>
                Back
              </Button>
              <Button type="submit" disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Complete Payment"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
