import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-20%, -20%)'
    }
};


const OptionModal = ({ selectedOption, closeModal }) => (
    <Modal
    isOpen={!!selectedOption}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    ariaHideApp={false}
    >
        <h3>Selected Option</h3>
        {selectedOption && <p>{selectedOption}</p>}
        <button onClick={closeModal}>close</button>
    </Modal>
    );

export {OptionModal}