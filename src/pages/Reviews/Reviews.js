import { useContext, useEffect, useState } from "react";
import { contextProvider } from "../../Context/Context";
import Table from "../Service/Details/Table/Table";

const Reviews = () => {
    const { user } = useContext(contextProvider)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?userName=${user?.displayName}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.displayName])

    return (
        <div>
            {
                reviews.map((rv, index) => <Table key={rv._id} review={rv} index={index}></Table>)
            }
        </div>
    );
};

export default Reviews;