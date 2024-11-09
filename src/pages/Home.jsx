import { useNavigate } from 'react-router-dom'; // Import useNavigate to navigate programmatically
import { useRef } from 'react'; // Import useRef to manage references
import Hero from "./Hero";
import { Statistic } from "./Statistics";
import { Gallery, Item } from 'react-photoswipe-gallery'; // Import the Gallery and Item components
import About from './About';
import Services from './Services';
import ContactForm from './Contact';

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
import Events from './Events';
const Home = () => {
    const navigate = useNavigate();
    const galleryRef = useRef(null);

    // Define images array
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

    const handleLoadMoreClick = () => {
        // Navigate to the gallery page on "Load More" click
        navigate('/gallery');
    };

    return (
        <div>
            {/* Hero Section */}
            <Hero />
            <Statistic />

            {/* Event Gallery Section */}
            <div>
                <header className="bg-yellow-500 text-white py-6 text-center">
                    <h1 className="text-3xl font-bold">Event Gallery</h1>
                    <p className="mt-2 text-lg">Browse through the memorable moments from our recent events</p>
                </header>
                <div className="gallery-container px-4 py-8 mx-auto max-w-screen-lg" ref={galleryRef}>
                    {/* Photoswipe Gallery */}
                    <Gallery>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Show the first 6 images */}
                            {images.slice(0, 6).map((image, index) => (
                                <div key={index} className="gallery-item overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                                    <Item
                                        original={image.src}  // Original large image for modal view
                                        thumbnail={image.src} // Thumbnail image for the gallery
                                        width="600"
                                        height="400"
                                    >
                                        {({ ref, open }) => (
                                            <img
                                                ref={ref}
                                                onClick={open} // Open the lightbox on click
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover cursor-pointer rounded-lg"
                                            />
                                        )}
                                    </Item>
                                </div>
                            ))}
                        </div>
                    </Gallery>

                    <div className="text-center mt-6">
                        <button
                            onClick={handleLoadMoreClick} // Trigger navigation on click
                            className="px-6 py-3 bg-yellow-500 text-white rounded-md transition-all duration-300 hover:bg-[#DAA520] hover:text-white"
                        >
                            Load More
                        </button>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <About />
            {/* Services Section */}
            <Services />

            {/* Events Section */}
            <Events />

            {/* Contact Form Section */}
            <br />
            <br />
            <br />
            <ContactForm />
        </div>
    );
};


export default Home;
