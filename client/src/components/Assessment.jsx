import React, { useState } from 'react';
import Footer from './Footer';

const questions = [
    "Over the past two weeks, how often have you felt little interest or pleasure in doing things?",
    "Over the past two weeks, how often have you felt down, depressed, or hopeless?",
    "Over the past two weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
    "Over the past two weeks, how often have you felt tired or had little energy?",
    "Over the past two weeks, how often have you had poor appetite or overeaten?",
    "Over the past two weeks, how often have you felt bad about yourself - or that you're a failure or have let yourself or your family down?",
    "Over the past two weeks, how often have you had trouble concentrating on things, such as reading or watching videos?",
    "Over the past two weeks, how often have you been moving or speaking so slowly that others could have noticed? Or been fidgety or restless?",
    "Over the past two weeks, how often have you had thoughts that you would be better off dead or of hurting yourself in some way?"
];

const options = [
    { label: "Not at all", value: 0, emoji: "😊" },
    { label: "Several days", value: 1, emoji: "😕" },
    { label: "More than half the days", value: 2, emoji: "😞" },
    { label: "Nearly every day", value: 3, emoji: "😢" },
];

const getResult = (score) => {
    if (score <= 4) return {
        level: "Minimal Depression",
        message: "Your responses suggest you're doing well overall. Keep practicing self-care and check in with yourself regularly."
    };
    if (score <= 9) return {
        level: "Mild Depression",
        message: "You may be experiencing some symptoms. Consider reaching out to someone you trust or exploring self-care strategies."
    };
    if (score <= 14) return {
        level: "Moderate Depression",
        message: "Your responses indicate significant symptoms. It may be helpful to speak with a counselor or mental health professional."
    };
    if (score <= 19) return {
        level: "Moderately Severe Depression",
        message: "Your responses suggest substantial symptoms. We strongly recommend connecting with a mental health professional for support."
    };
    return {
        level: "Severe Depression",
        message: "Your responses indicate severe symptoms. Please consider reaching out to a mental health professional or crisis service immediately."
    };
};

const resources = [
    {
        name: "Crisis Text Line",
        description: "Text HOME to 741741 for free, 24/7 crisis counseling",
        link: "https://www.crisistextline.org"
    },
    {
        name: "National Suicide Prevention Lifeline",
        description: "Call 988 for free and confidential support",
        link: "https://988lifeline.org"
    },
    {
        name: "7 Cups",
        description: "Free online therapy and emotional support",
        link: "https://www.7cups.com"
    },
    {
        name: "Mindfulness Exercises",
        description: "Guided practices for stress reduction",
        link: "https://www.mindful.org/meditation/mindfulness-getting-started/"
    }
];

const Assessment = () => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (value) => {
        const updated = [...answers];
        updated[currentQuestion] = value;
        setAnswers(updated);
    };

    const handleNext = () => {
        if (answers[currentQuestion] === null) {
            alert("Please select an option before continuing.");
            return;
        }
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setSubmitted(true);
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    return (
        <>
            <div className="min-h-screen ">
                <div className="container mx-auto px-4 py-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">Mental Health Check-In</h1>
                            <p className="text-gray-600 text-[15px]">
                                This self-assessment is based on the PHQ-9 depression screening tool. It's not a diagnosis, but can help identify symptoms.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
                            {!submitted ? (
                                <>
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium text-[#006995]">
                                                Question {currentQuestion + 1} of {questions.length}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-[#006995] h-2 rounded-full"
                                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <p className="text-[16px] font-medium text-gray-800 mb-2">
                                            {questions[currentQuestion]}
                                        </p>
                                        <div className="space-y-3">
                                            {options.map((opt, i) => (
                                                <label
                                                    key={i}
                                                    className={`flex items-center gap-4 p-2 rounded-lg border cursor-pointer transition-all ${answers[currentQuestion] === opt.value
                                                        ? "border-blue-500 bg-blue-50"
                                                        : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name={`q${currentQuestion}`}
                                                        value={opt.value}
                                                        checked={answers[currentQuestion] === opt.value}
                                                        onChange={() => handleChange(opt.value)}
                                                        className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    />
                                                    <div className="flex items-center">
                                                        <span className="text-xl mr-3">{opt.emoji}</span>
                                                        <span className="text-gray-800">{opt.label}</span>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <button
                                            onClick={handleBack}
                                            disabled={currentQuestion === 0}
                                            className="px-5 py-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="px-6 py-2.5 rounded-lg bg-[#006995] text-white hover:bg-[#338bbf] transition shadow-sm"
                                        >
                                            {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center">
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Your Assessment Results</h2>
                                        <div className="inline-block bg-blue-100 text-[#006995] text-lg font-semibold px-4 py-2 rounded-full mb-4">
                                            Score: {totalScore}
                                        </div>
                                        <div className={`p-4 rounded-lg mb-6 ${totalScore <= 9 ? "bg-green-50 text-green-800" : totalScore <= 19 ? "bg-yellow-50 text-yellow-800" : "bg-red-50 text-red-800"}`}>
                                            <h3 className="text-xl font-bold mb-1">{result.level}</h3>
                                            <p className="text-sm">{result.message}</p>
                                        </div>

                                        <div className="text-left mb-8">
                                            <p className="text-gray-700 mb-4">
                                                <strong>Remember:</strong> This screening is not a diagnosis. Only a qualified professional can diagnose depression. However, your responses suggest it might be helpful to:
                                            </p>
                                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                                {totalScore <= 4 && (
                                                    <>
                                                        <li>Continue practicing good self-care habits</li>
                                                        <li>Check in with yourself regularly</li>
                                                    </>
                                                )}
                                                {totalScore > 4 && totalScore <= 9 && (
                                                    <>
                                                        <li>Talk to someone you trust about how you're feeling</li>
                                                        <li>Try mindfulness or relaxation techniques</li>
                                                        <li>Consider scheduling a check-in with a counselor</li>
                                                    </>
                                                )}
                                                {totalScore > 9 && (
                                                    <>
                                                        <li>Schedule an appointment with a mental health professional</li>
                                                        <li>Reach out to your support system</li>
                                                        <li>Practice self-compassion and be patient with yourself</li>
                                                    </>
                                                )}
                                            </ul>
                                        </div>

                                        <div className="mb-8">
                                            <h4 className="font-semibold text-gray-800 mb-3">Helpful Resources</h4>
                                            <div className="grid gap-3 sm:grid-cols-2">
                                                {resources.map((res, i) => (
                                                    <a
                                                        key={i}
                                                        href={res.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition"
                                                    >
                                                        <div className="font-medium text-blue-600">{res.name}</div>
                                                        <div className="text-sm text-gray-600">{res.description}</div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => {
                                                setSubmitted(false);
                                                setCurrentQuestion(0);
                                                setAnswers(Array(questions.length).fill(null));
                                            }}
                                            className="px-6 py-2.5 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
                                        >
                                            Retake Assessment
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Assessment;