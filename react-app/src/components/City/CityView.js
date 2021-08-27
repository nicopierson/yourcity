const CityView = ({ city, setShowEdit, isOwner }) => {

    return (
        <div>
            <div>
                <div className='header_edit_container'>
                    <h2>{ city.name }</h2>
                    {isOwner &&
                        <i 
                            onClick={() => setShowEdit(true)}
                            className='fas fa-edit edit_item'
                        ></i>
                    }
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