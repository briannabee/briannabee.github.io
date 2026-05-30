const projects = [
  {
    title: "Insurance Cost Prediction",
    image: "images/MachineLearning.png",
    description:
      "Built a machine learning model to predict insurance charges using demographic and health-related features.",
    features: [
      "Multivariate linear regression",
      "Data preprocessing and normalization",
      "MSE and R² evaluation",
      "Feature impact analysis"
    ],
    tech: "Python, Pandas, NumPy, Scikit-learn"
  },

  {
    title: "Calendar.io",
    image: "images/Calendario.png",
    description:
      "Developed a full-stack scheduling application with authentication and real-time event management.",
    features: [
      "User authentication",
      "Event creation/editing",
      "Real-time updates",
      "Search and filtering"
    ],
    tech: "HTML, CSS, JavaScript, Firebase, Node.js"
  }
];

let currentProject = 0;

const projectImage = document.getElementById("projectImage");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const projectFeatures = document.getElementById("projectFeatures");
const projectTech = document.getElementById("projectTech");

function loadProject(index) {
  const project = projects[index];

  projectImage.src = project.image;
  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;
  projectTech.textContent = project.tech;

  projectFeatures.innerHTML = "";

  project.features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    projectFeatures.appendChild(li);
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentProject = (currentProject + 1) % projects.length;
  loadProject(currentProject);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentProject =
    (currentProject - 1 + projects.length) % projects.length;
  loadProject(currentProject);
});

loadProject(currentProject);
