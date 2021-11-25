import BioInfo from "./components/bioInfo";
import FruitList from "./components/fruitList";

function App() {
  const fruits = ['apple', 'orange', 'mango']
  const bio = {
    name : 'jack',
    place : 'chennai'
  }
  return (
    <div>
      <FruitList fruits={fruits}/>
      <BioInfo bio = {bio} fruits={fruits}/>
    </div>
  );
}

export default App;
