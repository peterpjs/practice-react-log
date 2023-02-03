import Card from "../Card/Card";
import './ConfirmModal.css'
import BackDrop from "../../UI/backDrop/BackDrop";

const ConfirmModal =props=>{
        return (<BackDrop>
                <Card className="confirmModal">
                   <div className="confirmText">
                       {props.confirmText}
                   </div>
                    <div className="confirmButton">
                        <button className="okButton" onClick={props.confirmHandler}>确认</button>
                        <button onClick={props.onCancel} >取消</button>
                    </div>
                 </Card>
        </BackDrop>);
}


export default ConfirmModal
