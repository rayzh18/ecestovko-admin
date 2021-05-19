import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

const NavItem = (props) => {

    const history = useHistory();
    const location = useLocation();

    return (
        <div 
            className={location.pathname == props.url ? 'active side-bar-item' : 'side-bar-item'}
            onClick={() => history.push(props.url)}
        >
            <img src={location.pathname == props.url ? props.icon[0] : props.icon[1]}></img>
            { !props.is_collapsed && <span>{props.title}</span> }
        </div>
    );
}
export default NavItem;