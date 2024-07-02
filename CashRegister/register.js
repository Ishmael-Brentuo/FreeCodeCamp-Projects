const price = 3.26; // Update to match the selling price in your HTML

let cid = [
  ["Penny", 1.01],
  ["Nickel", 2.05],
  ["Dime", 3.1],
  ["Quarter", 4.25],
  ["One", 90],
  ["Five", 55],
  ["Ten", 20],
  ["Twenty", 60],
  ["One Hundred", 100]
];

const currencyUnit = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
];

const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const cidContainer = document.getElementById("cid-container");
// const drawerKeys = document.getElementById("drawerkeys");


// Function to check drawer and render change based on money paid and cash in the drawer
const checkCashRegister = (price, cash, cashInDrawer) => {
  let change = parseFloat((cash - price).toFixed(2));
  let totalChange = parseFloat(cashInDrawer.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0).toFixed(2));

  // Check to see if cash given is bigger than cash in drawer
  if (change > totalChange) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  // Check if change is equal to cash in drawer
  else if (change === totalChange) {
    return { status: "CLOSED", change: cashInDrawer };
  }
  // Loop through the drawer to give out change that matches the exact difference of the cash given or paid
  else {
    let changeArray = [];

    for (let i = currencyUnit.length - 1; i >= 0; i--) {
      let cashName = currencyUnit[i][0];
      let cashValue = currencyUnit[i][1];
      let cashAmount = cashInDrawer[i][1];

      // Calculate the amount to return to the customer
      let customerChange = 0;
      while (change >= cashValue && cashAmount >= cashValue) {
        change = parseFloat((change - cashValue).toFixed(2));
        cashAmount = parseFloat((cashAmount - cashValue).toFixed(2));
        customerChange = parseFloat((customerChange + cashValue).toFixed(2));
      }

      if (customerChange > 0) {
        changeArray.push([cashName, customerChange]);
      }
    }

    // When change is greater than 0, return insufficient funds
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArray };
  }
};
// Add event listener to the purchase button to process the change now
purchaseBtn.addEventListener("click", () => {
    const cash = parseFloat(cashInput.value);
  
    // Check if cash input is less than the selling price
    if (cash < price) {
      alert("Customer does not have enough money to purchase the item");
    } else if (cash === price) {
      changeDue.innerHTML = "No change due - customer paid with exact cash";
    } else {
      const result = checkCashRegister(price, cash, cid);
  
      changeDue.innerHTML = ""; // Clear previous content
  
      changeDue.innerHTML += `<strong>Status:</strong> ${result.status}<br>`;
      
      if (result.status === "OPEN" || result.status === "CLOSED") {
        const ul = document.createElement("ul");
        let totalChange = 0;  // New variable to accumulate total change
  
        result.change.forEach(item => {
          const li = document.createElement("li");
          li.textContent = `${item[0]} : $${item[1].toFixed(2)}`;
          ul.appendChild(li);
          totalChange += item[1];  // Calculate total change
        });
  
        changeDue.appendChild(ul);
        changeDue.innerHTML += `Total Change is: $${totalChange.toFixed(2)}`;  // Display total change
      }
    }
  
    changeDue.style.display = "block";
  });
  
  
// Function to display change in drawer
const displayChangeInDrawer = () => {
  cidContainer.innerHTML += ""; // Reset the content
  cid.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item[0]} : $${item[1].toFixed(2)}`;
    cidContainer.appendChild(listItem);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  displayChangeInDrawer();
});

cashInput.addEventListener("click", () => {
  changeDue.style.display = "none";
  changeDue.innerHTML = "Get Change";  // Reset to default content
});

// const displayDrawerKeys = () => {
// 
// }