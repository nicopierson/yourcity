import { useState } from 'react';
import CityCreateForm from './CityCreateForm';
import { ModalVerify, ModalCreateCity } from '../../context/Modal'; 

const CityCreate = () => {
    const [showModal, setShowModal] = useState();
    const [showVerification, setShowVerification] = useState(false);

    const handleClose = (e) => {
        setShowModal(false);
    };
    const handleOpen = (e) => {
        setShowModal(true);
    };

    return (
        <>
            <button
                onClick={handleOpen}
            >
                Creat City
            </button>
            {showModal && (
                <ModalCreateCity
                    onClose={() => setShowVerification(true)}
                >
                    <CityCreateForm />
                </ModalCreateCity>
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