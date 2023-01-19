import ReactDOM from 'react-dom/client'
import './index.css'
//创建一个react元素
const App=<div className="logs">
    {/*日志项容器*/}
    <div className="item">
        {/*日期的容器*/}
        <div className="date">
            <div className="month">
                四月
            </div>
            <div className="day">
                19
            </div>
        </div>
        {/*日志内容的容器*/}
        <div className="content">
            <h2 className="desc">学习React</h2>
            <h2 className="time">40分钟</h2>
        </div>
    </div>
</div>;
//获取根元素
const root =ReactDOM.createRoot(document.getElementById('root'));
//渲染元素
root.render(App);
