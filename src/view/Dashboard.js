import React, { useEffect, useState } from 'react';

import img_contract from '../assets/icon_contract_num.png';
import img_currency from '../assets/icon_currency.png';
import img_customer from '../assets/icon_customer_num.png';

const Dashboard = () => {

    const [date_from, setDateFrom] = useState('');
    const [date_to, setDateTo] = useState('');

    return (
        <div className='dashboard-body page-dashboard'>
            <div className='header'>
                <h3>Dashboard</h3>
                <div className='date-picker-contain odd'>
                    <input 
                        value={date_from} 
                        onChange={(e) => setDateFrom(e.target.value)} 
                        className='date-picker' 
                        type='date' />
                    <div className='value-overlay'>{date_from.split('-').reverse().join('.')}</div>
                </div>
                <div className='date-picker-contain'>
                    <input 
                        value={date_to} 
                        onChange={(e) => setDateTo(e.target.value)} 
                        className='date-picker' 
                        type='date' />
                    <div className='value-overlay'>{date_to.split('-').reverse().join('.')}</div>
                </div>
                <div className='drop-down'>
                    <select>
                        <option>Dnes</option>
                        <option>Zajtra</option>
                    </select>
                    <i className="fas fa-sort-down"></i>
                </div>
            </div>
            <div className='main-part'>
                <div className='status-card w-30 contract'>
                    <div className='img-contain'>
                        <img src={img_contract}></img>
                    </div>
                    <div className='number'>649</div>
                    <div className='card-title'>Počet kontrakov</div>
                </div>
                <div className='status-card w-30 customer'>
                    <div className='img-contain'> 
                        <img src={img_customer}></img>
                    </div>
                    <div className='number'>593</div>
                    <div className='card-title'>Počet zákazníkov</div>
                </div>
                <div className='status-card w-30 currency'>
                    <div className='img-contain'>
                        <img src={img_currency}></img>
                    </div>
                    <div className='number'>35749<span> Kč</span></div>
                    <div className='card-title'>Suma poistného</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;