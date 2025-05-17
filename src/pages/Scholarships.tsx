
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScholarshipsList } from "@/components/scholarships/ScholarshipsList";
import { ScholarshipFilters } from "@/components/scholarships/ScholarshipFilters";
import { ScholarshipsHeader } from "@/components/scholarships/ScholarshipsHeader";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Scholarships = () => {
  const [filters, setFilters] = useState({
    level: "all",
    category: "all",
    amount: "all",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Scholarships | EduGenius</title>
        <meta name="description" content="Explore scholarship opportunities to fund your education" />
      </Helmet>
      <Header />
      <main className="flex-grow py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <ScholarshipsHeader />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
            <div className="lg:col-span-1">
              <ScholarshipFilters filters={filters} setFilters={setFilters} />
            </div>
            <div className="lg:col-span-3">
              <ScholarshipsList filters={filters} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Scholarships;
