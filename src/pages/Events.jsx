import im1 from "../assets/gallery/im1-gallery.jpeg";
import im2 from "../assets/gallery/im2-gallery.jpeg";
import im3 from "../assets/gallery/im3-gallery.jpeg";
import im4 from "../assets/gallery/im4-gallery.jpeg";
import im5 from "../assets/gallery/im5-gallery.jpeg";
import im6 from "../assets/gallery/im6-gallery.jpeg";
import im7 from "../assets/gallery/im7-gallery.jpeg";
import im8 from "../assets/gallery/im8-gallery.jpeg";
import im9 from "../assets/gallery/im9-gallery.jpeg";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: im1 },
  { url: im2 },
  { url: im3 },
  { url: im4 },
  { url: im5 },
  { url: im6 },
  { url: im7 },
  { url: im8 },
  { url: im9 },
];

const Events = () => {
  return (
    <section className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] sm:mt-4 mt-8 mb-16 sm:mb-12 sm:m-auto ">
      {/* Slider container with responsive height and top/bottom margin */}
      <div className="slider-container w-full h-full">
        <SimpleImageSlider
          width="100%"  // Make the width responsive
          height="100%" // Make the height responsive
          images={images}
          showBullets={true}
          showNavs={true}
          bgColor="transparent"  // Ensure background doesn't cover images
          autoPlay={true}        // Enable auto-play
          autoPlayDelay={2000}   // Set the auto-slide delay to 2 seconds (2000ms)
        />
      </div>
    </section>
  );
};

export default Events;
