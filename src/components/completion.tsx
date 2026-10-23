import { Check } from "lucide-react";
import { Progress } from "./ui/progress";

const Completion = () => (
  <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-foreground/8 bg-card/65 p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Check className="size-4 text-primary" />
        <span className="font-semibold text-xs">{"۳ از ۵ مورد"}</span>
      </div>

      <span className="text-muted-foreground text-xs">{"۶۰%"}</span>
    </div>

    <Progress value={60} />
  </div>
);

export default Completion;
