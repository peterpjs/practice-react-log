import React from 'react';
import MyDate from "./MyDate/MyDate";
import './LogItem.css'
import Card from "../../UI/Card/Card";
const LogItem = (props) => {

    const deleteItemHandler=()=>{
        const isDel=window.confirm('该操作不可恢复，确认吗？');
        if(isDel){
            props.onDelLog( )
        }
    }
    return (
        <Card className="item">
            <MyDate date={props.date}/>
            {/*日志内容的容器*/}
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <h2 className="time">{props.time}分钟</h2>
            </div>
            <div>
                <div onClick={deleteItemHandler} className='delete'>×</div>
            </div>
        </Card>
    );
};

export default LogItem;
