const countries = {
    "en-US": "English",
    "st": "Sesotho",
    "ha": "Hausa",
    "har": "Harari",
    "ig": "Igbo",
};
const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const exchangeIcon = document.querySelector(".exchange");
const selectTag = document.querySelectorAll("select");
const translateBtn = document.querySelector("button");
const icons = document.querySelectorAll(".row i");

const apiUrl = "https://libretranslate.de/translate";

selectTag.forEach((tag, id) => {
    for(const country_code in countries){
        let selected;
        if(id == 0 & country_code == "en-GB"){
            selected = "selected";
        } 
        else if(id == 1 && country_code == "hi-IN"){
            selected = "selected";
        }
        let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

exchangeIcon.addEventListener("click", () => {
    let tempText = fromText.value;
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    selectTag[0].value = selectTag[1].value;
    toText.value = tempText;
    selectTag[1].value = tempLang;
});

const apiKey = 'AIzaSyBXp_hAet_TY0RAcL43eAbcUeqdC_ezQiI';

translateBtn.addEventListener('click', () => {
    let text = fromText.value;
    let translateFrom = document.querySelector('.from-select').value;
    let translateTo = document.querySelector('.to-select').value;

    if (!text) return;
    toText.setAttribute('placeholder', 'Translating...');

    // Construct the Google Translate API URL
    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${text}&source=${translateFrom}&target=${translateTo}`;

    // Send a POST request to the Google Translate API
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Translation request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            toText.value = data.data.translations[0].translatedText;
            toText.setAttribute('placeholder', 'Translation');
        })
        .catch((error) => {
            console.error('Translation error:', error);
            toText.setAttribute('placeholder', 'Translation Error');
        });
});


icons.forEach(icon => {
    icon.addEventListener("click", ({ target }) => {
        if(target.classList.contains("fa-copy")) {
            if(target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
            }
            else{
                navigator.clipboard.writeText(toText.value); 
            }
        }
        else{
            let utterance;
            if(target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value; // setting utterance language to fromSelect tag value
            }
            else{
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value; // setting utterance language to toSelect tag value
            }
            speechSynthesis.speak(utterance); //speak the passed utterance
        }
    });
});

// Function to handle file upload
document.getElementById('upload').addEventListener('click', () => {
    // Implement file upload logic here
    alert('File upload clicked!');
});

// Function to start recording
document.getElementById('record').addEventListener('click', () => {
    const recognition = new webkitSpeechRecognition();

    recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        fromText.value = result;
    };

    recognition.start();
    alert('Recording started!');
});


// Function to copy text
document.getElementById('copy').addEventListener('click', () => {
    const textToCopy = document.querySelector('.to-text').value;
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Text copied to clipboard!');
        }).catch((error) => {
            console.error('Copy text error:', error);
            alert('Copy text failed!');
        });
    }
});
