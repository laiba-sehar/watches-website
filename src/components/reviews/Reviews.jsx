import React from 'react'
import review1 from '../../assets/review1.png';
import review2 from '../../assets/review2.png';
import review3 from '../../assets/review3.png';
import './Reviews.css'

function Reviews() {
    const reviews=[
        {id:1,stars:5,review:"Great value for money. Stylish and durable watch.",img:review1,name:"Michael",country:"New York, NY"},
        {id:2,stars:5,review:"Absolutely stunning timepiece! Exceeded my expectations.",img:review2,name:"Adam",country:"Los Angeles, California"},
        {id:3,stars:5,review:"Sleek design, comfortable to wear. Highly recommended!",img:review3,name:"Isaac",country:"Dubai, UAE"},
    ]
    return (
        <div className="review-page">
            <h1 className="review-heading">Customer Reviews</h1>
            <div className="review-grid">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="review-stars">
                            {'★'.repeat(review.stars) + '☆'.repeat(5 - review.stars)}
                        </div>
                        <p className="review-text">{review.review}</p>
                        <img src={review.img} alt={review.name} className="review-image" />
                        <div className="review-info">
                            <h2 className="review-name">{review.name}</h2>
                            <p className="review-country">{review.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews