import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Routes/Router";
import Navbar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}

export default App;
