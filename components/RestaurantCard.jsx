import React from 'react';
import {
  Card,
  ImgContainer,
  ImgRes,
  CardTitle,
  CardRating,
  CardContent,
  CardContentTitle,
  Truncate,
  CardButton,
} from './styled/Card';
import PropTypes from 'prop-types';

const RestaurantCard = ({ id, pictureId, name, city, rating, description }) => {
  return (
    <Card>
      <ImgContainer>
        <ImgRes
          alt={`image ${name}`}
          src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
          crossOrigin="anonymous"
        />
        <CardTitle>
          <p>
            {name} - {city}
          </p>
        </CardTitle>
        <CardRating>
          <i title="ratings" className="fa fa-star"></i>
          <span>{rating}</span>
        </CardRating>
      </ImgContainer>
      <CardContent>
        <CardContentTitle>Description :</CardContentTitle>
        <Truncate>{description}</Truncate>
        <div>
          <CardButton href={`/ssr/${id}`}>SSR</CardButton>
          <CardButton href={`/ssg/${id}`}>SSG</CardButton>
          <CardButton href={`/isr/${id}`}>ISR</CardButton>
        </div>
      </CardContent>
    </Card>
  );
};

RestaurantCard.propTypes = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RestaurantCard;
