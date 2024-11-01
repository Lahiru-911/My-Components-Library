import {NextUIProvider} from "@nextui-org/react";
import './App.css'
import NavBar from "./Components/NavBar";

function App() {
 

  return (
    <>
     <NextUIProvider>
      <NavBar/>
    </NextUIProvider>
        
    </>
  )
}

export default App
