import { useState } from "react";

import React from "react";

import './App.css'

const App = () => {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [message, setMessage] =useState('')
    

    function calcularIMC(){
       const alt = altura / 100;
       const imc = peso / (alt*alt);

       if(imc < 18.5){
           setMessage('Você está abaixo do peso! seu IMC: ' + imc.toFixed(2))
       }else if(imc > 20.06 && imc < 34.9){
           setMessage('Você está levemente acima do peso! seu IMC: ' + imc.toFixed(2))
       }else if(imc > 34.9){
           setMessage('Cuidado obesidade!: ' + imc.toFixed(2))
       }

    }
    
    
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input 
        type="text" 
        placeholder="Peso em (kg) Ex: 90" 
        value={peso}
        onChange={(e)=>setPeso(e.target.value)}

        />

        <input 
        type="text" 
        placeholder="Altura em (cm) Ex: 180" 
        value={altura}
        onChange={(e) =>setAltura(e.target.value)}

        />

        <button onClick={calcularIMC}>Calcular</button>

        <h2>{message}</h2>
      </div>
    </div>
  );
};


export default App;
