// "use client";

// import React, { useState, useEffect } from "react";

// export default function VoicePage() {
//   const [mounted, setMounted] = useState(false);
//   const [userInfo, setUserInfo] = useState({
//     role: "worker" as "worker" | "employer",
//     name: "User",
//     id: "anonymous",
//   });

//   // Get user info from localStorage or context
//   useEffect(() => {
//     setMounted(true);

//     try {
//       // Try to get from localStorage
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) {
//         const parsed = JSON.parse(storedUser);
//         setUserInfo({
//           role: parsed.role || "worker",
//           name: parsed.name || "User",
//           id: parsed.id || "anonymous",
//         });
//       }
//     } catch (error) {
//       console.error("User info error:", error);
//     }
//   }, []);

//   if (!mounted) return null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       {/* Header */}
//       <div className="bg-white shadow-md sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-6 py-6">
//           <h1 className="text-3xl font-bold text-gray-900">🎤 Voice Assistant</h1>
//           <p className="text-gray-600 mt-2">
//             Speak to find jobs, check ratings, post opportunities, and more!
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Chat Area */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-lg p-8 h-full">
//               <div className="text-center space-y-6">
//                 <div className="inline-block p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
//                   <span className="text-6xl">🎤</span>
//                 </div>

//                 <h2 className="text-2xl font-bold text-gray-900">
//                   Welcome, {userInfo.role === "employer" ? "Employer" : "Worker"}!
//                 </h2>

//                 <p className="text-gray-600 max-w-md mx-auto">
//                   {userInfo.role === "employer"
//                     ? "Use voice commands to post jobs, find workers, and manage applications."
//                     : "Use voice commands to find jobs, check your rating, and more."}
//                 </p>

//                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
//                   <p className="font-semibold mb-2">💡 Try saying:</p>
//                   <ul className="space-y-1 text-left">
//                     {userInfo.role === "employer" ? (
//                       <>
//                         <li>• "I need a plumber for tomorrow"</li>
//                         <li>• "Show me experienced workers"</li>
//                         <li>• "Find electricians near me"</li>
//                         <li>• "What is my job rating?"</li>
//                       </>
//                     ) : (
//                       <>
//                         <li>• "Find electrician jobs near me"</li>
//                         <li>• "Show jobs above 2000 rupees per day"</li>
//                         <li>• "What is my current rating?"</li>
//                         <li>• "Mark me available today"</li>
//                       </>
//                     )}
//                   </ul>
//                 </div>

//                 <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
//                   <p className="text-sm text-gray-600">
//                     <strong>🌍 Multilingual Support:</strong> Speak in English, Urdu, or
//                     mix both! The bot understands and responds in your language.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Features Sidebar */}
//           <div className="space-y-6">
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-lg font-bold text-gray-900 mb-4">✨ Features</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-3">
//                   <span className="text-blue-600 font-bold">🎯</span>
//                   <div>
//                     <p className="font-semibold text-sm">Smart Search</p>
//                     <p className="text-xs text-gray-600">Find jobs by skills, location, budget</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-blue-600 font-bold">⭐</span>
//                   <div>
//                     <p className="font-semibold text-sm">Rating Check</p>
//                     <p className="text-xs text-gray-600">See your worker or employer rating</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-blue-600 font-bold">📱</span>
//                   <div>
//                     <p className="font-semibold text-sm">Job Posting</p>
//                     <p className="text-xs text-gray-600">Post jobs and find workers</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-blue-600 font-bold">🔊</span>
//                   <div>
//                     <p className="font-semibold text-sm">Hands-Free</p>
//                     <p className="text-xs text-gray-600">Speak and listen to responses</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-blue-600 font-bold">🌐</span>
//                   <div>
//                     <p className="font-semibold text-sm">Multilingual</p>
//                     <p className="text-xs text-gray-600">English, Urdu + more languages</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg shadow-md p-6 text-white">
//               <h3 className="text-lg font-bold mb-2">❓ Need Help?</h3>
//               <p className="text-sm mb-4 opacity-90">
//                 Just press the microphone button at the bottom right and speak naturally!
//               </p>
//               <button className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
//                 View All Commands
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Voice Bot Component */}
//       <EnhancedVoiceBot
//         userRole={userInfo.role}
//         userName={userInfo.name}
//         userId={userInfo.id}
//         language="auto"
//       />
//     </div>
//   );
// }
