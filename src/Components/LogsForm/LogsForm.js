import React from 'react';
import Card from "../UI/Card/Card";
import './LogsForm.css'
const LogsForm = () => {

    // const descRef=useRef();

    /**
     * 当表单项发生变化时，获取用户输入的内容
     */
    let inputDate='';
    let inputDesc='';
    let inputTime=0;
    //创建一个响应函数，监听表单的变化
     const descChangeHandler=(e)=>{
         //获取到当前触发事件的对象 事件对象保存了当前事件触发时的所有信息 event.target执行的是触发时事件的对象
         inputDate=e.target.value;
     }

    const dateChangeHandler=(e)=>{
        inputDesc=e.target.value;
    }

    const timeChangeHandler=(e)=>{
        inputTime=e.target.value;
    }
    //提交前获取表单数据 React中，通常表单不需要自行提交，而是要通过React提交
    const formSubmitHandler=(e)=>{
         //取消表单的默认行为
        e.preventDefault();
         //获取表单项中的数据
        const newLog={
            date:new Date(inputDate),
            desc:inputDesc,
            time:+inputTime
        };
        console.log(newLog)
    }
    return (
        <Card className = "logs-form">
            <form onSubmit={formSubmitHandler}>
                <div className="form-item">
                    <label htmlFor="date">日期</label>
                    <input onChange={dateChangeHandler} id="date" type="date"/>
                </div>
                <div className="form-item">
                    <label htmlFor="desc">内容</label>
                    <input  onChange={descChangeHandler} id="desc" type="text"/>
                </div>
                <div className="form-item">
                    <label htmlFor="time">时长</label>
                    <input onChange={timeChangeHandler} id="time" type="number"/>
                </div>
                <div className="form-btn">
                    <button>添加</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsForm;
