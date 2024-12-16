import "./Gallery.css";
import gallery1 from "../assets/gallery_1.jpg";
import gallery2 from "../assets/gallery_2.jpg";
import gallery3 from "../assets/gallery_3.jpg";
import gallery4 from "../assets/gallery_4.jpg";
import gallery5 from "../assets/gallery_5.jpg";
import gallery6 from "../assets/gallery_6.jpg";

function Gallery() {
  return (
    <div className="gallery-head" id="gallery">
      <h1>Gallery</h1>
      <div className="flex">
        <div className="gallery">
          <img src={gallery1} />
        </div>
        <div className="gallery">
          <img src={gallery2} />
        </div>
        <div className="gallery">
          <img src={gallery3} />
        </div>
        <div className="gallery">
          <img src={gallery4} />
        </div>
        <div className="gallery">
          <img src={gallery5} />
        </div>
        <div className="gallery">
          <img src={gallery6} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
