
import { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import PopUp from '../../../PopUp/PopUp';

const Table = ({ review, index, deleteRev, setNewReview }) => {
    const [reviewId, setReviewId] = useState(null)
    const [display, setDisplay] = useState(false)
    const { productName, image, _id, userName } = review;
    console.log(review)
    useEffect(() => {
        const location = window.location.href;
        const reviewLocation = location.includes('reviews')
        if (reviewLocation) {
            setDisplay(true)
        } else {
            setDisplay(false)
        }


    }, [])
    return (
        <div className="md:w-3/5 mx-auto border">
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <tbody>
                        <tr>
                            <th>{index + 1}</th>
                            <td>{productName}</td>
                            <td>{review.review}</td>
                            <td>
                                <img src={image} alt="" className='w-14 h-14 rounded object-cover' />
                            </td>
                            <td className='md:block hidden'>
                                {
                                    userName
                                }
                            </td>
                            {
                                display ? <td className='cursor-pointer'>
                                    <label htmlFor="my-modal" className='cursor-pointer'><FaEdit className="inline" onClick={() => setReviewId(_id)}></FaEdit></label>
                                    <FaTrashAlt className='inline' onClick={() => deleteRev(_id)} />
                                </td>
                                    :
                                    undefined
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
            {
                reviewId && <PopUp reviewId={reviewId} setReviewId={setReviewId} setNewReview={setNewReview}></PopUp>
            }
        </div >
    );
};

export default Table;