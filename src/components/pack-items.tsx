import { Circle, CircleCheck, Trash2 } from "lucide-react";
import { cn } from "../lib/utils";
import { usePackItemStore } from "../stores/packitem-store";

const PackItem = () => {
  const packItems = usePackItemStore((state) => state.packItems);

  const removeItem = usePackItemStore((state) => state.removeItem);

  const updateItem = usePackItemStore((state) => state.updateItem);

  return (
    <div className="flex flex-col gap-2">
      {packItems.map((packItem) => (
        <div
          className="flex items-center justify-between rounded-2xl border border-foreground/8 bg-card/45 p-3"
          key={packItem.id}
        >
          <div className="flex items-center gap-2">
            <button
              // biome-ignore lint/performance/noJsxPropsBind: No performance issue
              onClick={() => updateItem(packItem.id)}
              type="button"
            >
              {packItem.isChecked ? (
                <CircleCheck className="size-5 stroke-1" />
              ) : (
                <Circle className="size-5 stroke-1 stroke-muted-foreground" />
              )}
            </button>

            <p
              className={cn(
                "font-semibold text-xs",
                packItem.isChecked && "text-muted-foreground/50 line-through"
              )}
            >
              {packItem.title}
            </p>
          </div>

          <button
            className="rounded-lg border border-muted-foreground/8 bg-card/95 p-2 text-muted-foreground transition-colors hover:text-destructive/80"
            // biome-ignore lint/performance/noJsxPropsBind: No performance issue
            onClick={() => removeItem(packItem.id)}
            type="button"
          >
            <Trash2 className="size-3" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PackItem;
