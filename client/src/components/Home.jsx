import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <section
                id="home"
                className="bg-[#006995] min-h-[500px] flex flex-col justify-center items-center px-6 py-16 text-center"
            >
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-blue-100 mb-6 leading-tight">
                        No Pressure, Just Support
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-10">
                        Feeling down? Take our quick mental wellness test to understand your mood.
                        It’s private, supportive, and takes just a few minutes.
                    </p>
                    <Link to="/Assessment">
                        <button className="bg-[#02141c] text-white text-base md:text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                            Begin the Test
                        </button>
                    </Link>
                </div>
            </section>
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto flex-start">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16">
                        What We Offer for Your Well-being
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Assessment Card */}
                        <div className="bg-[#66add6] p-6 rounded-2xl shadow hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold text-black mb-3">Mental Health Assessment</h2>
                            <p className="text-[#042f45] mb-6">
                                A short, private quiz to help you reflect on your current mental state. Free and anonymous.
                            </p>
                            <Link to="/assessment">
                                <button className="bg-[#02141c] text-white px-5 py-2 rounded-full hover:bg-[#033144] transition">
                                    Begin Assessment
                                </button>
                            </Link>
                        </div>

                        {/* Resources Card */}
                        <div className="bg-[#66add6] p-6 rounded-2xl shadow hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold text-black mb-3">Helpful Resources</h2>
                            <p className="text-[#042f45] mb-6">
                                Explore guides, tips, and links curated to support your mental health journey.
                            </p>
                            <Link to="/resources">
                                <button className="bg-[#02141c] text-white px-5 py-2 rounded-full hover:bg-[#033144] transition">
                                    View Resources
                                </button>
                            </Link>
                        </div>

                        {/* Chatbot Card */}
                        <div className="bg-[#66add6] p-6 rounded-2xl shadow hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold text-black mb-3">Supportive Chatbot</h2>
                            <p className="text-[#042f45] mb-6">
                                Talk to our AI-powered chatbot to express yourself, get tips, or just feel heard.
                            </p>
                            <Link to="/chatbot">
                                <button className="bg-[#02141c] text-white px-5 py-2 rounded-full hover:bg-[#033144] transition">
                                    Open Chat
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
};

export default Home;
