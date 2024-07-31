import React from 'react';
import profileIcon from './Images/profile-icon.png';
import FoodLens from './Images/FoodLens.png';
import CapstoneVideo from './Videos/SenexDemoVideo.mp4';
import './App.css';

function App() {
  const projects = [
    { title: "FoodLens (Individual)", video: FoodLens, brief: "FoodLens is designed to simplify the process of understanding nutrition values by recognizing food from images. In today’s health-conscious world, many people check nutrition labels before eating. FoodLens aims to offer a more convenient solution by allowing users to take a photo of their food and instantly receive detailed nutrition facts. Additionally, the web app can generate recipes based on the identified food items, so users can easily take a photo of ingredients that they just bought and get ideas for what to cook. This project showcases my ability to individually design, develop, and deploy a web application from scratch, as well as my skills in manipulating and integrating APIs and presenting the information clearly on the client side with some innovative design ideas." },
    { title: "Capstone Project (Group)", video: CapstoneVideo, brief: "This capstone project was completed in the final year of my degree, where a group of four collaborated with Senex Energy to build a safety induction training module for their employees who need to visit sites and work with their facilities. This project provided me with valuable experience in real-world product development, from planning to delivery. Features include a comprehensive login system, three training modules (made with Unity and modeling software), quizzes for each module, and a feature to track employee completion status. I was initially responsible for the front-end development of the website, but as the project progressed, I also took on database management tasks. I implemented the login authentication, authorization, and email verification, as well as the management of user data and module completion statuses in the database. This project demonstrates my skills not only in front-end development but also in full-stack development. More importantly, I learned how to effectively communicate and collaborate within a team to complete a project, and how to adapt quickly to changes and support each other." },
  ]

  return (
    <div className="app">
      <h1 className="title">Jiaqi Zhong</h1>
      <div className="about">
        <img className="profile-photo" src={profileIcon} alt="profile"/>
        <p className="introduction">Welcome to my web development portfolio! Here, you’ll find a selection of my projects, from dynamic React apps to robust backend systems. Each project demonstrates my skills in modern web technologies and my commitment to creating functional, user-friendly, and visually appealing web solutions. Explore my work to see the creativity and technical expertise I bring to every project.</p>
      </div>
      <hr className="horizontal-bar" />
      <div className="projects">
        {projects.map((project, index) => {
          return (
            <div className="project" key={index}>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-brief">{project.brief}</p>
              <video className="project-image" controls>
                <source className="project-image" src={project.video} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
