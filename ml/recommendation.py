import sys
import pandas as pd
import joblib

# Load the trained model
model = joblib.load('../ml-model/workout_recommender.joblib')

def recommend_workout(args):
    input_data = pd.DataFrame({
        'Age': [int(args[0])],
        'Gender': [args[1]],
        'Weight (kg)': [float(args[2])],
        'Height (m)': [float(args[3])],
        'BMI': [float(args[4])],
        'Resting_BPM': [int(args[5])],
        'Session_Duration (hours)': [float(args[6])],
        'Calories_Burned': [int(args[7])],
        'Fat_Percentage': [float(args[8])],
        'Experience_Level': [args[9]]
    })

    # Make predictions
    workout = model.predict(input_data)[0]
    probabilities = model.predict_proba(input_data)[0]
    classes = model.classes_

    response = {
        "recommended_workout": workout,
        "probabilities": {cls: prob for cls, prob in zip(classes, probabilities)}
    }

    return response

if __name__ == "__main__":
    args = sys.argv[1:]
    result = recommend_workout(args)
    print(result)