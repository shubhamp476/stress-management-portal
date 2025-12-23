import { useState } from "react";
import axios from "axios";

const questions = [
  { text: "I feel anxious or nervous", quote: "Awareness is the first step to calm." },
  { text: "I have trouble sleeping", quote: "Rest is fuel for the mind." },
  { text: "I feel overwhelmed by responsibilities", quote: "You are stronger than you think." },
  { text: "I feel tired even after resting", quote: "Listen to what your body says." },
  { text: "I get irritated easily", quote: "Peace begins with patience." },
  { text: "I find it hard to concentrate", quote: "Clarity comes with calm." },
  { text: "I feel pressure from work or studies", quote: "Progress, not perfection." },
  { text: "I feel restless or uneasy", quote: "Stillness heals the soul." },
  { text: "I feel emotionally drained", quote: "Pauses are powerful." },
  { text: "I find it hard to relax", quote: "Relaxation is a skill you can learn." },
];

const options = [
  { label: "Never", value: 1 },
  { label: "Rarely", value: 2 },
  { label: "Sometimes", value: 3 },
  { label: "Often", value: 4 },
  { label: "Always", value: 5 },
];

export default function StressTest({ onClose, onResult }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(
    Array(questions.length).fill(0)
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const currentQuestion = questions[currentIndex];

  const selectAnswer = (value) => {
    const updated = [...answers];
    updated[currentIndex] = value;
    setAnswers(updated);
  };

  const nextQuestion = () => {
    if (answers[currentIndex] === 0) {
      setError("Please select an option");
      return;
    }
    setError("");
    setCurrentIndex((prev) => prev + 1);
  };

  const prevQuestion = () => {
    setError("");
    setCurrentIndex((prev) => prev - 1);
  };

  const submitTest = async () => {
  try {
    const token = localStorage.getItem("token");

    console.log("TOKEN SENT:", token); // confirm

    const res = await fetch("http://localhost:5001/api/stress/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        answers,
      }),
    });

    const data = await res.json();
    console.log("RESPONSE:", data);

    if (!res.ok) throw new Error(data.message);

    setResult(data);
  } catch (err) {
    console.error("SUBMIT ERROR:", err.message);
    setError("Failed to submit test");
  }
};


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400">
      <div className="relative w-[480px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white/30 backdrop-blur-xl shadow-2xl p-8 animate-fadeIn">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* PROGRESS */}
        <div className="mb-5">
          <p className="text-sm text-gray-800">
            Question {currentIndex + 1} of {questions.length}
          </p>
          <div className="w-full h-2 bg-white/40 rounded-full mt-1">
            <div
              className="h-2 bg-blue-700 rounded-full transition-all"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* QUESTION */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {currentQuestion.text}
        </h2>

        {/* OPTIONS */}
        <div className="space-y-3 mb-4">
          {options.map((opt) => (
            <label
              key={opt.value}
              className={`block cursor-pointer rounded-xl p-3 border transition-all
                ${
                  answers[currentIndex] === opt.value
                    ? "bg-blue-700 text-white border-blue-700"
                    : "bg-white/60 border-white hover:bg-blue-100"
                }`}
            >
              <input
                type="radio"
                name={`q-${currentIndex}`}
                className="hidden"
                onChange={() => selectAnswer(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>

        {/* QUOTE */}
        <p className="text-sm italic text-gray-700 mb-4">
          “{currentQuestion.quote}”
        </p>

        {/* ERROR */}
        {error && (
          <p className="text-red-600 text-sm mb-3">{error}</p>
        )}

        {/* ACTIONS */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevQuestion}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            Back
          </button>

          {currentIndex < questions.length - 1 ? (
            <button
              onClick={nextQuestion}
              className="px-4 py-2 rounded bg-blue-700 text-white"
            >
              Next
            </button>
          ) : (
            <button
              onClick={submitTest}
              disabled={loading}
              className="px-4 py-2 rounded bg-green-600 text-white"
            >
              {loading ? "Submitting..." : "Finish Test"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
