import React, { useState } from 'react'

const MeuNome = () => {

  const [nome,setNome] = useState()

  const alterarNome = () => {
    const nomeDigitado = prompt("Digite Seu Nome")
    setNome(nomeDigitado)
  }


  return (
    <div>Meu nome é {nome}
    <br />
    
    <button onClick={alterarNome}>Alterar Nome</button>
    </div>
  
  )
}

export default MeuNome