import React from 'react';
import TableContent from './TableContent';

const Today = ({table}) => {
    console.log('table is: ' + table);

    const date = new Date()
    const studyStarts = new Date("February 9, 2023 00:00:00")
    // const studyEnds = new Date("September 1, 2023 00:00:00")
    
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
            {todaysTable.map(day => (
                    <TableContent tableContent={day} key={day.id}/>
            ))
            }
        </div>
    );
}

export default Today;
