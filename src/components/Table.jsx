import React from 'react';
import MHMTable from '../data/table'
import Today from './Today';
import Tomorrow from './Tomorrow';

const Table = () => {

const todaysDay = new Date().toLocaleString('en-us', {  weekday: 'long' })

const tomorrowsDay = new Date(Date.now() + 1000 * 3600 * 24).toLocaleString('en-us', {  weekday: 'long' })

let todaysTable

MHMTable.forEach(day=>{
    if (todaysDay === day[0]) {
        // console.log(day[0]);
        todaysTable = day
    }
})


let tomorrowsTable

MHMTable.forEach(tomorrow=>{
    if (tomorrowsDay === tomorrow[0]) {
        // console.log(day[0]);
        tomorrowsTable = tomorrow
    }
})

    return ( 
        <div>            
            <Today table={todaysTable}/>
            <Tomorrow table={tomorrowsTable}/> 
        </div>
    );
}

export default Table;
