const coursesUL = document.querySelector(".grid-courses").getElementsByTagName("li");

const randomRgb = () => {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
};

const updateClock = (clock) => {
    const date = new Date();
    clock.style.backgroundColor = randomRgb();
    clock.textContent = `${date.toLocaleString()}`
};

const yearText = document.getElementById("year-text");
const changeYearColor = setInterval(() => yearText.style.color = randomRgb(), 1000);

const clock = document.getElementById("clock");
const clockInterval = setInterval((clock) => updateClock(clock), 1000, clock);

for (const course of coursesUL){
    const lastWord = course.textContent.split(" ").pop();
    
    if (lastWord == "Done") {
        course.style.backgroundColor = "rgb(85, 218, 8)";
    } else if (lastWord == "Ongoing") {
        course.style.backgroundColor = "rgb(225, 207, 13)";
    } else {
        course.style.backgroundColor = "rgb(225, 24, 13)";
    }
}

