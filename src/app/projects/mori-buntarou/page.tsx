import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaMountain, FaRobot, FaComments, FaLanguage } from 'react-icons/fa';
import { SiPython, SiStreamlit, SiJavascript } from 'react-icons/si';

export default function MoriBuntarouProject() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
        >
          ← Back to Projects
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2070&auto=format&fit=crop"
              alt="Mori Buntarou AI Chatbot"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mori Buntarou - AI Mountain Climbing Chatbot
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Python
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Streamlit
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Large Language Models
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                NLP
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Chatbot Development
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                JavaScript
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Mori Buntarou is an interactive AI chatbot that embodies a stoic mountain climber character with authentic personality modeling 
                and comprehensive mountaineering knowledge. The application combines local LLM integration with a manga-inspired interface, 
                delivering instant responses while maintaining character authenticity and providing valuable climbing insights.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Character Profile</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Mori Buntarou</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Personality:</strong> Stoic, wise, and experienced mountain climber with decades of climbing expertise
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Expertise:</strong> Alpine climbing, mountaineering safety, weather analysis, and equipment knowledge
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Communication Style:</strong> Calm, thoughtful, and philosophical with practical wisdom
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaRobot className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Authentic Character AI</h3>
                      <p className="text-gray-600 dark:text-gray-300">Deep personality modeling with consistent character traits</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaMountain className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Mountaineering Expertise</h3>
                      <p className="text-gray-600 dark:text-gray-300">Comprehensive knowledge of climbing techniques and safety</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaComments className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Natural Conversations</h3>
                      <p className="text-gray-600 dark:text-gray-300">Engaging dialogue with philosophical insights</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <SiStreamlit className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Manga-Inspired Interface</h3>
                      <p className="text-gray-600 dark:text-gray-300">Beautiful UI with Japanese aesthetic elements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaLanguage className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Local LLM Integration</h3>
                      <p className="text-gray-600 dark:text-gray-300">Fast, private responses without external API calls</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SiJavascript className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Interactive Elements</h3>
                      <p className="text-gray-600 dark:text-gray-300">Dynamic UI components with smooth animations</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technical Implementation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">AI & NLP Stack</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Local Large Language Model integration</li>
                    <li>Natural Language Processing with NLTK</li>
                    <li>Character personality prompt engineering</li>
                    <li>Regular expressions for response filtering</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Frontend & UX</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Streamlit for rapid web app development</li>
                    <li>Custom CSS for manga-inspired styling</li>
                    <li>JavaScript for interactive elements</li>
                    <li>Responsive design for all devices</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Development Timeline</h2>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">Project Duration</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">May 2025 - June 2025</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Developed over 2 months with focus on character authenticity and user experience
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Impact</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This project demonstrates advanced skills in AI character development, natural language processing, and user interface design. 
                It showcases the ability to create engaging, personality-driven AI applications that provide both entertainment and educational value. 
                The combination of technical expertise and creative character design makes this a unique addition to the AI chatbot landscape.
              </p>

              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/kefimoetaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-colors duration-300"
                >
                  <FaGithub className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Try Chatbot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}