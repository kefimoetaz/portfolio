import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaWindows, FaTools, FaCog, FaChartBar, FaDownload } from 'react-icons/fa';
import { SiPython, SiChocolatey } from 'react-icons/si';
import { BiAnalyse, BiCloudDownload } from 'react-icons/bi';
import { MdCleaningServices, MdSpeed, MdSecurity } from 'react-icons/md';

export default function PCTechnicianAssistantProject() {
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
                            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2125&auto=format&fit=crop"
                            alt="PC Technician Assistant Interface"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h1 className="text-4xl font-bold mb-2">PC Technician Assistant</h1>
                            <p className="text-xl opacity-90">Comprehensive Windows System Utility Tool</p>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 flex items-center gap-1">
                                <SiPython className="w-4 h-4" />
                                Python
                            </span>
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Tkinter
                            </span>
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                                psutil
                            </span>
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 flex items-center gap-1">
                                <SiChocolatey className="w-4 h-4" />
                                Chocolatey
                            </span>
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 flex items-center gap-1">
                                <FaWindows className="w-4 h-4" />
                                Windows
                            </span>
                        </div>

                        <div className="prose dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                PC Technician Assistant is a comprehensive Windows system utility tool designed specifically for PC technicians and system administrators.
                                It combines multiple essential system management functions into a single, user-friendly interface, streamlining common maintenance tasks
                                and providing detailed system insights.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <BiAnalyse className="w-8 h-8 text-blue-600 mr-3" />
                                        <h3 className="font-semibold text-gray-900 dark:text-white">System Scanner</h3>
                                    </div>
                                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                        <li>• Complete system overview (CPU, RAM, OS, BIOS)</li>
                                        <li>• Real-time performance metrics</li>
                                        <li>• Disk usage analysis</li>
                                        <li>• Network statistics</li>
                                        <li>• Boot time information</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <BiCloudDownload className="w-8 h-8 text-green-600 mr-3" />
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Software Installer</h3>
                                    </div>
                                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                        <li>• Install popular software via Chocolatey</li>
                                        <li>• Batch installation support</li>
                                        <li>• Progress tracking</li>
                                        <li>• Chrome, Firefox, VLC, 7-Zip, Adobe Reader</li>
                                        <li>• Notepad++, Git, Python, VS Code</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <MdCleaningServices className="w-8 h-8 text-purple-600 mr-3" />
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Disk Cleaner</h3>
                                    </div>
                                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                        <li>• Clean temporary files</li>
                                        <li>• Browser cache cleanup</li>
                                        <li>• Empty recycle bin</li>
                                        <li>• System log cleanup</li>
                                        <li>• Shows space freed after cleanup</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <MdSpeed className="w-8 h-8 text-orange-600 mr-3" />
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Startup Manager</h3>
                                    </div>
                                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                        <li>• View all startup programs</li>
                                        <li>• Registry and folder-based startup items</li>
                                        <li>• Enable/disable startup programs</li>
                                        <li>• Performance impact assessment</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <FaChartBar className="w-8 h-8 text-red-600 mr-3" />
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Report Generator</h3>
                                    </div>
                                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                        <li>• Comprehensive system reports</li>
                                        <li>• Multiple export formats (TXT, JSON)</li>
                                        <li>• Includes all scan results</li>
                                        <li>• Timestamped reports</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <MdSecurity className="w-8 h-8 text-indigo-600 mr-3" />
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Admin Features</h3>
                                    </div>
                                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                        <li>• Administrator privilege detection</li>
                                        <li>• Windows registry access</li>
                                        <li>• System-level operations</li>
                                        <li>• Safe operation protocols</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technical Implementation</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                                        <FaTools className="w-5 h-5 mr-2 text-blue-600" />
                                        Core Technologies
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                                        <li><strong>Python 3.7+</strong> - Main programming language</li>
                                        <li><strong>Tkinter</strong> - Native GUI framework</li>
                                        <li><strong>psutil</strong> - System and process utilities</li>
                                        <li><strong>winreg</strong> - Windows registry access</li>
                                        <li><strong>subprocess</strong> - System command execution</li>
                                        <li><strong>threading</strong> - Asynchronous operations</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                                        <FaCog className="w-5 h-5 mr-2 text-green-600" />
                                        System Integration
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                                        <li><strong>Chocolatey</strong> - Package management integration</li>
                                        <li><strong>Windows API</strong> - Deep system access</li>
                                        <li><strong>Registry Management</strong> - Startup program control</li>
                                        <li><strong>File System Operations</strong> - Cleanup and analysis</li>
                                        <li><strong>Process Monitoring</strong> - Real-time metrics</li>
                                        <li><strong>Multi-threading</strong> - Responsive UI</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Installation & Usage</h2>
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
                                <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                                    <li>Windows 10/11</li>
                                    <li>Python 3.7+</li>
                                    <li>Administrator privileges (for some features)</li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">Quick Start</h3>
                                <div className="bg-gray-900 text-green-400 p-4 rounded-md font-mono text-sm">
                                    <div># Clone the repository</div>
                                    <div>git clone [repository-url]</div>
                                    <div className="mt-2"># Install dependencies</div>
                                    <div>pip install -r requirements.txt</div>
                                    <div className="mt-2"># Run the application</div>
                                    <div>python pc_technician_assistant.py</div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Impact</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                This project demonstrates expertise in desktop application development, system-level programming, and Windows API integration.
                                It showcases the ability to create practical tools that solve real-world problems for IT professionals, combining multiple
                                complex functionalities into a cohesive, user-friendly application.
                            </p>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
                                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Learning Outcomes</h3>
                                <ul className="list-disc list-inside text-blue-800 dark:text-blue-200">
                                    <li>Advanced Python GUI development with Tkinter</li>
                                    <li>Windows system programming and API integration</li>
                                    <li>Multi-threaded application architecture</li>
                                    <li>Package management system integration</li>
                                    <li>System administration automation</li>
                                </ul>
                            </div>

                            <div className="flex items-center space-x-4">
                                <a
                                    href="https://github.com/kefimoetaz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-colors duration-300"
                                >
                                    <FaGithub className="w-5 h-5 mr-2" />
                                    View on GitHub
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                                >
                                    <FaDownload className="w-5 h-5 mr-2" />
                                    Download Tool
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}