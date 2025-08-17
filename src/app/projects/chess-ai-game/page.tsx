import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaDownload, FaChess, FaBrain, FaGamepad } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';
import { BiBot, BiUser } from 'react-icons/bi';
import { MdSecurity, MdSpeed, MdSmartToy } from 'react-icons/md';
import { GiChessKing, GiChessQueen, GiChessRook, GiChessBishop, GiChessKnight, GiChessPawn } from 'react-icons/gi';

export default function ChessAIGameProject() {
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
              src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2070&auto=format&fit=crop"
              alt="Chess Game with AI Interface"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <FaChess className="text-4xl" />
                <h1 className="text-4xl font-bold">Chess Game with AI Opponent ♟️</h1>
              </div>
              <p className="text-xl opacity-90">Strategic AI-powered chess implementation in Python</p>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 flex items-center gap-1">
                <SiPython className="w-4 h-4" />
                Python 3.6+
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Tkinter GUI
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                PIL/Pillow
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                AI Algorithm
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                Game Logic
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A fully functional chess game built in Python with Tkinter GUI, featuring a strategic AI opponent and complete chess rule implementation. 
                This project demonstrates advanced game development concepts, AI decision-making algorithms, and comprehensive rule validation systems.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🎯 Core Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center mb-3">
                    <FaGamepad className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Complete Chess Implementation</h3>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>✅ All standard chess rules implemented</li>
                    <li>✅ Turn-based gameplay (White vs Black)</li>
                    <li>✅ Legal move validation for all pieces</li>
                    <li>✅ Check and checkmate detection</li>
                    <li>✅ Castling support (kingside & queenside)</li>
                    <li>✅ Pawn promotion with piece selection</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center mb-3">
                    <FaBrain className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Strategic AI Opponent</h3>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>🤖 Intelligent AI bot playing as Black</li>
                    <li>🧠 Advanced move evaluation system</li>
                    <li>⚡ Automatic check escape responses</li>
                    <li>👑 Smart pawn promotion to Queen</li>
                    <li>🎯 Center control prioritization</li>
                    <li>📊 Material value assessment</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🎨 User Interface Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
                  <div className="text-3xl mb-2">🎨</div>
                  <h4 className="font-semibold mb-1">Visual Chessboard</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">8x8 board with alternating colors</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
                  <div className="text-3xl mb-2">🖼️</div>
                  <h4 className="font-semibold mb-1">Custom Graphics</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">High-quality PNG piece images</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
                  <div className="text-3xl mb-2">🖱️</div>
                  <h4 className="font-semibold mb-1">Click Interface</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Intuitive piece selection & movement</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">♟️ Chess Pieces & Rules</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <GiChessKing className="w-12 h-12 mx-auto mb-2 text-yellow-600" />
                  <h4 className="font-semibold text-sm">King</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">One square any direction</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <GiChessQueen className="w-12 h-12 mx-auto mb-2 text-purple-600" />
                  <h4 className="font-semibold text-sm">Queen</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Any direction, any distance</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <GiChessRook className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                  <h4 className="font-semibold text-sm">Rook</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Horizontal & vertical</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <GiChessBishop className="w-12 h-12 mx-auto mb-2 text-green-600" />
                  <h4 className="font-semibold text-sm">Bishop</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Diagonal movement</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <GiChessKnight className="w-12 h-12 mx-auto mb-2 text-orange-600" />
                  <h4 className="font-semibold text-sm">Knight</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">L-shaped jumps</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <GiChessPawn className="w-12 h-12 mx-auto mb-2 text-gray-600" />
                  <h4 className="font-semibold text-sm">Pawn</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Forward, diagonal capture</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🤖 AI Algorithm Details</h2>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdSmartToy className="w-6 h-6 mr-2 text-blue-600" />
                  Move Evaluation System
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">🎯 Scoring Priorities</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Material Value:</strong> Queen=9, Rook=5, Bishop/Knight=3, Pawn=1</li>
                      <li>• <strong>Center Control:</strong> d4, d5, e4, e5 squares prioritized</li>
                      <li>• <strong>Piece Advancement:</strong> Moving toward opponent</li>
                      <li>• <strong>Check Response:</strong> Mandatory escape when threatened</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">⚙️ Decision Process</h4>
                    <ol className="text-sm space-y-1">
                      <li>1. Generate all legal moves</li>
                      <li>2. Evaluate each move's score</li>
                      <li>3. Prioritize captures and threats</li>
                      <li>4. Select highest-scoring move</li>
                    </ol>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🛠️ Technical Implementation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <SiPython className="w-5 h-5 mr-2 text-blue-600" />
                    Core Architecture
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li><strong>Object-Oriented Design</strong> - Main Board class</li>
                    <li><strong>Event-Driven GUI</strong> - Tkinter button callbacks</li>
                    <li><strong>Modular Functions</strong> - Separate validation methods</li>
                    <li><strong>State Management</strong> - Game state tracking</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <MdSpeed className="w-5 h-5 mr-2 text-green-600" />
                    Key Components
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li><code>select_piece()</code> - Handle player moves</li>
                    <li><code>allowed_piece_move()</code> - Validate movements</li>
                    <li><code>in_check()</code> - Detect check conditions</li>
                    <li><code>bot_move()</code> - AI decision making</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🚀 Installation & Usage</h2>
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-6 font-mono text-sm">
                <div className="mb-4">
                  <div className="text-gray-400"># Install dependencies</div>
                  <div>pip install pillow</div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-400"># Clone and run</div>
                  <div>git clone [repository-url]</div>
                  <div>cd chess-game</div>
                  <div>python chess.py</div>
                </div>
                <div>
                  <div className="text-gray-400"># Game controls</div>
                  <div>Left click: Select piece → Select destination</div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🎮 How to Play</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <BiUser className="w-5 h-5 mr-2 text-blue-600" />
                    Player (White)
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• Click your piece to select it</li>
                    <li>• Click destination square to move</li>
                    <li>• Invalid moves are automatically rejected</li>
                    <li>• You always move first</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <BiBot className="w-5 h-5 mr-2 text-purple-600" />
                    AI Opponent (Black)
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• Automatically responds to your moves</li>
                    <li>• Evaluates all possible moves</li>
                    <li>• Prioritizes captures and center control</li>
                    <li>• Plays strategically to win</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🚧 Future Enhancements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Gameplay Features</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>□ En passant capture implementation</li>
                    <li>□ Move history and undo functionality</li>
                    <li>□ Save/Load game feature</li>
                    <li>□ Move timer and clock</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">AI Improvements</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>□ Multiple difficulty levels</li>
                    <li>□ Opening book integration</li>
                    <li>□ Deeper move analysis</li>
                    <li>□ Game analysis and suggestions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">Project Achievements</h3>
                <ul className="list-disc list-inside text-green-800 dark:text-green-200 space-y-1">
                  <li>Complete chess rule implementation with all special moves</li>
                  <li>Strategic AI opponent with intelligent decision-making</li>
                  <li>Clean, maintainable object-oriented code architecture</li>
                  <li>User-friendly GUI with visual feedback and piece graphics</li>
                  <li>Robust move validation and game state management</li>
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
                  Download Game
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}