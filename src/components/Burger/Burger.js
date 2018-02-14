import React from 'react';

import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map( igKey => {
            //transforming an object of key/value pairs into an array
            //(key is number of ingredients and value is type of ingredient)
            return [...Array( props.ingredients[igKey] )].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        });
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;