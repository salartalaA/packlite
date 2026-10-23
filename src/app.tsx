import CheckListActions from "./components/check-list-actions";
import Completion from "./components/completion";
import Header from "./components/header";
import PackItems from "./components/pack-items";

function App() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto flex w-full max-w-sm flex-col justify-center gap-2.5 rounded-3xl border border-foreground/8 bg-card/35 p-6">
        <Header />

        <Completion />

        <CheckListActions />

        <PackItems />
      </div>
    </div>
  );
}

export default App;
