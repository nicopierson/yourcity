const CityView = ({ city, setShowEdit, isOwner }) => {

    return (
        <>
            <div className='header_edit_container'>
                <h2>{ city.name }</h2>
                {isOwner &&
                    <i 
                        onClick={() => setShowEdit(true)}
                        className='fas fa-edit edit_item'
                    ></i>
                }
            </div>
            <div>
                <p>{ city.description }</p>
                <p>Owner: { city.user_id }</p>
            </div>
        </>
    );
};

export default CityView;