import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalTextArea=({val})=>{
    return ReactDOM.createPortal(
        <div id="portal-textarea">
            <textarea id="textarea" value={val}></textarea>
        </div>, document.getElementById("portal-textarea")
    )
}
export default PortalTextArea;
//portal-textarea id will be used here for portal purpose
