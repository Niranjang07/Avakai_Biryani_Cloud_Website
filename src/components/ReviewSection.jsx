import React, { useState } from 'react';
import '../styles/review.css';

const ReviewSection = () => {
  const [review, setReview] = useState('');
  const [allReviews, setAllReviews] = useState([]);

  const handleSubmit = () => {
    if (review.trim()) {
      setAllReviews([...allReviews, review]);
      setReview('');
    }
  };

  return (
    <div className="review-section">
      <h2>Leave a Review</h2>
      <textarea
        placeholder="Write your feedback..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <div className="submitted-reviews">
        {allReviews.map((rev, idx) => (
          <p key={idx} className="single-review">“{rev}”</p>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
