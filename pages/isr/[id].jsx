import React from 'react';
import PropTypes from 'prop-types';
import { fetchRestaurantDetail, fetchRestaurantList } from '@/lib/api';
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

// 👇 ISR: Incremental Static Regeneration
export const getStaticPaths = async () => {
  const restaurants = await fetchRestaurantList();
  const paths = restaurants.map((r) => ({ params: { id: r.id } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const restaurant = await fetchRestaurantDetail(params.id);

  if (!restaurant) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      restaurant,
    },
    revalidate: 60, // ⏱ regenerate halaman tiap 60 detik (kalau ada request)
  };
};
