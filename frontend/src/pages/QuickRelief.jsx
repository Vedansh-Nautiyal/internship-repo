import React, { useEffect, useRef, useState } from "react";

const breathingSteps = [
  { label: "Inhale", duration: 4000 },
  { label: "Hold", duration: 4000 },
  { label: "Exhale", duration: 4000 },
  { label: "Hold", duration: 4000 },
];

const QuickRelief = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [circleScale, setCircleScale] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const audioRef = useRef(null);
  const currentStep = breathingSteps[stepIndex];

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % breathingSteps.length);
    }, currentStep.duration);

    // Animate the circle
    if (currentStep.label === "Inhale") setCircleScale(1.5);
    else if (currentStep.label === "Exhale") setCircleScale(1);

    return () => clearInterval(interval);
  }, [stepIndex, isRunning]);

  const handleStart = async () => {
    setStepIndex(0);
    setIsRunning(true);
    try {
      await audioRef.current?.play(); // Start background music
    } catch (err) {
      console.error("Audio play failed:", err);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setStepIndex(0);
    setCircleScale(1);
    audioRef.current?.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-center p-6">
      <h1 className="text-3xl font-semibold mb-8 text-blue-800">
        Quick Relief: Guided Breathing
      </h1>

      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />

      {isRunning && (
        <div className="relative w-64 h-64 flex items-center justify-center mb-6">
          <div
            className="absolute rounded-full bg-blue-500 opacity-30 transition-all duration-1000"
            style={{
              width: `${circleScale * 200}px`,
              height: `${circleScale * 200}px`,
              transition: `all ${currentStep.duration}ms ease-in-out`,
            }}
          ></div>
          <span className="text-xl font-medium text-blue-900 z-10">
            {currentStep.label}
          </span>
        </div>
      )}

      {!isRunning && (
        <p className="text-lg text-blue-700 mb-4">
          Click the button to begin guided breathing.
        </p>
      )}

      {isRunning && (
        <p className="text-lg text-blue-700 mb-4">
          Breathe with the circle. Let your body follow the rhythm.
        </p>
      )}

      <ul className="text-sm text-blue-600 mb-6">
        <li>Inhale deeply through your nose for 4 seconds</li>
        <li>Hold your breath for 4 seconds</li>
        <li>Exhale slowly through your mouth for 4 seconds</li>
        <li>Hold again for 4 seconds</li>
      </ul>

      {!isRunning ? (
        <button
          onClick={handleStart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Start Exercise
        </button>
      ) : (
        <button
          onClick={handleReset}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Stop & Reset
        </button>
      )}
    </div>
  );
};

export default QuickRelief;
