import React, { useEffect, useState } from 'react';


const Payments = () => {


    return (
        <div className='dashboard-body page-dashboard'>
            <div className='header'>
                <h3>Platby</h3>
            </div>
            <div className='main-part'>
                <div className='table-contain'>
                    <div className='table-title'>
                        Platby
                    </div>
                    <div className='table-element'>
                        <div className='header table-row'>
                            <div className='w-p-150'>Číslo zmluvy</div>
                            <div className='w-p-50'>Jméno</div>
                            <div className='w-p-50'>Příjmení</div>
                            <div className='w-p-150'>Email</div>
                            <div className='w-p-100'>Vytvořeno</div>
                            <div className='w-p-100'>Cena</div>
                            <div className='w-p-50'>Stav</div>
                            <div className='w-p-100 text-align-right'>Pojištovna</div>
                        </div>
                        <div className='table-data-row table-row'>
                            <div className='w-p-150'>039409</div>
                            <div className='w-p-50'>Martin</div>
                            <div className='w-p-50'>Nový</div>
                            <div className='w-p-150'>martinnovy67@seznam.cz</div>
                            <div className='w-p-100'>2.3.2021</div>
                            <div className='w-p-100'>6 000 Kč</div>
                            <div className='w-p-50'>Nová</div>
                            <div className='w-p-100 text-align-right'>Allianz</div>
                        </div>
                        <div className='table-data-row table-row'>
                            <div className='w-p-150'>039409</div>
                            <div className='w-p-50'>Martin</div>
                            <div className='w-p-50'>Nový</div>
                            <div className='w-p-150'>martinnovy67@seznam.cz</div>
                            <div className='w-p-100'>2.3.2021</div>
                            <div className='w-p-100'>6 000 Kč</div>
                            <div className='w-p-50'>Nová</div>
                            <div className='w-p-100 text-align-right'>Allianz</div>
                        </div>
                        <div className='table-data-row table-row'>
                            <div className='w-p-150'>039409</div>
                            <div className='w-p-50'>Martin</div>
                            <div className='w-p-50'>Nový</div>
                            <div className='w-p-150'>martinnovy67@seznam.cz</div>
                            <div className='w-p-100'>2.3.2021</div>
                            <div className='w-p-100'>6 000 Kč</div>
                            <div className='w-p-50'>Nová</div>
                            <div className='w-p-100 text-align-right'>Allianz</div>
                        </div>
                        <div className='table-data-row table-row'>
                            <div className='w-p-150'>039409</div>
                            <div className='w-p-50'>Martin</div>
                            <div className='w-p-50'>Nový</div>
                            <div className='w-p-150'>martinnovy67@seznam.cz</div>
                            <div className='w-p-100'>2.3.2021</div>
                            <div className='w-p-100'>6 000 Kč</div>
                            <div className='w-p-50'>Nová</div>
                            <div className='w-p-100 text-align-right'>Allianz</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments;