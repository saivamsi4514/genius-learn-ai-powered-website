
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PaymentOptionsProps {
  onSelect: (plan: string) => void;
}

export function PaymentOptions({ onSelect }: PaymentOptionsProps) {
  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: 9.99,
      description: "Essential learning tools for students",
      features: [
        "AI Tutor Access (5 hours/month)",
        "Basic Quiz Generation",
        "Career Guidance Chatbot",
        "Access to Learning Resources"
      ]
    },
    {
      id: "premium",
      name: "Premium",
      price: 19.99,
      description: "Enhanced learning experience with advanced features",
      features: [
        "Unlimited AI Tutor Access",
        "Advanced Quiz Generation",
        "Career Consulting (1 session/month)",
        "All Learning Resources",
        "AR/VR Learning Content"
      ],
      popular: true
    },
    {
      id: "professional",
      name: "Professional",
      price: 29.99,
      description: "Complete solution for serious learners",
      features: [
        "Everything in Premium",
        "Career Consulting (4 sessions/month)",
        "Priority Support",
        "Personalized Learning Plan",
        "Certificate of Completion"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <Card 
          key={plan.id}
          className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
        >
          {plan.popular && (
            <Badge className="absolute -top-2 right-6 bg-primary hover:bg-primary">
              Most Popular
            </Badge>
          )}
          
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="mb-4">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-muted-foreground"> /month</span>
            </div>
            
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          
          <CardFooter>
            <Button 
              onClick={() => onSelect(plan.id)}
              className="w-full"
              variant={plan.popular ? 'default' : 'outline'}
            >
              Select {plan.name}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
