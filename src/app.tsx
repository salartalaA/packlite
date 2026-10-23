import AddPackItem from "./components/add-pack-item";
import CheckListActions from "./components/check-list-actions";
import Completion from "./components/completion";
import Header from "./components/header";
import PackItems from "./components/pack-items";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16">
      <div className="mx-auto flex w-full max-w-sm flex-col justify-center gap-2.5 rounded-3xl border border-foreground/8 bg-card/35 p-6">
        <Header />

        <Completion />

        <CheckListActions />

        <PackItems />

        <AddPackItem />

        <p className="mt-3 text-center font-semibold text-muted-foreground text-xs">
          {"با پکلایت، خیالت از پکت جمعه!"}
        </p>
      </div>
    </div>
  );
}

export default App;
