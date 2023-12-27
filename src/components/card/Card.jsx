import React from 'react'
import './Card.css'

const Card = ({texto,imagem}) => {
  return (
    <div className="card-hover">
    <div className="card-hover__content">
      <h3 className="card-hover__title">
        { texto }
      </h3>
      <p className="card-hover__text">A escolha é sua...</p>
      <a href="#" class="card-hover__link">
        <span>Learn How</span>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
    </div>
    <div className="card-hover__extra">
      <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
    </div>
    <img src= {imagem}/>
  </div>
  )
}

export default Card