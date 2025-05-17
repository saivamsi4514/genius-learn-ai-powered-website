
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface ScholarshipFiltersProps {
  filters: {
    level: string;
    category: string;
    amount: string;
  };
  setFilters: (filters: any) => void;
}

export function ScholarshipFilters({ filters, setFilters }: ScholarshipFiltersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter Scholarships</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">Education Level</h3>
          <RadioGroup
            value={filters.level}
            onValueChange={(value) => setFilters({ ...filters, level: value })}
          >
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="all" id="all-level" />
              <Label htmlFor="all-level">All Levels</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="undergraduate" id="undergraduate" />
              <Label htmlFor="undergraduate">Undergraduate</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="graduate" id="graduate" />
              <Label htmlFor="graduate">Graduate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="doctoral" id="doctoral" />
              <Label htmlFor="doctoral">Doctoral</Label>
            </div>
          </RadioGroup>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-sm font-medium mb-3">Category</h3>
          <RadioGroup
            value={filters.category}
            onValueChange={(value) => setFilters({ ...filters, category: value })}
          >
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="all" id="all-category" />
              <Label htmlFor="all-category">All Categories</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="merit" id="merit" />
              <Label htmlFor="merit">Merit-Based</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="need" id="need" />
              <Label htmlFor="need">Need-Based</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="research" id="research" />
              <Label htmlFor="research">Research</Label>
            </div>
          </RadioGroup>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-sm font-medium mb-3">Award Amount</h3>
          <RadioGroup
            value={filters.amount}
            onValueChange={(value) => setFilters({ ...filters, amount: value })}
          >
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="all" id="all-amount" />
              <Label htmlFor="all-amount">Any Amount</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="under5000" id="under5000" />
              <Label htmlFor="under5000">Under $5,000</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="5000-10000" id="5000-10000" />
              <Label htmlFor="5000-10000">$5,000 - $10,000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="over10000" id="over10000" />
              <Label htmlFor="over10000">Over $10,000</Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button className="w-full" variant="outline" size="sm" onClick={() => setFilters({ level: "all", category: "all", amount: "all" })}>
          Reset Filters
        </Button>
      </CardContent>
    </Card>
  );
}
