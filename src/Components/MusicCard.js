const MusicCard = (props) =>{
    return (
        <>
            <div className="col-sm-6">
                <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{props.album}</h5>
                    <div className="zoom">
                <img src={props.imgsrc} alt="no-images" className="img-fluid"/>
                    </div>
                <h5>{props.price}</h5>
                    <a href="#" target="_blank">
                    <button type="button" className="btn btn-info">Add To Cart</button></a>
                </div>
                </div>
            </div>  
        </>
    )
}
export default MusicCard;