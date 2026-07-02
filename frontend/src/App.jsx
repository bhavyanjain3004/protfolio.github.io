import { useState } from "react";
import "@/App.css";
import "@/index.css";
import BootScreen from "@/components/BootScreen";
import LoadingScreen from "@/components/LoadingScreen";
import Desktop from "@/components/Desktop";

function App() {
  // boot -> loading -> desktop
  const [stage, setStage] = useState("boot");

  return (
    <div className="App">
      {stage === "boot" && <BootScreen onDone={() => setStage("loading")} />}
      {stage === "loading" && <LoadingScreen onDone={() => setStage("desktop")} />}
      {stage === "desktop" && <Desktop />}
    </div>
  );
}

export default App;
