import React from 'react';
import TitleBar from '../../../../components/TitleBar/TitleBar';
import BottomBar from '../../BottomBar/BottomBar';
import PancakeImg from '../../../../assets/Images/pancake.jpg';
import './DetailRecipe.scss';
import '../../../../components/TitleBar/TitleBar.scss';
import '../../../../components/BottomBar/BottomBar.scss';

const Detailecipe = () => {
  return (
    <React.Fragment>
      <TitleBar
        title="Nombre"
      />
      <div className="DetailRecipe">
        <img
        src={PancakeImg}
        className="DetailRecipe-img"
        ></img>
        <div className='DetailRecipe-wrapper'>
          <span className="DetailRecipe-tag">
            Panadería
            {/* variable */}
          </span>

          <ul className='DetailRecipe-list'>
            <li> Ingrediente 1</li>
            <li> Ingrediente 2</li>
            <li> Ingrediente 3</li>
            <li> Ingrediente 4</li>
            <li> Ingrediente 5</li>
          </ul>
        </div>

        <div className='DetailRecipe-instructions'>
          <h2> Instrucciones </h2>
          <p className='DetailRecipe-instructions-item'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum maiores, alias nesciunt sequi est pariatur quisquam placeat deleniti adipisci debitis iure quia officia veniam numquam asperiores possimus dignissimos aperiam.
          </p>
          <p className='DetailRecipe-instructions-item'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum maiores, alias nesciunt sequi est pariatur quisquam placeat deleniti adipisci debitis iure quia officia veniam numquam asperiores possimus dignissimos aperiam.
          </p>
          <p className='DetailRecipe-instructions-item'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum maiores, alias nesciunt sequi est pariatur quisquam placeat deleniti adipisci debitis iure quia officia veniam numquam asperiores possimus dignissimos aperiam.
          </p>
          <p className='DetailRecipe-instructions-item'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum maiores, alias nesciunt sequi est pariatur quisquam placeat deleniti adipisci debitis iure quia officia veniam numquam asperiores possimus dignissimos aperiam.
          </p>
        </div>
      </div>
      <BottomBar/>
    </React.Fragment>
  );
};

export default Detailecipe;
