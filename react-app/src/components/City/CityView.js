import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeCity } from '../../store/city';

const CityView = ({ city, setShowEdit }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(removeCity(city.id));

        history.push('/');
    };
    
    return (
        <div>
            <div>
                <div className='header_edit_container'>
                    <h2>{ city.name }</h2>
                    <i 
                        onClick={() => setShowEdit(true)}
                        className='fas fa-edit edit_item'
                    ></i>
                </div>
            </div>
            <div>
                <div>
                    <p>{ city.description }</p>
                    <p>Owner: { city.user_id }</p>
                </div>
            </div>
        </div>
    );
};

export default CityView;