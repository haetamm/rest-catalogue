import { openDB } from 'idb';

const DB_NAME = 'restaurant-db';
const DB_VERSION = 1;
const STORE_NAME = 'favorites';

export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
};

export const getAllFavorite = async () => {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });

  return await db.getAll(STORE_NAME);
};

export const toggleFavorite = async (restaurant) => {
  const db = await initDB();
  const existing = await db.get(STORE_NAME, restaurant.id);

  if (existing) {
    await db.delete(STORE_NAME, restaurant.id);
    return false;
  } else {
    await db.put(STORE_NAME, restaurant);
    return true;
  }
};

export const isFavorite = async (id) => {
  const db = await initDB();
  const result = await db.get(STORE_NAME, id);
  return !!result;
};
