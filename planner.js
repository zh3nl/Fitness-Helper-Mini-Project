const planButton = document.querySelector(".plan-btn");
const plan = document.querySelector(".plan");

let calculateGoalStatement = (goal) => {
    if (goal == "muscle") {
        return "You should focus on anaerobic exercises such as weightlifting with dumbbells.";
    } else {
        return "You should focus on aerobic exercises such as jogging, biking, and swimming";
    }
}

let calculateAnaerobic = (intensityMeasure) => {
    if (intensityMeasure == "low") {
        return "For anaerobic exercises, you should use lighter weights or weight machines with higher numbers of reps and sets. A recommended example routine would be using ~70% of your limit and completing 5-8 sets with 15-20 reps per set (dumbbells for example)"; 
    } else if (intensityMeasure == "medium") {
        return "For anaerobic exercises, you should use ~80-90% of your limit and try to maintain reps between 8-15 for each set of exercises and attempt to achieve around 3-5 sets (such as in weightlifting)"; 
    } else {
        return "For anaerobic exercises, you should use your max weight limit and complete 6-8 reps per set, going until failure"; 
    }
}

let calculateAerobic = (intensityMeasure) => {
    if (intensityMeasure == "low") {
        return "For aerobic exercises, low intensity activities such as walking or slow jogging could be implemented. It is recommended that you set each exercise session to 30+ minutes.";
    } else if (intensityMeasure == "medium") {
        return "For aerobic exercises, you should utilize activities such as jogging/running for short distances (such as 1-2 miles) or sports such as tennis and soccer."; 
    } else {
        return "For aerobic exercises, you should utilize sprinting exercises or high intensity plyometrics to focus on explosiveness."; 
    }
}

planButton.addEventListener("click", () => {
    event.preventDefault(); 

    let goalValue = document.querySelector(".planner form input[name='goal']:checked").value;
    let intensity = document.querySelector(".planner form input[name='intensity']:checked").value; 
    
    let goalMsg = calculateGoalStatement(goalValue); 
    let anaerobicMsg = calculateAnaerobic(intensity); 
    let aerobicMsg = calculateAerobic(intensity); 

    if (goalValue == "muscle" ) {
        plan.innerHTML = goalMsg.concat(" ", anaerobicMsg);
    } else {
        plan.innerHTML = goalMsg.concat(" ", aerobicMsg); 
    }
});