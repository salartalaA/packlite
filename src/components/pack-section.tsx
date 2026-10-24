import { PackageOpen } from "lucide-react";
import PackItems from "../components/pack-items";
import { usePackItemStore } from "../stores/packitem-store";
import CheckListActions from "./check-list-actions";

const PackSection = () => {
  const packItems = usePackItemStore((state) => state.packItems);

  return (
    <>
      {packItems.length > 0 ? (
        <>
          <CheckListActions />

          <PackItems />
        </>
      ) : (
        <div className="mt-4.5 flex flex-col items-center justify-center gap-2 rounded-2xl border border-foreground/8 border-dashed bg-card/35 p-6">
          <span className="rounded-lg border border-muted-foreground/8 bg-card/95 p-2 text-muted-foreground/50 transition-colors">
            <PackageOpen />
          </span>

          <div className="flex flex-col items-center gap-1">
            <p className="text-xs">{"هنوز پک‌آیتمی اضافه نکردی!"}</p>

            <p className="text-[10px] text-muted-foreground">
              {"وسایل مورد نظر سفرت رو توی کادر پایین بنویس"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PackSection;
