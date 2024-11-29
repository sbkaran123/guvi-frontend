import React, { useState } from 'react';

const ReviewForm = ({ restaurantId, onSubmitReview }) => {
  const [review, setReview] = useState({
    rating: 5,
    comment: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleFileChange = (e) => {
    setReview((prevReview) => ({ ...prevReview, photo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitReview(restaurantId, review);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h3 className="font-bold text-lg mb-4">Write a Review</h3>
      <div className="mb-2">
        <label className="block text-sm font-semibold">Rating</label>
        <select
          name="rating"
          value={review.rating}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>
              {rating} Stars
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-semibold">Comment</label>
        <textarea
          name="comment"
          value={review.comment}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-semibold">Photo</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
