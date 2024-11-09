import React from 'react';

const ContactForm = () => {
    return (
        <section className="min-h-screen bg-white" id="contact">
            {/* Header Section */}
            <header className="bg-yellow-500 text-white py-4 text-center">
                <div className="container px-6 mx-auto">
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                    <p className="mt-2 text-lg">We'd love to hear from you! Fill out the form below.</p>
                </div>
            </header>


            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-10">
                    <div className="lg:w-1/2 lg:mx-10">
                        <h1 className="text-3xl font-bold text-gray-800 capitalize dark:text-gray-900 lg:text-4xl">
                            Let’s talk
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            <strong>Ask us anything</strong>; we would love to hear from you.
                        </p>

                        <form className="mt-12 space-y-6">
                            <div className="-mx-2 md:flex md:items-center">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-800">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-800">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="johndoe@example.com"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-800">
                                    Message
                                </label>
                                <textarea
                                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Your message"
                                ></textarea>
                            </div>

                            <button className="w-full px-6 py-3 mt-4 text-sm font-bold tracking-wide text-white uppercase transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Get in Touch
                            </button>
                        </form>
                    </div>

                    <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                        <img
                            className="object-cover mx-auto rounded-full lg:block shrink-0 w-80 h-80"
                            src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="Contact"
                        />

                        <div className="mt-6 space-y-8 md:mt-8 text-gray-700">
                            <p className="flex items-start -mx-2">
                                <span className="w-6 h-6 mx-2 text-blue-500">&#128205;</span>
                                <span className="mx-2 font-semibold">Address:</span> 711-2880 Nulla St. Mankato Mississippi 96522
                            </p>
                            <p className="flex items-start -mx-2">
                                <span className="w-6 h-6 mx-2 text-blue-500">&#128222;</span>
                                <span className="mx-2 font-semibold">Phone:</span> (257) 563-7401
                            </p>
                            <p className="flex items-start -mx-2">
                                <span className="w-6 h-6 mx-2 text-blue-500">&#128231;</span>
                                <span className="mx-2 font-semibold">Email:</span> acb@example.com
                            </p>
                        </div>

                        <div className="mt-6 w-80 md:mt-8">
                            <div className="flex justify-between items-center">
                                {/* Follow Us Button */}
                                <button className="px-4 py-2 text-white bg-yellow-500 font-semibold rounded-md transition-colors duration-300 transform hover:bg-yellow-600 dark:hover:bg-yellow-500">
                                    Follow us
                                </button>

                                {/* Social Media Icons */}
                                <div className="flex space-x-3">
                                    {/* Twitter Icon */}
                                    <a
                                        className="text-gray-400 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400"
                                        href="#"
                                    >
                                        <svg
                                            className="w-10 h-10 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M23.643 4.937c-.882.392-1.832.656-2.83.775a4.944 4.944 0 002.166-2.723 9.9 9.9 0 01-3.14 1.187A4.924 4.924 0 0016.316 4c-2.728 0-4.928 2.211-4.928 4.931 0 .387.043.765.127 1.128-4.09-.205-7.719-2.17-10.148-5.144-.425.727-.669 1.57-.669 2.474 0 1.71.869 3.218 2.188 4.1a4.876 4.876 0 01-2.234-.617v.061c0 2.382 1.692 4.366 3.946 4.815-.413.112-.849.172-1.291.172-.317 0-.626-.031-.927-.089.627 1.951 2.445 3.375 4.601 3.414a9.886 9.886 0 01-6.102 2.102c-.396 0-.788-.023-1.176-.069 2.184 1.397 4.779 2.212 7.547 2.212 9.057 0 14.012-7.513 14.012-14.011 0-.213-.004-.426-.014-.637a9.932 9.932 0 002.441-2.548z"
                                            />
                                        </svg>
                                    </a>

                                    {/* Facebook Icon */}
                                    <a
                                        className="text-gray-400 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400"
                                        href="#"
                                    >
                                        <svg
                                            className="w-10 h-10 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M22 12.073C22 5.372 17.627 0 12 0 6.372 0 2 5.372 2 12.073c0 5.577 4.073 10.22 9.432 11.85v-8.5h-2.835v-3.35h2.835v-2.522c0-3.023 1.81-4.705 4.561-4.705 1.325 0 2.736.25 3.007.423v3.315h-2.22c-1.747 0-2.17.872-2.17 2.156v2.703h4.334l-.65 3.35h-3.684v8.5c5.358-1.63 9.432-6.273 9.432-11.85z"
                                            />
                                        </svg>
                                    </a>

                                    {/* Instagram Icon */}
                                    <a
                                        className="text-gray-400 transition-colors duration-300 transform hover:text-pink-500 dark:hover:text-pink-400"
                                        href="#"
                                    >
                                        <svg
                                            className="w-10 h-10 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 2.163c3.293 0 3.664.012 4.946.071 1.274.058 2.445.327 3.395 1.276.95.948 1.22 2.121 1.276 3.396.059 1.282.071 1.654.071 4.947 0 3.292-.012 3.664-.071 4.947-.056 1.275-.326 2.448-1.276 3.396-.95.949-2.121 1.218-3.395 1.276-1.282.059-1.654.071-4.946.071-3.292 0-3.664-.012-4.946-.071-1.274-.058-2.445-.327-3.395-1.276-.95-.948-1.22-2.121-1.276-3.396-.059-1.283-.071-1.655-.071-4.947 0-3.292.012-3.664.071-4.947.056-1.275.326-2.448 1.276-3.396.95-.949 2.121-1.218 3.395-1.276 1.282-.059 1.654-.071 4.946-.071zm0 1.92c-3.07 0-3.436.012-4.655.067-1.176.055-1.88.246-2.351.601-.47.356-.711.85-.711 1.345 0 .83-.012 1.655-.012 2.486 0 3.373.008 3.652.071 4.279.061.625.321 1.058.711 1.415.472.47.918.71 1.444.756.379.048.616-.002 2.79-.017.258-.004.525-.001.809-.004-.98-.014-2.348-.14-3.473-.243-.018-.002-.008-.003-.025-.004z"
                                            />
                                        </svg>
                                    </a>

                                    {/* LinkedIn Icon */}
                                    <a
                                        className="text-gray-400 transition-colors duration-300 transform hover:text-blue-700 dark:hover:text-blue-600"
                                        href="#"
                                    >
                                        <svg
                                            className="w-10 h-10 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 2.163c3.293 0 3.664.012 4.946.071 1.274.058 2.445.327 3.395 1.276.95.948 1.22 2.121 1.276 3.396.059 1.282.071 1.654.071 4.947 0 3.292-.012 3.664-.071 4.947-.056 1.275-.326 2.448-1.276 3.396-.95.949-2.121 1.218-3.395 1.276-1.282.059-1.654.071-4.946.071-3.292 0-3.664-.012-4.946-.071-1.274-.058-2.445-.327-3.395-1.276-.95-.948-1.22-2.121-1.276-3.396-.059-1.283-.071-1.655-.071-4.947 0-3.292.012-3.664.071-4.947.056-1.275.326-2.448 1.276-3.396.95-.949 2.121-1.218 3.395-1.276 1.282-.059 1.654-.071 4.946-.071zm0 1.92c-3.07 0-3.436.012-4.655.067-1.176.055-1.88.246-2.351.601-.47.356-.711.85-.711 1.345 0 .83-.012 1.655-.012 2.486 0 3.373.008 3.652.071 4.279.061.625.321 1.058.711 1.415.472.47.918.71 1.444.756.379.048.616-.002 2.79-.017.258-.004.525-.001.809-.004-.98-.014-2.348-.14-3.473-.243-.018-.002-.008-.003-.025-.004z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
