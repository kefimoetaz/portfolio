import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import TechnicalSkills from "@/components/TechnicalSkills";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedTitle from "@/components/AnimatedTitle";
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const projects = [

  {
    title: "AI-Powered Computer Vision Analysis System",
    description: "Real-time object detection platform using YOLOv8 with 95%+ accuracy for people, vehicles, and traffic lights detection.",
    imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2070&auto=format&fit=crop",
    projectUrl: "/projects/computer-vision-ai",
    tags: ["Python", "YOLOv8", "Computer Vision", "Machine Learning", "Real-time Processing", "GUI"]
  },
  {
    title: "Mori Buntarou - AI Mountain Climbing Chatbot",
    description: "Interactive AI chatbot with authentic mountain climber personality, featuring local LLM integration and manga-inspired interface.",
    imageUrl: "https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?q=80&w=1170&auto=format&fit=crop",
    projectUrl: "/projects/mori-buntarou",
    tags: ["Python", "Streamlit", "LLM", "NLP", "Chatbot Development", "JavaScript"]
  },
  {
    title: "Jmal - The Ancient Desert Wanderer",
    description: "Emotionally resonant AI chatbot featuring a 1000-year-old robotic camel character with advanced conversational capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1705291700057-bcb1d22dc18c?q=80&w=1170&auto=format&fit=crop",
    projectUrl: "/projects/jmal-desert-wanderer",
    tags: ["AI", "Machine Learning", "CharacterAI", "ConversationalAI", "LLM", "Chatbot Development"]
  },
  {
    title: "Professional Toner Stock Management System",
    description: "Complete inventory management application with modern GUI, PDF reporting, and real-time stock tracking capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1715059382493-213b706e95f3?q=80&w=1170&auto=format&fit=crop",
    projectUrl: "/projects/toner-management",
    tags: ["Python", "Tkinter", "Data Management", "PDF Generation", "ReportLab", "Pandas"]
  },
  {
    title: "CycleSphere",
    description: "A cycling platform with route tracking, weather updates, and community features for cyclists worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
    projectUrl: "/projects/cyclesphere",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB", "WebSockets"]
  },
  {
    title: "3D Trail Exploration",
    description: "An immersive 3D platform for exploring hiking trails with interactive guides and virtual tours.",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    projectUrl: "/projects/3d-trail",
    tags: ["Three.js", "WebGL", "React", "MongoDB", "WebXR"]
  },
  {
    title: "Lucy - Cyberpunk-Inspired AI Assistant",
    description: "An AI assistant with cyberpunk aesthetics, featuring natural language processing and voice capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1531113165519-5eb0816d7e02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    projectUrl: "/projects/lucy-ai",
    tags: ["Python", "Tkinter", "NLTK", "Hugging Face BlenderBot", "pyttsx3", "Pillow", "requests"]
  },
  {
    title: "Dino Dash Deluxe",
    description: "A sophisticated Java-based 2D platformer with advanced graphics, physics, and dynamic day/night cycle.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    projectUrl: "/projects/dino-dash",
    tags: ["Java", "Swing/AWT", "Game Development", "Physics Engine", "Particle Systems"]
  },
  {
    title: "BlockCraft",
    description: "A Minecraft-inspired 3D voxel game built with modern OpenGL, featuring chunk-based world generation and dynamic rendering.",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    projectUrl: "/projects/blockcraft",
    tags: ["Java", "OpenGL", "LWJGL", "3D Graphics", "Game Development"]
  },
  {
    title: "PC Technician Assistant",
    description: "A comprehensive Windows system utility tool designed for PC technicians and system administrators with system scanning, software installation, and cleanup features.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170&auto=format&fit=crop+",
    projectUrl: "/projects/pc-technician-assistant",
    tags: ["Python", "Tkinter", "Windows API", "System Administration", "Desktop App"]
  },
  {
    title: "Chess Game with AI Opponent ",
    description: "Strategic chess implementation in Python with intelligent AI opponent, complete rule validation, and intuitive GUI interface.",
    imageUrl: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2070&auto=format&fit=crop",
    projectUrl: "/projects/chess-ai-game",
    tags: ["Python", "Tkinter", "AI Algorithm", "Game Logic", "PIL/Pillow"]
  },
  {
    title: "Web Chess Game ",
    description: "Interactive web-based chess game with real-time multiplayer support, move validation, and responsive design for online gameplay.",
    imageUrl: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop",
    projectUrl: "/projects/chess-game",
    tags: ["React", "TypeScript", "WebSocket", "CSS", "Multiplayer"]
  },
  {
    title: "Daily Routine",
    description: "A task management app with scheduling and progress tracking features.",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    projectUrl: "/projects/daily-routine",
    tags: ["HTML", "CSS", "Node.js", "Express", "MongoDB", "PDF Export"]
  },
  {
    title: "Coffee Shop",
    description: "A modern coffee shop website with online ordering and menu display.",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
    projectUrl: "/projects/coffee-shop",
    tags: ["HTML", "CSS", "Node.js", "Express"]
  },
  {
    title: "Face of Fame — Social Influencer Simulator",
    description: "A camera-enabled game where you juggle followers, authenticity, and mental health in the race to become an online star.",
    imageUrl: "https://images.unsplash.com/photo-1619190324856-af3f6eb55601?q=80&w=1170&auto=format&fit=crop",
    projectUrl: "/projects/",
    tags: ["React", "Node.js", "JavaScript", "WebRTC", "MediaPipe", "CSS3"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-16 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 dark:from-blue-900/30 dark:to-purple-900/30" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-pink-500/20 to-purple-500/20 rounded-full blur-3xl dark:from-pink-900/30 dark:to-purple-900/30" />
        </div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white text-transparent bg-clip-text">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kefi Moetaz</span>
          </h1>
          <AnimatedTitle />
          <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
            A Full Stack Developer who turns ideas into elegant code.
            Specializing in React, Node.js, and AI integration to build the next generation of web applications.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#contact"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition-all duration-300 hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              Contact Me
            </Link>
            <Link
              href="#projects"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              View My Work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 overflow-hidden bg-white dark:bg-gray-800">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl dark:from-blue-900/20 dark:to-purple-900/20" />
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl dark:from-purple-900/20 dark:to-pink-900/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white text-transparent bg-clip-text sm:text-4xl mb-4">
              About Me
            </h2>
            <div className="mt-6 flex items-center justify-center gap-6">
              <a
                href="https://github.com/kefimoetaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/kefi-moetaz-912344270/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-[#0077B5] transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a
                href="/cv/kefi%20moetaz.pdf"
                download="Kefi_Moetaz_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                <FaDownload className="w-5 h-5" />
                <span className="font-medium">Download CV</span>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative group">
              <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10"></div>
                <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-400/5 mix-blend-overlay"></div>
                <Image
                  src="/proimg.png"
                  alt="Profile"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-24 bg-gradient-to-t from-white to-transparent dark:from-gray-800 opacity-60 blur-2xl"></div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  I craft modern web experiences using React and Next.js on the frontend, powered by Node.js and Python backends. From responsive UIs to scalable APIs, I build solutions that users love and businesses rely on.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  My toolkit includes the latest in web technologies, DevOps practices, and AI integration. I'm passionate about clean code, performance optimization, and staying ahead of tech trends to deliver exceptional digital experiences.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                >
                  Get in Touch
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 font-semibold rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <TechnicalSkills />

      {/* Projects Section */}
      <section id="projects" className="relative py-24 overflow-hidden bg-gray-50 dark:bg-gray-900">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl dark:from-blue-900/20 dark:to-purple-900/20" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl dark:from-purple-900/20 dark:to-pink-900/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white text-transparent bg-clip-text sm:text-4xl mb-4">
              My Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-xl">
              Here are some of my featured works, showcasing my expertise in web development, game development, and AI integration
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 overflow-hidden bg-white dark:bg-gray-800">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl dark:from-blue-900/20 dark:to-purple-900/20" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl dark:from-purple-900/20 dark:to-pink-900/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white text-transparent bg-clip-text sm:text-4xl mb-4">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-xl">
              I'm always open to new opportunities and collaborations. Let's create something amazing together!
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
