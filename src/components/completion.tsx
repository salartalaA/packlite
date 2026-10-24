import { Check } from "lucide-react";
import { usePackItemStore } from "../stores/packitem-store";
import { Progress } from "./ui/progress";

const Completion = () => {
  const packItems = usePackItemStore((state) => state.packItems);

  const checkedCount = packItems.filter(
    (packItem) => packItem.isChecked
  ).length;

  const totalCount = packItems.length;

  const progress =
    totalCount === 0 ? 0 : Math.round((checkedCount / totalCount) * 100);

  return (
    <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-foreground/8 bg-card/65 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Check className="size-4 text-primary" />
          <span className="font-semibold text-xs">
            {checkedCount} از {totalCount} مورد
          </span>
        </div>

        <span className="text-muted-foreground text-xs">
          {progress.toLocaleString("fa-IR")}%
        </span>
      </div>

      <Progress value={progress} />
    </div>
  );
};

export default Completion;
