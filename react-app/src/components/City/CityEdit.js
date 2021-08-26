
const CityEdit = ({ city, setShowEdit }) => {
    return (
        <div>
            <h2>Edit { city.name }</h2>
            <p>{ city.description }</p>
            <p>Owner: { city.user_id }</p>
            <button
                onClick={() => setShowEdit(false)}
            >
                Cancel
            </button>
        </div>
    )
};

export default CityEdit;