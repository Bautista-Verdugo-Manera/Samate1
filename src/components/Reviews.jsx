import React, { useState, useEffect } from 'react';
import '../assets/css/Reviews.css';

function Reviews() {
  const [reviews, setReviews] = useState(() => {
    // Carga inicial desde localStorage
    const saved = localStorage.getItem('reviews');
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showReviews, setShowReviews] = useState(false);

  // Guardar en localStorage cada vez que cambian las reviews
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || rating === 0) return;

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      comment: comment.trim(),
      feedback: feedback.trim(),
      rating,
      date: new Date().toISOString(),
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setComment('');
    setFeedback('');
    setRating(0);
  };

  const handleDelete = (id) => {
    const filtered = reviews.filter((review) => review.id !== id);
    setReviews(filtered);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('es-AR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const renderStars = (count) => '★'.repeat(count) + '☆'.repeat(5 - count);

  return (
    <section className="reviews-section">
      <div className="toggle-buttons">
        {!showReviews ? (
          <button onClick={() => setShowReviews(true)} className="reviews-toggle-button">
            Mostrar reseñas
          </button>
        ) : (
          <button onClick={() => setShowReviews(false)} className="reviews-toggle-button">
            Ocultar reseñas
          </button>
        )}
      </div>

      {showReviews && (
        <div className="reviews-container">
          <h2>Reseñas de clientes</h2>
          <form onSubmit={handleSubmit} className="reviews-form">
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="reviews-input"
            />

            <textarea
              placeholder="Tu comentario"
              value={comment}
              onChange={e => setComment(e.target.value)}
              required
              className="reviews-textarea"
            />

            <textarea
              placeholder="¿Cómo te sentiste con la atención?"
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              className="reviews-textarea"
            />

            <div className="star-rating">
              <label>Tu calificación:</label>
              <div onMouseLeave={() => setHover(0)}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    onClick={() => setRating(rating === num ? num - 1 : num)}
                    onMouseEnter={() => setHover(num)}
                    style={{
                      cursor: 'pointer',
                      fontSize: '1.5rem',
                      color: num <= (hover || rating) ? '#FFD700' : '#ccc',
                      transition: 'color 0.2s ease-in-out',
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <button type="submit" className="reviews-button">Agregar reseña</button>
          </form>

          <div className="reviews-list">
            {reviews.length === 0 && <p>No hay reseñas aún.</p>}
            {reviews.map(({ id, name, comment, feedback, rating, date }) => (
              <div key={id} className="review-item">
                <div className="review-header">
                  <strong>{name}</strong>
                  <span className="review-date">{formatDate(date)}</span>
                </div>
                <div style={{ fontSize: '1.2rem', color: '#FFD700' }}>
                  {renderStars(rating)}
                </div>
                <p>{comment}</p>
                {feedback && <p><em>Opinión sobre la atención:</em> {feedback}</p>}
                <button
                  onClick={() => handleDelete(id)}
                  className="delete-review-button"
                  style={{
                    marginTop: '8px',
                    color: 'red',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none'
                  }}
                >
                  Eliminar reseña
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Reviews;
