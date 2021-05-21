// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
    <div className= 'review-list'>
        {reviews.map(review => <div className = 'review'>{review.display_title}{review.mpaa_rating}{!!review.critics_pick}</div>)}
    </div>
    )
}

export default MovieReviews