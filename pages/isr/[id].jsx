import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import { fetchRestaurantDetail, fetchRestaurantList } from '@/lib/api';

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

// 👇 ISR: Static generation + auto update content in background
export async function getStaticPaths() {
  const { restaurants } = fetchRestaurantList();

  const paths = restaurants.map((r) => ({
    params: { id: r.id },
  }));

  return {
    paths,
    fallback: 'blocking', // ⚠️ wajib agar path yang belum ada bisa dirender on-demand
  };
}

export async function getStaticProps({ params }) {
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
}
