import MusicCard from "./MusicCard";
import MerchCard from "./MerchCard";
import Data1 from "./Data1";
import Data2 from "./Data2";
const Body = () =>{
    return (
        <>
       
        <div className="container col-md-6">
        <h2 className="text-center">Music</h2>
        <div className="row text-center">
        {Data1.map((val)=>{
            return (
                <>
        <MusicCard album ={val.album} imgsrc={val.imgsrc} price={val.price}/>
                </>
            )
        })}
        </div>
        </div>

        <div className="container col-md-6">
        <h2 className="text-center mt-5">Merch</h2>
        <div className="row text-center">
        {Data2.map((val)=>{
            return (
                <>
        <MerchCard title ={val.title} imgsrc={val.imgsrc} price={val.price}/>
                </>
            )
        })}
        <a href="#" target="_blank">
         <button type="button" className="btn btn-warning mt-5 mb-5 p-3">See The Cart</button></a>
        </div>
        </div>
        </>
    )
}
export default Body;