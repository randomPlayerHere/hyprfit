import streamlit as st
import requests
import json
import pandas as pd
import re

st.set_page_config(
    page_title="Exercise Recommender",
    page_icon="💪",
    layout="wide"
)


def llama3(prompt):
    """Call the Llama3 API with the given prompt"""
    url = "http://localhost:11434/api/chat"

    request_body = {
        'model': 'llama3',
        'messages': [
            {
                'role': 'user',
                'content': prompt
            }
        ],
        'stream': False
    }

    headers = {
        'Content-Type': 'application/json'
    }

    try:
        print(request_body)
        response = requests.post(url, headers=headers, json=request_body)
        print(response)
        response.raise_for_status()
        return response.json()["message"]["content"]
    except requests.exceptions.RequestException as e:
        st.error(f"API Error: {str(e)}")
        if hasattr(e, 'response') and e.response is not None:
            st.error(f"Response: {e.response.text}")
        return None


def get_exercise_recommendations(user_data):
    """Get exercise recommendations for the given user data"""
    injury_note = ""
    if user_data['injury'] != "none":
        injury_note = f"\nNote: I have an injury in my {user_data['injury']}. Please recommend exercises that avoid or are safe for this area."

    prompt = f"""Name 3 exercises, their duration, number of reps and sets I should do based on the following data:

Age: {user_data['age']}
Gender: {user_data['gender']}
Weight: {user_data['weight']} kg
Height: {user_data['height']} cm
Experience: {user_data['experience']}
Session Duration: {user_data['sessionDuration']} minutes
Type: {user_data['type']}{injury_note}

Please:
1. Consider any injuries mentioned and recommend safe exercises
2. Format the response as a table with columns for Exercise Name, Duration, Sets, and Reps.
3. Include a brief note about how each exercise is safe for the mentioned injury (if any)
"""
    return llama3(prompt)


def main():
    st.title("💪 Exercise Recommendation System")
    st.write("Enter your details to get personalized exercise recommendations")

    with st.form("user_data_form"):
        col1, col2 = st.columns(2)

        with col1:
            age = st.number_input("Age", min_value=5, max_value=100, value=18)
            weight = st.number_input("Weight (kg)", min_value=20, max_value=300, value=60)
            experience = st.selectbox("Experience Level", ["beginner", "intermediate", "advanced"], index=0)

        with col2:
            gender = st.radio("Gender", ["male", "female", "other"])
            height = st.number_input("Height (cm)", min_value=50, max_value=250, value=180)
            session_duration = st.slider("Session Duration (minutes)", min_value=15, max_value=120, value=60, step=5)

        workout_type = st.selectbox(
            "Workout Type",
            ["cardio", "strength", "flexibility", "balance", "hybrid"],
            index=0
        )

        injury = st.selectbox(
            "Any current injuries? (Select body part)",
            ["none", "shoulder", "knee", "back", "wrist", "ankle", "neck", "hip"],
            index=0,
            help="Select the body part you have an injury in to get safe recommendations"
        )

        submit_button = st.form_submit_button("Get Recommendations")

    if submit_button:
        user_data = {
            "age": age,
            "gender": gender,
            "weight": weight,
            "height": height,
            "experience": experience,
            "sessionDuration": session_duration,
            "type": workout_type,
            "injury": injury
        }

        with st.spinner("Generating your personalized exercise plan..."):
            api_response = get_exercise_recommendations(user_data)

        if api_response:
            st.success("Your personalized exercise plan is ready!")

            with st.expander("Show raw API response"):
                st.text(api_response)

            try:
                # Try to find and display a markdown table
                table_pattern = r'\|\s*Exercise Name\s*\|\s*Duration\s*\|\s*Sets\s*\|\s*Reps\s*\|.*?(?=\n\n|\Z)'
                table_match = re.search(table_pattern, api_response, re.DOTALL | re.IGNORECASE)

                if table_match:
                    table_text = table_match.group(0)
                    st.markdown("### Recommended Exercises")
                    st.markdown(table_text)

                    # Extract safety notes if they exist
                    safety_notes = re.findall(r'Safety note:(.*?)(?=\n|$)', api_response, re.IGNORECASE)
                    if safety_notes and injury != "none":
                        st.markdown("### Safety Considerations")
                        for note in safety_notes:
                            st.info(note.strip())
                else:
                    st.write("### Your Recommended Exercises")
                    st.write(api_response)

                st.write("### Exercise Summary")
                st.info(f"Complete all exercises for a total workout time of approximately {session_duration} minutes.")

                if injury != "none":
                    st.warning(f"Remember: These exercises have been selected to be safe for your {injury} injury. "
                               "If you experience any pain during these exercises, stop immediately and consult a medical professional.")

            except Exception as e:
                st.warning(f"Could not parse the response as a table: {str(e)}")
                st.write("### Your Recommended Exercises")
                st.write(api_response)


if __name__ == "__main__":
    main()