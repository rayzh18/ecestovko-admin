import React, { useEffect, useState } from 'react';


const Companies = () => {

    return (
        <div className='dashboard-body page-dashboard'>
            <div className='header'>
                <h3>Pojišťovny</h3>
            </div>
            <div className='main-part'>
                <div className='table-contain'>
                    <div className='table-title'>
                        Pojišťovny
                    </div>
                    <div className='table-element'>
                        <div className='header table-row '>
                            <div className='w-p-100'>Pojištovna</div>
                            <div className='w-p-100'>Covid 19</div>
                            <div className='w-p-100'>Autoasistance</div>
                            <div className='w-p-150'>Léčebné výlohy</div>
                            <div className='w-p-150'>Asistenční služby</div>
                            <div className='w-p-150'>Úrazové pojištění</div>
                            <div className='w-p-150'>Pojištění zavazadel</div>
                            <div className='w-p-150'>Pojištění odpovědnosti</div>
                            <div className='w-p-150'>Rekreační sporty</div>
                            <div className='w-p-100'>Zimní sporty</div>
                            <div className='w-p-150 text-align-right'>Rizikové sporty</div>
                        </div>
                        <div className='table-data-row table-row '>
                            <div className='w-p-100'>Uniqa</div>
                            <div className='w-p-100'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-100'>Lze pojistit</div>
                            <div className='w-p-150'>5 000 000 Kč</div>
                            <div className='w-p-150'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-150'>5 000 000 Kč</div>
                            <div className='w-p-150'>25 000 Kč</div>
                            <div className='w-p-150'>3 000 000 Kč</div>
                            <div className='w-p-150'><i className="fas fa-times-circle color-red"></i></div>
                            <div className='w-p-100'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-150 text-align-right'><i className="fas fa-times-circle color-red"></i></div>
                        </div>
                        <div className='table-data-row table-row '>
                            <div className='w-p-100'>Uniqa</div>
                            <div className='w-p-100'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-100'>Lze pojistit</div>
                            <div className='w-p-150'>5 000 000 Kč</div>
                            <div className='w-p-150'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-150'>5 000 000 Kč</div>
                            <div className='w-p-150'>25 000 Kč</div>
                            <div className='w-p-150'>3 000 000 Kč</div>
                            <div className='w-p-150'><i className="fas fa-times-circle color-red"></i></div>
                            <div className='w-p-100'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-150 text-align-right'><i className="fas fa-times-circle color-red"></i></div>
                        </div>
                        <div className='table-data-row table-row '>
                            <div className='w-p-100'>Uniqa</div>
                            <div className='w-p-100'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-100'>Lze pojistit</div>
                            <div className='w-p-150'>5 000 000 Kč</div>
                            <div className='w-p-150'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-150'>5 000 000 Kč</div>
                            <div className='w-p-150'>25 000 Kč</div>
                            <div className='w-p-150'>3 000 000 Kč</div>
                            <div className='w-p-150'><i className="fas fa-times-circle color-red"></i></div>
                            <div className='w-p-100'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-150 text-align-right'><i className="fas fa-times-circle color-red"></i></div>
                        </div>
                        <div className='table-data-row table-row '>
                            <div className='w-p-100'>Uniqa</div>
                            <div className='w-p-100'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-100'>Lze pojistit</div>
                            <div className='w-p-150'>5 000 000 Kč</div>
                            <div className='w-p-150'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-150'>5 000 000 Kč</div>
                            <div className='w-p-150'>25 000 Kč</div>
                            <div className='w-p-150'>3 000 000 Kč</div>
                            <div className='w-p-150'><i className="fas fa-times-circle color-red"></i></div>
                            <div className='w-p-100'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-150 text-align-right'><i className="fas fa-times-circle color-red"></i></div>
                        </div>
                        <div className='table-data-row table-row '>
                            <div className='w-p-100'>Uniqa</div>
                            <div className='w-p-100'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-100'>Lze pojistit</div>
                            <div className='w-p-150'>5 000 000 Kč</div>
                            <div className='w-p-150'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-150'>5 000 000 Kč</div>
                            <div className='w-p-150'>25 000 Kč</div>
                            <div className='w-p-150'>3 000 000 Kč</div>
                            <div className='w-p-150'><i className="fas fa-times-circle color-red"></i></div>
                            <div className='w-p-100'><i className="fas fa-check-circle color-green"></i></div>
                            <div className='w-p-150 text-align-right'><i className="fas fa-times-circle color-red"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies;