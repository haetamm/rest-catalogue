import React from 'react';
import PropTypes from 'prop-types';
import { GiShop } from 'react-icons/gi';
import { IoLocation } from 'react-icons/io5';
import {
  DetailRest,
  Detail,
  DetailImageContainer,
  ImageWrapper,
  ImgRes2,
  DetailInfo,
  DetailInfoItem,
  Category,
} from './styled/DetailRestaurantSection';
import { FaStar } from 'react-icons/fa';

const DetailRestaurant = ({
  name,
  description,
  pictureId,
  categories,
  city,
  rating,
  address,
}) => {
  return (
    <DetailRest id="detail-rest">
      <Detail className="detail">
        <DetailImageContainer>
          <ImageWrapper>
            <ImgRes2
              className="img-res2"
              alt={`image ${name}`}
              src={`https://restaurant-api.dicoding.dev/images/medium/${pictureId}`}
              crossOrigin="anonymous"
            />
          </ImageWrapper>
        </DetailImageContainer>
        <DetailInfo className="detail-info">
          <DetailInfoItem>
            <span>
              <GiShop />
              {name}
            </span>
          </DetailInfoItem>
          <DetailInfoItem>
            <span>
              <IoLocation />
              {address}, {city}
            </span>
          </DetailInfoItem>
          <DetailInfoItem>
            <span>
              <FaStar />
              {rating}
            </span>
          </DetailInfoItem>
          <DetailInfoItem>
            <p className="truncate2">Description: {description}</p>
          </DetailInfoItem>
          <DetailInfoItem>
            {categories.map((category, index) => (
              <Category key={index} className="category">
                {category.name}
              </Category>
            ))}
          </DetailInfoItem>
        </DetailInfo>
      </Detail>
    </DetailRest>
  );
};

DetailRestaurant.propTypes = {
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
};

export default DetailRestaurant;
