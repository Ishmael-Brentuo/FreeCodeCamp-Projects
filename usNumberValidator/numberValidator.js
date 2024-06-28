const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

// Create a regex to check if the userInput value match the regex expression
const numberValidator = (userNumber) => {
    const numberRegex = [
        // 555-555-5555
        /^\d{3}-\d{3}-\d{4}$/,

        // 1 555-555-5555
        /^1\s\d{3}-\d{3}-\d{4}$/,

        // 1 (555) 555-5555
        /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,

        // 5555555555
        /^\d{10}$/,

        // (555)555-5555
        /^\(\d{3}\)\d{3}-\d{4}$/,

        // 1 555 555 5555
        /^1\s\d{3}\s\d{3}\s\d{4}$/,

        // 1(555)555-5555
        /^1\(\d{3}\)\d{3}-\d{4}$/
    ];
    
   
    return numberRegex.some((received) => received.test(userNumber));
}

// Add event listener to the check button to validate the number
checkBtn.addEventListener("click", () => {
    const userNumber = userInput.value;

    if (!userNumber) {
        alert("Please provide a phone number");
        return;
    }
    
    // Create a variable to hold the result of the number validator function
    const isUserNumberValid = numberValidator(userNumber);

    // Create a condition to check if the userInput match the numberValidator and tell user number is valid else number is invalid
    if (isUserNumberValid) {
        resultsDiv.textContent = `Valid US number: ${userNumber}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${userNumber}`;
    }
});

// Add event listener to the clear button to clear the input and result
clearBtn.addEventListener("click", () => {
    userInput.value = "";
    resultsDiv.textContent = "";
});
