import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#e4f5ff] text-gray-900  py-10">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col items-center space-y-6">

                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="/" className="hover:text-blue-700 transition-colors">Home</a>
                        <a href="/assessment" className="hover:text-blue-700 transition-colors">Assessment</a>
                        <a href="/resources" className="hover:text-blue-700 transition-colors">Resources</a>
                        <a href="/chatbot" className="hover:text-blue-700 transition-colors">Chatbot</a>
                    </div>

                    <div className=" text-gray-700">
                        Better Days © {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;