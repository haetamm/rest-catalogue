const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchRestaurantList() {
  const res = await fetch(`${BASE_URL}/list`);
  const { restaurants } = await res.json();
  return restaurants;
}

export async function fetchRestaurantDetail(id) {
  const res = await fetch(`${BASE_URL}/detail/${id}`);
  const { restaurant } = await res.json();
  return restaurant;
}
