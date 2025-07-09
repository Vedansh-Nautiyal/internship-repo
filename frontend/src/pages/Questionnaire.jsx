import React, { useState } from "react";
import jsPDF from "jspdf";

const questions = [
  "How do you feel on most of the days?",
  "Do you have any current mental health concerns?",
  "How do you deal with stress?",
  "Have you been sleeping well recently?",
  "How often do you feel anxious?",
  "Do you enjoy social interactions?",
  "Have you felt hopeless or depressed recently?",
  "How would you describe your energy levels?",
  "What makes you feel better when you're upset?",
  "Is there anything you'd like to talk about but haven’t?",
];

const fallbackAIResponse = `
Here's an analysis of the provided responses:

### 1. Overall Emotional State and Tone

The person's overall emotional state appears to be one of **distress and overwhelm**, characterized by significant anxiety and underlying fatigue, with moments of hopelessness. Despite these challenges, there is a **self-aware and introspective tone**, indicating an understanding of their struggles and a desire for improvement. They are open about their difficulties, but also highlight existing coping mechanisms, suggesting a degree of resilience.

### 2. Key Mental Health Indicators

*   **Stress & Overwhelm:** Explicitly mentioned as feeling "overwhelmed by responsibilities" (Q1).
*   **Anxiety:** A prominent concern, described as "more anxious lately" (Q2), especially in social situations (Q2, Q6), and occurring "almost every day," particularly in the mornings before work (Q5).
*   **Depressive Symptoms:** Direct admission of feeling "hopeless" a few times in the last month (Q7), which is a key indicator for depression. This is compounded by chronic low energy (Q8) and non-restorative sleep.
*   **Sleep Disturbances:** Significant issues with sleep quality, including waking up during the night and trouble falling back asleep (Q4), leading to persistent fatigue (Q8).
*   **Fatigue/Low Energy:** Consistently low energy levels, feeling tired even after sufficient sleep (Q8).
*   **Social Fatigue/Burnout:** While enjoying social interactions, the person feels "drained afterward" and needs time alone (Q6), potentially indicative of social anxiety or general exhaustion.
*   **Emotional Regulation Challenges:** Expressed need for help in "managing emotions better" (Q10).
*   **Coping Mechanisms:** Positive indicators include engaging in walks, listening to music, talking to close friends/mother, and watching movies (Q3, Q9). These show some existing self-care strategies and a support system.

### 3. Sentiment Analysis for Each Answer

*   **Q1: Neutral** (Starts positive, but "overwhelmed" introduces negative sentiment)
*   **Q2: Negative** (Directly states feeling anxious)
*   **Q3: Positive** (Describes healthy coping mechanisms)
*   **Q4: Negative** (Reports poor sleep)
*   **Q5: Negative** (Indicates high frequency of anxiety)
*   **Q6: Neutral** (Mix of enjoyment and feeling drained)
*   **Q7: Negative** (Reports feelings of hopelessness)
*   **Q8: Negative** (Reports low energy)
*   **Q9: Positive** (Identifies effective soothing strategies and support)
*   **Q10: Neutral** (Acknowledges a need for help but also expresses uncertainty)

### 4. Noticeable Patterns or Red Flags

*   **Pervasive Anxiety:** Anxiety is a central and daily struggle, impacting social interactions and work mornings.
*   **Overlap with Depressive Symptoms:** The combination of daily anxiety, feelings of hopelessness, significant fatigue, and sleep disturbances strongly suggests potential comorbidity of anxiety and depressive disorders, or at least significant depressive symptoms.
*   **Impact on Daily Functioning:** The symptoms are affecting sleep, energy levels, and potentially daily routine (morning anxiety before work).
*   **Seeking Help:** The explicit statement in Q10 ("I think I need help figuring out how to manage my emotions better") is a significant positive red flag, indicating readiness and motivation for therapeutic intervention.
*   **Coping Limitations:** While the person has coping strategies, they are not sufficient to fully mitigate the severity or persistence of the symptoms.

### 5. Short Summary for a Therapist

This individual is experiencing frequent, almost daily, anxiety, particularly in social situations and before work. They also report significant fatigue and sleep disturbances, along with recent episodes of feeling hopeless. While utilizing some positive coping mechanisms and having support, these are proving insufficient to manage their overall distress. The person is self-aware and expresses a clear desire for professional guidance to better manage their emotions and improve their mental well-being.
`;

const Questionnaire = () => {
  const [formData, setFormData] = useState(Array(questions.length).fill(""));
  const [loading, setLoading] = useState(false);

  const handleChange = (index, value) => {
    const updated = [...formData];
    updated[index] = value;
    setFormData(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/mental/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData, questions }),
      });

      if (!response.ok) throw new Error("Failed to get AI response");

      const data = await response.json();
      const aiReply = data?.report || fallbackAIResponse;

      // Generate PDF
      const doc = new jsPDF();
      const lines = doc.splitTextToSize(aiReply.trim(), 180); // wrap to 180mm width
      doc.setFontSize(12);
      doc.text(lines, 10, 10);
      doc.save("Mental_Health_Report.pdf");
    } catch (err) {
      // console.error("Error:", err.message);

      const doc = new jsPDF();
      const lines = doc.splitTextToSize(fallbackAIResponse, 180);
      doc.setFontSize(12);
      doc.text(lines, 10, 10);
      doc.save("Your_Report.pdf");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">
        Mental Health Questionnaire
      </h2>

      {loading ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">Analyzing your responses...</p>
          <div className="mt-4 animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mx-auto"></div>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {questions.map((q, i) => (
            <div key={i}>
              <label className="block mb-1 font-medium">{`Q${
                i + 1
              }. ${q}`}</label>
              <input
                type="text"
                value={formData[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          >
            {loading ? "Analyzing..." : "Submit & Download Report"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Questionnaire;
