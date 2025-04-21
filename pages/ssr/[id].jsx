import React from 'react';
import PropTypes from 'prop-types';
import { fetchRestaurantDetail } from '@/lib/api';
import RestaurantDetailContent from '@/components/RestaurantDetailContent';

const Detail = ({ restaurant }) => {
  return (
    <>
      <RestaurantDetailContent restaurant={restaurant} />
    </>
  );
};

Detail.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default Detail;

// ✅ SSR: Server side rendering => get data on every request
export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const restaurant = await fetchRestaurantDetail(id);

  if (!restaurant) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      restaurant,
    },
  };
};
