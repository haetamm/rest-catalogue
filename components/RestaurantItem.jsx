import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

const RestaurantItem = ({ id, pictureId, name, description }) => {
  return (
    <div className="card">
      <Image
        src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
        alt={name}
        width={403}
        height={270}
      />

      <div className="container">
        <h2>
          <Link href={`/detail/${id}`}>{name}</Link>
        </h2>
        <p>{description}</p>
        <br />
      </div>
    </div>
  );
};

RestaurantItem.propTypes = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RestaurantItem;
