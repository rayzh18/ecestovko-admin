import React, {useEffect, useState} from 'react';
import { NavItem } from './components/navItem';

import icon_dashboard_white from '../../assets/icon_dashboard_white.png';
import icon_dashboard_blue from '../../assets/icon_dashboard_blue.png';
import icon_people_white from '../../assets/icon_people_white.png';
import icon_people_blue from '../../assets/icon_people_blue.png';
import icon_doc_white from '../../assets/icon_doc_white.png';
import icon_doc_blue from '../../assets/icon_doc_blue.png';
import icon_store_white from '../../assets/icon_store_white.png';
import icon_store_blue from '../../assets/icon_store_blue.png';
import icon_building_white from '../../assets/icon_building_white.png';
import icon_building_blue from '../../assets/icon_building_blue.png';

const Sidebar = props => {

    const [is_collapsed, setCollapsed] = useState(false);
    const [is_collapsed_late, setCollapsedLate] = useState(false);

    useEffect(() => {
    }, []);

    const navToggle = () => {
        if(is_collapsed) {
            setCollapsed(!is_collapsed);
            setTimeout(() => {
                setCollapsedLate(!is_collapsed_late)
            }, 300);
        } else {
            setCollapsedLate(!is_collapsed_late);
            setTimeout(() => {
                setCollapsed(!is_collapsed);
            }, 100);
        }
        
    }

    return (
        <div className={ (is_collapsed ? 'is-nav-collapsed' : '') + ' sidebar-contain'}>
            <div className='logo-contain'>
                <div className='collapse-button' onClick={() => navToggle()}>
                    <i className={ is_collapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left' }></i>
                </div>
                {!is_collapsed_late && <div className="logo">
                    <span>e</span>cestovko
                </div>}
            </div>
            <NavItem
                url='/dashboard'
                title='Dashboard'
                is_collapsed={is_collapsed_late}
                icon={[icon_dashboard_white, icon_dashboard_blue]}
            />
            <NavItem
                url='/customers'
                title='Zákazníci'
                is_collapsed={is_collapsed_late}
                icon={[icon_people_white, icon_people_blue]}
            />
            <NavItem
                url='/contracts'
                title='Smlouvy'
                is_collapsed={is_collapsed_late}
                icon={[icon_doc_white, icon_doc_blue]}
            />
            <NavItem
                url='/payments'
                title='Platby'
                is_collapsed={is_collapsed_late}
                icon={[icon_store_white, icon_store_blue]}
            />
            <NavItem
                url='/companies'
                title='Pojišťovny'
                is_collapsed={is_collapsed_late}
                icon={[icon_building_white, icon_building_blue]}
            />
        </div>
    )
}

export default Sidebar;