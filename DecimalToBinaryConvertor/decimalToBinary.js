// 


const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const outputContainer = document.getElementById("output");

// Create a regular expression function that converts a + or - inputs into an empty string
const convertOperationSymbolsToString = (str) => {
    const convertInput = /[+\-\s]/g;
    return str.replace(convertInput, "");
};

// Check for invalid user inputs
const invalidUserInputs = (str) => {
    const convertInput = /\d+e\d+/i;
    return str.match(convertInput);
};

// Create a mapping object to store the array of Roman and Arabic numerals
const arabicToRomanMap = [
    { arabic: 1000, roman: 'M' },
    { arabic: 900, roman: 'CM' },
    { arabic: 500, roman: 'D' },
    { arabic: 400, roman: 'CD' },
    { arabic: 100, roman: 'C' },
    { arabic: 90, roman: 'XC' },
    { arabic: 50, roman: 'L' },
    { arabic: 40, roman: 'XL' },
    { arabic: 10, roman: 'X' },
    { arabic: 9, roman: 'IX' },
    { arabic: 5, roman: 'V' },
    { arabic: 4, roman: 'IV' },
    { arabic: 1, roman: 'I' }
];

// Create a function that converts user input of Roman to Arabic numeral
const convertArabicToRomanNumeral = (arabic) => {
    if (arabic <= 0 ) {
        return "Please enter a number greater than or equal to 1.";
    }

    else if( arabic >= 4000) {
        return "Please enter a number between 1 and 3999";
    }

    let result = '';
    let remaining = arabic;

    arabicToRomanMap.forEach(pair => {
        while (remaining >= pair.arabic) {
            result += pair.roman;
            remaining -= pair.arabic;
        }
    });

    if(result <= 10) {
        return result.split("").reverse().join("");
    }

    else {
        return result;
    }
    
};



convertButton.addEventListener("click", () => {
    const inputValue = parseInt(numberInput.value);

    if (isNaN(inputValue)) {
        outputContainer.textContent = "Please enter a valid number.";
    } else {
        const romanNumeral = convertArabicToRomanNumeral(inputValue);
        outputContainer.textContent = romanNumeral;
    }

    numberInput.value = '';
});


