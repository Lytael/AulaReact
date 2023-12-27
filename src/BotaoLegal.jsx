import { buildQueries } from '@testing-library/react'
import React from 'react'
import './BotaoLegal.css'

const BotaoLegal = ({texto}) => {
  return (
   <button className='botao-legal'>
    {texto}
   </button>
  )
}

export default BotaoLegal