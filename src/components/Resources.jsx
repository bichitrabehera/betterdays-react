import React from 'react';
import Footer from './Footer';

const Resources = () => {
    // Professional Help Resources
    const professionalResources = [
        {
            name: '7 Cups',
            description: 'Free emotional support from trained listeners, available 24/7.',
            link: 'https://www.7cups.com'
        },
        {
            name: 'NIMH (National Institute of Mental Health)',
            description: 'Information on depression, treatments, and support.',
            link: 'https://www.nimh.nih.gov/health/topics/depression'
        },
        {
            name: 'BetterHelp',
            description: 'Online therapy with licensed professionals. (Paid)',
            link: 'https://www.betterhelp.com'
        },
        {
            name: 'Student Minds (UK)',
            description: 'Student mental health charity, great for university support.',
            link: 'https://www.studentminds.org.uk'
        },
        {
            name: 'Crisis Text Line',
            description: 'Free, 24/7 support for those in crisis. Text HOME to 741741',
            link: 'https://www.crisistextline.org'
        }
    ];

    // Meditation Videos
    const meditationVideos = [
        {
            url: 'https://www.youtube.com/embed/1vx8iUvfyCY',
            title: '10-Minute Meditation for Anxiety'
        },
        {
            url: 'https://www.youtube.com/embed/ZToicYcHIOU',
            title: 'Mindfulness for Stress Relief'
        },
        {
            url: 'https://www.youtube.com/embed/4EaMJOo1jks',
            title: '5-Minute Morning Meditation'
        },
        {
            url: 'https://www.youtube.com/embed/inpok4MKVLM',
            title: 'Body Scan Meditation'
        },
        {
            url: 'https://www.youtube.com/embed/O-6f5wQXSu8',
            title: 'Sleep Meditation for Deep Rest'
        },
        {
            url: 'https://www.youtube.com/embed/86m4RC_ADEY',
            title: 'Guided Meditation for Self-Love'
        }
    ];

    // Self-Help Books
    const recommendedBooks = [
        {
            title: 'The Happiness Trap',
            author: 'Russ Harris',
            description: 'Guide to overcoming stress and anxiety using ACT therapy',
            link: 'https://www.amazon.com/Happiness-Trap-Struggling-Start-Living/dp/1590305841'
        },
        {
            title: 'Feeling Good',
            author: 'David D. Burns',
            description: 'Cognitive behavioral therapy techniques for depression',
            link: 'https://www.amazon.com/Feeling-Good-New-Mood-Therapy/dp/0380810336'
        },
        {
            title: 'The Body Keeps the Score',
            author: 'Bessel van der Kolk',
            description: 'Understanding trauma and healing',
            link: 'https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748'
        },
        {
            title: 'Atomic Habits',
            author: 'James Clear',
            description: 'Building good habits and breaking bad ones',
            link: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299'
        },
        {
            title: 'Wherever You Go, There You Are',
            author: 'Jon Kabat-Zinn',
            description: 'Mindfulness meditation for everyday life',
            link: 'https://www.amazon.com/Wherever-You-There-Are-Mindfulness/dp/1401307787'
        },
        {
            title: 'The Gifts of Imperfection',
            author: 'Brené Brown',
            description: 'Embracing who you are',
            link: 'https://www.amazon.com/Gifts-Imperfection-Think-Supposed-Embrace/dp/159285849X'
        }
    ];

    return (
        <>
            <div className="min-h-screen py-10 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="mb-12">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Mental Health Resource Hub</h1>
                        <p className="text-lg text-gray-600 max-w-3xl">
                            Curated resources to support your mental well-being journey — professional help, guided meditations, and transformative books.
                        </p>
                    </div>

                    {/* Professional Help Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Professional Help Resources</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {professionalResources.map((res, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#66add6] p-6 rounded-2xl shadow hover:shadow-lg transition"
                                >
                                    <h3 className="text-lg font-semibold text-[#090909] mb-2">{res.name}</h3>
                                    <p className="text-[#0e0e0e] text-sm mb-4">{res.description}</p>
                                    <a
                                        href={res.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm text-white font-medium hover:underline"
                                    >
                                        Visit Resource
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>

                            ))}
                        </div>
                    </section>

                    {/* Meditation Videos Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Guided Meditations</h2>
                        <p className="text-gray-600 mb-6">Take a moment to breathe. These guided practices can help reduce stress and improve focus.</p>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {meditationVideos.map((video, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100"
                                >
                                    <iframe
                                        src={video.url}
                                        title={video.title}
                                        className="w-full aspect-video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                                        allowFullScreen
                                    />
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900">{video.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Recommended Books Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-300">Recommended Books</h2>
                        <p className="text-gray-700 mb-6 text-lg">Transformative reads that can help with mental health, personal growth, and wellbeing.</p>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {recommendedBooks.map((book, index) => (
                                <div
                                    key={index}
                                    className="bg-[#66add6] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-500"
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h3>
                                    <p className="text-sm text-black mb-3">by {book.author}</p>
                                    <p className="text-sm text-black mb-4">{book.description}</p>
                                    <a
                                        href={book.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm text-white font-medium hover:text-blue-800 hover:underline transition duration-300 ease-in-out"
                                    >
                                        View on Amazon
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>


                </div>
            </div>

            <Footer />
        </>
    );
};

export default Resources;