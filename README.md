Here’s the updated README with **calories burned and heart rate monitoring removed**:  


# HYPRFIT - AI-Powered Fitness & Workout Tracking Web App  

HyprFit is a **fitness and workout tracking web application** designed to help users **stay consistent, receive personalized guidance, and track their progress effectively**. Many people struggle with fitness due to lack of adaptability in workout plans and difficulty measuring progress.  

HyprFit solves this by using **machine learning** to generate **dynamic, AI-powered workout recommendations** tailored to individual fitness levels. The platform also provides **real-time performance tracking**, **data-driven insights**, **customized nutritional guidance**, and **a supportive community** to keep motivation high.  

This project is built using **Next.js (TypeScript), SCSS, Flask (Python), Jupyter, Streamlit, and LLaMA AI** to provide an intelligent and interactive fitness experience.  

---

## 🚀 Features & Functionality  

### 🏋️ Dynamic Workout Plans  
HyprFit automatically **adapts workout routines** based on users' past performance, progress, and fitness levels.  

- AI-generated workout plans evolve over time to ensure **steady progress**.  
- Reduces risk of **plateauing** by intelligently adjusting exercise intensity.  
- Users receive **customized exercise suggestions** to optimize performance.  

### ⏱️ Real-Time Tracking  
HyprFit allows users to track **key workout metrics** in real time:  

- **Workout duration and intensity**  
- **Reps and sets tracking**  

This real-time feedback helps users make data-driven decisions about their workouts.  

### 📈 Data-Driven Insights  
Using **AI-powered analytics**, the platform **predicts progress trends** and provides users with recommendations:  

- **Personalized fitness insights** based on workout history.  
- AI detects **performance patterns** and suggests **optimizations**.  
- Provides **goal-driven reports** to keep users motivated.  

### 🏆 Community Challenges & Gamification  
HyprFit encourages users to **stay engaged through challenges and competitions**:  

- **Fitness competitions** with leaderboards.  
- **Achievement badges** for milestones (e.g., 100 workouts completed).  
- Community-driven **goal tracking and accountability**.  

Users can challenge friends and participate in group activities to **stay motivated**.  

---

## 📂 Project Tech Stack  

### **Frontend**  
- **Next.js (TypeScript)** – React-based framework for UI and performance optimization.  
- **SCSS** – Stylesheet preprocessor for modular and maintainable styling.  

### **Backend & AI Engine**  
- **Flask (Python)** – Handles API requests and communication with the ML models.  
- **Jupyter (Python)** – Used for machine learning computations and fitness data analysis.  
- **LLaMA (AI)** – Generates **personalized workout plans** and fitness recommendations locally.  
- **Streamlit** – Displays **interactive AI-generated insights and fitness analytics**.  

---

## 🔍 Understanding AI in HyprFit  

### 🧠 LLaMA – AI-Powered Fitness Coach  
HyprFit leverages **LLaMA (Large Language Model Meta AI)** to generate **intelligent workout and nutrition recommendations**:  

- **Understands user fitness data** and **adapts** routines dynamically.  
- Provides **personalized feedback** on performance improvements.  
- Ensures **privacy and speed** by running locally instead of cloud-based processing.  
- Integrated with **Flask**, allowing the frontend to request AI-generated insights.  

### 📊 Streamlit – Interactive Fitness Dashboard  
HyprFit uses **Streamlit** for **real-time visualization** of fitness progress and AI insights:  

- **Dynamic charts and graphs** to track progress.  
- **AI-generated reports** for better understanding of workouts.  
- **Easy-to-use interface** to interact with recommendations.  

To launch the **Streamlit dashboard**, run:  

```bash  
streamlit run app.py  


---

## 🛠 Setting Up HyprFit Locally  

### 1️⃣ Install Dependencies  
Before running the application, install all required dependencies:  

```bash  
npm install  
# or  
yarn install  
# or  
pnpm install  
# or  
bun install  
```  

### 2️⃣ Start the Development Server  
Run the following command to launch the **Next.js frontend**:  

```bash  
npm run dev  
# or  
yarn dev  
# or  
pnpm dev  
# or  
bun dev  
```  

By default, the application will be available at [http://localhost:3000](http://localhost:3000).  

### 3️⃣ Running Jupyter Notebooks (ML Engine)  
Ensure **Jupyter** is installed and run:  

```bash  
jupyter notebook  
```  

Navigate to the appropriate notebook for fitness data computations.  

### 4️⃣ Start the Flask API  
Navigate to the backend directory and run:  

```bash  
python app.py  
```  

This will start the backend server, allowing the frontend to fetch AI-generated recommendations.  

---

## 📖 Learn More  

- **[Next.js Documentation](https://nextjs.org/docs)** – UI development framework.  
- **[Flask Documentation](https://flask.palletsprojects.com/)** – Backend API.  
- **[Jupyter Notebook](https://jupyter.org/)** – ML experimentation.  
- **[LLaMA AI](https://ai.meta.com/llama/)** – AI-powered recommendations.  
- **[Streamlit](https://streamlit.io/)** – Interactive data visualization.  

---

## 🚀 Deployment  

HyprFit is currently designed for **local deployment**, but can be hosted using:  

- **Vercel** – For deploying the **Next.js frontend**.  
- **Render/DigitalOcean** – For deploying the **Flask backend**.  
- **Cloud VM/Local Server** – To host **Jupyter and Streamlit**.  

---

## 🤝 Contributing  

HyprFit is an **open-source project**, and contributions are welcome! Feel free to **fork the repository, experiment, and improve features**.  
