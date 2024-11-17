from flask import Flask, request, render_template
import os
from groq import Groq
from dotenv import load_dotenv
load_dotenv()
app = Flask(__name__)

# Initialize the Groq client with the API key
client = Groq(
    api_key=os.getenv("api_key"), 
)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate-bio', methods=['POST'])
def generate_bio():
    # Retrieve form data from the POST request
    traits = request.form.get('traits')
    interests = request.form.get('interests')
    career = request.form.get('career')

    # Make the API call to generate a chat completion response
    chat_completion = client.chat.completions.create(
        messages=[{
            "role": "user",
            "content": f"""Create a personalized bio for someone who is a {career} with interests in {interests}. Their personality traits are {traits}. The bio should be engaging, creative, and reflect their passions and career goals. Make sure it captures their unique qualities and makes them stand out. Give only bio nothing more in response.
            The Adventurous Foodie
            "Globe-trotting architect with a passion for spicy food and sustainable design. Seeking a fellow adventurer who can appreciate a good biryani and a thought-provoking conversation."
            The Creative Bookworm
            "Introverted writer with a love for classic literature and indie coffee shops. Looking for someone who can match my wit and charm over a cup of chai and a deep discussion about our favorite novels"""},
        ],
        model="llama3-8b-8192",
    )

    # Get the response content from the API
    api_response = chat_completion.choices[0].message.content
    # print(api_response)
    if ":" in api_response:
        api_response = api_response.split(":", 1)[1].strip()

    # Pass the response from the API along with form data to the result page
    return render_template('bio_result.html', traits=traits, interests=interests, career=career, api_response=api_response)

if __name__ == '__main__':
    app.run(debug=True)
