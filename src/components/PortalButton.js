import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalButton=()=>{
     return ReactDOM.createPortal(
        <div id="portal-button">
            <button id="button" onClick={() => { props.buttonclick() }}>Click</button>
        </div>, document.getElementById("portal-button")
    )
}
export default PortalButton;

//portal-button id will be used here for portal purpose
