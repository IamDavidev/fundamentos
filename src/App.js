import "./App.css";
import { Contador } from "./components/Contador";
import { ListCards } from "./components/ListCards";

const App = () => {
  return (
    <div className="App App-header">
      <ListCards />
      <Contador num={0} factor={5} />
    </div>
  );
};

export default App;
