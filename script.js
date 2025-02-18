
function convertToLowercase() {
    const inputText = document.getElementById("inputText");
    inputText.value = inputText.value.toLowerCase();
}


const mapping = {
    // Latin to Tifinagh Mapping
    "a": "ⴰ", "b": "ⴱ", "c": "ⵛ", "d": "ⴷ", "e": "ⴻ", "f": "ⴼ",
    "g": "ⴳ", "h": "ⵀ", "i": "ⵉ", "j": "ⵊ", "k": "ⴽ", "l": "ⵍ",
    "m": "ⵎ", "n": "ⵏ", "o": "ⵓ", "p": "ⵒ", "q": "ⵇ", "r": "ⵔ",
    "s": "ⵙ", "t": "ⵜ", "u": "ⵓ", "v": "ⵠ", "w": "ⵡ", "x": "ⵅ",
    "y": "ⵢ", "z": "ⵣ",
    
    // Arabic to Tifinagh Mapping
    "ا": "ⴰ","أ": "ⴰ", "ب": "ⴱ", "ت": "ⵜ", "ث": "ⵟ", "ج": "ⴵ", "ح": "ⵃ", "خ": "ⵅ",
    "د": "ⴷ", "ذ": "ⴹ", "ر": "ⵔ", "ز": "ⵣ", "س": "ⵙ", "ش": "ⵛ", "ص": "ⵚ",
    "ض": "ⴹ", "ط": "ⵟ", "ظ": "ⵞ", "ع": "ⵄ", "غ": "ⵖ", "ف": "ⴼ", "ق": "ⵇ",
    "ك": "ⴽ", "ل": "ⵍ", "م": "ⵎ", "ن": "ⵏ", "ه": "ⵀ", "و": "ⵡ", "ي": "ⵢ"
};

// Special cases (Arabic names and common words)
const specialCases = {
    "أنيس": "ⴰⵏⵉⵙ", "انيس": "ⴰⵏⵉⵙ",
    "محمد": "ⵎⵀⵎⴷ",
    "علي": "ⵄⵍⵉ",
    "يوسف": "ⵢⵓⵙⴼ"
};

function convertToTifinagh() {
    const inputElement = document.getElementById("inputText");
    let input = inputElement.value.trim();
    
    if (!input) {
        inputElement.parentElement.classList.add('error');
        setTimeout(() => inputElement.parentElement.classList.remove('error'), 1000);
        return;
    }

    // Check for special cases first
    if (specialCases[input]) {
        document.getElementById("outputText").innerText = specialCases[input];
        return;
    }

    // Convert character by character while preserving spaces
    let output = input.split("").map(char => mapping[char] || char).join("");

    const outputElement = document.getElementById("outputText");

    if (outputElement.innerText !== output) {
        outputElement.innerText = output;
        outputElement.classList.add("animate-result");
        setTimeout(() => outputElement.classList.remove("animate-result"), 500);
    }
}



//CopyResults
function copyResult() {
    const outputText = document.getElementById("outputText").innerText;

    if (!outputText) return; // Prevent copying if the output is empty

    // Create a temporary textarea to copy the text
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = outputText;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea); // Clean up after copying

    // Show "Copied!" notification
    const copyNotification = document.getElementById("copyNotification");
    copyNotification.classList.add("show");

    // Hide the notification after 2 seconds
    setTimeout(() => {
        copyNotification.classList.remove("show");
    }, 2000);
}
