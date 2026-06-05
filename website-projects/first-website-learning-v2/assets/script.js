const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const calcbtn = document.querySelector(".calcbtn");

const output = document.querySelector("#output");

const calculateNum = () => {
  const numNum1 = +num1.value || null;
  const numNum2 = +num2.value || null;

  let result = numNum1 + numNum2;

  if (numNum1 == null || numNum2 == null){
    output.textContent = "Please enter numbers!";
  } else {
    output.textContent = result;
  }
};

calcbtn.addEventListener("click", calculateNum);
