import React from 'react';
import profile from '../Images/profile.jpg';
import CapstoneDemo from '../Videos/SenexDemo.mp4';
import FoodLensDemo from '../Videos/FoodLensDemo.mp4';
import './Home.css';

function Home() {
  const projects = [
    { title: "FoodLens (Individual)", video: FoodLensDemo, brief: "FoodLens was designed to simplify the process of understanding nutrition values by recognizing food from images. In today’s health-conscious world, many people check nutrition labels before eating. FoodLens aims to offer a more convenient solution by allowing users to take a photo of their food and instantly receive detailed nutrition facts. Additionally, the web app can generate recipes based on the identified food items, so users could easily take a photo of ingredients they just bought and get ideas for what to cook. This web application was written with React and Express, using Tailwind CSS framework for styling and deployed with Vercel, showcasing my ability to individually design, develop, and deploy a web application from scratch, as well as my skills in manipulating and integrating multiple APIs that serve different needs and presenting the information clearly on the client side with innovative design ideas." },
    { title: "Capstone Project (Group)", video: CapstoneDemo, brief: "This capstone project was completed in the final year of my degree, where a group of four collaborated with Senex Energy to build a safety induction training module for their employees who need to visit sites and work with their facilities. This project provided me with valuable experience in real-world product development, from planning to delivery. Features include a comprehensive login system, three training modules (made with Unity and modelling software), quizzes for each module, and a feature to track employee completion status. During the design phase, I helped develop a medium-to-high-fidelity prototype with Figma. I was initially responsible for the front-end development of the website in the second phase, but as the project progressed, I also took on database management tasks. I implemented the login authentication, authorization, and email verification, as well as the management of user data and module completion statuses in the database. This project demonstrates my skills not only in front-end development but also in full-stack development. More importantly, I learned how to effectively communicate and collaborate within a team to complete a project, and how to adapt quickly to changes and support each other." },
  ];

  return (
    <div className="home">
      <h1 className="title">Jiaqi Zhong (Roxanne)</h1>
      <div className="about">
        <img className="profile-photo" src={profile} alt="profile"/>
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

export default Home;