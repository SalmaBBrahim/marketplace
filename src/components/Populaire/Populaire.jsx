import React from 'react'
import Img1 from "../../assets/Populaire/pull_overH1.png";
import Img2 from "../../assets/Populaire/pull_overF1.png";
import Img3 from "../../assets/Populaire/pull_overH2.png";
import Img4 from "../../assets/Populaire/pull_overF2.png";
import './Populaire.css'; 

const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "PULL OVER",
      prix:"69.90 TND"
    },
    {
      id: 2,
      img: Img2,
      title: "PULL OVER",
      prix:"59.90 TND"
    },
    {
      id: 3,
      img: Img3,
      title: "PULL OVER",
      prix:"69.90 TND"
    },
    {
      id: 4,
      img: Img4,
      title: "PULL OVER",
     prix:"59.90 TND"
    },
   
  ];
const Populaire = () => {
  return (

    <div className='populaire'>
    <h1>MEILLEURE SÉLECTION POUR VOUS</h1> <hr />
    <div className='populaire-item'>
    {ProductsData.map((data) => (
      <div>
        <img
          src={data.img}
          alt="" />
        <div>
          <h3 className="title">{data.title}</h3>
          <p className="prix">{data.prix}</p>
          
        </div>
      </div>
    ))}

</div>
</div>

  )
}

export default Populaire
