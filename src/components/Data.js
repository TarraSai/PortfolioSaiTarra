import images1 from './saiimage.jpg'
import Resume from './sai_Resume.pdf'
import project3 from './Screenshot (642).png'
import project1 from './bmicalculatorwp-og.png'
import project2 from './1200x630wa.png'



export const Data = {
  name: "SAI TARRA",
  role: "web developer",
  image: images1,
  about:
    " I am a dedicated and skilled MERN stack developer, specializing in creating dynamic and responsive web applications. My passion for learning new technologies drives me to continuously improve and stay updated with the latest industry trends.",
  Linkedin:
    "https://www.linkedin.com/in/tarra-sai-93811325b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  Github: "https://github.com/TarraSai",
  leetcode: "https://leetcode.com/u/Saitarra/",
  codechef: "https://www.codechef.com/users/saitarra_27",
  resume:Resume
};
 export const projectData = [
   {
     title: "BMI Calculator",
     description:
       "BMI calculator project with authentication implemented using HTML, CSS, Node.js, Express.js, and MongoDB.",
     link: "https://github.com/TarraSai/bmidata",
     imageSrc: project1,
   },

   {
     title: "Portfolio Site",
     description:
       "This is a simple portfolio website project created as a showcase of my skills and work. The website is built using ReactJs.",
     link: "#",
     imageSrc: project3,
   },
   {
     title: "Image Search Application",
     description:
       "Image search application that displays images based on the search value, with a download option and pagination.",
     link: "https://github.com/TarraSai/image-search-application-unsplash-API",
     imageSrc: project2,
   },
 ];