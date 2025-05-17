
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CareerConsultingHero } from "@/components/career/CareerConsultingHero";
import { CareerServices } from "@/components/career/CareerServices";
import { CareerConsultationForm } from "@/components/career/CareerConsultationForm";
import { Helmet } from "react-helmet-async";

const CareerConsulting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Career Consulting | EduGenius</title>
        <meta name="description" content="Get personalized career guidance and consulting powered by AI" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <CareerConsultingHero />
        <CareerServices />
        <CareerConsultationForm />
      </main>
      <Footer />
    </div>
  );
};

export default CareerConsulting;
