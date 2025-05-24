import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { BrainCog, BookOpenText, MessagesSquare } from 'lucide-react';

const Home = () => {
    return (
        <>
            <section
                id="home"
                className="bg-[#004E89] min-h-[450px] flex flex-col justify-center items-center px-6 py-16 text-center"
            >
                <div className="max-w-3xl">
                    <h1 className="text-2xl md:text-3xl font-extrabold uppercase text-blue-100 mb-6 leading-tight">
                        Feeling off? You’re not alone. Start here
                    </h1>

                    <p className="text-[16px] md:text-xl text-blue-100 mb-10">
                        Feeling down? Take our quick mental wellness test to understand your mood.
                        It’s private, supportive, and takes just a few minutes.
                    </p>

                    <Link to="/Assessment">
                        <button className="bg-[#02141c] text-white text-base md:text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#232323] transition duration-300">
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
                        <div className="bg-[#fff] p-4 rounded-[10px] shadow border-1 border-[#e7e7e7] hover:shadow-lg transition">
                            <div className="flex items-center gap-2 mb-3">
                                <BrainCog className="w-6 h-6 text-[#02141c]" />
                                <h2 className="text-xl font-semibold text-black">Mental Health Assessment</h2>
                            </div>
                            <p className="text-[#020c11] mb-6">
                                A short, private quiz to help you reflect on your current mental state. Free and anonymous.
                            </p>
                            <Link to="/assessment">
                                <button className="bg-[#02141c] text-white font-semibold px-5 py-2 rounded-[10px] hover:bg-[#232323] transition">
                                    Begin Assessment
                                </button>
                            </Link>
                        </div>

                        {/* Resources Card */}
                        <div className="bg-[#fff] p-4 rounded-[10px] shadow border-1 border-[#e7e7e7] hover:shadow-lg transition">
                            <div className="flex items-center gap-2 mb-3">
                                <BookOpenText className="w-6 h-6 text-[#02141c]" />
                                <h2 className="text-xl font-semibold text-black">Helpful Resources</h2>
                            </div>
                            <p className="text-[#020c11] mb-6">
                                Explore guides, tips, and links curated to support your mental health journey.
                            </p>
                            <Link to="/resources">
                                <button className="bg-[#02141c] text-white font-semibold px-5 py-2 rounded-[10px] hover:bg-[#232323] transition">
                                    View Resources
                                </button>
                            </Link>
                        </div>

                        {/* Chatbot Card */}
                        <div className="bg-[#fff] p-4 rounded-[10px] shadow border-1 border-[#e7e7e7] hover:shadow-lg transition">
                            <div className="flex items-center gap-2 mb-3">
                                <MessagesSquare className="w-6 h-6 text-[#02141c]" />
                                <h2 className="text-xl font-semibold text-black">Supportive Chatbot</h2>
                            </div>
                            <p className="text-[#020c11] text-[15px] mb-6">
                                Talk to our AI-powered chatbot to express yourself, get tips, or just feel heard.
                            </p>
                            <Link to="/chatbot">
                                <button className="bg-[#02141c] text-white font-semibold px-5 py-2 rounded-[10px] hover:bg-[#232323] transition">
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
