import project1 from "../assets/projects/project-1.png"
import project2 from "../assets/projects/project-2.png"

export const HERO_CONTENT = `I am a passionate MERN stack developer with 6-7 months of focused learning and a 6-month online internship where I built industry-standard applications. My hands-on experience has honed my problem-solving skills and deepened my understanding of full-stack development. Eager to learn and grow, I am committed to reaching the pinnacle of this field. With my dedication and team-oriented approach, I am confident I can be a valuable asset to your company, contributing to real-life problem-solving applications and continuous improvement.`

export const ABOUT_TEXT = `I am a Computer Science engineer who graduated in 2022. After graduation, I pursued a different path by preparing for the armed forces, successfully qualifying the written examinations of CDS twice and AFCAT three times, and attending eight SSB interviews. Although I didn't achieve the desired outcome, these experiences built my resilience and determination. Now, I have transitioned back to the tech field, equipped with new skills in MERN stack development and a strong self-confidence. I am eager to grow as a developer, creating impactful applications for users and continually improving in this dynamic industry.`

export const EXPERIENCES = [
  {
    year: "25 Aug 2023 - April 2024",
    role: "Full Stack Developer Intern",
    company: "Cuvette Tech Pvt. Ltd.",
    description: `Gained hands-on experience with the MERN stack by working on industry-standard projects. Collaborating with a UX/UI designer who provided designs in Figma, I brought these designs to life through code. This challenging process significantly enhanced my skills, particularly in creating bug-free, robust applications. Each project was rigorously evaluated, and I successfully passed by delivering high-quality work, demonstrating my readiness for a Junior Full Stack Engineer role.`,
    technologies: ["MongoDB", "Express", "React.js", "Node.js"],
  },
  {
    year: "July 2024 - Sept 2024",
    role: "Frontend Developer",
    company: "AK Software Solutions",
    description: `Contributed to existing Next.js and JavaScript codebases to complete projects efficiently. Collaborated closely with graphic designers and worked with backend developers to integrate APIs seamlessly. Assisted in building and maintaining a college management system, contributing to CSS development and bug fixes.
`,
    technologies: [
      "Javascript",
      "NextJs",
      "CSS",
      "Express",
      "React.js",
      "Node.js",
    ],
  },
]

export const PROJECTS = [
  {
    title: "Netflix-Gemini",
    image: project1,
    description:
      "Developed a dynamic movie browsing and recommendation platform for an engaging user interface and seamless navigation.Integrated data management with Redux Toolkit to streamline state handling and improve performance.Leveraged the TMDB API to fetch data and the Gemini API to provide movie recommendations based on user descriptions",
    technologies: ["React", "Redux Toolkit", "Firebase", "Gemini API"],
    source: "https://github.com/ProtoShiva/Netflix-gemini",
    live: "https://netflix-gemini-a97f3.web.app/",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking. Also you can share the task progress to your team members",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    source: "https://github.com/ProtoShiva/final-task-manager",
    live: "https://final-task-manager.vercel.app/",
  },
]

export const CONTACT = {
  address: "236/1 Gurudwara Colony, Clementtown, Dehradun 248002 ",
  phoneNo: "+91 8279950566 ",
  Whatsapp: "+91 8126055391",
  email: "hgusain088@gmail.com",
}
