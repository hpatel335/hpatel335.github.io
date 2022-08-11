/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import alien from "./assets/lottie/alien"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: alien,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harsh Patel",
  title: "Hi I'm Harsh",
  subTitle: emoji(
    "I'm a current graduate student at Georgia Tech, finishing up my Master's in Robotics 🤖. While my focus lies in Controls, Perception,  \
    and AI, I'm always interested in learning new topics and exploring their potential for disruptive and innovative change."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KMG-bNRk51Sel9h4JKfnIiBq1ilJ95Pi/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hpatel335",
  linkedin: "https://www.linkedin.com/in/harshp27/",
  gmail: "harshsph@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  instagram: "https://instagram.com/itshpat",
  // twitter: "https://twitter.com/harshpat27",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do best ",
  subTitle: "ROBOTICS ENGINEER WHO CONSTANTLY BREAKS THINGS",
  skills: [
    emoji(
      "✨ Create state estimation and control algorithms to promote autonomy"
    ),
    emoji("✨ Design and prototype physical testbeds for rapid testing"),
    emoji(
      "✨ Skills I'm currently working on developing ..."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "C++",
    //   fontAwesomeClassname: "fab fa-cuttlefish",
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gatech.png"),
      subHeader: "Master of Science in Robotics",
      duration: "August 2022 - December 2023",
      desc: "Notable Coursework:",
      descBullets: [
        "Nonlinear Systems, Optimal-Based Learning Control",
        "Artificial Intelligence, Machine Learning", 
        "Computer Vision, Deep Learning"
      ]
    },
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gatech.png"),
      subHeader: "Bachelor of Science in Aerospace Engineering",
      duration: "August 2017 - December 2021",
      desc: "Notable Coursework:",
      descBullets: [
        "Avionics Integration", 
        "Robotics & Autonomy", 
        "Accident Causation Prevention and System Safety",
        "Spacecraft Flight Dynamics"	
      ]
    }
  ]
};

// Proficiencies

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Matlab, Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C++, Julia",
      progressPercentage: "60%"
    },
    {
      Stack: "ROS, KubOS",
      progressPercentage: "80%"
    }, 
    {
      Stack: "SolidWorks, Eagle",
      progressPercentage: "50%"

    },
    // {
    //   Stack: "Tennis",
    //   progressPercentage: "40%"

    // },   
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Intern",
      company: "NASA Jet Propulsion Laboratory",
      companylogo: require("./assets/images/nasa.png"),
      date: "Jan 2020 – May 2020",
      desc: "Implemented a 6-DOF nonlinear controller, and a polynomial guidance law for a Martian Entry Descent and Landing platform using the JPL's DARTS simulation framework" 
    },
    {
      role: "Software Engineer Intern",
      company: "NASA Jet Propulsion Laboratory",
      companylogo: require("./assets/images/nasa.png"),
      date: "May 2021 – Aug 2021",
      desc: "Developed a high-fidelity dynamics simulation for a balloon science platform, designed for Venus atmospheric exploration, using C++ and Python, and designed a stable feedback controller to allow the balloon system to regulate its altitude within the Venusian atmosphere"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "University Projects",
  subtitle: "SOME UNIVERSITY PROJECTS I SUPPORTED ",
  projects: [
    {
      image: require("./assets/images/tgt2.png"),
      projectName: "TARGIT",
      projectDesc: "The solar-powered TARGIT is a 3U CubeSat that houses a compact laser altimetry system capable of delivering accurate topographic data (down to the centimeter) from as far away as 10 kilometers using an on-board LiDAR imaging system.",
      footerLink: [
        {
          name: "Mission Website",
          url: "https://ssdl.gatech.edu/research/projects/tethering-and-ranging-mission-georgia-institute-technology-targit"
        },
        {
          name: "Cool Photos",
          url: "https://photos.app.goo.gl/yiN5epeDd4Qa8ynu9"
        }      ]
    },
    {
      image: require("./assets/images/orca.png"),
      projectName: "OrCa 2",
      projectDesc: "A 12U CubeSat with optically calibrated panels and corner-cube retroreflectors for launch to geostationary transfer orbit (GTO)",
      footerLink: [
        {
          name: "Mission Website [TBD]",
          url: "https://ssdl.gatech.edu/research/projects"
        }, 
        {
          name : "Cool Photos", 
          url : "https://photos.app.goo.gl/Up5rWhvVnC38LoU96"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Wanna learn more about my projects or just want to chat? Reach Out!",
  number: "7706801021",
  email_address: "harshsph@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
