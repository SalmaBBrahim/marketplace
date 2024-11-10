import React from 'react'
import './FemaleArticle.css'
import { assets } from '../../assets/assets'

const FemaleArticle = ({id, name, image, price}) => {
  return (
    <div className='article'>
      <div className="article-img-container">
       <img src={image} alt="" />

      </div>
      <div className="article info">
        <p>{name}</p>
        <p className="article price">
          {price}dt
        </p>
      </div>
    </div>
  )
}

export default FemaleArticle
