import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Table = ({ review, index, deleteRev }) => {
    console.log(review)
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
                                <FaEdit className='inline' />
                                <FaTrashAlt className='inline' onClick={() => deleteRev(_id)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Table;