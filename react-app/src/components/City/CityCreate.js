import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CityCreateForm from './CityCreateForm';
import { ModalVerify, Modal } from '../../context/Modal'; 

const CityCreate = () => {
    const history = useHistory();
    const [showModal, setShowModal] = useState();
    const [showVerification, setShowVerification] = useState(false);
    const user = useSelector(state => state.session.user);

    const handleClose = () => {
        setShowModal(false);
    };
    const handleOpen = (e) => {
        e.preventDefault();
        
        if (user) {
            setShowModal(true);
        } else {
            history.push('/sign-up');
        }
    };

    return (
        <>
            <p
                onClick={handleOpen}
            >
                Add City
            </p>
            {showModal && (
                <Modal
                    onClose={() => setShowVerification(true)}
                >
                    <CityCreateForm 
                        userId={user.id}
                        setShowModal={setShowModal}
                        setShowVerification={setShowVerification}
                    />
                </Modal>
                )
            }
            {showVerification &&
                <ModalVerify
                    onClose={handleClose}
                    offVerify={() => setShowVerification(false)}
                >
                    <div>
                        Are you sure you want leave?
                    </div>
                </ModalVerify>
            }
            </>
    )
};

export default CityCreate;