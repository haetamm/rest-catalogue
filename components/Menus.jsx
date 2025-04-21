import React from 'react';
import PropTypes from 'prop-types';
import {
  MenuTitle,
  DetailMenu,
  DetailFood,
  DetailDrink,
} from './styled/MenuSection';

const Menus = ({ foods, drinks }) => {
  return (
    <>
      <MenuTitle>Menu</MenuTitle>
      <DetailMenu className="detail-menu grid-2">
        <DetailFood className="detail-food">
          <h4>Food</h4>
          <ul>
            {foods.map((food, index) => (
              <li key={index}>{food.name}</li>
            ))}
          </ul>
        </DetailFood>
        <DetailDrink className="detail-drink">
          <h4>Drink</h4>
          <ul>
            {drinks.map((drink, index) => (
              <li key={index}>{drink.name}</li>
            ))}
          </ul>
        </DetailDrink>
      </DetailMenu>
    </>
  );
};

Menus.propTypes = {
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  drinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Menus;
