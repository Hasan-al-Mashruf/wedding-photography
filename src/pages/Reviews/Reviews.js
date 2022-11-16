import { useContext, useEffect, useState } from "react";
import { contextProvider } from "../../Context/Context";
import Table from "../Service/Details/Table/Table";
import toast, { Toaster } from 'react-hot-toast';

const Reviews = () => {
    const { user } = useContext(contextProvider)
    const [reviews, setReviews] = useState([])
    const [newReview, setNewReview] = useState(null)

    const deleteRev = (_id) => {
        fetch((`http://localhost:5000/reviews/${_id}`), {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Review is deleted')
                    const remainingReviews = reviews?.filter(rv => rv._id !== _id)
                    setReviews(remainingReviews)
                }
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?userName=${user?.displayName}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.displayName, newReview])



    return (
        <div>
            {
                reviews?.map((rv, index) => <Table key={rv._id} review={rv} index={index} deleteRev={deleteRev} setNewReview={setNewReview}></Table>)
            }
            <Toaster />
        </div>
    );
};

export default Reviews;