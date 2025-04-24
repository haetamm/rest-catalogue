import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '@/components/layouts/index';
import TitleContainer from '@/components/styled/TitleContainer';
import DetailRestaurant from '@/components/DetailRestaurant';
import Menus from '@/components/Menus';
import Review from '@/components/Review';
import FormReview from './FormReview';
import { ButtonLike } from './styled/ButtonLike';
import { GrFavorite } from 'react-icons/gr';
import { isFavorite, toggleFavorite } from '@/lib/indexedDB';

const RestaurantDetailContent = ({ restaurant }) => {
  const {
    id,
    name,
    description,
    pictureId,
    categories,
    city,
    rating,
    address,
    customerReviews: initialReviews,
    menus: { foods, drinks },
  } = restaurant;

  const [liked, setLiked] = useState(false);
  const [customerReviews, setCustomerReviews] = useState(initialReviews);

  useEffect(() => {
    const checkFavorite = async () => {
      const fav = await isFavorite(id);
      setLiked(fav);
    };
    checkFavorite();
  }, [id]);

  const handleReviewAdded = (newReviews) => {
    setCustomerReviews(newReviews);
  };

  const handleLikeToggle = async () => {
    const newStatus = await toggleFavorite(restaurant);
    setLiked(newStatus);
  };

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
      <ButtonLike
        $liked={liked}
        onClick={handleLikeToggle}
        aria-label="like this restaurant"
        id="likeButton"
      >
        <GrFavorite />
      </ButtonLike>
      <Review customerReviews={customerReviews} />
      <FormReview id={id} onReviewAdded={handleReviewAdded} />
    </Layout>
  );
};

RestaurantDetailContent.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
