
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PaymentSummaryProps {
  plan: string;
}

export function PaymentSummary({ plan }: PaymentSummaryProps) {
  // Plan details based on selection
  const planDetails = {
    basic: {
      name: "Basic Plan",
      price: 9.99,
      billingCycle: "monthly",
      features: ["AI Tutor Access (5 hours/month)", "Basic Quiz Generation", "Career Guidance Chatbot"]
    },
    premium: {
      name: "Premium Plan",
      price: 19.99,
      billingCycle: "monthly",
      features: ["Unlimited AI Tutor Access", "Advanced Quiz Generation", "Career Consulting (1 session/month)", "AR/VR Content"]
    },
    professional: {
      name: "Professional Plan",
      price: 29.99,
      billingCycle: "monthly",
      features: ["Everything in Premium", "Career Consulting (4 sessions/month)", "Priority Support", "Personalized Learning Plan"]
    }
  };
  
  const selectedPlan = planDetails[plan as keyof typeof planDetails];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{selectedPlan.name}</h3>
            <p className="text-sm text-muted-foreground">{selectedPlan.billingCycle} billing</p>
          </div>
          <Badge variant="secondary">${selectedPlan.price}/month</Badge>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Includes:</h4>
          <ul className="text-sm space-y-1">
            {selectedPlan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${selectedPlan.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-muted-foreground text-sm mb-4">
            <span>Tax</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${selectedPlan.price.toFixed(2)}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            You'll be charged ${selectedPlan.price.toFixed(2)} monthly until you cancel.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start text-xs text-muted-foreground">
        <p>
          For demo purposes - no actual payment will be processed.
          In a real application, this would be integrated with Stripe.
        </p>
      </CardFooter>
    </Card>
  );
}
