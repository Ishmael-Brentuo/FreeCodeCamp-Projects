const scoreBoard = document.getElementById("scoresInput");
const showResults = document.getElementById("showResults");
const getAverageButton = document.getElementById("getAverageButton");
const getMessageButton = document.getElementById("getMessageButton");
const resetButton = document.getElementById("resetButton");


function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  function studentMsg(totalScores, studentScore) {
    // Calculate the class average
    const classAverage = getAverage(totalScores);

    // Get the student's grade
    const grade = getGrade(studentScore);

    // Check if the student passed or failed
    if (grade !== "F") {
        return `Class average: ${classAverage}. Your grade: ${grade}. You passed the course.`;
    } else {
        return `Class average: ${classAverage}. Your grade: ${grade}. You failed the course.`;
    }
}
function displayResults(scores, averageResult) {
  const scoresString = scores.join(', ');
  showResults.innerHTML = `Scores: ${scoresString} <br> Average: ${averageResult.toFixed(1)}`;
}

document.addEventListener("DOMContentLoaded", function() {
  const getAverageButton = document.getElementById("getAverageButton");
  const scoreBoard = document.getElementById("scoresInput");
  const showResults = document.getElementById("showResults");

  function checkMe() {
    const scores = scoreBoard.value.split(',').map(Number);
    const averageResult = getAverage(scores);
    displayResults(scores, averageResult);
    showResults.style.fontSize = "1.8rem";
    showResults.style.rowGap = "1rem";
  }
  getAverageButton.addEventListener("click", checkMe);
  getAverageButton.style.color = "white";

});




document.addEventListener("DOMContentLoaded", function() {
  const getMessageButton = document.getElementById("getMessageButton");
  const showResults = document.getElementById("showResults");

  function checkMe() {
    //fetch input from score board
    const scores = scoreBoard.value.split(",").map(Number);
    //assign scores as the fetched input to variable totalScores
    const totalScores = scores;
    //fetch student scores from the getAverage function
    const studentScore = getAverage(scores).toFixed(1);

    //assign results of fetched scores to a message
    const message = studentMsg(totalScores, studentScore)

    showResults.innerHTML = message;
    showResults.style.fontSize = "1.8rem";
  }

  getMessageButton.addEventListener("click", checkMe);
});



document.addEventListener("DOMContentLoaded", function() {
  const resetButton = document.getElementById("resetButton");
  const showResults = document.getElementById("showResults");
  const scoreBoard = document.getElementById("scoresInput"); // Correct ID for the input field

  function reset() {
      showResults.innerHTML = "All functions resetted";
      scoreBoard.value = ""; // Clear input value
      showResults.style.fontSize = "1.8rem";
  }

  resetButton.addEventListener("click", reset);
});
