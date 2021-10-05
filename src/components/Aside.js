import React from "react";
import Panel from './Panel';
function Aside(props){
    return(
        <div className="col-3">
            <Panel />
            <Panel />
            <Panel />
            <Panel />
            <Panel />
        </div>
    );
}

export default Aside;