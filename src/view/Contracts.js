import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Contracts = () => {

	const [isShowModal, setShowModal] = useState(false);

    const showModal = () => {
		setShowModal(true);
	}

    useEffect(() => {
        showModal();
    },[]);

    return (
        <div className='dashboard-body page-dashboard'>
            <div className='header'>
                <h3>Smlouvy</h3>
            </div>
            <div className='main-part'>
                <div className='table-contain'>
                    <div className='table-title'>
                        Smlouvy
                    </div>
                    <div className='table-element'>
                        <div className='header table-row'>
                            <div className='w-p-50'>ID</div>
                            <div className='w-p-50'>Vytvořeno</div>
                            <div className='w-p-50'>Jméno</div>
                            <div className='w-p-50'>Příjmení</div>
                            <div className='w-p-100'>Platnosť od</div>
                            <div className='w-p-50'>Platnosť do</div>
                            <div className='w-p-50'>Pojištovna</div>
                            <div className='w-p-100'>Číslo smlouvy</div>
                            <div className='w-p-100'>Cena</div>
                            <div className='w-p-100 text-align-center'>Počet lidí</div>
                            <div className='w-p-50 text-align-right'>Stav</div>
                        </div>
                        <div className='table-data-row table-row'>
                            <div className='w-p-50'>039409</div>
                            <div className='w-p-50'>2.3.2021</div>
                            <div className='w-p-50'>Martin</div>
                            <div className='w-p-50'>Nový</div>
                            <div className='w-p-100'>4.8.2021</div>
                            <div className='w-p-50'>10.8.2021</div>
                            <div className='w-p-50'>Allianz</div>
                            <div className='w-p-100'>54873</div>
                            <div className='w-p-100'>6 000 Kč</div>
                            <div className='w-p-100 text-align-center'>4</div>
                            <div className='w-p-50 text-align-right'>Nová</div>
                        </div>
                        <div className='table-data-row table-row'>
                            <div className='w-p-50'>039409</div>
                            <div className='w-p-50'>2.3.2021</div>
                            <div className='w-p-50'>Martin</div>
                            <div className='w-p-50'>Nový</div>
                            <div className='w-p-100'>4.8.2021</div>
                            <div className='w-p-50'>10.8.2021</div>
                            <div className='w-p-50'>Allianz</div>
                            <div className='w-p-100'>54873</div>
                            <div className='w-p-100'>6 000 Kč</div>
                            <div className='w-p-100 text-align-center'>4</div>
                            <div className='w-p-50 text-align-right'>Nová</div>
                        </div>
                        <div className='table-data-row table-row'>
                            <div className='w-p-50'>039409</div>
                            <div className='w-p-50'>2.3.2021</div>
                            <div className='w-p-50'>Martin</div>
                            <div className='w-p-50'>Nový</div>
                            <div className='w-p-100'>4.8.2021</div>
                            <div className='w-p-50'>10.8.2021</div>
                            <div className='w-p-50'>Allianz</div>
                            <div className='w-p-100'>54873</div>
                            <div className='w-p-100'>6 000 Kč</div>
                            <div className='w-p-100 text-align-center'>4</div>
                            <div className='w-p-50 text-align-right'>Nová</div>
                        </div>
                        <div className='table-data-row table-row'>
                            <div className='w-p-50'>039409</div>
                            <div className='w-p-50'>2.3.2021</div>
                            <div className='w-p-50'>Martin</div>
                            <div className='w-p-50'>Nový</div>
                            <div className='w-p-100'>4.8.2021</div>
                            <div className='w-p-50'>10.8.2021</div>
                            <div className='w-p-50'>Allianz</div>
                            <div className='w-p-100'>54873</div>
                            <div className='w-p-100'>6 000 Kč</div>
                            <div className='w-p-100 text-align-center'>4</div>
                            <div className='w-p-50 text-align-right'>Nová</div>
                        </div>
                        <div className='table-data-row table-row'>
                            <div className='w-p-50'>039409</div>
                            <div className='w-p-50'>2.3.2021</div>
                            <div className='w-p-50'>Martin</div>
                            <div className='w-p-50'>Nový</div>
                            <div className='w-p-100'>4.8.2021</div>
                            <div className='w-p-50'>10.8.2021</div>
                            <div className='w-p-50'>Allianz</div>
                            <div className='w-p-100'>54873</div>
                            <div className='w-p-100'>6 000 Kč</div>
                            <div className='w-p-100 text-align-center'>4</div>
                            <div className='w-p-50 text-align-right'>Nová</div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal 
				show={isShowModal} onHide={() => setShowModal(false)}
				dialogClassName="modal-contain"
				centered
			>
				<div className='title'>Smlouvy č.039409</div>
                <div className='sub-title'>Pojištení lidé</div>
                <div className='name-list-item header'>
                    <div>Jméno</div>
                    <div>Příjmení</div>
                </div>
                <div className='name-list-item'>
                    <div>Martin</div>
                    <div>Nový</div>
                </div>
                <div className='name-list-item'>
                    <div>Jana</div>
                    <div>Nový</div>
                </div>
                <div className='name-list-item'>
                    <div>Radek</div>
                    <div>Nový</div>
                </div>
                <div className='name-list-item'>
                    <div>Mirek</div>
                    <div>Nový</div>
                </div>
                <div className='sub-title'>Platba</div>
                <div className='orange-button'>Zobrazit platby</div>
                <div className='sub-title'>Dokumentace</div>
                <a className='download-item' href='#'>PZ31300.pdf</a>
				<a className='download-item' href='#'>Smlouva 2634.pdf</a>
			</Modal>
        </div>
    )
}

export default Contracts;