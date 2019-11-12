import React from 'react';
import './Recipe.scss';
import '../../../components/BottomBar/BottomBar';
import '../../../components/TitleBar/TitleBar';
import TitleBar from '../../../components/TitleBar/TitleBar';
// import BottomBar from '../BottomBar/BottomBar';
import RecipeCard from './RecipeCards/RecipeCard';
import SalmonImg from '../../../assets/Images/salmon.jpg';
import PancakeImg from '../../../assets/Images/pancake.jpg';
import HamburguerImg from '../../../assets/Images/hamburguer.jpg';
import PizzaImg from '../../../assets/Images/pizza.jpg';

const Recipe = ()=>{
    const recipeCards = [
        {
        image:SalmonImg,
        name:'Salmón',
        type:'Mariscos'
        },
        {
        image:PancakeImg,
        name:'Pancake',
        type:'Panadería'
        },
        {
        image:HamburguerImg,
        name:'Hamburguer',
        type:'Fast food'
        },
        {
        image:PizzaImg,
        name:'Pizza',
        type:'Fast food'
        },
        {
        image:SalmonImg,
        name:'Salmón',
        type:'Mariscos'
        },
        {
        image:PancakeImg,
        name:'Pancake',
        type:'Panadería'
        },
        {
        image:PizzaImg,
        name:'Pizza',
        type:'Fast food'
        },
        
    ];
    const timeOfTheDay = ['Desayuno','Comida','Cena'];
     return(
         <div className="Recipe">
             <TitleBar
             title="Recetas"
             />
             <div className="Recipe-wrapper">
                <div className="Recipe-cardsWrapper">
                {
                    recipeCards.map((card)=>{
                        return(
                            <RecipeCard
                            cardType="recipeCard"
                            recipe={{image:card.image,name:card.name,type:card.type}}
                            />
                        )
                    })
                }
                </div>
             </div>
             <div className="Recipe-timeOfTheDay">
                 {
                     timeOfTheDay.map((timeOfTheDay)=>{
                         return(
                             <RecipeCard
                             cardType="timeOfTheDayCard"
                             recipe={{}}
                             >{timeOfTheDay}</RecipeCard>
                         )
                     })
                 }
             </div>
             <BottomBar/>
         </div>
     )
};
export default Recipe;