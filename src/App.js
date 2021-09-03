import './App.css';
import { useState } from 'react';



function App() {
  
  const [kmPerLiter, setKmPerLiter] = useState('');
  const [travelDistance, setTravelDistance] = useState('');
  const [costGas, setCostGas] = useState('');
  const [result, setResult] = useState(false);
  
 
  
  
  const handleForm = (e) => {
    e.preventDefault()
  }
  
  const handleAutonomy = () => {
    
    let costPerKm;
    costPerKm = (costGas/kmPerLiter);
    

    return (costPerKm)
  }
  
  const handleTravel = () => {
   
    let totalTravelCost
    let costPerKm = handleAutonomy();

    totalTravelCost = (costPerKm * travelDistance);
    
    return (totalTravelCost)

  }

 

  return (
    <div className="App">
      <header className="App-header">

        <h1 className="title">Quanto Custa Ir!</h1>

        <form className="form" onSubmit={handleForm}>
          <label>Quanto o carro faz por litro?</label>
          <input type="number" value = {kmPerLiter} onChange = {(e) => setKmPerLiter(e.target.value)}></input>
          <label>Quanto custa a gasolina atualmente?</label>
          <input type="number" value = {costGas} onChange = {(e) => setCostGas(e.target.value)}></input>
          <label>Qual a distância que preciso percorrer?</label>
          <input type="number" value = {travelDistance} onChange = {(e) => setTravelDistance(e.target.value)}></input>
          
        </form>
        <button onClick={() => setResult(true)}>Calcular!</button>
        <div>
         { result ? `Com ${handleAutonomy().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} você consegue andar 1 km. 
         O custo da viagem que você pretende fazer é de ${handleTravel().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`:``}
        </div>  
        
      </header>
    </div>
  );
}



export default App;
