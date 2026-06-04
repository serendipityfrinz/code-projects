alert("hi");

/* Variables (frinz made this hdifsdbfsbkfhsjbfuahvgduas) <- proof this is my work */
let count = 0;
let IsMonitoring = true;
const cpuVal = document.getElementById("cpu-val");
const memVal_used = document.getElementById("mem-val_used");
const memVal_total = document.getElementById("mem-val_total");
const diskVal_used = document.getElementById("disk-val_used");
const diskVal_total = document.getElementById("mem-val_total");

const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const buttonMonitor = document.getElementById("button-monitor");

button.addEventListener("click", () => {
  alert("I use cachyos btw! :3");
});

button2.addEventListener("click", () => {
  count++;
  alert("Count: " + count);
});


/* Functions  */
/* function countPlus() {
  count++;
  alert("Count: " + count ;);
}


function buttonEcho() {
  alert("i use cachyos btw! :3");
} */
/* Sorry, these two functions are now deprecated, replaced by the event listeners */


const updateSystemStats = () => {
  const cpuRand = Math.floor(Math.random() * 101);
  cpuVal.innerText = cpuRand;

  if (cpuRand >= 75) {
    cpuVal.style.color = "red";
    console.warn("CPU: Dangerously high load!");
  } else if (cpuRand >= 40) {
    cpuVal.style.color = "orange";
    console.log("CPU: Load is getting high");
  } else if (cpuRand >= 1) {
    cpuVal.style.color = "blue";
    console.log("CPU: Normal condition");
  } else {
    cpuVal.style.color = "purple";
    console.error("CPU: How!?");
  }

  memVal_used.innerText = Math.floor(Math.random() * 1000);
  diskVal_used.innerText = Math.floor(Math.random() * 500);
};

let intervalId = setInterval(updateSystemStats, 500);
  
buttonMonitor.addEventListener("click", () => {
  if (IsMonitoring) {
    clearInterval(intervalId);
    buttonMonitor.innerText = "Start Monitoring";
  } else {
    intervalId = setInterval(updateSystemStats, 500);
    buttonMonitor.innerText = "Stop Monitoring";
  }

  IsMonitoring = !IsMonitoring;
});

// --------------- // --------------- //

const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

document.querySelector(".larp-button").addEventListener("click", () => {
  alert("larp larpity larp larp larp");
});
