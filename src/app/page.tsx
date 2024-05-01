import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <Button>Button</Button>
    </div>
  );
}
