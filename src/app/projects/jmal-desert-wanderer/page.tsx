import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaRobot, FaHeart, FaBrain, FaComments, FaArrowLeft } from "react-icons/fa";

export default function JmalDesertWanderer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            <h1 className="text-4xl font-bold text-white mb-4 sm:text-6xl">
              Jmal - The Ancient Desert Wanderer
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              An emotionally resonant AI chatbot featuring a 1000-year-old robotic camel character with advanced conversational capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1705291700057-bcb1d22dc18c?q=80&w=1170&auto=format&fit=crop"
                alt="Jmal Desert Wanderer AI Chatbot"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About the Project
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Jmal is an innovative AI chatbot that brings to life a 1000-year-old robotic camel character 
                who has wandered the deserts of the world. This emotionally intelligent AI system combines 
                advanced natural language processing with a rich, developed personality that creates 
                meaningful and engaging conversations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaBrain className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Advanced conversational AI with emotional intelligence
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaComments className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Rich character development with 1000-year backstory
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaRobot className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Natural language processing and understanding
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaHeart className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Emotionally resonant and engaging conversations
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Machine Learning', 'CharacterAI', 'ConversationalAI', 'LLM', 'Chatbot Development'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                View Project Details
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Implementation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                AI Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built with advanced language models and natural language processing 
                to create authentic conversational experiences.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Character Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Extensive character backstory and personality development to create 
                a truly engaging and memorable AI companion.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Emotional Intelligence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced emotional recognition and response systems to create 
                meaningful and empathetic interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}