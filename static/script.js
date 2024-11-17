const traitsSuggestions = [
    "Friendly", "Energetic", "Confident", "Shy", "Talkative", 
    "Curious", "Adventurous", "Optimistic", "Reliable", "Honest", 
    "Ambitious", "Creative", "Empathetic", "Determined", "Patient", 
    "Independent", "Hardworking", "Caring", "Supportive"
];

const interestsSuggestions = [
    "Traveling", "Cooking", "Sports", "Music", "Photography", 
    "Reading", "Art", "Technology", "Hiking", "Fitness", 
    "Writing", "Dancing", "Fashion", "Volunteering", "Gaming", 
    "DIY Projects", "Music Production", "Bird Watching"
];

const careerSuggestions = [
    "Software Engineer", "Doctor", "Teacher", "Artist", "Writer", 
    "Engineer", "Designer", "Data Scientist", "Nurse", "Photographer", 
    "Chef", "Entrepreneur", "Psychologist", "Lawyer", "Architect", 
    "Financial Analyst", "Scientist", "Musician", "Salesperson", 
    "Marketing Specialist", "Social Worker", "Content Creator", "Civil Servant"
];

function showSuggestions(inputType) {
    let suggestionsList = [];
    let inputValue = document.getElementById(inputType).value.toLowerCase();
    
    if (inputValue.length === 0) {
        document.getElementById(`${inputType}-suggestions`).style.display = 'none';
        return;
    }

    if (inputType === 'traits') {
        suggestionsList = traitsSuggestions.filter(item => item.toLowerCase().includes(inputValue));
    } else if (inputType === 'interests') {
        suggestionsList = interestsSuggestions.filter(item => item.toLowerCase().includes(inputValue));
    } else if (inputType === 'career') {
        suggestionsList = careerSuggestions.filter(item => item.toLowerCase().includes(inputValue));
    }

    const suggestionsContainer = document.getElementById(`${inputType}-suggestions`);
    suggestionsContainer.innerHTML = '';  // Clear previous suggestions

    suggestionsList.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.onclick = () => selectSuggestion(inputType, suggestion);
        suggestionsContainer.appendChild(li);
    });

    if (suggestionsList.length > 0) {
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

function selectSuggestion(inputType, suggestion) {
    document.getElementById(inputType).value = suggestion;
    document.getElementById(`${inputType}-suggestions`).style.display = 'none';
}