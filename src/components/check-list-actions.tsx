import { CheckCheck, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

const CheckListActions = () => (
  <div className="mt-1 flex items-center justify-between">
    <Button
      className={"w-fit text-muted-foreground text-xs"}
      size={"xs"}
      variant={"ghost"}
    >
      <CheckCheck />
      {"علامت زدن همه"}
    </Button>

    <Button
      className={"w-fit text-muted-foreground text-xs"}
      size={"xs"}
      variant={"ghost"}
    >
      <Trash2 />
      {"پاک‌کردن تیک‌خورده‌ها"}
    </Button>
  </div>
);

export default CheckListActions;
