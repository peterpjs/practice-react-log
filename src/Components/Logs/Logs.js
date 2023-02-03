import React  from 'react';
import LogItem from "./LogItem/LogItem";
import './Logs.css'
import Card from "../UI/Card/Card";
const Logs = (props) => {
    /**
     * losgData用来存储学习的日志，这个数据处理当前组件Logs使用外，LogsForm也需要使用
     * 当遇到一个数据需要被多个组件使用时，我们可以将数据放入到这些组件共同的祖先元素中
     * 这样就可以使得多个组件都能方便的访问到这个数据
     * */

    let logItemDate= props.logsData.map((item,index)=> <LogItem
                                                                  onDelLog={()=>props.onDelLog(index)}
                                                                  key={item.id}
                                                                  date={item.date}
                                                                  desc={item.desc}
                                                                  time={item.time}/>);
    if( logItemDate.length===0){
        logItemDate=<p className='no-logs'>没找到日志！</p>;
    }
    return (

        <Card className="logs">
            {
                logItemDate
                //logItemDate.length!==0?logItemDate:<p className='no-logs'>没找到日志！</p>
                // logsData.map((item,index)=> <LogItem key={item.id}{...item}/>)
            }
        </Card>
    );
};

export default Logs;
