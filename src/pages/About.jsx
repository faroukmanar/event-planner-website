import im1 from '../assets/gallery/im1-gallery.jpeg';
import im2 from '../assets/gallery/im2-gallery.jpeg';
import im3 from '../assets/gallery/im3-gallery.jpeg';

export const About = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="bg-yellow-500 text-white py-6 text-center">
                <h1 className="text-3xl font-bold">About Us</h1>
                <p className="mt-2 text-lg">We are dedicated to making your dream wedding a reality!</p>
            </header>

            {/* About Content Section */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-500">
                            <svg className="text-white w-7 h-7" viewBox="0 0 24 24">
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points=" 8,5 8,1 16,1 16,5"
                                    strokeLinejoin="round"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points="9,15 1,15 1,5 23,5 23,15 15,15"
                                    strokeLinejoin="round"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points="22,18 22,23 2,23 2,18"
                                    strokeLinejoin="round"
                                />
                                <rect
                                    x="9"
                                    y="13"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    width="6"
                                    height="4"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Let us plan<br/>
                                <br className="hidden md:block" />
                                your dream{' '}
                                <span className="inline-block text-deep-yellow-accent-400">
                                    wedding
                                </span>
                            </h2>

                            <p className="text-base text-gray-700 md:text-lg">
                                Let us help you create the wedding of your dreams. From choosing the perfect venue to managing every detail, we are dedicated to making your big day flawless. Our expert team ensures a seamless experience, allowing you to relax and enjoy each moment. Whether you envision an intimate celebration or a grand event, we specialize in bringing your vision to life with precision, elegance, and care.
                            </p>
                        </div>
                        <div>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-yellow-500 hover:text-deep-purple-800"
                            >
                                Learn more
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src={im1}
                                alt="Gallery image 1"
                            />
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src={im2}
                                alt="Gallery image 2"
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src={im3}
                                alt="Gallery image 3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
