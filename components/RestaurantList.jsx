import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ListRest } from './styled/ListRest';
import RestaurantCard from './RestaurantCard';
import { LoadingSpinner } from './styled/LoadingSpinner';

const RestaurantList = ({ restaurants }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ListRest>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </ListRest>
      )}
    </>
  );
};

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pictureId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RestaurantList;
