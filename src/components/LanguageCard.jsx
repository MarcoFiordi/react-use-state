
function LanguageCard(props) {
    const btnClass = 'btn-primary';
    return (
        <div className="card">
            <div className="card-body">
                <button className={`btn ${btnClass}`}>{props.title}</button>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
export default LanguageCard
