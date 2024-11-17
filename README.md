# DinnerTonight 🍽️

DinnerTonight is a bio-generating website designed to help users craft personalized bios for professional, personal, or creative purposes. Using the power of the Groq Cloud API, it simplifies the process of creating engaging and tailored introductions for any setting.
## Features
- ### Dynamic Bio Generation:
- Input your traits, interests, and career details, and instantly receive a well-crafted bio.
- ### Customizable Outputs:
- The generated bios can be modified to match your specific tone and style preferences.
- ### Intuitive Design:
- A clean, user-friendly interface optimized for all devices.

---

## Installation and Setup

### Prerequisites
1. Python 3.8+ installed on your machine.
2. A valid Groq API key. (See below for instructions to obtain one.)
3. Basic knowledge of how to run a Flask application.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/DinnerTonight.git
   cd DinnerTonight
   ```

2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Obtain your **Spoonacular API Key** (see instructions below).

4. Create a `.env` file in the project root and add your API key:
   ```plaintext
   API_KEY=your-spoonacular-api-key
   ```

5. Run the Flask application:
   ```bash
   python app.py
   ```

6. Open your browser and visit:
   ```
   http://127.0.0.1:5000
   ```

---

## How to Obtain a Groq API Key
1. Go to the [Groq API Website](https://console.groq.com).
2. Sign up for a free account or log in if you already have one.
3. Navigate to the API section and generate an API key.
4. Copy the API key and paste it into the `.env` file as shown above.

---

## File Structure
```
DinnerTonight/
├── app.py               # Main Flask application
├── templates/           # HTML templates
│   └── index.html       # Main page template
├── static/              # Static assets
│   ├── styles.css       # Stylesheet for the web app
│   └── script.js        # JavaScript for client-side functionality
├── .env                 # Environment file (not included in GitHub)
├── .gitignore           # Git ignore rules
├── requirements.txt     # Dependencies
└── README.md            # Project documentation
```
