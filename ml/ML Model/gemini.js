import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "#Here goes gemini api keys" });

async function generateWorkoutPlan(age, height, weight, bmi, injuries = [], category, level, frequency) {
    // Format injuries as a comma-separated string
    const injuryList = injuries.length > 0 ? injuries.join(", ") : "None";

    const prompt = `You are a fitness AI assistant. Given the following parameters about a person, generate an ideal workout plan that is concise, effective, and structured. The workout plan should be tailored based on the individual's fitness level, weight, height, BMI, recent injuries, and chosen workout category.

Input Parameters:

Age: ${age} years

Height: ${height} cm

Weight: ${weight} kg

BMI: ${bmi ? bmi : "calculated if not given"}

Recent Injuries: ${injuryList}

Workout Category: ${category}

Experience Level: ${level}

Workout Frequency: ${frequency}

Expected Output Format:

Return the workout plan in the following structured format, this is just an example, return it in a similar way:
{
"Workout Plan": {
"Day 1": {
"Workout Type": "Strength Training",
"Exercises": [
{"name": "Squats", "sets": 4, "reps": "8-10"},
{"name": "Bench Press", "sets": 4, "reps": "8-12"},
{"name": "Pull-ups", "sets": 3, "reps": "8-12"}
]
},
"Day 2": {
"Workout Type": "Cardio",
"Exercises": [
{"name": "Treadmill Sprint", "sets": 3, "reps": "50 seconds"},
{"name": "Plank", "sets": 3, "reps": "1 min"},
{"name": "Russian Twists", "sets": 3, "reps": "20 each side"}
]
},
...
}
}

Ensure exercises align with injury limitations and fitness level.
Keep workouts minimal but effective—no unnecessary descriptions.
Adjust volume and intensity based on experience level and goal.
Always the exercise reply should include name, sets and reps and nothing else.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });
        return response.text;  // Return the generated content
    } catch (error) {
        console.error("Error generating workout plan:", error);
        return null;
    }
}

/*
generateWorkoutPlan(25, 180, 75, null, ["Knee Injury", "Shoulder Pain"], "Strength", "Intermediate", "5 days/week")
    .then((result) => console.log(result));
*/
