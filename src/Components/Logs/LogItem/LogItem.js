import React, {useState} from 'react';
import MyDate from "./MyDate/MyDate";
import './LogItem.css'
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";
const LogItem = (props) => {
    //添加一个state，记录是否显示确认窗口
    const [showConfirm,setShowConfirm]=useState(false);
    const [confirmText,setConfirmText]=useState('');

    const deleteItemHandler=()=>{
        // const isDel=window.confirm('该操作不可恢复，确认吗？');
        // if(isDel){
        //     props.onDelLog( )
        // }
        setConfirmText('该操作不可恢复！确认吗?');

        setShowConfirm(true)
    }

    const cancelHandler=()=>{
        setShowConfirm(false)
    }

    const confirmHandler=()=>{
        props.onDelLog( )
        setShowConfirm(false)
    }
    return (
            <Card className="item">
                {showConfirm&&<ConfirmModal  confirmText={confirmText} onCancel={cancelHandler} confirmHandler={confirmHandler}/>}
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
