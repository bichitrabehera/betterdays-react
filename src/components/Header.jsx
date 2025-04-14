import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white py-3 px-2 mx-auto flex fixed top-0 left-0 right-0 border-b-2 border-gray-400 justify-between items-center w-full mb-24 z-50">
            <div className="logo">
                <h4 className="text-[22px] text-[#0084bd] p-1 font-bold">BetterDays</h4>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex nav-links">
                <ul className="flex items-center justify-evenly">
                    <li className="ml-5 text-[16px] text-black hover:underline">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="ml-5 text-[16px] text-black hover:underline">
                        <Link to="/assessment">Assessment</Link>
                    </li>
                    <li className="ml-5 text-[16px] text-black hover:underline">
                        <Link to="/resources">Resources</Link>
                    </li>
                </ul>
            </div>

            <div className="flex">
                <button className="ml-10 text-[16px] text-black px-4 py-1 rounded-full border-gray-500 border-1 hover:bg-blue-400">
                    <Link to="/chatbot">Chat <i className="ri-chat-ai-line"></i></Link>
                </button>
                <div className="md:hidden ml-3 mr-2 flex">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black items-center justify-center"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={`fixed top-0 right-0 h-full w-2/4 bg-[#006995] text-white z-50 p-6 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="mb-6"
                    aria-label="Close menu"
                >
                    <X size={20} />
                </button>
                <ul className="flex flex-col space-y-2 text-base font-medium text-gray-100">
                    {[{ to: '/', label: 'Home' }, { to: '/assessment', label: 'Assessment' }, { to: '/resources', label: 'Resources' }]
                        .map((item, i) => (
                            <li key={i}>
                                <Link
                                    to={item.to}
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}
