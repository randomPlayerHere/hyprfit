
import { spawn } from 'child_process';
import path from 'path';

export async function POST(req) {
  try {
    const body = await req.json(); // Parse JSON body
    const { age, gender, weight, height, experience, sessionDuration } = body;

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Call Python script
    const pythonProcess = spawn('python3', [
      path.resolve('../hyprfit/ml/recommendation.py'), // Adjust path if necessary
      age,
      gender,
      weight,
      heightInMeters,
      bmi,
      sessionDuration,
      experience,
    ]);

    let dataString = '';
    pythonProcess.stdout.on('data', (data) => {
      dataString += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error('Python Error:', data.toString());
    });

    return new Promise((resolve, reject) => {
      pythonProcess.on('close', (code) => {
        if (code === 0) {
          resolve(new Response(dataString, { status: 200 }));
        } else {
          reject(new Response('Failed to process data with ML model.', { status: 500 }));
        }
      });
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response('Internal server error.', { status: 500 });
  }
}