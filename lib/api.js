export async function fetchRestaurantList() {
  const res = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await res.json();
  return restaurants;
}

export async function fetchRestaurantDetail(id) {
  const res = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`);
  const { restaurant } = await res.json();
  return restaurant;
}
