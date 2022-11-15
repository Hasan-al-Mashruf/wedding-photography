import React from 'react';

const Table = ({ review, index }) => {
    console.log(review)
    const { name, image } = review
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;