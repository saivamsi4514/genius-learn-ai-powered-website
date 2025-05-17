
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CareerChatbot } from "@/components/career/CareerChatbot";
import { CareerResources } from "@/components/career/CareerResources";
import { Helmet } from "react-helmet-async";

const CareerGuide = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Career Guide Chatbot | EduGenius</title>
        <meta name="description" content="Chat with our AI career guide to explore career paths and opportunities" />
      </Helmet>
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">AI Career Guide</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CareerChatbot selectedIndustry={selectedIndustry} />
            </div>
            <div className="lg:col-span-1">
              <CareerResources onSelectIndustry={setSelectedIndustry} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareerGuide;
