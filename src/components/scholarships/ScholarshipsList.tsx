
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ScholarshipsListProps {
  filters: {
    level: string;
    category: string;
    amount: string;
  };
}

const scholarshipsData = [
  {
    id: 1,
    name: "Future Tech Leaders Scholarship",
    organization: "Tech Innovation Foundation",
    amount: 10000,
    deadline: "2025-06-15",
    level: "undergraduate",
    category: "merit",
    description: "Awarded to outstanding students pursuing degrees in computer science, engineering, or related fields."
  },
  {
    id: 2,
    name: "Healthcare Professional Grant",
    organization: "National Health Association",
    amount: 7500,
    deadline: "2025-07-30",
    level: "graduate",
    category: "need",
    description: "Supporting future healthcare professionals with demonstrated financial need."
  },
  {
    id: 3,
    name: "Global Education Fund",
    organization: "International Education Society",
    amount: 5000,
    deadline: "2025-08-10",
    level: "undergraduate",
    category: "merit",
    description: "For students interested in international studies, global affairs, or language learning."
  },
  {
    id: 4,
    name: "Scientific Research Fellowship",
    organization: "Advanced Research Institute",
    amount: 15000,
    deadline: "2025-05-20",
    level: "doctoral",
    category: "research",
    description: "Supporting innovative research projects in STEM fields with potential for real-world impact."
  },
  {
    id: 5,
    name: "First Generation Student Scholarship",
    organization: "Education for All Foundation",
    amount: 3000,
    deadline: "2025-09-01",
    level: "undergraduate",
    category: "need",
    description: "Designed for first-generation college students facing financial barriers to education."
  },
];

export function ScholarshipsList({ filters }: ScholarshipsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter scholarships based on search and filters
  const filteredScholarships = scholarshipsData.filter(scholarship => {
    // Search filter
    if (searchQuery && !scholarship.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !scholarship.organization.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Level filter
    if (filters.level !== "all" && scholarship.level !== filters.level) {
      return false;
    }
    
    // Category filter
    if (filters.category !== "all" && scholarship.category !== filters.category) {
      return false;
    }
    
    // Amount filter
    if (filters.amount !== "all") {
      if (filters.amount === "under5000" && scholarship.amount >= 5000) {
        return false;
      } else if (filters.amount === "5000-10000" && (scholarship.amount < 5000 || scholarship.amount > 10000)) {
        return false;
      } else if (filters.amount === "over10000" && scholarship.amount <= 10000) {
        return false;
      }
    }
    
    return true;
  });
  
  // Format date to more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search scholarships by name or organization..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      
      {filteredScholarships.length === 0 ? (
        <div className="text-center py-12 bg-secondary/30 rounded-lg">
          <h3 className="text-lg font-medium mb-2">No scholarships found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search query to see more results.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredScholarships.map((scholarship) => (
            <Card key={scholarship.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{scholarship.name}</CardTitle>
                    <CardDescription>{scholarship.organization}</CardDescription>
                  </div>
                  <div className="font-bold text-lg">${scholarship.amount.toLocaleString()}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{scholarship.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{scholarship.level.charAt(0).toUpperCase() + scholarship.level.slice(1)}</Badge>
                  <Badge variant="outline">{scholarship.category.charAt(0).toUpperCase() + scholarship.category.slice(1)}-Based</Badge>
                  <Badge variant="outline">Deadline: {formatDate(scholarship.deadline)}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button>View Details & Apply</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
