import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <Link to = "/">Home</Link>|
        <Link to = "/SobreNos">SobreNós</Link>|
        <Link to = "/Contato">Contato</Link>|
        <Link to = "/NossosClientes">NossosClientes</Link>|
        <Link to = "/Localizacao">Localização</Link>|
   </div>
  )
}

export default Menu