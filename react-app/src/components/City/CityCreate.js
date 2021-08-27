import { useState } from 'react';
import CityCreateForm from './CityCreateForm';
import { ModalVerify, ModalCreateCity } from '../../context/Modal'; 

const CityCreate = ({ userId }) => {
    const [showModal, setShowModal] = useState();
    const [showVerification, setShowVerification] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };
    const handleOpen = () => {
        setShowModal(true);
    };

    return (
        <>
            <button
                onClick={handleOpen}
            >
                Create City
            </button>
            {showModal && (
                <ModalCreateCity
                    onClose={() => setShowVerification(true)}
                >
                    <CityCreateForm 
                        userId={userId}
                        setShowModal={setShowModal}
                        setShowVerification={setShowVerification}
                    />
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