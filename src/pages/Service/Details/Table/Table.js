
import { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import PopUp from '../../../PopUp/PopUp';

const Table = ({ review, index, deleteRev, setNewReview }) => {
    const [reviewId, setReviewId] = useState(null)
    const { name, image, _id } = review;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <tbody>
                        <tr>
                            <th>{index + 1}</th>
                            <td>{name}</td>
                            <td>{review.review}</td>
                            <td><img src={image} alt="" className='w-14 h-14 rounded' /></td>
                            <td className='cursor-pointer'>
                                <label htmlFor="my-modal" className='cursor-pointer'><FaEdit className="inline" onClick={() => setReviewId(_id)}></FaEdit></label>
                                <FaTrashAlt className='inline' onClick={() => deleteRev(_id)} />
                            </td>
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