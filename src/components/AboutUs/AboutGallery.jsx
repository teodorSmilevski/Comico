import img1 from "../../assets/store-gallery/storeImage1.jpg";
import img2 from "../../assets/store-gallery/storeImage2.jpg";
import img3 from "../../assets/store-gallery/storeImage3.jpg";
import img4 from "../../assets/store-gallery/storeImage4.jpg";
import img5 from "../../assets/store-gallery/storeImage5.jpg";
import img6 from "../../assets/store-gallery/storeImage6.jpg";

const images = [img1, img2, img3, img4, img5, img6];
export default function AboutGallery() {
  return (
    <section className="text-center py-8 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
        Gallery
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="comic image"
            className="w-full h-80 object-cover rounded-lg shadow-lg transform hover:scale-105 hover:duration-200"
          />
        ))}
      </div>
    </section>
  );
}
