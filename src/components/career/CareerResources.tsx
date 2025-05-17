
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CareerResourcesProps {
  onSelectIndustry: (industry: string) => void;
}

export function CareerResources({ onSelectIndustry }: CareerResourcesProps) {
  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Marketing",
    "Engineering"
  ];
  
  const resources = [
    {
      title: "Resume Templates",
      description: "Free templates optimized for different industries and career stages."
    },
    {
      title: "Interview Guide",
      description: "Prepare for your next interview with our comprehensive guide."
    },
    {
      title: "Salary Calculator",
      description: "Compare salaries across industries, roles, and locations."
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Explore Industries</CardTitle>
          <CardDescription>
            Select an industry to get specific career insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant="outline"
                size="sm"
                onClick={() => onSelectIndustry(industry)}
              >
                {industry}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Career Resources</CardTitle>
          <CardDescription>
            Helpful tools for your career development
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {resources.map((resource, index) => (
            <div key={index} className="border-b pb-3 last:border-b-0 last:pb-0">
              <h4 className="font-medium">{resource.title}</h4>
              <p className="text-sm text-muted-foreground">{resource.description}</p>
              <Button variant="link" className="p-0 h-auto mt-1">
                Learn More
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
