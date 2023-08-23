import "../Components/App.css";
const Footer = () =>{
    return (
        <>
        <div className="container-fluid text-center mt-2 bg-info p-4">
        <div className="row">
            <div className="col-md-7">
            <h2 className="text-white">&#169; The Generics</h2>
            </div>
            <div className="col-md-4">
            <h2>
            <a href="https://www.youtube.com/" class="fa fa-youtube foot" target="_blank"></a>
            <a href="https://open.spotify.com/" className="fa fa-rss foot" target="_blank"></a>
            <a href="https://www.facebook.com/profile.php?id=100004529718808" className="fa fa-facebook foot" target="_blank"></a>
            </h2>
            </div>
            
        </div>
        </div>
        </>
    )
}
export default Footer;
