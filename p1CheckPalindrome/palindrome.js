document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const resultContainer = document.getElementById('result');
  
    
  
    checkBtn.addEventListener('click', handleCheck);
  
    function handleCheck() {
      const originalInput = textInput.value.trim();
      if(originalInput === "") {
        alert("Please input a value");
        return;
      }
      
      const normalizedInput = normalizeInput(originalInput);
      const isPalindrome = checkPalindrome(normalizedInput);
      displayResult(originalInput, isPalindrome);
    }
  
  
    function normalizeInput(input) {
      return input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    }
  
    function checkPalindrome(input) {
      return input === input.split('').reverse().join('');
    }
  
    function displayResult(originalInput, isPalindrome) {
      resultContainer.innerHTML = `${originalInput} ${isPalindrome ? "is" : "is not"} a palindrome`;
    }
  });
  