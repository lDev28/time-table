import React from 'react';
import TableContent from './TableContent';
import './table.css'

const Today = ({table}) => {

    const date = new Date()
    const studyStarts = new Date("February 9, 2023 00:00:00")
    
    const moment = date - studyStarts
    const days = (((moment / 1000)/60)/60)/24 + 3

    let weekType = ''

    if ((Math.floor(days / 7) % 2) === 1){
        weekType = 'Sanawjy'
    } else{
        weekType = 'Maýdalawjy'
    }

    const topTable = table[1]
    const bottomTable = table[2]

    let todaysTable

    if (weekType === 'Maýdalawjy') {
        todaysTable = bottomTable
    } else {
        todaysTable = topTable
    }

    return (
        <div>
            <h3 className='table__weekType'>{weekType}</h3>
            <h1 className='table__title'>Şu günki sapaklar</h1>
            {todaysTable.map(day => (
                    <TableContent tableContent={day} className='today' key={day.id}/>
            ))
            }
        </div>
    );
}

export default Today;
