import { Navbar, Header } from "components";
import "./App.css";

function App() {
  return (
    <div className="flex h-full flex-col bg-secondary-200 font-league-spartan md:flex-row">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
