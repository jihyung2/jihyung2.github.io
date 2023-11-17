/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jihyung Lee",
  title: "안녕하세요. 백엔드 개발자 이지형입니다.",
  subTitle: emoji(
    "Java, Python을 주력언어로 다루며 Java Spring boot, Flask, Fast API, JPA, JDBC, Mariadb를 주로 이용하여 사용자를 위한 백엔드 서비스를 개발하는 열정적인 백엔드 개발자 입니다.🚀"
  ),
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jihyung2",
  gmail: "wlgud11160@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "백엔드 개발자로 현재 사용가능한 기술 스택입니다.",
  skills: [
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Java Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JPA",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "JDBC",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
    ,
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    }
    ,
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    }
    ,
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hanbat University",
      logo: require("./assets/images/hanbat.jpg"),
      subHeader: "컴퓨터공학과",
      duration: "2020.02 - 2024.03",
      desc: "SysAI Lab 학부연구생으로 활동",
      descBullets: [
        "정보처리기사 취득",
        "제14회 소외된 이웃과 함께하는 창의설계 경진대회, 동상",
        "웹 기반 시뮬레이션 환경을 위한 시뮬레이션 엔진의 설게 및 구축 논문 작성 및 포스터 발표",
        "오픈소스 기반 캔위성 개발 키트를 위한 시뮬레이션 모델 및 환경 논문 작성",
      ]
    },
    {
      schoolName: "대덕대학교",
      logo: require("./assets/images/dauk.png"),
      subHeader: "컴퓨터정보학과",
      duration: "2018.02 - 2020.03",
      descBullets: ["정보처리산업기사 취득"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "55%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
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
  title: "Big Projects",
  subtitle: "백엔드 개발자의 역량을 키우는 과정",
  projects: [
    {
      image: require("./assets/images/erp.png"),
      projectName: "사용자 중심의 ERP 제작 프로젝트",
      projectDesc: "2022.08 - 2022.11, 제 14회 소외된 이웃과 함께하는 창의설계 경진대회",
      footerLink: [
        {
          name: "자세히 보기",
          url: "https://github.com/jihyung2/User-centric-ERP"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chatbot2.png"),
      projectName: "교육용 챗봇 서버 제작 및 운영",
      projectDesc: "2022.12 - 2023.07, 학생들을 위한 교육용 챗봇 제작 프로젝트",
      footerLink: [
        {
          name: "자세히 보기",
          url: "https://github.com/jihyung2/telegram_cap1"
        }
      ]
    },
    {
      image: require("./assets/images/online.png"),
      projectName: "교육용 온라인저지 구축 및 웹 확장",
      projectDesc: "2023.08 - 2023.10, 프로그래밍 실습환경을 구축하기 위해 웹 환경의 온라인저지 구축 및 채팅방 웹 구현",
      footerLink: [
        {
          name: "자세히 보기",
          url: "https://github.com/jihyung2/Online_Judge_cap2"
        }
      ]
    }
    ,
    {
      image: require("./assets/images/sim.png"),
      projectName: "시뮬레이션 엔진의 웹 기반 인터페이스 설계 및 구축",
      projectDesc: "2023.08 - 2023.09, 모델링 및 시뮬레이션의 사용자 접근성을 향상시키기 위한 방안으로, 커맨드 라인 인터페이스 기반 시뮬레이션 환경을 위한 웹 기반 인터페이스를 제작",
      footerLink: [
        {
          name: "자세히 보기",
          url: "https://github.com/jihyung2/Simulation_Engine_for_Web-Based_Simulation_Environments"
        }
      ]
    }
    ,
    {
      image: require("./assets/images/res.png"),
      projectName: "카카오톡 예약 챗봇 구축",
      projectDesc: "2023.08 - 2023.10, 프로젝트에서 얻은 서버 운영 지식과 챗봇 개발 노하우를 활용하여 실제 문제를 해결하기 위해 카카오톡 예약 챗봇 개발",
      footerLink: [
        {
          name: "자세히 보기",
          url: "https://github.com/jihyung2/Reservation_system_Chatbot"
        }
      ]
    }
    ,
    {
      image: require("./assets/images/can.png"),
      projectName: "위성 프로젝트",
      projectDesc: "2023.08 - 진행중, 기계과와 협력하여 캔위성과 지상국의 통신망을 연결하고 스트림 데이터를 시각화 및 가공 처리하는 과정",
      footerLink: [
        {
          name: "자세히 보기",
          url: "https://github.com/jihyung2/sat_simulation"
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
    {
      title: "정보처리산업기사 취득",
      subtitle:
        "2019.05.17, 자격증번호 : 19202132056J",
      image: require("./assets/images/sangi.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },
    {
      title: "정보처리기사 취득",
      subtitle:
        "2021.09.01, 자격증번호 : 22201130617G",
      image: require("./assets/images/gisa.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },
    {
      title: "제 14회 창의설계 공모전, 동상",
      subtitle:
        "2022.11.19, 동상",
      image: require("./assets/images/sang.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "010-5403-6961",
  email_address: "wlgud1116@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  twitterDetails,
  isHireable
};
