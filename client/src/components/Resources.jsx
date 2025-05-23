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
            <div className="min-h-screen py-14 px-6 bg-[#f9fafb]">
                <div className="max-w-7xl mx-auto">
                    {/* Hero */}
                    <div className="mb-16 text-center">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-[#0b2c44] mb-4">Your Mental Health Resource Hub</h1>
                        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
                            Curated resources to support your mental well-being — professional help, soothing meditations, and transformative books.
                        </p>
                    </div>

                    {/* Professional Help */}
                    <section className="mb-24">
                        <h2 className="text-2xl font-bold text-[#082f49] mb-8">Professional Help Resources</h2>
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {professionalResources.map((res, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition border border-gray-100"
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{res.name}</h3>
                                    <p className="text-gray-600 text-sm mb-6">{res.description}</p>
                                    <a
                                        href={res.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-90 transition"
                                    >
                                        Visit Resource →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Meditations */}
                    <section className="mb-24">
                        <h2 className="text-2xl font-bold text-[#082f49] mb-8">Guided Meditations</h2>
                        <p className="text-gray-600 mb-6 text-base">Take a moment to breathe. These practices help calm your mind and reconnect with the present.</p>
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {meditationVideos.map((video, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-200"
                                >
                                    <iframe
                                        src={video.url}
                                        title={video.title}
                                        className="w-full aspect-video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                                        allowFullScreen
                                    />
                                    <div className="p-5">
                                        <h3 className="text-lg font-medium text-gray-900">{video.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Books */}
                    <section className="mb-24">
                        <h2 className="text-2xl font-bold text-[#000000] mb-8">Recommended Books</h2>
                        <p className="text-gray-700 mb-6 text-base">Hand-picked reads to empower your mental wellness and personal growth.</p>
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {recommendedBooks.map((book, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition border border-blue-100"
                                >
                                    <h3 className="text-xl font-bold text-[#000000] mb-2">{book.title}</h3>
                                    <p className="text-sm text-[#00000e] mb-2">by {book.author}</p>
                                    <p className="text-sm text-[#000000] mb-4">{book.description}</p>
                                    <a
                                        href={book.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#92400e] transition"
                                    >
                                        View on Amazon →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </>


    )
};

export default Resources;