import { z } from 'zod';

export const reviewFields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'review', label: 'Review', type: 'text' },
];

export const name = z
  .string()
  .trim()
  .min(3, { message: 'Name must be at least 3 characters long' });

export const review = z
  .string()
  .trim()
  .min(10, { message: 'Name must be at least 10 characters long' });

export const reviewSchema = z.object({
  name,
  review,
});

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'FavoriTe', href: '/favorite' },
  {
    label: 'AbouT Us',
    href: 'https://github.com/firmanjabar/nongkis',
    external: true,
  },
];

export const isActive = (targetPath, path) => {
  return targetPath === path;
};
