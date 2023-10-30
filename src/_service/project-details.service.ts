import { Injectable } from '@angular/core';
import { Tag } from 'src/_models/Tag';
import { project } from 'src/_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  ProjectData = [
    {
      id: 1,
      title: 'Flipkart Clone',
      tags: [Tag.REACT, Tag.NODEJS, Tag.MONGODB, Tag.EXPRESSJS, Tag.JAVASCRIPT],
      pictures: ['../../assets/f1.png', '../../assets/f2.png', '../../assets/f3.png'],
      websiteLink: 'https://flipkart001.netlify.app/',
      projectLink: 'https://github.com/hackerearthrajnish/flipkart-frontend.git',
      summary: 'The project aimed to create a Flipkart-like app with modern tech stacks, providing users with a familiar shopping experience. It replicated essential Flipkart features, including user accounts, product browsing, cart management, and email order confirmations. It involved various technologies, e-commerce knowledge, and skills in front-end, back-end, and database management.',
      Description: "The primary objective of this project was to develop a Flipkart clone app that could offer users a familiar shopping experience while leveraging modern technology stacks. The app replicates the essential features of Flipkart, allowing users to create accounts, browse products, add items to their cart, make purchases, and receive order confirmations via email. This endeavor involved an array of technologies and required a keen understanding of e-commerce, front-end development, back-end engineering, and database management."
    },
    {
      id: 2,
      title: 'Image Gallary',
      tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.CSS, Tag.MATERIALUI,],
      pictures: ['../../assets/f1.png', '../../assets/f2.png', '../../assets/f3.png'],
      projectLink: 'https://github.com/hackerearthrajnish/image-scroller.git',
      websiteLink: 'https://assignment-a.netlify.app/',
      summary: "I created a visually appealing image gallery project using React.js and Material-UI. It incorporated dynamic scroll loading, displayed loading indicators during API data retrieval, and allowed users to access image properties by clicking on them. The project combined front-end technologies for an engaging image browsing experience.",
      Description: "I developed an image gallery project using React.js and Material-UI for a visually appealing design. The project implemented dynamic scroll loading to enhance user experience, ensuring smooth loading of images. It also featured a loading indicator while fetching data from the API, optimizing responsiveness. Users could click on images to access detailed image properties, enhancing interactivity and engagement. This project seamlessly combined front-end technologies and user-centric features for an immersive image browsing experience."
    },
    {
      id: 3,
      title: 'Portfolio Website',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.CSS, Tag.HTML],
      pictures: ['../../assets/icissi1.png', '../../assets/icissi2.png', '../../assets/icissi3.png'],
      projectLink: '#',
      websiteLink: 'https://flipkart001.netlify.app/',
      summary: "I utilized Angular to create an interactive portfolio, incorporating routing, services, and components for seamless navigation, efficient data management, and modular code. This project showcases my web development skills and proficiency in leveraging Angular's capabilities to deliver a user-friendly and polished portfolio.",
      Description: "I developed a dynamic portfolio using Angular, implementing advanced concepts such as routing, services, and components. Leveraging Angular's robust framework, I crafted an interactive and responsive platform to showcase my work and skills. Through the use of routing, I enabled seamless navigation between different sections, while services ensured efficient data management. The creation of various components allowed for modular and maintainable code. This project not only demonstrates my proficiency in web development but also showcases my ability to utilize Angular's capabilities to create a polished and user-friendly portfolio."

    },
    {
      id: 4,
      title: 'Website For ICISSI-2022',
      tags: [Tag.JAVASCRIPT, Tag.BOOTSTRAP, Tag.HTML, Tag.CSS],
      pictures: ['../../assets/icissi1.png', '../../assets/icissi2.png', '../../assets/icissi3.png'],
      projectLink: '#',
      websiteLink: 'https://flipkart001.netlify.app/',
      summary: 'ICSSI is being jointly organised SIET prayagay UP India and Manipal University Jaipur, Rajasthan India with an aim to provide a platform for researchers',
      Description: "ICSSI is being jointly organised SIET prayagay UP India and Manipal University Jaipur, Rajasthan India with an aim to provide a platform for researchers , scientists , and engineers to exchange their innovative ideas and new challanges being faced in the field of emerging core technologies.Join ICISSI-2022, the International Conference On Intelligent Systems and Smart Infrastructure, in Prayagraj, India on April 21st-22nd, 2022. Co-organized by institutes from Prayagraj, Lucknow, and Jaipur, the event fosters idea exchange among researchers, scientists, and engineers, addressing emerging technology challenges. It spotlights machine learning, intelligent systems, smart infrastructure, and advanced power tech."

    },
    {
      id: 5,
      title: 'Rating App',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.CSS, Tag.HTML, Tag.BOOTSTRAP],
      pictures: ['../../assets/f1.png', '../../assets/f2.png', '../../assets/f3.png'],
      projectLink: '#',
      websiteLink: 'https://flipkart001.netlify.app/',
      summary: "I designed an Angular-based Rating App that retrieves movie data and ratings through an API. It employs Angular's routing, services, and components for smooth navigation and interactive user experiences. Users can explore movies, access detailed reviews, and rate films, creating an engaging platform for movie enthusiasts.",
      Description: ` I developed a dynamic Angular-based Rating App that provides users with a seamless movie rating and review experience. This application leverages key Angular concepts, including routing, services, and components, to deliver an intuitive and interactive platform. The app sources movie data and ratings through an API, allowing users to explore and discover various films. The utilization of routing enables users to navigate between different sections of the app, such as browsing movies and accessing their detailed reviews.  To enhance user engagement, I created a user-friendly interface with distinct components. Users can click on a movie to access its individual page, which displays detailed information and reviews. This interaction is facilitated by Angular services that fetch and manage the data efficiently.`

    },
    {
      id: 6,
      title: 'Budget App',
      tags: [Tag.JAVASCRIPT, Tag.HTML, Tag.CSS, Tag.BOOTSTRAP,],
      pictures: ['../../assets/f1.png', '../../assets/f2.png', '../../assets/f3.png'],
      projectLink: '#',
      websiteLink: 'https://flipkart001.netlify.app/',
      summary: "Introducing my Budget App, a dynamic financial tool built using Tag.HTML CSS, and JavaScript. Designed to streamline budgeting, it empowers users to input their initial budget and track expenses. The app calculates savings by deducting expenses, providing a clear overview of remaining funds. Adding and deleting expenses is effortless, allowing flexibility. Users can also adjust their budget dynamically. Tag.HTMLshapes the structure, CSS offers an appealing interface, while JavaScript drives functionality. This intuitive app simplifies financial management, making it easy to monitor spending, adapt budgets, and visualize savings, all in one convenient platform.",
      Description: "Introducing my Budget App, a dynamic financial tool built using Tag.HTML CSS, and JavaScript. Designed to streamline budgeting, it empowers users to input their initial budget and track expenses. The app calculates savings by deducting expenses, providing a clear overview of remaining funds. Adding and deleting expenses is effortless, allowing flexibility. Users can also adjust their budget dynamically. Tag.HTMLshapes the structure, CSS offers an appealing interface, while JavaScript drives functionality. This intuitive app simplifies financial management, making it easy to monitor spending, adapt budgets, and visualize savings, all in one convenient platform."

    }
  ]


  constructor() { }

  getProjectdata() {
    return this.ProjectData;
  }

  getProductById(id: number) {
    let project = this.ProjectData.find(data => data.id === id)

    if (project === undefined) {
      return {}

    }
    else
      return project
  }

  getFilteredProject(filterTags: string[]) {


    if (filterTags.length === 0)
      return this.ProjectData
    else {

      let filteredProjects: project[] = []

      this.ProjectData.forEach(Project => {

        let matched = false;

        filterTags.forEach(tag => {

          for (let i of Project.tags) {

            console.log(i.key, tag)
            if (i.key === tag) {
              matched = true;
              break;
            }
          }
        })

        if (matched) {
          filteredProjects.push(Project)
        }
      })
      return filteredProjects;
    }
  }
}
