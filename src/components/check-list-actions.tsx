import { CheckCheck, Trash2 } from "lucide-react";
import { usePackItemStore } from "../stores/packitem-store";
import { Button } from "./ui/button";

const CheckListActions = () => {
  const checkAll = usePackItemStore((state) => state.checkAll);
  const deleteChecked = usePackItemStore((state) => state.deleteChecked);

  return (
    <div className="mt-1 flex items-center justify-between">
      <Button
        className={"w-fit text-muted-foreground text-xs"}
        // biome-ignore lint/performance/noJsxPropsBind: No performance issue
        onClick={() => checkAll()}
        size={"xs"}
        variant={"ghost"}
      >
        <CheckCheck />
        {"علامت زدن همه"}
      </Button>

      <Button
        className={"w-fit text-muted-foreground text-xs"}
        // biome-ignore lint/performance/noJsxPropsBind: No performance issue
        onClick={() => deleteChecked()}
        size={"xs"}
        variant={"ghost"}
      >
        <Trash2 />
        {"پاک‌کردن تیک‌خورده‌ها"}
      </Button>
    </div>
  );
};

export default CheckListActions;
