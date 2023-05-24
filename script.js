// 1.Here's an example of iterating over a JSON object using different types of loops:

const data = {
    "name": "Immanuvel raj",
    "age": 30,
    "occupation": "Software Engineer",
    "skills": ["JavaScript", "Nodejs", "React"],
    "experience": {
     " company": "ABC Inc.",
      "years": 5,
    },
  };
  
  // for loop
  console.log("Using for loop:");
  for (let key in data) {
    console.log(key + ": " + data[key]);
  }
  
  // for...in loop
  console.log("\nUsing for...in loop:");
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      console.log(key + ": " + data[key]);
    }
  }
  
  // for...of loop
  console.log("\nUsing for...of loop:");
  const entries = Object.entries(data);
  for (let [key, value] of entries) {
    console.log(key + ": " + value);
  }
  
  // forEach loop (for arrays)
  console.log("\nUsing forEach loop:");
  const skills = data.skills;
  skills.forEach((skill, index) => {
    console.log("Skill " + (index + 1) + ": " + skill);
  });


//   2. Create your own resume data in JSON format give me the code in json
const resume = {
   "name": "Immanuvel raj",
   " age": 30,
    "email": "immanvr46@gmail.com",
    "phone": "123-456-7890",
    "education": [
      {
        degree: "Bachelor of Engineering",
        major: "Computer Science",
        university: "Anna University",
        year: 2015,
      },
      {
        degree: "Master of Business Administration",
        major: "Finance",
        university: "ABC University",
        year: 2017,
      },
    ],
    experience: [
      {
        company: "ABC Inc.",
        position: "Software Engineer",
        startDate: "2015-06-01",
        endDate: "2018-12-31",
        responsibilities: [
          "Developed and maintained web applications using JavaScript and React.",
          "Collaborated with cross-functional teams to deliver high-quality software products.",
        ],
      },
      {
        company: "DEF Corp.",
        position: "Senior Software Engineer",
        startDate: "2019-01-01",
        endDate: "2022-05-31",
        responsibilities: [
          "Led a team of developers to design and implement scalable software solutions.",
          "Contributed to architectural decisions and code reviews.",
        ],
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "Express", "SQL","MongoDB"],
  };
  
  console.log(resume);
  
  