import React from 'react'
import './pessoaImc.css'

function PessoaIMC(props){
  
    const [imc,setImc] = React.useState(0)
  
    return(
      <div className="imcCard"  >
        <h1>{props.pessoa.name}:</h1>
        <p>Altura: {props.pessoa.alt} m</p>
        <p>Peso: {props.pessoa.peso}</p>
        <p>IMC: {imc.toFixed(2)}</p>
        <buttom onClick={()=>{
          setImc(props.pessoa.peso/props.pessoa.altura**2)}}>
          Calcula IMC  
        </buttom>
      </div>
    )
  }

  export default PessoaIMC;
