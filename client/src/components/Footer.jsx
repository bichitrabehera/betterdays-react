import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#006995] text-black  py-8 ">
            <div className="max-w-screen-xl mx-auto px-4 ">
                <div className="flex flex-col items-center space-y-6 ">

                    <div className="flex flex-wrap justify-center gap-3">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <a href="/assessment" className="hover:text-white transition-colors">Assessment</a>
                        <a href="/resources" className="hover:text-white transition-colors">Resources</a>
                        <a href="/chatbot" className="hover:text-white transition-colors">Chatbot</a>
                    </div>

                    <div className=" text-gray-200">
                        Better Days © {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;