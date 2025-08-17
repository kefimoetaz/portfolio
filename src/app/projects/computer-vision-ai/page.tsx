import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaEye, FaCar, FaUsers, FaTrafficLight, FaRocket } from 'react-icons/fa';
import { SiPython, SiOpencv, SiTensorflow } from 'react-icons/si';

export default function ComputerVisionAIProject() {
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
              src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2070&auto=format&fit=crop"
              alt="AI Computer Vision Analysis System"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Computer Vision Analysis System
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Python
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                YOLOv8
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Computer Vision
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Machine Learning
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Real-time Processing
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                GUI Development
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                An advanced AI-powered computer vision platform that automatically detects and counts people, vehicles, and traffic lights in real-time. 
                Built with YOLOv8 for high-accuracy object detection, featuring parallel batch processing, live video analysis, and a modern GUI interface. 
                Achieved 95%+ detection accuracy with 70% performance improvement through optimized parallel processing.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaEye className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Real-time Object Detection</h3>
                      <p className="text-gray-600 dark:text-gray-300">YOLOv8-powered detection with 95%+ accuracy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaUsers className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">People Counting</h3>
                      <p className="text-gray-600 dark:text-gray-300">Accurate pedestrian detection and counting</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaCar className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Vehicle Detection</h3>
                      <p className="text-gray-600 dark:text-gray-300">Multi-class vehicle identification and tracking</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaTrafficLight className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Traffic Light Recognition</h3>
                      <p className="text-gray-600 dark:text-gray-300">Smart traffic infrastructure monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaRocket className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Parallel Processing</h3>
                      <p className="text-gray-600 dark:text-gray-300">70% performance improvement through optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SiOpencv className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Multiple Input Sources</h3>
                      <p className="text-gray-600 dark:text-gray-300">Webcam, video files, and RTSP streams support</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technical Implementation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Core Technologies</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>YOLOv8 for object detection</li>
                    <li>OpenCV for image processing</li>
                    <li>Python multiprocessing for parallel execution</li>
                    <li>Tkinter for modern GUI interface</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Performance Features</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Batch processing optimization</li>
                    <li>Real-time video stream analysis</li>
                    <li>Memory-efficient processing pipeline</li>
                    <li>Configurable detection thresholds</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Impact</h2>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">95%+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Detection Accuracy</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">70%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Performance Improvement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Object Classes Detected</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This project demonstrates advanced expertise in computer vision, machine learning, and performance optimization. 
                It showcases the ability to build production-ready AI systems with real-world applications in traffic monitoring, 
                security systems, and urban planning.
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
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}