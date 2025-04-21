import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className=" bg-white shadow-md z-50">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h4 className="text-[22px] text-[#0084bd] font-bold">BetterDays</h4>
                    </div>

                    <div className="hidden md:flex gap-6 items-center">
                        <Link to="/" className="text-[17px] text-gray-600 font-medium hover:text-blue-700 hover:underline">Home</Link>
                        <Link to="/assessment" className="text-[17px] text-gray-600 font-medium hover:text-blue-700 hover:underline">Assessment</Link>
                        <Link to="/resources" className="text-[17px] text-gray-600 font-medium hover:text-blue-700 hover:underline">Resources</Link>
                        <Link to="/chatbot" className="text-[17px] text-gray-600 font-medium hover:text-blue-700 hover:underline">Chat</Link>
                        <button className="ml-4 px-4 py-1 bg-[#d5f2fd] border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition">Login</button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            className="text-black focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`fixed top-0 left-0 h-full w-[240px] bg-white shadow-lg z-40 transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-6">
                    <h4 className="text-[24px] text-[#0084bd] font-bold mb-8">BetterDays</h4>
                    <ul className="flex flex-col gap-4 text-[17px] font-medium text-gray-700">
                        {[
                            { to: '/', label: 'Home' },
                            { to: '/assessment', label: 'Assessment' },
                            { to: '/resources', label: 'Resources' },
                            { to: '/chatbot', label: 'Chat' },
                        ].map((item, i) => (
                            <li key={i}>
                                <Link
                                    to={item.to}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button className="mt-4 w-full px-3 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition">
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
