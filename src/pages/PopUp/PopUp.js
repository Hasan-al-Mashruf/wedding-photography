import React from 'react';

const PopUp = ({ reviewId, setReviewId, setNewReview }) => {
    const reviewData = (e) => {
        e.preventDefault();
        const review = e.target.text.value;
        e.target.reset();
        fetch(`http://localhost:5000/reviews/${reviewId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: review })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    setNewReview(review)
                }
            })

    }

    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <h2>{reviewId}</h2>
                <form onSubmit={reviewData} className={'w-full'}>
                    <div className="modal-box mx-auto">
                        <div className="form-control">
                            <input type="text" placeholder="New reviews" className="input input-bordered" name='text' />
                            <input type="submit" value="Submit" className="btn btn-active btn-secondary my-3" />
                        </div>
                        <label htmlFor="my-modal" className="btn" onClick={() => setReviewId(null)}>Close it!</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopUp;