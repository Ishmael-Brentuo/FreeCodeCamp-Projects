const { JSDOM } = require('jsdom');

// Simulated fullName function
const fullName = (firstName, secondName) => {
  const bothNames = firstName + ' ' + secondName;
  return bothNames;
};

// Renderer function adapted for jsdom
const Renderer = () => {
  // Create a virtual DOM environment
  const dom = new JSDOM(`<!DOCTYPE html><div id="root"></div>`);
  const document = dom.window.document;

  // Access the root element
  const root = document.getElementById("root");

  // Create DOM elements
  const container = document.createElement("div");
  container.style.margin = "20px";
  container.style.padding = "20px";
  container.style.border = "1px solid #ccc";
  container.style.borderRadius = "5px";
  root.appendChild(container);

  const displayNames = document.createElement("div");
  displayNames.style.marginTop = "10px";
  container.appendChild(displayNames);

  const enterFirstName = document.createElement("label");
  enterFirstName.textContent = "Enter First Name: ";
  enterFirstName.style.marginRight = "10px";
  container.appendChild(enterFirstName);

  const inputFirstName = document.createElement("input");
  inputFirstName.style.padding = "5px";
  inputFirstName.style.marginRight = "10px";
  container.appendChild(inputFirstName);

  const enterSecondName = document.createElement("label");
  enterSecondName.textContent = "Enter Second Name: ";
  enterSecondName.style.marginRight = "10px";
  container.appendChild(enterSecondName);

  const inputSecondName = document.createElement("input");
  inputSecondName.style.padding = "5px";
  inputSecondName.style.marginRight = "10px";
  container.appendChild(inputSecondName);

  const displayNameButton = document.createElement("button");
  displayNameButton.className = nameButton;
  displayNameButton.textContent = "Display Full Name";
  displayNameButton.style.padding = "8px 16px";
  displayNameButton.style.marginTop = "10px";
  displayNameButton.style.backgroundColor = "#4CAF50";
  displayNameButton.style.color = "white";
  displayNameButton.style.border = "none";
  displayNameButton.style.borderRadius = "4px";
  displayNameButton.style.cursor = "pointer";
  container.appendChild(displayNameButton);

  displayNameButton.addEventListener("click", () => {
    const firstName = inputFirstName.value.trim();
    const secondName = inputSecondName.value.trim();
    const fullNameResult = fullName(firstName, secondName);
    displayNames.textContent = "Full Name: " + fullNameResult;
  });

  // Return the document object to access the rendered content
  return document;
};

// Call Renderer to simulate the UI interaction
const document = Renderer();

// Output the rendered DOM content as a string
console.log(document.documentElement.outerHTML);
