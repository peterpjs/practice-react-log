 import Logs from './Components/Logs/Logs'
import LogsForm from "./Components/LogsForm/LogsForm";
import './App.css'
 import {useState} from "react";
 import ConfirmModal from "./Components/UI/ConfirmModal/ConfirmModal";

const App= ()=>{
    const [logsData,setLogsData]=useState([
        {   id:'001',
            date:new Date(2022,1,20,18,30),
            desc:'study a',
            time:30
        },
        {
            id:'002',
            date:new Date(2022,2,20,18,30),
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
            date:new Date(2021,5,20,18,30),
            desc:'study d',
            time:10
        }
    ])

    /**
     * 将LogsForm中的数据传递给App组件，然后App组件将新的数据添加到数组中
     * */
    const saveLogHandler=(newLog)=>{
        newLog.id=Date.now()+'';
        setLogsData([...logsData,newLog])
    };
    // const delLogByIndex=(index)=>{
    //     setLogsData(prevState=> {
    //         const newLogs=[...prevState];
    //         newLogs.splice(index,1);
    //         return newLogs;
    //     }
    //     );
    //     // logsData.splice(index,1);
    // }
    const delLogById=(id)=>{
        setLogsData(prevState=> {
                const newLogs=prevState.filter(item=>item.id!==id);
                return newLogs;
            }
        );
    }
    return <div className="app">
        <LogsForm onSaveLog={saveLogHandler}/>
        <Logs logsData={logsData}  onDelLog={delLogById}/>
    </div>
}

export default App
