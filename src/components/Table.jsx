import React from 'react';
import MHMTable from '../data/table'
import Today from './Today';

const Table = () => {

const todaysDay = new Date().toLocaleString('en-us', {  weekday: 'long' })

console.log(todaysDay);

let todaysTable

MHMTable.forEach(day=>{
    if (todaysDay === day[0]) {
        console.log(day[0]);
        todaysTable = day
    }
    // todaysDay === 'Monday' ? todaysTable = day.:
})

// console.log(todaysTable);

    return (
        <div>            
            <Today table={todaysTable}/>
        </div>
    );
}

export default Table;
