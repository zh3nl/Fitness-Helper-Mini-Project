const calories = document.querySelector(".calories");
const calculateBtn = document.querySelector(".bmr-calculator .result .calculate-btn");
const age = document.querySelector(".bmr-calculator form #age");
const height = document.querySelector(".bmr-calculator form #height");
const weight = document.querySelector(".bmr-calculator form #weight");
const errorMessage = document.querySelector(".error-message"); 

// BMR = 10 x weight + 6.23 x height - 5 x age + 5
// BMR = 10 x weight + 6.25 x height - 5 x age - 161
errorMessage.classList.remove("active");

const calculateBMR = (weight, height, age, gender) => {
    if (gender == "male") {
        return 66 + (13.7 * weight) + (5 * height) - (6.8 * age); 
    }
        return 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age); 
}

calculateBtn.addEventListener("click", () => {

    if (age.classList.contains("invalid") || height.classList.contains("invalid") || weight.classList.contains("invalid")) {
        errorMessage.classList.add("active");
        return; 
    }

    errorMessage.classList.remove("active"); 

    let genderValue = document.querySelector(".bmr-calculator form input[name='gender']:checked").value; 

    let BMR = calculateBMR(weight.value, height.value, age.value, genderValue); 
    calories.innerHTML = BMR; 
}); 

// Input Validation 

age.addEventListener("input", (e) => {
    let ageValue = e.target.value; 
    if (!ageValue || isNaN(ageValue) || ageValue < 1 || ageValue > 100) {
        age.classList.add("invalid"); 
    } else {
        age.classList.remove("invalid"); 
    }
})

height.addEventListener("input", (e) => {
    let heightValue = e.target.value; 
    if (!heightValue || isNaN(heightValue) || heightValue < 0) {
        height.classList.add("invalid"); 
    } else {
        height.classList.remove("invalid"); 
    }
})

weight.addEventListener("input", (e) => {
    let weightValue = e.target.value; 
    if (!weightValue || isNaN(weightValue) || weightValue < 0) {
        weight.classList.add("invalid"); 
    } else {
        weight.classList.remove("invalid"); 
    }
})