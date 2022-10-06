import { BlogData } from "./BlogData";
import img1 from "./images/homeImage.jpg"
export default function Card() {
    return (
        <section className="card">
            <div>
                <img src={img1} alt="Blog-image" className="blog-img"/>
            </div>
            <div className="blog-text">
                <div className="blog-h1">this is my heading</div>
                <div className="blog-p1">this is my second heading </div>
                <div className="blog-botm">this is my paragraph discription</div>
            </div>
        </section>
    );
}