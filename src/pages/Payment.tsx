
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PaymentOptions } from "@/components/payment/PaymentOptions";
import { PaymentForm } from "@/components/payment/PaymentForm";
import { PaymentSummary } from "@/components/payment/PaymentSummary";
import { Helmet } from "react-helmet-async";

const Payment = () => {
  const [step, setStep] = useState("options"); // options, form, confirmation
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Payment | EduGenius</title>
        <meta name="description" content="Select a plan and make a payment to access premium features" />
      </Helmet>
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Choose Your Plan</h1>
            <p className="text-muted-foreground mt-2">
              Select the plan that works best for your learning needs
            </p>
          </div>
          
          {step === "options" && (
            <PaymentOptions 
              onSelect={(plan) => {
                setSelectedPlan(plan);
                setStep("form");
              }} 
            />
          )}
          
          {step === "form" && selectedPlan && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <PaymentForm 
                  selectedPlan={selectedPlan} 
                  onBack={() => setStep("options")}
                  onComplete={() => setStep("confirmation")}
                />
              </div>
              <div className="md:col-span-1">
                <PaymentSummary plan={selectedPlan} />
              </div>
            </div>
          )}
          
          {step === "confirmation" && (
            <div className="text-center py-12 px-4 bg-secondary/20 rounded-lg">
              <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
              <p className="mb-8 text-gray-600 max-w-md mx-auto">Thank you for your payment. You now have access to premium features.</p>
              <Button onClick={() => window.location.href = "/dashboard/student"}>
                Go to Dashboard
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
