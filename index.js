const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const btnEl = document.getElementById("btn");
const ibmEl = document.getElementById("ibm");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = heightEl.value / 100;
    const weightValue = weightEl.value;
    
    const bmiValue = weightValue / (heightValue * heightValue);

    ibmEl.value = bmiValue.toFixed(2);

    if (bmiValue < 18.5) {
        weightConditionEl.innerText = "Under Weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9){
        weightConditionEl.innerText = "Normal Weight";
    }else if (bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionEl.innerText = "Overweight";
    }else if (bmiValue >= 30){
        weightConditionEl.innerText = "Obesity";
    }
}


btnEl.addEventListener("click", calculateBMI);