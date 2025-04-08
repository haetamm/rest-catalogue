import RestaurantList from '@/components/RestaurantList';
import React from 'react';
import PropTypes from 'prop-types';
import { fetchRestaurantList } from '@/lib/api';

const Home = ({ restaurants }) => {
  return (
    <>
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
    </>
  );
};

Home.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pictureId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Home;

export const getStaticProps = async () => {
  const restaurants = await fetchRestaurantList();
  return {
    props: {
      restaurants,
    },
  };
};
