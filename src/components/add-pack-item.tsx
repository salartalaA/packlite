import { Check } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";

const AddPackItem = () => {
  const [newItem, setNewItem] = useState("");

  return (
    <div className="mt-4 flex items-center justify-between rounded-2xl border border-foreground/8 bg-card/45 p-2 px-3 transition-colors focus-within:border-foreground/15!">
      <Input
        autoComplete="off"
        className="border-none! bg-transparent p-0 outline-none! ring-0!"
        // biome-ignore lint/performance/noJsxPropsBind: No performance issue
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="وسیله جدید ..."
        value={newItem}
      />

      <button
        className="rounded-lg border border-muted-foreground/8 bg-card/95 p-2 text-muted-foreground transition-all disabled:opacity-50"
        disabled={!newItem.trim()}
        type="button"
      >
        <Check className="size-3" />
      </button>
    </div>
  );
};

export default AddPackItem;
