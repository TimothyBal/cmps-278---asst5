const pizzaSlider = document.querySelector("#range-slider");
const meatList = document.querySelectorAll(".meat-checkbox");
const cheeseList = document.querySelectorAll(".cheese-grp");
const vegList = document.querySelectorAll(".veg-checkbox");
const pizzaImg = document.querySelector("#pizza");
const pizzaSizeText = document.querySelector(".pizza-size");
let currentPage = 1;
//ex3 resources
const addressField = document.querySelector("#address-field");
const submitBtn = document.getElementById("submit-btn");
const deliverTo = document.getElementById("dlvrTo");
const orderCheckout = document.getElementById("orderList");
const totalCheckout = document.getElementById("total");
const pageBody = document.querySelector("#page-body");
//nav buttons
const next1 = document.getElementById("next-btn1");
const next2 = document.getElementById("next-btn2");
const next3 = document.getElementById("next-btn3");
const back1 = document.getElementById("back-btn1");
const back2 = document.getElementById("back-btn2");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");

const getMeet = () => {
  let updatedMeatList = [];
  for (let i = 0; i < meatList.length; i++) {
    if (meatList[i].checked == true) {
      updatedMeatList.push(meatList[i].value);
    }
  }
  return updatedMeatList;
};

const getVeg = () => {
  let updatedVegList = [];
  for (let i = 0; i < vegList.length; i++) {
    if (vegList[i].checked == true) {
      updatedVegList.push(vegList[i].value);
    }
  }
  return updatedVegList;
};

const getPrice = (pizzaSize) => {
  switch (pizzaSize) {
    case 1:
      return 6;
    case 2:
      return 10;
    case 3:
      return 14;
    case 4:
      return 16;
  }
};
pizzaSlider.addEventListener("change", () => {
  ChangePizzaSize(getSize());
});
const ChangePizzaSize = (pizzaSize) => {
  if (pizzaSize == 1) {
    pizzaImg.style.width = "100px";
    pizzaSizeText.innerHTML = "Small - " + getPrice(1) + "$";
  } else if (pizzaSize == 2) {
    pizzaImg.style.width = "150px";
    pizzaSizeText.innerHTML = "Medium - " + getPrice(2) + "$";
  } else if (pizzaSize == 3) {
    pizzaImg.style.width = "200px";
    pizzaSizeText.innerHTML = "Large - " + getPrice(3) + "$";
  } else {
    pizzaImg.style.width = "250px";
    pizzaSizeText.innerHTML = "X-Large - " + getPrice(4) + "$";
  }
};
const getCheese = () => {
  return document.querySelector('input[name="cheese-grp"]:checked').value;
};

const calculateTotal = () => {
  curSize = parseInt(getSize());
  if (getCheese() == 3) {
    return getPrice(curSize) + 2 * meatList.length + vegList.length + 3;
  }
  return getPrice(curSize) + 2 * meatList.length + vegList.length;
};

const getSize = () => pizzaSlider.value;

const fillSummary = () => {
  return addressField;
};
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  deliverTo.innerHTML = addressField.value;
  orderCheckout.innerHTML = `<li>Pizza size : ${getSize()}</li>
  <li>Ingrediants : <br>
  ${getMeet()}</li>
  <li>${getVeg()}</li>
  </li>Cheese option : ${getCheese()}</li>`;
  totalCheckout.innerHTML = `Total : ${calculateTotal()}$`;
});
next1.addEventListener("click", () => {
  pageBody.classList.toggle("cyan");
  pageBody.classList.toggle("red");
  page1.classList.toggle("active");
  page2.classList.toggle("active");
});
next2.addEventListener("click", () => {
  pageBody.classList.toggle("red");
  pageBody.classList.toggle("green");
  page2.classList.toggle("active");
  page3.classList.toggle("active");
});
back1.addEventListener("click", () => {
  pageBody.classList.toggle("red");
  pageBody.classList.toggle("cyan");
  page2.classList.toggle("active");
  page1.classList.toggle("active");
});
back2.addEventListener("click", () => {
  pageBody.classList.toggle("green");
  pageBody.classList.toggle("red");
  page3.classList.toggle("active");
  page2.classList.toggle("active");
});
