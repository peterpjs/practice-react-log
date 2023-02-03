import React, {useState} from 'react';
import LogItem from "./LogItem/LogItem";
import './Logs.css'
import Card from "../UI/Card/Card";
import LogFilter  from "../Logs/LogFilter/LogFilter"
const Logs = (props) => {
    /**
     * losgData用来存储学习的日志，这个数据处理当前组件Logs使用外，LogsForm也需要使用
     * 当遇到一个数据需要被多个组件使用时，我们可以将数据放入到这些组件共同的祖先元素中
     * 这样就可以使得多个组件都能方便的访问到这个数据
     * */
    //过滤数据，只显示某一年的数据
    const [year,setYear]=useState(2022);
     let filterData=props.logsData.filter(item=>item.date.getFullYear()===year);

    const changeYearHandler=(year)=>{
        setYear(year);
    }

    let logItemDate= filterData.map((item)=> <LogItem
                                                                  onDelLog={()=>props.onDelLog(item.id)}
                                                                  key={item.id}
                                                                  date={item.date}
                                                                  desc={item.desc}
                                                                  time={item.time}/>);
    if( logItemDate.length===0){
        logItemDate=<p className='no-logs'>没找到日志！</p>;
    }

    return (

        <Card className="logs">
            <LogFilter year={year} onYearChange={changeYearHandler}/>
            {logItemDate}
                {/*logItemDate.length!==0?logItemDate:<p className='no-logs'>没找到日志！</p>*/}
                {/* logsData.map((item,index)=> <LogItem key={item.id}{...item}/>)*/}

        </Card>
    );
};

export default Logs;
