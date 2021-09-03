import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ProfileUpdateForm from './ProfileUpdateForm';
import { ModalVerify, Modal } from '../../context/Modal'; 

const ProfileUpdate = () => {
    const history = useHistory();
    const [showModal, setShowModal] = useState();
    const [showVerification, setShowVerification] = useState(false);
    const user = useSelector(state => state.session.user);

    const handleClose = () => {
        setShowModal(false);
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        
        if (user) {
            setShowModal(true);
        } else {
            history.push('/sign-up');
        }
    };

    return (
        <>
            <i
                className='fas fa-edit'
                onClick={handleUpdate}
            >
            </i>
            {showModal && (
                <Modal
                    onClose={() => setShowVerification(true)}
                >
                    <ProfileUpdateForm 
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

export default ProfileUpdate;