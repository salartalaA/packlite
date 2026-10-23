import { Check, Circle, Trash2 } from "lucide-react";

const PackItems = () => (
  <>
    <div className="flex items-center justify-between rounded-2xl border border-foreground/8 bg-card/45 p-3">
      <div className="flex items-center gap-2">
        <button
          className="rounded-full border border-foreground/8 bg-foreground p-0.5 text-background"
          type="button"
        >
          <Check className="size-3" />
        </button>
        <p className="font-semibold text-muted-foreground/50 text-xs line-through">
          {"لباس راحتی و لباس اضافه"}
        </p>
      </div>

      <button
        className="rounded-lg border border-muted-foreground/8 bg-card/95 p-2 text-muted-foreground transition-colors hover:text-destructive/80"
        type="button"
      >
        <Trash2 className="size-3" />
      </button>
    </div>

    <div className="flex items-center justify-between rounded-2xl border border-foreground/8 bg-card/45 p-3">
      <div className="flex items-center gap-2">
        <button className="rounded-full" type="button">
          {/* <Check className="size-3" /> */}

          <Circle className="size-5 stroke-1 stroke-muted-foreground" />
        </button>
        <p className="font-semibold text-xs">{"شارژر موبایل و پاوربانک"}</p>
      </div>

      <button
        className="rounded-lg border border-muted-foreground/8 bg-card/95 p-2 text-muted-foreground transition-colors hover:text-destructive/80"
        type="button"
      >
        <Trash2 className="size-3" />
      </button>
    </div>
  </>
);

export default PackItems;
