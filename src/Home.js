import Navbar from "./Navbar";
import homeImage from "./images/homeImage.jpg";
import Card from "./Card";
export default function Home(){
    return (
    <section>
         <Navbar />
         <div className="home">
            <img src={homeImage} alt="home-intro image" className="home-img"/>
            <p className="text-over-img"><span className="bold">DESIGN</span> <span className="bold-ls">FOR</span> <span className="bold">LIFE</span></p>
         </div>
         <Card />
    </section>
    );
}