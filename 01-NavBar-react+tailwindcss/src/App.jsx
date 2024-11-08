import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <>
      <NextUIProvider>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[2048px]">
          <NavBar />
        </div>
      </NextUIProvider>
    </>
  );
}

export default App;
