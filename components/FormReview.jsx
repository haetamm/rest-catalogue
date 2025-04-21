import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
} from './styled/Form';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reviewFields, reviewSchema } from '@/lib/utils';
import { addReview } from '@/lib/api';
import PropTypes from 'prop-types';

const FormReview = ({ id, onReviewAdded }) => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(reviewSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      review: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const dataReview = {
        id,
        ...data,
      };
      const newReviews = await addReview(dataReview);
      onReviewAdded(newReviews);
      reset();
    } catch (error) {
      console.error('Failed to submit review:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {reviewFields.map(({ name, type, label }) => (
        <FormGroup key={name}>
          <Label htmlFor={name}>{label}</Label>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type={type}
                id={name}
                placeholder={`Enter ${label}`}
                aria-invalid={errors[name] ? 'true' : 'false'}
                aria-describedby={errors[name] ? `${name}-error` : undefined}
              />
            )}
          />
          {errors[name] && (
            <ErrorMessage id={`${name}-error`}>
              {errors[name].message}
            </ErrorMessage>
          )}
        </FormGroup>
      ))}
      <Button
        disabled={!isValid || isSubmitting || loading}
        id="submit-review"
        type="submit"
      >
        {loading ? 'Loading...' : 'Submit'}
      </Button>
    </Form>
  );
};

FormReview.propTypes = {
  id: PropTypes.string.isRequired,
  onReviewAdded: PropTypes.func.isRequired,
};

export default FormReview;
