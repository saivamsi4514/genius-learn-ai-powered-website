
import { Button } from "@/components/ui/button";

export function ScholarshipsHeader() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Scholarships & Financial Aid</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        Explore scholarships and financial aid opportunities to help fund your education and career development.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg">Browse Scholarships</Button>
        <Button size="lg" variant="outline">Apply for Financial Aid</Button>
      </div>
    </div>
  );
}
