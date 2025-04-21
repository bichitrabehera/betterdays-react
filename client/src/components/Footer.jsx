import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#006995] text-gray-300 py-8">
            <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
                {/* Logo and Branding */}
                <div className="flex flex-col items-start md:max-w-xs">
                    <h4 className="text-2xl text-white font-semibold mb-1">BetterDays</h4>
                    <p className="text-base text-gray-300 font-medium">Mental Health Support Platform</p>
                </div>

                {/* Navigation */}
                <div className="flex flex-col space-y-3">
                    <h4 className="text-lg text-white font-semibold">Explore</h4>
                    <ul className="space-y-2 text-base flex gap-3">
                        <li><a href="/" className="hover:text-white transition duration-300 ease-in-out">Home</a></li>
                        <li><a href="/assessment" className="hover:text-white transition duration-300 ease-in-out">Assessment</a></li>
                        <li><a href="/resources" className="hover:text-white transition duration-300 ease-in-out">Resources</a></li>
                        <li><a href="/chatbot" className="hover:text-white transition duration-300 ease-in-out">Chatbot</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col space-y-3">
                    <h4 className="text-lg text-white font-semibold">Need Help?</h4>
                    <p className="text-base">contact@betterdays.com</p>
                </div>
            </div>

            {/* Bottom Legal Links */}
            <div className="max-w-screen-xl mx-auto px-6 mt-8 pt-4 border-t border-white flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
                <div className="flex space-x-6 mb-4 sm:mb-0">
                    <a href="#" className="hover:text-white transition duration-300 ease-in-out">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition duration-300 ease-in-out">Legal Information</a>
                    <a href="#" className="hover:text-white transition duration-300 ease-in-out">Cookies</a>
                </div>
                <div className="text-xs font-light text-center sm:text-left">
                    © {new Date().getFullYear()} BetterDays
                </div>
            </div>
        </footer>
    );
};

export default Footer;
