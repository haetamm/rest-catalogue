import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@/components/layouts/index';
import TitleContainer from '@/components/styled/TitleContainer';
import DetailRestaurant from '@/components/DetailRestaurant';
import Menus from '@/components/Menus';
import Review from '@/components/Review';

const RestaurantDetailContent = ({ restaurant }) => {
  const {
    name,
    description,
    pictureId,
    categories,
    city,
    rating,
    address,
    customerReviews,
    menus: { foods, drinks },
  } = restaurant;

  return (
    <Layout>
      <TitleContainer>Detail Restaurant</TitleContainer>
      <DetailRestaurant
        name={name}
        description={description}
        pictureId={pictureId}
        categories={categories}
        city={city}
        rating={rating}
        address={address}
      />
      <Menus foods={foods} drinks={drinks} />
      <Review customerReviews={customerReviews} />
    </Layout>
  );
};

RestaurantDetailContent.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    customerReviews: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        review: PropTypes.string.isRequired,
      })
    ).isRequired,
    menus: PropTypes.shape({
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
    }).isRequired,
  }).isRequired,
};

export default RestaurantDetailContent;
