import { useContext, useEffect, useState } from "react";
import { contextProvider } from "../../Context/Context";
import Table from "../Service/Details/Table/Table";
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from "react-router-dom";

const Reviews = () => {
    const { user, logOut } = useContext(contextProvider)
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
        fetch(`http://localhost:5000/reviews?userName=${user?.displayName}`, {
            headers: {
                authorizations: `Bearer ${localStorage.getItem('websiteToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('websiteToken')
                    logOut();
                    return;
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.displayName, newReview, logOut])
    console.log(reviews)
    return (
        <div>

            {
                reviews?.length !== 0 ? reviews?.map((rv, index) => <Table key={rv._id} review={rv} index={index} deleteRev={deleteRev} setNewReview={setNewReview}></Table>) : <div className="flex items-center justify-center h-screen"><h2 className="text-4xl">You did't add any reviews yet</h2></div>
            }
            <Toaster />
        </div>
    );
};

export default Reviews;