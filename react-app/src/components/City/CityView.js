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
            <h2>{ city.name }</h2>
            <p>{ city.description }</p>
            <p>Owner: { city.user_id }</p>
            <button
                onClick={() => setShowEdit(true)}
            >
                Edit
            </button>
            <button
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    );
};

export default CityView;