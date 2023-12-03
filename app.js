const courseData = {
    description: "Asabeneh Yetayeh challenges",
    challengeTitle: "Asabeneh Yetayeh challenges",
    challengeSubtitle: "30DaysOfJavaScript Challenge",
    challengeYear: 2020,
    keywords: [
        "HTML",
        "HTML5",
        "CSS",
        "CSS3",
        "JS",
        "JavaScript",
        "ES6",
        "Promise",
        "async await",
        "Database",
        "React",
        "React Hooks",
        "Context API",
        "React Router",
        "Web Storage",
        "localStorage",
        "sessionStorage",
        "Redux",
        "Node",
        "MongoDB",
        "SQL",
        "API",
        "DOM",
        "data science",
        "MERN",
        "Python",
        "Flask",
        "Statistics",
        "Linear Algebra",
        "Numpy",
        "Pandas",
        "Scipy",
        "Scikit-learn",
        "Visualization",
        "D3.js",
    ],
    author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
        titles: [
            ["🌱", "Educator"],
            ["💻", "Programmer"],
            ["🌐", "Developer"],
            ["🔥", "Motivator"],
            ["📔", "Content Creator"],
        ],
        qualifications: [
            "MSc. Computer Science Ongoing",
            "BSc. Information and Communication Eng.",
            "MSc. Food Technology",
            "BSc. Food Technology",
        ],
        socialLinks: [
            {
                social: "LinkedIn",
                url: "https://www.linkedin.com/in/asabeneh/",
                fontawesomeIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" fill="currentColor" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>',
            },
            {
                social: "Twitter",
                url: "https://twitter.com/Asabeneh",
                fontawesomeIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="currentColor" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>',
            },
            {
                social: "Github",
                fontawesomeIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" fill="currentColor" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/></svg>',
                url: "https://github.com/Asabeneh",
            },
        ],
        skills: [
            "Web Development",
            "Data Analysis",
            "Data Visualization",
            "Programming",
            "Databases",
            "Developing API",
        ],
        bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
    },
    challenges: [
        {
            name: "30 Days Of Python",
            topics: [
                "Python",
                "Flask",
                "Numpy",
                "Pandas",
                "Statistics",
                "API",
                "MongoDB",
            ],
            days: 30,
            status: "Done",
            questions: "Above 500",
            projects: "Two",
            interviewQns: "",
            githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
        },
        {
            name: "30 Days Of JavaScript",
            topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
            days: 30,
            status: "Ongoing",
            questions: "Above 500",
            projects: "About 30",
            interviewQns: "",
            githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
        },
        {
            name: "30 Days Of HTML & CSS",
            topics: ["CSS", "Flex", "Grid", "CSS Animation"],
            days: 30,
            status: "Done",
            questions: "Above 500",
            projects: "Two",
            interviewQns: "",
            githubUrl: "https://github.com/Asabeneh/30-Days-Of-HTML",
        },
        {
            name: "30 Days Of React",
            topics: [
                "React",
                "React Router",
                "Redux",
                "Context API",
                "React Hooks",
                "MERN",
            ],
            days: 30,
            status: "Done",
            questions: "",
            projects: "",
            interviewQns: "",
            githubUrl: "https://github.com/Asabeneh/30-Days-Of-React",
        },
        {
            name: "30 Days Of ReactNative",
            topics: ["ReactNative", "Redux"],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "Two",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of Fullstack",
            topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of Data Analysis",
            topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of Machine Learning",
            topics: [
                "Python",
                "Numpy",
                "Pandas",
                "Scikit-learn",
                "Scipy",
                "Linear Algebra",
                "Statistics",
                "Visualization",
            ],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "",
            interviewQns: "",
            githubUrl: "",
        },
    ],
};

const coursesUL = document.querySelector(".grid-courses");

const randomRgb = () => {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
};

const updateClock = (clock) => {
    const date = new Date();
    clock.style.backgroundColor = randomRgb();
    clock.textContent = `${date.toLocaleString()}`;
};

const yearText = document.getElementById("year-text");
const changeYearColor = setInterval(() => (yearText.style.color = randomRgb()), 1000);

const clock = document.getElementById("clock");
const clockInterval = setInterval((clock) => updateClock(clock), 1000, clock);

for (let i = 0; i < courseData.challenges.length; i++) {
    const course = document.createElement("li");
    const githubUrl = courseData.challenges[i].githubUrl;
    course.innerHTML = `${githubUrl != "" ? `<a href=${githubUrl} target="_blank">` : ""}${courseData.challenges[i].name}${githubUrl != "" ? `</a>` : ""} <details><summary>${courseData.challenges[i].name.split(" Of" )[1]}</summary><p>${courseData.challenges[i].topics.join("<br>")}</p></details>  ${courseData.challenges[i].status}`

    if (courseData.challenges[i].status == "Done") {
        course.style.backgroundColor = "rgb(85, 218, 8)";
    } else if (courseData.challenges[i].status == "Ongoing") {
        course.style.backgroundColor = "rgb(225, 207, 13)";
    } else {
        course.style.backgroundColor = "rgb(225, 24, 13)";
    }
    coursesUL.appendChild(course);
}

const authorData = courseData.author;

const aboutAuthor = document.querySelector(".about-author");

const authorNameH3 = aboutAuthor.querySelector("h3");
authorNameH3.textContent = `${authorData.firstName} ${authorData.lastName}`;

const links = aboutAuthor.querySelector(".links");
authorData.socialLinks.forEach((el) => {
    const newLink = document.createElement("a");
    newLink.href = el.url;
    newLink.innerHTML = el.fontawesomeIcon;
    console.log(el.fontawesomeIcon);
    links.appendChild(newLink);
});

const bio = aboutAuthor.querySelector(".bio");
bio.textContent = authorData.bio;

const skillsWrapper = aboutAuthor.querySelector(".skills-wrapper");

const titles = aboutAuthor.querySelector(".titles");
titles.textContent = "Titles:";
authorData.titles.forEach((el) => {
    const newLi = document.createElement("li");
    newLi.style.listStyleType = "none";
    newLi.textContent = `${el[0]} ${el[1]}`;
    titles.appendChild(newLi);
});

const skills = aboutAuthor.querySelector(".skills");
skills.textContent = "Skills:";
authorData.skills.forEach((el) => {
    const newLi = document.createElement("li");
    newLi.style.listStyleType = "none";
    newLi.textContent = `✅ ${el}`;
    skills.appendChild(newLi);
});

const qualifications = aboutAuthor.querySelector(".qualifications");
qualifications.textContent = "Qualifications:";
authorData.qualifications.forEach((el) => {
    const newLi = document.createElement("li");
    newLi.style.listStyleType = "none";
    newLi.textContent = `🧾 ${el}`;
    qualifications.appendChild(newLi);
});

const keywords = document.querySelector(".keywords-container");
courseData.keywords.forEach((el) => {
    const newSpan = document.createElement("span");
    newSpan.textContent = `# ${el}`;
    newSpan.style.borderRadius = "15px";
    newSpan.style.backgroundColor = randomRgb();
    keywords.appendChild(newSpan);
});