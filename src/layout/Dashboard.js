import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';


const Dashboard = props => {

    const {children} = props;

    return (
        <main className='dashboard-container'>
            <Sidebar/>
            <div className='mainboard-contain'>
                <Topbar/>
                {children}
            </div>
        </main>
    );
}

export default Dashboard;