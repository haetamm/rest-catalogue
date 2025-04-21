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
