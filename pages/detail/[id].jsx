import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

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

export const getStaticPaths = async () => {
  // call an external API endpoint to get ids of restaurants
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await response.json();
  const ids = restaurants.map((restaurant) => restaurant.id);

  // Get the paths we want to pre-render based on ids
  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  // Fetch necessary data for the restaurant detail page using params.id
  const response = await fetch(
    `https://restaurant-api.dicoding.dev/detail/${params.id}`
  );
  const { restaurant } = await response.json();

  return {
    props: {
      restaurant,
    },
  };
}
