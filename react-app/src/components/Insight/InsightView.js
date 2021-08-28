const InsightView = ({ insights, isOwner }) => {



    return (
        <div>
            {insights && Object.values(insights).map((insight) =>             
                <div>
                    <div className='header_edit_container'>
                        <h2>Insight</h2>
                    </div>
                    <div>
                        <h4>Owner id: { insight.user_id }</h4>
                        <h4>User: </h4>
                        <p>{ insight.insight }</p>
                    </div>
                </div>
            )}

        </div>
    )
};

export default InsightView;