import React from 'react';
import PropTypes from 'prop-types';
import {
  ReviewTitle,
  DetailReview,
  DetailReviewItem,
  ReviewHeader,
  ReviewName,
  ReviewDate,
  ReviewBody,
} from './styled/ReviewSection';

const Review = ({ customerReviews }) => {
  return (
    <>
      <ReviewTitle className="title-review">Reviews</ReviewTitle>
      <DetailReview className="detail-review grid-3">
        {customerReviews.map((review, index) => (
          <DetailReviewItem key={index} className="detail-review-item">
            <ReviewHeader className="review-header">
              <ReviewName className="review-name">
                <i title="user" className="fa fa-user-circle"></i>
                {review.name}
              </ReviewName>
              <ReviewDate className="review-date">{review.date}</ReviewDate>
            </ReviewHeader>
            <ReviewBody className="review-body">{review.review}</ReviewBody>
          </DetailReviewItem>
        ))}
      </DetailReview>
    </>
  );
};

Review.propTypes = {
  customerReviews: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      review: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Review;
