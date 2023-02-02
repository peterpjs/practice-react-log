import React, {useState} from 'react';
import Card from "../UI/Card/Card";
import './LogsForm.css'
const LogsForm = () => {

    // const descRef=useRef();

    /**
     * 当表单项发生变化时，获取用户输入的内容
     */
    // let inputDate='';
    // let inputDesc='';
    // let inputTime=0;
    // const [inputDate,setInputDate]=useState('');
    // const [inputDesc,setInputDesc]=useState('');
    // const [inputTime,setInputTime]=useState('');
    //表单数据统一到一个state中
     const [formData,setFormData]=useState({
            inputDate:'',
            inputDesc:'',
            inputTime:''
        });
     //创建一个响应函数，监听表单的变化
     const descChangeHandler=(e)=>{
         //获取到当前触发事件的对象 事件对象保存了当前事件触发时的所有信息 event.target执行的是触发时事件的对象
         setFormData({
             ...formData,
             inputDesc:e.target.value
         });
     }

    const dateChangeHandler=(e)=>{
        setFormData({
            ...formData,
            inputDate:e.target.value
        });

    }

    const timeChangeHandler=(e)=>{
        setFormData({
            ...formData,
            inputTime:e.target.value
        });
    }
    //提交前获取表单数据 React中，通常表单不需要自行提交，而是要通过React提交
    const formSubmitHandler=(e)=>{
         //取消表单的默认行为
        e.preventDefault();
         //获取表单项中的数据
        const newLog={
            date:new Date(formData.inputDate),
            desc:formData.inputDesc,
            time:+formData.inputTime
        };
        setFormData({
            inputDate:'',
            inputDesc:'',
            inputTime:''
        });
        // setInputDate('');
        // setInputDesc('');
        // setInputTime('');
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
                    <input onChange={dateChangeHandler} value={formData.inputDate} id="date" type="date"/>
                </div>
                <div className="form-item">
                    <label htmlFor="desc">内容</label>
                    <input  onChange={descChangeHandler} value={formData.inputDesc} id="desc" type="text"/>
                </div>
                <div className="form-item">
                    <label htmlFor="time">时长</label>
                    <input onChange={timeChangeHandler} value={formData.inputTime} id="time" type="number"/>
                </div>
                <div className="form-btn">
                    <button>添加</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsForm;
