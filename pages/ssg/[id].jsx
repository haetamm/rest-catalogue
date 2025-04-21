import React from 'react';
import { fetchRestaurantDetail, fetchRestaurantList } from '@/lib/api';
import PropTypes from 'prop-types';
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

// SSG : Static site generation
export const getStaticPaths = async () => {
  const restaurants = await fetchRestaurantList();
  const paths = restaurants.map((r) => ({ params: { id: r.id } }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const restaurant = await fetchRestaurantDetail(params.id);
  return {
    props: {
      restaurant,
    },
  };
}
