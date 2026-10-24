import { Luggage, RotateCcw, Trash2 } from "lucide-react";
import { type PackItem, usePackItemStore } from "../stores/packitem-store";
import { Button } from "./ui/button";

const defaultPackItems: PackItem[] = [
  {
    id: "1",
    isChecked: true,
    title: "لباس راحتی و لباس اضافه",
  },
  {
    id: "2",
    isChecked: false,
    title: "شارژر موبایل و پاوربانک",
  },
];

const Header = () => {
  const defaultItems = usePackItemStore((state) => state.defaultItems);
  const deleteAll = usePackItemStore((state) => state.deleteAll);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-xl border border-foreground/8 bg-card p-2 text-primary">
            <Luggage size={16} />
          </span>
          <span className="font-semibold">{"پکلایت"}</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            className={
              "rounded-lg border-foreground/8 bg-muted py-3.5 text-muted-foreground text-xs hover:bg-transparent"
            }
            // biome-ignore lint/performance/noJsxPropsBind: No performance issue
            onClick={() => deleteAll()}
            size={"xs"}
            variant={"outline"}
          >
            <Trash2 className="size-2.5" />
            {"حذف همه"}
          </Button>

          <Button
            className={
              "rounded-lg border-foreground/8 bg-muted py-3.5 text-muted-foreground text-xs hover:bg-transparent"
            }
            // biome-ignore lint/performance/noJsxPropsBind: No performance issue
            onClick={() => defaultItems(defaultPackItems)}
            size={"xs"}
            variant={"outline"}
          >
            <RotateCcw className="size-2.5" />
            {"پیش‌فرض"}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-xl">{"آماده سفری؟"}</h3>
        <p className="text-muted-foreground text-xs">{"چیزی رو جا نذار!"}</p>
      </div>
    </>
  );
};

export default Header;
