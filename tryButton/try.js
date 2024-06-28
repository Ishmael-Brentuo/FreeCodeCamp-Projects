document.addEventListener("DOMContentLoaded", function() {
    const tryButton = document.getElementById("tryButton");
    const tryMe = document.getElementById("tryMe");

    function checkMe() {
        tryMe.innerHTML = "Tell me more";
    }

    tryButton.addEventListener("click", checkMe);
});

document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.getElementById("resetButton");
    const tryMe = document.getElementById("tryMe");

    function terminateOperation() {
        tryMe.innerHTML = "done";
    }

    resetButton.addEventListener("click", terminateOperation);
});
