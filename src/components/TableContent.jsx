import React from 'react';
import './table.css'

const TableContent = ({tableContent}) => {
    return (
        <div className='table__content'>
            <h2>{tableContent.lesson}</h2>
            <p>{tableContent.type}</p>
            <h4>{tableContent.teacher}</h4>
            <h2>{tableContent.auditory}</h2>
        </div>
    );
}

export default TableContent;
