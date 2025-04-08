import RestaurantList from '@/components/RestaurantList';
import React from 'react';
import PropTypes from 'prop-types';

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
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await response.json();

  return {
    props: {
      restaurants,
    },
  };
};
