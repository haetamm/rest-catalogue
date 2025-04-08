import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import { fetchRestaurantDetail } from '@/lib/api';

const Detail = ({ restaurant }) => {
  const {
    name,
    description,
    pictureId,
    menus: { foods, drinks },
  } = restaurant;

  return (
    <div className="container">
      <Image
        src={`https://restaurant-api.dicoding.dev/images/large/${pictureId}`}
        alt={name}
        width={403}
        height={270}
      />

      <header>
        <h1>{name}</h1>
        <p>{description}</p>
      </header>

      <br />

      <main>
        <h2>Informasi Menu</h2>

        <h3>Makanan</h3>
        <ul>
          {foods.map((food) => (
            <li key={food.name}>{food.name}</li>
          ))}
        </ul>

        <h3>Minuman</h3>
        <ul>
          {drinks.map((drink) => (
            <li key={drink.name}>{drink.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

Detail.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
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

export default Detail;

// ✅ SSR: get data on every request
export async function getServerSideProps(context) {
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
}
