import RestaurantList from '@/components/RestaurantList';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '@/components/layouts/index';
import TitleContainer from '@/components/styled/TitleContainer';
import { getAllFavorite } from '@/lib/indexedDB';

const Favorite = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favorites = await getAllFavorite();
      setRestaurants(favorites);
    };

    fetchFavorites();
  }, []);
  return (
    <>
      <Layout>
        <TitleContainer>Your Favorite Cafe / Restaurant</TitleContainer>
        <RestaurantList restaurants={restaurants} />
      </Layout>
    </>
  );
};

Favorite.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pictureId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Favorite;
