import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">HomePage</h1>
      <Button variant="outline" size="lg" className="mt-2">
        button
      </Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
};

export default HomePage;
