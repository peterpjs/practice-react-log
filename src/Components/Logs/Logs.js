import React, {useState} from 'react';
import LogItem from "./LogItem/LogItem";
import './Logs.css'
import Card from "../UI/Card/Card";
const Logs = () => {

    const logsData=[
        {   id:'001',
            date:new Date(2022,1,20,18,30),
            desc:'study a',
            time:30
        },
        {
            id:'002',
            date:new Date(2023,2,20,18,30),
            desc:'study b',
            time:20
        },
        {
            id:'003',
            date:new Date(2023,3,20,18,30),
            desc:'study c',
            time:60
        },
        {
            id:'004',
            date:new Date(2023,5,20,18,30),
            desc:'study d',
            time:10
        }
    ]
    const logItemDate= logsData.map((item)=> <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}/>);
    return (
        <Card className="logs">
            {

                logItemDate
                // logsData.map((item,index)=> <LogItem key={item.id}{...item}/>)
            }
        </Card>
    );
};

export default Logs;
