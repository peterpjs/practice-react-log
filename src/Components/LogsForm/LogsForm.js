import React, {useState} from 'react';
import Card from "../UI/Card/Card";
import './LogsForm.css'
const LogsForm = (props) => {


    /**
     * 当表单项发生变化时，获取用户输入的内容
     */

    const [inputDate,setInputDate]=useState('');
    const [inputDesc,setInputDesc]=useState('');
    const [inputTime,setInputTime]=useState('');

     //创建一个响应函数，监听表单的变化
     const descChangeHandler=(e)=>{
         setInputDesc(e.target.value);
     }

    const dateChangeHandler=(e)=>{
        setInputDate(e.target.value);
    }

    const timeChangeHandler=(e)=>{
        setInputTime(e.target.value);
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

        props.onSaveLog(newLog);

        setInputDate('');
        setInputDesc('');
        setInputTime('');
        console.log(newLog);
        /**
         * 提交表单后如何清空表单中的旧数据 现在这种表单，在React我成为非受控组件
         * 我们可以将表单中的数据存储到state中，然后将state设置为表单项value值，这样当表单项发生变化，state会随之变化，反之state发生变化表单项也改变，这种我们称为双向绑定，这样一来表单就成为了一个受控组件
         */

    }
    return (
        <Card className = "logs-form">
            <form onSubmit={formSubmitHandler}>
                <div className="form-item">
                    <label htmlFor="date">日期</label>
                    <input onChange={dateChangeHandler} value={inputDate} id="date" type="date"/>
                </div>
                <div className="form-item">
                    <label htmlFor="desc">内容</label>
                    <input  onChange={descChangeHandler} value={inputDesc} id="desc" type="text"/>
                </div>
                <div className="form-item">
                    <label htmlFor="time">时长</label>
                    <input onChange={timeChangeHandler} value={inputTime} id="time" type="number"/>
                </div>
                <div className="form-btn">
                    <button>添加</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsForm;
