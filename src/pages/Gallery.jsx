import '../../node_modules/photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

// Image imports from your assets folder
import im1 from '../assets/gallery/im1-gallery.jpeg';
import im2 from '../assets/gallery/im2-gallery.jpeg';
import im3 from '../assets/gallery/im3-gallery.jpeg';
import im4 from '../assets/gallery/im4-gallery.jpeg';
import im5 from '../assets/gallery/im5-gallery.jpeg';
import im6 from '../assets/gallery/im6-gallery.jpeg';
import im7 from '../assets/gallery/im7-gallery.jpeg';
import im8 from '../assets/gallery/im8-gallery.jpeg';
import im9 from '../assets/gallery/im9-gallery.jpeg';

const images = [
  { src: im1, alt: 'Event Image 1' },
  { src: im2, alt: 'Event Image 2' },
  { src: im3, alt: 'Event Image 3' },
  { src: im4, alt: 'Event Image 4' },
  { src: im5, alt: 'Event Image 5' },
  { src: im6, alt: 'Event Image 6' },
  { src: im7, alt: 'Event Image 7' },
  { src: im8, alt: 'Event Image 8' },
  { src: im9, alt: 'Event Image 9' }
];

const GalleryComponent = () => {
  return (
    <div >

      {/* Header Section */}
      <header className="bg-yellow-500 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Event Gallery</h1>
        <p className="mt-2 text-lg">Browse through the memorable moments from our recent events</p>
      </header>

      <div className="gallery-container px-4 py-8 mx-auto max-w-screen-lg">


        <Gallery>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="gallery-item overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                <Item
                  original={image.src}
                  thumbnail={image.src}
                  width="600"
                  height="700"
                  alt={image.alt}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover cursor-pointer rounded-lg"
                      onClick={open}
                      style={{ maxWidth: '600px', maxHeight: '700px' }} // Custom width and height for images
                    />
                  )}
                </Item>
              </div>
            ))}
          </div>
        </Gallery>
      </div>

    </div>

  );
};

export default GalleryComponent;
