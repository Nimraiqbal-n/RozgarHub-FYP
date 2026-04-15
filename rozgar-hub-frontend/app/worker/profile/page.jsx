// // "use client";
// // import { useEffect, useState, useRef } from "react";
// // import { io } from "socket.io-client";
// // import dynamic from "next/dynamic";
// // import {
// //   Briefcase, CheckCircle, LogOut, Menu, X,
// //   MapPin, DollarSign, Bell, PlusCircle,
// //   ThumbsUp, ThumbsDown, MessageSquare, Search, SlidersHorizontal,
// //   Upload, Car
// // } from "lucide-react";
// // import JobTracker from "@/components/JobTracker";

// // const JobMap = dynamic(() => import("@/components/JobMap"), { ssr: false });

// // const socket = io("http://localhost:5000");
// // if (typeof window !== "undefined") {
// //   window._rozgarSocket = socket;
// //   socket.on("connect",    () => console.log("✅ Worker socket CONNECTED"));
// //   socket.on("disconnect", () => console.log("❌ Worker socket DISCONNECTED"));
// // }

// // const API = "http://localhost:5000";

// // const T = {
// //   en: {
// //     dir: "ltr", brand: "RozgarHub", role: "WORKER",
// //     navRequests: "Job Requests", navApplied: "My Applications",
// //     navBrowse: "Browse Jobs", navHistory: "Job History", navAvail: "Post Availability",
// //     logout: "Logout", online: "Online",
// //     headerRequests: "Incoming Requests", headerApplied: "My Applications",
// //     headerBrowse: "Browse Jobs", headerHistory: "Job History", welcomeBack: "Welcome back",
// //     waitingTitle: "Waiting for job requests...",
// //     waitingDesc: "When an employer posts a job in your area, it will pop up automatically.",
// //     incomingTitle: "New request incoming!", incomingDesc: "Check the popup to respond.",
// //     recentNotifs: "Recent Notifications", noApps: "No applications yet.",
// //     appliedOn: "Applied", recently: "recently", pending: "Pending", shortlisted: "Shortlisted",
// //     applyNow: "Apply Now", applyFor: "Apply for Job",
// //     employerListedRate: "Employer Listed Rate", yourOffer: "Your Offer (PKR)",
// //     aboveRate: "above listed rate", belowRate: "below listed rate",
// //     matchingRate: "Matching employer's listed rate",
// //     submitApp: "Submit Application", newJobRequest: "New Job Request", employerOffer: "EMPLOYER OFFER",
// //     acceptJob: "Accept Job", declineJob: "Decline",
// //     counterOffer: "Counter Offer", sendCounter: "Send Counter",
// //     offerSent: "Counter Offer Sent! Waiting for employer...",
// //     yourOfferWas: "Your counter offer:", counterReceived: "EMPLOYER COUNTER OFFER",
// //     yourOfferWasLabel: "Your offer was",
// //     accept: "Accept", reject: "Reject",
// //     jobConfirmed: "Job Confirmed!", jobConfirmedDesc: "Get ready to go to the job site",
// //     viewJobDetails: "Track Job",
// //     offerRejected: "Not Selected", offerRejectedDesc: "The employer chose another worker",
// //     close: "Close", dismissed: "Request Dismissed",
// //     dismissedDesc: "The employer dismissed your acceptance",
// //     postAvailTitle: "Post Your Availability",
// //     skillLabel: "Your Skill / Trade", skillPlaceholder: "e.g., Electrician, Plumber, Driver",
// //     expLabel: "Years of Experience", expPlaceholder: "e.g., 5 years",
// //     rateLabel: "Hourly Rate (PKR)", ratePlaceholder: "e.g., 500",
// //     locLabel: "Your Location", locPlaceholder: "e.g., Karachi, Lahore",
// //     descLabel: "Description", descPlaceholder: "Describe your skills...",
// //     postBtn: "Post Availability", cancelBtn: "Cancel",
// //     driverLicenseSection: "Driver License (Required for Drivers)",
// //     driverLicenseHint: "Upload your driving license — it will be saved to your profile and earn you points.",
// //     uploadLicenseBtn: "Upload License", licenseUploaded: "License Uploaded!",
// //     licenseUploading: "Uploading...", chooseLicense: "Choose license image or PDF",
// //     swalPosted: "Posted!", swalPostedText: "Availability updated.",
// //     swalError: "Error", swalErrorText: "Failed to post.",
// //     swalSavedLocally: "Saved Locally", swalSavedLocallyText: "Saved locally.",
// //     swalAppSent: "Application Sent!", swalAppSentText: "Submitted. We'll notify you.",
// //     swalOops: "Oops!", swalAlreadyApplied: "You may have already applied.",
// //     swalRejectCounter: "Reject Counter?", swalRejectCounterText: "Are you sure?",
// //     swalYesReject: "Yes, Reject", swalGoBack: "Go Back",
// //     swalLogout: "Logout?", swalLogoutText: "Are you sure?",
// //     swalYesLogout: "Yes, Logout", swalGreat: "Great!", langToggle: "اردو",
// //     optionalCounter: "Enter counter price (Rs.)...",
// //     counterNote: "Propose a different price instead",
// //     aiFilterPlaceholder: "e.g. Electrician in Lahore under 2000, urgent",
// //     aiFilterBtn: "Apply Filter", aiFiltering: "Finding jobs...",
// //     activeFilters: "Active Filters", clearFilters: "Clear",
// //     noJobsFound: "No jobs found", noJobsFoundSub: "Try a different search or clear filters",
// //     noHistory: "No completed jobs yet", noHistorySub: "Finished jobs will appear here",
// //     profileProgress: "Profile Progress", profileComplete: "Profile Complete!",
// //     completeYourProfile: "Complete your profile to get more jobs",
// //     stepRegistered: "Account Registered",
// //     stepProfilePhoto: "Profile Photo Uploaded",
// //     stepCnicDocs: "CNIC Documents Uploaded",
// //     stepAvailability: "Availability Posted",
// //     stepLicense: "Driving License Uploaded",
// //     stepVerified: "Admin Verified",
// //     tapToComplete: "Tap to complete",
// //     trackingHeader: "Job In Progress",
// //     // Notification strings
// //     notifications: "Notifications",
// //     notifSubtitle: "Job alerts will appear here",
// //     markAllRead: "Mark all read",
// //     clearAll: "Clear all",
// //     noNotifications: "No notifications yet",
// //   },
// //   ur: {
// //     dir: "rtl", brand: "روزگار ہب", role: "ورکر",
// //     navRequests: "نوکری کی درخواستیں", navApplied: "میری درخواستیں",
// //     navBrowse: "نوکریاں دیکھیں", navHistory: "نوکری کی تاریخ", navAvail: "دستیابی پوسٹ کریں",
// //     logout: "لاگ آؤٹ", online: "آن لائن",
// //     headerRequests: "آنے والی درخواستیں", headerApplied: "میری درخواستیں",
// //     headerBrowse: "نوکریاں دیکھیں", headerHistory: "نوکری کی تاریخ", welcomeBack: "خوش آمدید",
// //     waitingTitle: "نوکری کی درخواستوں کا انتظار ہے...",
// //     waitingDesc: "جب آپ کے علاقے میں کوئی نوکری پوسٹ ہوگی، خود بخود آجائے گی",
// //     incomingTitle: "نئی درخواست آ رہی ہے!", incomingDesc: "پاپ اپ میں جواب دیں",
// //     recentNotifs: "حالیہ اطلاعات", noApps: "ابھی کوئی درخواست نہیں",
// //     appliedOn: "درخواست دی", recently: "حال ہی میں", pending: "زیر التواء", shortlisted: "منتخب",
// //     applyNow: "ابھی درخواست دیں", applyFor: "نوکری کے لیے درخواست",
// //     employerListedRate: "آجر کی مقررہ شرح", yourOffer: "آپ کی پیشکش (روپے)",
// //     aboveRate: "مقررہ شرح سے زیادہ", belowRate: "مقررہ شرح سے کم",
// //     matchingRate: "آجر کی مقررہ شرح کے برابر",
// //     submitApp: "درخواست جمع کریں", newJobRequest: "نئی نوکری کی درخواست", employerOffer: "آجر کی پیشکش",
// //     acceptJob: "نوکری قبول کریں", declineJob: "رد کریں",
// //     counterOffer: "جوابی پیشکش", sendCounter: "بھیجیں",
// //     offerSent: "جوابی پیشکش بھیج دی گئی!",
// //     yourOfferWas: "آپ کی جوابی پیشکش:", counterReceived: "آجر کی جوابی پیشکش",
// //     yourOfferWasLabel: "آپ کی پیشکش تھی",
// //     accept: "قبول کریں", reject: "رد کریں",
// //     jobConfirmed: "نوکری کی تصدیق!", jobConfirmedDesc: "کام کی جگہ پر جانے کے لیے تیار ہوں",
// //     viewJobDetails: "نوکری ٹریک کریں",
// //     offerRejected: "منتخب نہیں ہوئے", offerRejectedDesc: "آجر نے دوسرا ورکر منتخب کیا",
// //     close: "بند کریں", dismissed: "درخواست واپس",
// //     dismissedDesc: "آجر نے آپ کی قبولیت رد کر دی",
// //     postAvailTitle: "اپنی دستیابی پوسٹ کریں",
// //     skillLabel: "آپ کی مہارت / پیشہ", skillPlaceholder: "مثلاً: الیکٹریشن، پلمبر، ڈرائیور",
// //     expLabel: "تجربے کے سال", expPlaceholder: "مثلاً: ۵ سال",
// //     rateLabel: "فی گھنٹہ اجرت (روپے)", ratePlaceholder: "مثلاً: ۵۰۰",
// //     locLabel: "آپ کا مقام", locPlaceholder: "مثلاً: کراچی، لاہور",
// //     descLabel: "تفصیل", descPlaceholder: "اپنی مہارتیں بیان کریں...",
// //     postBtn: "دستیابی پوسٹ کریں", cancelBtn: "منسوخ کریں",
// //     driverLicenseSection: "ڈرائیونگ لائسنس (ڈرائیوروں کے لیے ضروری)",
// //     driverLicenseHint: "اپنا لائسنس اپلوڈ کریں — پروفائل میں محفوظ ہو جائے گا اور پوائنٹس ملیں گے",
// //     uploadLicenseBtn: "لائسنس اپلوڈ کریں", licenseUploaded: "لائسنس اپلوڈ ہو گیا!",
// //     licenseUploading: "اپلوڈ ہو رہا ہے...", chooseLicense: "لائسنس تصویر یا PDF منتخب کریں",
// //     swalPosted: "پوسٹ ہو گئی!", swalPostedText: "دستیابی اپڈیٹ ہو گئی",
// //     swalError: "خرابی", swalErrorText: "پوسٹ کرنے میں ناکامی",
// //     swalSavedLocally: "مقامی طور پر محفوظ", swalSavedLocallyText: "مقامی طور پر محفوظ کیا گیا",
// //     swalAppSent: "درخواست بھیج دی!", swalAppSentText: "جمع ہو گئی",
// //     swalOops: "افسوس!", swalAlreadyApplied: "شاید پہلے ہی درخواست دے چکے ہیں",
// //     swalRejectCounter: "جوابی پیشکش رد کریں؟", swalRejectCounterText: "کیا آپ واقعی؟",
// //     swalYesReject: "ہاں، رد کریں", swalGoBack: "واپس جائیں",
// //     swalLogout: "لاگ آؤٹ؟", swalLogoutText: "کیا آپ واقعی؟",
// //     swalYesLogout: "ہاں، لاگ آؤٹ", swalGreat: "بہت اچھا!", langToggle: "English",
// //     optionalCounter: "جوابی قیمت درج کریں (روپے)...",
// //     counterNote: "مختلف قیمت تجویز کریں",
// //     aiFilterPlaceholder: "مثلاً: لاہور میں الیکٹریشن، ۲۰۰۰ سے کم، فوری",
// //     aiFilterBtn: "AI سے تلاش کریں", aiFiltering: "نوکریاں ڈھونڈ رہے ہیں...",
// //     activeFilters: "فعال فلٹر", clearFilters: "صاف کریں",
// //     noJobsFound: "کوئی نوکری نہیں ملی", noJobsFoundSub: "مختلف تلاش کریں یا فلٹر صاف کریں",
// //     noHistory: "ابھی کوئی مکمل نوکری نہیں", noHistorySub: "مکمل نوکریاں یہاں دکھیں گی",
// //     profileProgress: "پروفائل پروگریس", profileComplete: "پروفائل مکمل!",
// //     completeYourProfile: "زیادہ نوکریاں پانے کے لیے پروفائل مکمل کریں",
// //     stepRegistered: "اکاؤنٹ رجسٹر",
// //     stepProfilePhoto: "پروفائل فوٹو اپلوڈ",
// //     stepCnicDocs: "شناختی کارڈ اپلوڈ",
// //     stepAvailability: "دستیابی پوسٹ",
// //     stepLicense: "ڈرائیونگ لائسنس اپلوڈ",
// //     stepVerified: "ایڈمن سے تصدیق",
// //     tapToComplete: "مکمل کریں",
// //     trackingHeader: "نوکری جاری ہے",
// //     // Notification strings
// //     notifications: "اطلاعات",
// //     notifSubtitle: "نوکری کی اطلاعات یہاں دکھیں گی",
// //     markAllRead: "سب پڑھا",
// //     clearAll: "سب صاف کریں",
// //     noNotifications: "ابھی کوئی اطلاع نہیں",
// //   }
// // };

// // /* ═══════════════ NOTIFICATION BELL ═══════════════ */
// // function NotificationBell({ notifications, setNotifications, t }) {
// //   const [open, setOpen] = useState(false);
// //   const [readIds, setReadIds] = useState(new Set());
// //   const ref = useRef(null);

// //   useEffect(() => {
// //     const handler = (e) => {
// //       if (ref.current && !ref.current.contains(e.target)) setOpen(false);
// //     };
// //     document.addEventListener("mousedown", handler);
// //     return () => document.removeEventListener("mousedown", handler);
// //   }, []);

// //   const unreadCount = notifications.filter(n => !readIds.has(n.id)).length;

// //   const markAllRead = (e) => {
// //     e.stopPropagation();
// //     setReadIds(new Set(notifications.map(n => n.id)));
// //   };

// //   const clearAll = (e) => {
// //     e.stopPropagation();
// //     setNotifications([]);
// //     setReadIds(new Set());
// //     setOpen(false);
// //   };

// //   const notifIcon = (msg) => {
// //     if (msg.includes("confirmed") || msg.includes("accepted") || msg.includes("✅")) return { icon: "✅", bg: "#dcfce7", color: "#16a34a" };
// //     if (msg.includes("offer") || msg.includes("counter")) return { icon: "💬", bg: "#eff6ff", color: "#3b82f6" };
// //     if (msg.includes("job") || msg.includes("New")) return { icon: "📩", bg: "#fef3c7", color: "#d97706" };
// //     return { icon: "🔔", bg: "#f1f5f9", color: "#64748b" };
// //   };

// //   return (
// //     <div ref={ref} style={{ position: "relative" }}>
// //       <div
// //         onClick={() => setOpen(o => !o)}
// //         style={{
// //           display: "flex", alignItems: "center", gap: 6,
// //           background: open ? "#dcfce7" : "rgba(255,255,255,0.1)",
// //           padding: "6px 12px", borderRadius: 20, cursor: "pointer",
// //           border: open ? "1.5px solid #86efac" : "1.5px solid transparent",
// //           transition: "all .15s", position: "relative",
// //         }}
// //       >
// //         <Bell size={16} color={unreadCount > 0 ? "#34d399" : "rgba(255,255,255,0.6)"} />
// //         {unreadCount > 0 && (
// //           <div style={{
// //             position: "absolute", top: -4, right: -4,
// //             minWidth: 16, height: 16, padding: "0 4px",
// //             background: "#ef4444", borderRadius: "99px",
// //             fontSize: 9, color: "#fff", display: "flex",
// //             alignItems: "center", justifyContent: "center",
// //             fontWeight: 800, boxShadow: "0 0 0 2px #065f46",
// //           }}>
// //             {unreadCount > 9 ? "9+" : unreadCount}
// //           </div>
// //         )}
// //       </div>

// //       {open && (
// //         <div style={{
// //           position: "absolute", top: "calc(100% + 10px)", right: 0,
// //           width: 320, background: "#fff", borderRadius: 16,
// //           boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
// //           border: "1.5px solid #e2e8f0", zIndex: 999,
// //           overflow: "hidden",
// //         }}>
// //           {/* Header */}
// //           <div style={{
// //             padding: "14px 16px", display: "flex",
// //             alignItems: "center", justifyContent: "space-between",
// //             background: "linear-gradient(135deg,#064e3b,#065f46)",
// //             borderBottom: "1px solid rgba(255,255,255,.08)",
// //           }}>
// //             <div>
// //               <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{t.notifications}</div>
// //               <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginTop: 1 }}>{t.notifSubtitle}</div>
// //             </div>
// //             {notifications.length > 0 && (
// //               <button
// //                 onClick={markAllRead}
// //                 style={{
// //                   fontSize: 11, color: "#6ee7b7",
// //                   background: "rgba(255,255,255,.1)", border: "none",
// //                   borderRadius: 8, padding: "4px 9px",
// //                   cursor: "pointer", fontWeight: 600,
// //                 }}
// //               >
// //                 {t.markAllRead}
// //               </button>
// //             )}
// //           </div>

// //           {/* List */}
// //           <div style={{ maxHeight: 320, overflowY: "auto" }}>
// //             {notifications.length === 0 ? (
// //               <div style={{ padding: "36px 20px", textAlign: "center" }}>
// //                 <div style={{ fontSize: 32, marginBottom: 8 }}>🔔</div>
// //                 <p style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>{t.noNotifications}</p>
// //                 <p style={{ fontSize: 12, color: "#94a3b8" }}>{t.notifSubtitle}</p>
// //               </div>
// //             ) : (
// //               notifications.slice().reverse().map((n, i) => {
// //                 const isRead = readIds.has(n.id);
// //                 const { icon, bg, color } = notifIcon(n.msg);
// //                 return (
// //                   <div
// //                     key={n.id}
// //                     onClick={() => setReadIds(prev => new Set([...prev, n.id]))}
// //                     style={{
// //                       padding: "12px 16px",
// //                       borderBottom: i < notifications.length - 1 ? "1px solid #f8fafc" : "none",
// //                       display: "flex", alignItems: "flex-start", gap: 10,
// //                       background: isRead ? "#fff" : "#f8fff8",
// //                       cursor: "pointer", transition: "background .15s",
// //                     }}
// //                   >
// //                     <div style={{
// //                       width: 32, height: 32, borderRadius: "50%",
// //                       background: bg, display: "flex", alignItems: "center",
// //                       justifyContent: "center", fontSize: 14, flexShrink: 0,
// //                     }}>
// //                       {icon}
// //                     </div>
// //                     <div style={{ flex: 1, minWidth: 0 }}>
// //                       <p style={{
// //                         fontSize: 12.5, color: "#0f172a",
// //                         fontWeight: isRead ? 400 : 600,
// //                         lineHeight: 1.45, margin: 0,
// //                       }}>
// //                         {n.msg}
// //                       </p>
// //                       <p style={{ fontSize: 11, color: "#94a3b8", margin: "3px 0 0" }}>Just now</p>
// //                     </div>
// //                     {!isRead && (
// //                       <div style={{
// //                         width: 7, height: 7, borderRadius: "50%",
// //                         background: "#16a34a", flexShrink: 0, marginTop: 4,
// //                       }} />
// //                     )}
// //                   </div>
// //                 );
// //               })
// //             )}
// //           </div>

// //           {/* Footer */}
// //           {notifications.length > 0 && (
// //             <div style={{
// //               padding: "10px 16px", borderTop: "1px solid #f1f5f9",
// //               display: "flex", justifyContent: "center",
// //             }}>
// //               <button
// //                 onClick={clearAll}
// //                 style={{
// //                   fontSize: 12, color: "#ef4444",
// //                   background: "#fef2f2", border: "1px solid #fecaca",
// //                   borderRadius: 8, padding: "5px 14px",
// //                   cursor: "pointer", fontWeight: 600,
// //                 }}
// //               >
// //                 {t.clearAll}
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default function WorkerDashboard() {
// //   const [lang, setLang] = useState("en");
// //   const t = T[lang];

// //   const [user, setUser]               = useState(null);
// //   const [activeTab, setActiveTab]     = useState("requests");
// //   const [sidebarOpen, setSidebarOpen] = useState(true);

// //   const [incomingRequest, setIncomingRequest] = useState(null);
// //   const [showPopup, setShowPopup]             = useState(false);
// //   const [popupTimer, setPopupTimer]           = useState(30);
// //   const timerRef = useRef(null);
// //   const [popupState, setPopupState]           = useState(null);
// //   const [counterPrice, setCounterPrice]       = useState("");
// //   const [employerCounter, setEmployerCounter] = useState(null);

// //   const [confirmedJob, setConfirmedJob] = useState(null);
// //   const [showTracker, setShowTracker]   = useState(false);

// //   const [showApplyModal, setShowApplyModal] = useState(false);
// //   const [selectedJob, setSelectedJob]       = useState(null);
// //   const [offeredRate, setOfferedRate]       = useState("");
// //   const [appliedJobs, setAppliedJobs]       = useState([]);
// //   const [jobHistory, setJobHistory]         = useState([]);

// //   const [showAvailModal, setShowAvailModal] = useState(false);
// //   const [availability, setAvailability]     = useState({ skill:"", experience:"", hourlyRate:"", location:"", description:"", status:"available" });
// //   const [licenseFile, setLicenseFile]       = useState(null);
// //   const [licenseUploading, setLicenseUploading] = useState(false);
// //   const [licenseUploaded, setLicenseUploaded]   = useState(false);

// //   const [notifications, setNotifications] = useState([]);
// //   const [userProfile, setUserProfile]     = useState(null);

// //   const swal = (opts) => typeof window !== "undefined" && window.Swal && window.Swal.fire(opts);

// //   useEffect(() => {
// //     const handler = (e) => { e.preventDefault(); e.returnValue = "Your active session will be lost if you reload. Are you sure?"; return e.returnValue; };
// //     window.addEventListener("beforeunload", handler);
// //     return () => window.removeEventListener("beforeunload", handler);
// //   }, []);

// //   useEffect(() => {
// //     if (document.getElementById("swal-cdn")) return;
// //     const link = document.createElement("link"); link.rel = "stylesheet"; link.href = "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"; document.head.appendChild(link);
// //     const script = document.createElement("script"); script.id = "swal-cdn"; script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11"; document.head.appendChild(script);
// //   }, []);

// //   const refetchProfile = (token) => {
// //     const tk = token || localStorage.getItem("token");
// //     if (!tk) return;
// //     fetch(`${API}/api/auth/me`, { headers: { Authorization: `Bearer ${tk}` } })
// //       .then(r => r.json()).then(d => { if (d.user) setUserProfile(d.user); }).catch(() => {});
// //   };

// //   useEffect(() => {
// //     const stored = localStorage.getItem("user");
// //     if (!stored) return;
// //     const u = JSON.parse(stored);
// //     setUser(u);
// //     socket.emit("join", u.id);
// //     socket.emit("worker_online", { workerId: u.id, name: u.name });
// //     const token = localStorage.getItem("token");
// //     if (token) refetchProfile(token); else setUserProfile(u);

// //     fetch(`${API}/api/applications/${u.id}`).then(r => r.json()).then(setAppliedJobs).catch(() => {});

// //     const headers = token ? { Authorization: `Bearer ${token}` } : {};
// //     fetch(`${API}/api/job-requests/worker/${u.id}`, { headers })
// //       .then(r => r.json())
// //       .then(data => {
// //         if (!Array.isArray(data)) return;
// //         const accepted = data.filter(r => ["accepted","confirmed","in_progress","completed"].includes(r.status));
// //         setAppliedJobs(prev => {
// //           const ids = new Set(prev.map(x => x._id));
// //           const merged = [...prev];
// //           accepted.forEach(r => {
// //             if (!ids.has(r._id)) merged.push({ _id: r._id, job: { title: r.jobTitle || r.title || r.category, workLocation: r.workLocation || r.location }, status: r.status, offeredRate: r.agreedPrice || r.offeredPrice, agreedPrice: r.agreedPrice || r.offeredPrice, createdAt: r.createdAt, source: "request", employerName: r.employerName });
// //           });
// //           return merged;
// //         });
// //         const completed = data.filter(r => r.status === "completed");
// //         setJobHistory(completed.map(r => ({ _id: r._id, title: r.jobTitle || r.title || r.category || "Job", workLocation: r.workLocation || r.location || "", employerName: r.employerName || "", agreedPrice: r.agreedPrice || r.offeredPrice || "", completedAt: r.updatedAt || r.createdAt })));
// //       }).catch(() => {});
// //   }, []);

// //   useEffect(() => {
// //     socket.on("new_job_request", (data) => {
// //       if (showTracker) return;
// //       setIncomingRequest(data); setCounterPrice(data.offeredPrice || ""); setPopupState(null); setShowPopup(true); setPopupTimer(30);
// //       addNotif(`📩 New job: ${data.title || data.category}`);
// //     });
// //     socket.on("employer_confirm_worker", (data) => {
// //       setPopupState("confirmed"); setConfirmedJob({ request: incomingRequest, price: data.finalPrice || counterPrice }); addNotif("✅ You have been confirmed for the job!");
// //       if (incomingRequest) setAppliedJobs(prev => { const exists = prev.some(a => a._id === incomingRequest.requestId); if (exists) return prev.map(a => a._id === incomingRequest.requestId ? { ...a, status:"confirmed" } : a); return [{ _id: incomingRequest.requestId, job: { title: incomingRequest.title || incomingRequest.category, workLocation: incomingRequest.workLocation }, status:"confirmed", offeredRate: data.finalPrice || counterPrice || incomingRequest.offeredPrice, agreedPrice: data.finalPrice || counterPrice || incomingRequest.offeredPrice, createdAt: new Date().toISOString(), source:"request", employerName: incomingRequest.employerName }, ...prev]; });
// //     });
// //     socket.on("employer_accepted", () => {
// //       setPopupState("confirmed"); setConfirmedJob({ request: incomingRequest, price: counterPrice || incomingRequest?.offeredPrice }); addNotif("✅ Your offer was accepted!");
// //       if (incomingRequest) setAppliedJobs(prev => { const exists = prev.some(a => a._id === incomingRequest.requestId); if (exists) return prev.map(a => a._id === incomingRequest.requestId ? { ...a, status:"confirmed" } : a); return [{ _id: incomingRequest.requestId, job: { title: incomingRequest.title || incomingRequest.category, workLocation: incomingRequest.workLocation }, status:"confirmed", offeredRate: counterPrice || incomingRequest.offeredPrice, agreedPrice: counterPrice || incomingRequest.offeredPrice, createdAt: new Date().toISOString(), source:"request", employerName: incomingRequest.employerName }, ...prev]; });
// //     });
// //     socket.on("request_taken_not_selected", () => { if (popupState === "accepted_waiting" || popupState === "counter_sent") setPopupState("rejected"); else if (!showPopup) { setShowPopup(false); setIncomingRequest(null); } });
// //     socket.on("employer_rejected", () => { if (popupState === "counter_sent") setPopupState("rejected"); });
// //     socket.on("employer_counter",  (data) => { setEmployerCounter(data); setPopupState("counter_received"); addNotif(`💬 Employer sent a counter offer: Rs. ${data.price}`); });
// //     socket.on("employer_dismiss_worker", () => { setPopupState("dismissed"); addNotif("Request was dismissed by employer"); });
// //     return () => { socket.off("new_job_request"); socket.off("employer_confirm_worker"); socket.off("employer_accepted"); socket.off("request_taken_not_selected"); socket.off("employer_rejected"); socket.off("employer_counter"); socket.off("employer_dismiss_worker"); };
// //   }, [user, incomingRequest, popupState, showPopup, showTracker, counterPrice]);

// //   useEffect(() => {
// //     if (showPopup && popupState === null) {
// //       setPopupTimer(30);
// //       timerRef.current = setInterval(() => setPopupTimer(prev => { if (prev <= 1) { clearInterval(timerRef.current); dismissPopup(); return 0; } return prev - 1; }), 1000);
// //     } else clearInterval(timerRef.current);
// //     return () => clearInterval(timerRef.current);
// //   }, [showPopup, popupState]);

// //   const addNotif = (msg) => setNotifications(p => [...p, { id: Date.now() + Math.random(), msg }]);
// //   const dismissPopup = () => { setShowPopup(false); setPopupState(null); setCounterPrice(""); setEmployerCounter(null); };
// //   const openTracker  = () => { setShowPopup(false); setShowTracker(true); setPopupState(null); };

// //   const handleTrackerComplete = () => {
// //     if (confirmedJob) {
// //       const entry = { _id: confirmedJob.request?.requestId || Date.now().toString(), title: confirmedJob.request?.title || confirmedJob.request?.category || "Job", workLocation: confirmedJob.request?.workLocation || "", employerName: confirmedJob.request?.employerName || "", agreedPrice: confirmedJob.price || "", completedAt: new Date().toISOString() };
// //       setJobHistory(prev => [entry, ...prev]);
// //       setAppliedJobs(prev => prev.map(a => a._id === confirmedJob.request?.requestId ? { ...a, status:"completed" } : a));
// //     }
// //     setShowTracker(false); setConfirmedJob(null); setIncomingRequest(null);
// //   };

// //   const handleAcceptJob = () => { socket.emit("worker_job_accept", { requestId: incomingRequest.requestId, employerId: incomingRequest.employerId, workerId: user.id, workerName: user.name, workerRating: "4.8", workerPhone: user.phone || "" }); setPopupState("accepted_waiting"); };
// //   const handleDeclineJob = () => { socket.emit("worker_job_decline", { requestId: incomingRequest.requestId, workerId: user.id }); dismissPopup(); setIncomingRequest(null); };
// //   const handleSendCounter = () => { if (!counterPrice) { swal({ title: "Enter a price", icon: "warning" }); return; } socket.emit("worker_offer", { requestId: incomingRequest.requestId, employerId: incomingRequest.employerId, workerId: user.id, workerName: user.name, price: counterPrice, rating: "4.8", phone: user.phone }); setPopupState("counter_sent"); };
// //   const handleAcceptEmployerCounter = () => { socket.emit("worker_accepted", { requestId: incomingRequest.requestId, employerId: incomingRequest.employerId, workerId: user.id, workerName: user.name, price: employerCounter.price, phone: user.phone }); setConfirmedJob({ request: incomingRequest, price: employerCounter.price }); setPopupState("confirmed"); };
// //   const handleRejectEmployerCounter = () => { swal({ title: t.swalRejectCounter, text: t.swalRejectCounterText, icon: "warning", showCancelButton: true, confirmButtonColor: "#ef4444", cancelButtonColor: "#6b7280", confirmButtonText: t.swalYesReject, cancelButtonText: t.swalGoBack }).then(r => { if (r.isConfirmed) { socket.emit("worker_rejected_counter", { requestId: incomingRequest.requestId, employerId: incomingRequest.employerId, workerId: user.id }); dismissPopup(); setIncomingRequest(null); } }); };

// //   const uploadLicenseToBackend = async (file) => {
// //     if (!file) return false;
// //     const token = localStorage.getItem("token");
// //     if (!token) { swal({ title: "Login required", icon: "warning" }); return false; }
// //     setLicenseUploading(true);
// //     try {
// //       const fd = new FormData();
// //       fd.append("drivingLicense", file);
// //       const res  = await fetch(`${API}/api/auth/upload-driver-license`, { method:"POST", headers:{ Authorization: `Bearer ${token}` }, body: fd });
// //       const data = await res.json();
// //       if (res.ok) { setLicenseUploaded(true); refetchProfile(token); return true; }
// //       else { swal({ title: "Upload failed", text: data.error || "Try again", icon: "error" }); return false; }
// //     } catch (err) { swal({ title: "Upload error", text: err.message, icon: "error" }); return false; }
// //     finally { setLicenseUploading(false); }
// //   };

// //   const handlePostAvailability = async (e) => {
// //     e.preventDefault();
// //     const token = localStorage.getItem("token");
// //     const isDriver = availability.skill.toLowerCase().includes("driver");
// //     if (isDriver && !licenseUploaded && licenseFile) await uploadLicenseToBackend(licenseFile);
// //     try {
// //       const res = await fetch(`${API}/api/workers`, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ ...availability, worker: user.id }) });
// //       setShowAvailModal(false);
// //       if (token) {
// //         try { await fetch(`${API}/api/auth/update-profile`, { method:"PATCH", headers:{"Content-Type":"application/json", Authorization:`Bearer ${token}`}, body: JSON.stringify({ availabilityPosted: true }) }); } catch (_) {}
// //         refetchProfile(token);
// //       } else setUserProfile(prev => prev ? { ...prev, availabilityPosted: true } : prev);
// //       if (res.ok) swal({ title: t.swalPosted, text: t.swalPostedText, icon: "success" });
// //       else        swal({ title: t.swalError,  text: t.swalErrorText,  icon: "error" });
// //     } catch (_) { setShowAvailModal(false); setUserProfile(prev => prev ? { ...prev, availabilityPosted: true } : prev); swal({ title: t.swalSavedLocally, text: t.swalSavedLocallyText, icon: "info" }); }
// //   };

// //   const handleApplyJob = async (jobId, rate) => {
// //     const res  = await fetch(`${API}/api/applications`, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ job: jobId, worker: user.id, offeredRate: rate }) });
// //     const data = await res.json();
// //     if (!res.ok) { swal({ title: t.swalOops, text: data.error || t.swalAlreadyApplied, icon: "error" }); return; }
// //     setShowApplyModal(false);
// //     swal({ title: t.swalAppSent, html: `<strong>Rs. ${rate}</strong> — ${t.swalAppSentText}`, icon: "success" });
// //   };

// //   const handleLogout = () => { swal({ title: t.swalLogout, text: t.swalLogoutText, icon: "question", showCancelButton: true, confirmButtonColor: "#ef4444", cancelButtonColor: "#6b7280", confirmButtonText: t.swalYesLogout, cancelButtonText: t.swalGoBack }).then(r => { if (r.isConfirmed) { localStorage.removeItem("user"); window.location.href = "/login"; } }); };

// //   if (!user) return <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"linear-gradient(135deg,#064e3b,#065f46)" }}><div style={{ width:56, height:56, border:"4px solid #34d399", borderTopColor:"transparent", borderRadius:"50%", animation:"spin 1s linear infinite" }} /><style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style></div>;

// //   const isDriverSkill = availability.skill.toLowerCase().includes("driver");
// //   const headerTitle = showTracker ? t.trackingHeader : activeTab === "requests" ? t.headerRequests : activeTab === "applied" ? t.headerApplied : activeTab === "history" ? t.headerHistory : t.headerBrowse;

// //   return (
// //     <div dir={t.dir} style={{ minHeight:"100vh", display:"flex", background:"#f0f4f8", fontFamily: lang==="ur"?"'Noto Nastaliq Urdu',serif":"'Segoe UI',sans-serif" }}>
// //       {showPopup && incomingRequest && (<JobRequestPopup t={t} request={incomingRequest} popupState={popupState} popupTimer={popupTimer} counterPrice={counterPrice} setCounterPrice={setCounterPrice} employerCounter={employerCounter} onAcceptJob={handleAcceptJob} onDeclineJob={handleDeclineJob} onShowCounter={() => setPopupState("counter_input")} onSendCounter={handleSendCounter} onAcceptEmployerCounter={handleAcceptEmployerCounter} onRejectEmployerCounter={handleRejectEmployerCounter} onDismiss={dismissPopup} onOpenTracker={openTracker} userId={user.id} />)}

// //       {showApplyModal && selectedJob && (
// //         <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:200, padding:24, backdropFilter:"blur(4px)" }}>
// //           <div style={{ background:"#fff", borderRadius:24, width:"100%", maxWidth:480, boxShadow:"0 24px 60px rgba(0,0,0,0.3)", display:"flex", flexDirection:"column", maxHeight:"88vh", overflow:"hidden" }}>
// //             <div style={{ background:"linear-gradient(135deg,#0f172a,#1e3a5f)", padding:"24px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
// //               <div><p style={{ fontSize:11, color:"rgba(255,255,255,0.5)", fontWeight:700, textTransform:"uppercase", margin:0 }}>{t.applyFor}</p><h3 style={{ fontSize:20, fontWeight:800, color:"#fff", margin:"6px 0 0" }}>{selectedJob.title}</h3></div>
// //               <button onClick={() => setShowApplyModal(false)} style={{ background:"rgba(255,255,255,0.15)", border:"none", borderRadius:10, padding:8, cursor:"pointer" }}><X size={18} color="#fff" /></button>
// //             </div>
// //             <div style={{ padding:28, overflowY:"auto", flex:1 }}>
// //               <div style={{ background:"#f0fdf4", border:"1.5px solid #86efac", borderRadius:12, padding:"12px 18px", marginBottom:20, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
// //                 <span style={{ fontSize:13, color:"#16a34a", fontWeight:600 }}>{t.employerListedRate}</span>
// //                 <span style={{ fontSize:20, fontWeight:800, color:"#0f172a" }}>Rs. {String(selectedJob.salary).replace(/^Rs\.\s*/i,"")}</span>
// //               </div>
// //               {selectedJob.location && <div style={{ background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:12, padding:"12px 16px", marginBottom:20, display:"flex", alignItems:"center", gap:8 }}><MapPin size={15} color="#3b82f6" /><span style={{ fontSize:14, color:"#475569", fontWeight:600 }}>{selectedJob.location}</span></div>}
// //               <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10, marginBottom:24 }}>
// //                 <label style={{ fontSize:13, fontWeight:700, color:"#374151" }}>{t.yourOffer}</label>
// //                 <div style={{ display:"flex", alignItems:"center", gap:12 }}>
// //                   <button onClick={() => setOfferedRate(p => String(Math.max(0,Number(p)-100)))} style={{ width:42, height:42, borderRadius:10, border:"none", background:"#f1f5f9", fontSize:22, fontWeight:700, cursor:"pointer" }}>−</button>
// //                   <input type="number" value={offeredRate} onChange={e => setOfferedRate(e.target.value)} style={{ width:130, textAlign:"center", border:"2px solid #16a34a", borderRadius:12, padding:"10px 0", fontSize:22, fontWeight:800, color:"#0f172a", outline:"none" }} />
// //                   <button onClick={() => setOfferedRate(p => String(Number(p)+100))} style={{ width:42, height:42, borderRadius:10, border:"none", background:"#f1f5f9", fontSize:22, fontWeight:700, cursor:"pointer" }}>+</button>
// //                 </div>
// //                 <p style={{ fontSize:12, color:"#94a3b8", margin:0 }}>{Number(offeredRate)>Number(selectedJob.salary)?`Rs. ${Number(offeredRate)-Number(selectedJob.salary)} ${t.aboveRate}`:Number(offeredRate)<Number(selectedJob.salary)?`Rs. ${Number(selectedJob.salary)-Number(offeredRate)} ${t.belowRate}`:t.matchingRate}</p>
// //               </div>
// //               <button onClick={() => handleApplyJob(selectedJob._id,offeredRate)} style={{ width:"100%", padding:"15px", borderRadius:14, border:"none", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", fontSize:16, fontWeight:700, cursor:"pointer" }}>{t.submitApp}</button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <aside style={{ width:sidebarOpen?240:72, background:"linear-gradient(180deg,#064e3b 0%,#065f46 100%)", color:"#fff", display:"flex", flexDirection:"column", transition:"width 0.3s", flexShrink:0 }}>
// //         <div style={{ padding:"24px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid rgba(255,255,255,0.1)" }}>
// //           {sidebarOpen && <div><div style={{ fontSize:20, fontWeight:800 }}>{t.brand}</div><div style={{ fontSize:11, opacity:0.5, marginTop:2 }}>{t.role}</div></div>}
// //           <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background:"rgba(255,255,255,0.1)", border:"none", color:"#fff", padding:8, borderRadius:8, cursor:"pointer" }}>{sidebarOpen?<X size={16}/>:<Menu size={16}/>}</button>
// //         </div>
// //         <nav style={{ flex:1, padding:"16px 12px", display:"flex", flexDirection:"column", gap:4 }}>
// //           {[{id:"requests",icon:Bell,label:t.navRequests},{id:"applied",icon:CheckCircle,label:t.navApplied},{id:"history",icon:Briefcase,label:t.navHistory},{id:"browse",icon:Search,label:t.navBrowse}].map(item => (
// //             <button key={item.id} onClick={() => { setActiveTab(item.id); setShowTracker(false); }} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", borderRadius:10, border:"none", cursor:"pointer", background:activeTab===item.id&&!showTracker?"rgba(52,211,153,0.2)":"transparent", color:activeTab===item.id&&!showTracker?"#34d399":"rgba(255,255,255,0.6)", fontWeight:activeTab===item.id&&!showTracker?600:400, fontSize:14, transition:"all 0.2s", flexDirection:t.dir==="rtl"?"row-reverse":"row" }}>
// //               <item.icon size={18}/>{sidebarOpen&&<span>{item.label}</span>}
// //             </button>
// //           ))}
// //           <button onClick={() => setShowAvailModal(true)} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", borderRadius:10, border:"none", cursor:"pointer", background:"rgba(251,146,60,0.2)", color:"#fb923c", fontWeight:600, fontSize:14, marginTop:8, flexDirection:t.dir==="rtl"?"row-reverse":"row" }}>
// //             <PlusCircle size={18}/>{sidebarOpen&&<span>{t.navAvail}</span>}
// //           </button>
// //           {confirmedJob && !showTracker && (
// //             <button onClick={() => setShowTracker(true)} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", borderRadius:10, border:"2px solid rgba(34,197,94,0.5)", cursor:"pointer", background:"rgba(34,197,94,0.15)", color:"#34d399", fontWeight:700, fontSize:14, marginTop:8, flexDirection:t.dir==="rtl"?"row-reverse":"row", animation:"pulse 2s infinite" }}>
// //               🔧{sidebarOpen&&<span>{t.trackingHeader}</span>}
// //             </button>
// //           )}
// //         </nav>
// //         <div style={{ padding:"16px 12px", borderTop:"1px solid rgba(255,255,255,0.1)" }}>
// //           {sidebarOpen && <div style={{ display:"flex", alignItems:"center", gap:10, padding:"12px 14px", marginBottom:8 }}><div style={{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(135deg,#34d399,#059669)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, fontWeight:700, flexShrink:0 }}>{user.name?.charAt(0).toUpperCase()}</div><div><div style={{ fontSize:13, fontWeight:600 }}>{user.name}</div><div style={{ fontSize:11, opacity:0.5 }}>{user.email}</div></div></div>}
// //           <button onClick={handleLogout} style={{ display:"flex", alignItems:"center", gap:12, padding:"10px 14px", borderRadius:10, border:"none", cursor:"pointer", width:"100%", background:"rgba(239,68,68,0.15)", color:"#f87171", fontSize:14, flexDirection:t.dir==="rtl"?"row-reverse":"row" }}><LogOut size={16}/>{sidebarOpen&&<span>{t.logout}</span>}</button>
// //         </div>
// //       </aside>

// //       <main style={{ flex:1, overflow:"auto" }}>
// //         <header style={{ background:"#fff", borderBottom:"1px solid #e2e8f0", padding:"20px 32px", display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:5 }}>
// //           <div><h1 style={{ fontSize:22, fontWeight:700, color:"#0f172a", margin:0 }}>{headerTitle}</h1><p style={{ fontSize:13, color:"#64748b", margin:"4px 0 0" }}>{t.welcomeBack}, {user.name}</p></div>
// //           <div style={{ display:"flex", alignItems:"center", gap:12 }}>
// //             <button onClick={() => setLang(l => l==="en"?"ur":"en")} style={{ padding:"6px 16px", borderRadius:20, border:"2px solid #16a34a", background:"#fff", color:"#16a34a", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:lang==="en"?"'Noto Nastaliq Urdu',serif":"'Segoe UI',sans-serif" }}>{t.langToggle}</button>
// //             <div style={{ display:"flex", alignItems:"center", gap:6, background:"#dcfce7", padding:"6px 14px", borderRadius:20 }}><div style={{ width:8, height:8, borderRadius:"50%", background:"#16a34a" }} /><span style={{ fontSize:12, fontWeight:600, color:"#16a34a" }}>{t.online}</span></div>
// //             {/* ── Fixed Notification Bell ── */}
// //             <NotificationBell notifications={notifications} setNotifications={setNotifications} t={t} />
// //           </div>
// //         </header>

// //         <div style={{ padding:"32px" }}>
// //           {showTracker && confirmedJob && <JobTracker role="worker" job={{ requestId:confirmedJob.request?.requestId, title:confirmedJob.request?.title, category:confirmedJob.request?.category, workLocation:confirmedJob.request?.workLocation, lat:confirmedJob.request?.lat, lng:confirmedJob.request?.lng }} worker={{ workerId:user?.id, workerName:user?.name, workerPhone:user?.phone }} employer={{ employerId:confirmedJob.request?.employerId, employerName:confirmedJob.request?.employerName }} agreedPrice={confirmedJob.price} socket={socket} onJobComplete={handleTrackerComplete} lang={lang} t={t} />}
// //           {!showTracker && activeTab === "requests" && <RequestsTab t={t} notifications={notifications} showPopup={showPopup} userProfile={userProfile} onPostAvail={() => setShowAvailModal(true)} />}
// //           {!showTracker && activeTab === "applied"  && <AppliedTab  t={t} applied={appliedJobs} />}
// //           {!showTracker && activeTab === "history"  && <HistoryTab  t={t} history={jobHistory} />}
// //           {!showTracker && activeTab === "browse"   && <BrowseTab   t={t} lang={lang} userId={user.id} onOpenApplyModal={(job) => { setSelectedJob(job); setOfferedRate(String(job.salary||"")); setShowApplyModal(true); }} />}
// //         </div>
// //       </main>

// //       {showAvailModal && (
// //         <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:100, padding:24 }}>
// //           <div style={{ background:"#fff", borderRadius:20, padding:32, maxWidth:540, width:"100%", maxHeight:"90vh", overflowY:"auto" }}>
// //             <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24 }}>
// //               <h3 style={{ fontSize:20, fontWeight:700, margin:0 }}>{t.postAvailTitle}</h3>
// //               <button onClick={() => setShowAvailModal(false)} style={{ background:"#f1f5f9", border:"none", borderRadius:8, padding:8, cursor:"pointer" }}><X size={18}/></button>
// //             </div>
// //             <form onSubmit={handlePostAvailability} style={{ display:"flex", flexDirection:"column", gap:16 }}>
// //               {[{key:"skill",label:t.skillLabel,placeholder:t.skillPlaceholder},{key:"experience",label:t.expLabel,placeholder:t.expPlaceholder},{key:"hourlyRate",label:t.rateLabel,placeholder:t.ratePlaceholder},{key:"location",label:t.locLabel,placeholder:t.locPlaceholder}].map(f => (
// //                 <div key={f.key}>
// //                   <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>{f.label}</label>
// //                   <input required value={availability[f.key]} onChange={e => setAvailability({...availability,[f.key]:e.target.value})} placeholder={f.placeholder} style={{ width:"100%", padding:"12px 16px", borderRadius:10, border:"1.5px solid #e2e8f0", fontSize:14, outline:"none", boxSizing:"border-box" }} />
// //                 </div>
// //               ))}
// //               <div>
// //                 <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>{t.descLabel}</label>
// //                 <textarea required value={availability.description} onChange={e => setAvailability({...availability,description:e.target.value})} rows={3} placeholder={t.descPlaceholder} style={{ width:"100%", padding:"12px 16px", borderRadius:10, border:"1.5px solid #e2e8f0", fontSize:14, outline:"none", resize:"vertical", boxSizing:"border-box" }} />
// //               </div>

// //               {isDriverSkill && (
// //                 <div style={{ background:"#f0f9ff", borderRadius:14, padding:18, border:"2px solid #bae6fd" }}>
// //                   <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
// //                     <Car size={18} color="#0369a1" />
// //                     <span style={{ fontSize:14, fontWeight:700, color:"#0369a1" }}>{t.driverLicenseSection}</span>
// //                   </div>
// //                   <p style={{ fontSize:12, color:"#64748b", marginBottom:14, marginTop:0 }}>{t.driverLicenseHint}</p>
// //                   {licenseUploaded ? (
// //                     <div style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 16px", background:"#dcfce7", borderRadius:10, border:"1.5px solid #86efac" }}>
// //                       <CheckCircle size={16} color="#16a34a" />
// //                       <span style={{ fontSize:13, fontWeight:700, color:"#16a34a" }}>{t.licenseUploaded}</span>
// //                     </div>
// //                   ) : (
// //                     <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
// //                       <label style={{ display:"flex", alignItems:"center", gap:10, padding:"12px 16px", background:"#fff", border:"2px dashed #7dd3fc", borderRadius:10, cursor:"pointer" }}>
// //                         <Upload size={16} color="#0369a1" />
// //                         <span style={{ fontSize:13, color:"#0369a1", fontWeight:600 }}>{licenseFile ? licenseFile.name : t.chooseLicense}</span>
// //                         <input type="file" accept="image/*,.pdf" style={{ display:"none" }} onChange={e => { const f = e.target.files?.[0]; if (f) setLicenseFile(f); }} />
// //                       </label>
// //                       {licenseFile && (
// //                         <button type="button" disabled={licenseUploading} onClick={() => uploadLicenseToBackend(licenseFile)}
// //                           style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"11px", borderRadius:10, border:"none", background:licenseUploading?"#e2e8f0":"linear-gradient(135deg,#0369a1,#0284c7)", color:licenseUploading?"#94a3b8":"#fff", fontWeight:700, fontSize:13, cursor:licenseUploading?"not-allowed":"pointer" }}>
// //                           {licenseUploading ? <><div style={{ width:14, height:14, border:"2px solid #94a3b8", borderTopColor:"transparent", borderRadius:"50%", animation:"spin 1s linear infinite" }}/>{t.licenseUploading}</> : <><Upload size={14}/>{t.uploadLicenseBtn}</>}
// //                         </button>
// //                       )}
// //                     </div>
// //                   )}
// //                 </div>
// //               )}

// //               <div style={{ display:"flex", gap:12, marginTop:8 }}>
// //                 <button type="submit" style={{ flex:1, padding:14, background:"linear-gradient(135deg,#16a34a,#059669)", color:"#fff", border:"none", borderRadius:12, fontSize:15, fontWeight:700, cursor:"pointer" }}>{t.postBtn}</button>
// //                 <button type="button" onClick={() => setShowAvailModal(false)} style={{ padding:"14px 20px", background:"#f1f5f9", color:"#475569", border:"none", borderRadius:12, fontSize:14, cursor:"pointer" }}>{t.cancelBtn}</button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}

// //       <style>{`@keyframes spin{to{transform:rotate(360deg)}} @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}} @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}`}</style>
// //     </div>
// //   );
// // }

// // function ProfileProgress({ t, userProfile, onPostAvail }) {
// //   if (!userProfile) return null;
// //   const docs = userProfile.documents || {};
// //   const category = (userProfile.category || userProfile.skill || userProfile.trade || "").toLowerCase();
// //   const isDriver = category.includes("driver");
// //   const hasProfilePhoto = !!(docs.profilePhoto || userProfile.profilePhoto || userProfile.avatar);
// //   const hasCnic = !!(( docs.cnicFront && docs.cnicBack) || (userProfile.cnicFront && userProfile.cnicBack) || userProfile.cnicVerified);
// //   const hasLicense = !!(docs.drivingLicense || userProfile.drivingLicense || userProfile.licenseVerified);
// //   const isAvailPosted = !!(userProfile.availabilityPosted || userProfile.availabilityId);
// //   const isAdminVerified = !!(userProfile.isVerified || userProfile.adminVerified);

// //   const steps = [
// //     { key:"registered",   label:t.stepRegistered,   done:true,            points:20, action:null },
// //     { key:"profilePhoto", label:t.stepProfilePhoto, done:hasProfilePhoto, points:15, action:null },
// //     { key:"cnicDocs",     label:t.stepCnicDocs,     done:hasCnic,         points:20, action:null },
// //     { key:"availability", label:t.stepAvailability, done:isAvailPosted,   points:20, action:onPostAvail },
// //     ...(isDriver ? [{ key:"license", label:t.stepLicense, done:hasLicense, points:10, action:null }] : []),
// //     { key:"verified", label:t.stepVerified, done:isAdminVerified, points:isDriver?15:25, action:null },
// //   ];
// //   const totalPoints  = steps.reduce((s,x) => s+x.points,0);
// //   const earnedPoints = steps.filter(s=>s.done).reduce((s,x) => s+x.points,0);
// //   const percentage   = Math.round((earnedPoints/totalPoints)*100);
// //   const isComplete   = percentage === 100;
// //   const barColor     = percentage>=80?"#16a34a":percentage>=50?"#3b82f6":"#f59e0b";
// //   return (
// //     <div style={{ background:"#fff", borderRadius:20, padding:24, boxShadow:"0 4px 20px rgba(0,0,0,0.06)", marginBottom:20, border:isComplete?"2px solid #22c55e":"1.5px solid #e2e8f0", animation:"slideUp .4s ease-out" }}>
// //       <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
// //         <div><h3 style={{ fontSize:16, fontWeight:800, color:"#0f172a", margin:0 }}>{isComplete?t.profileComplete:t.profileProgress}</h3>{!isComplete&&<p style={{ fontSize:12, color:"#64748b", margin:"3px 0 0" }}>{t.completeYourProfile}</p>}</div>
// //         <div style={{ textAlign:"center" }}><div style={{ fontSize:26, fontWeight:900, color:barColor, lineHeight:1 }}>{percentage}%</div><div style={{ fontSize:10, color:"#94a3b8", fontWeight:600 }}>{earnedPoints}/{totalPoints} pts</div></div>
// //       </div>
// //       <div style={{ background:"#e2e8f0", borderRadius:99, height:10, overflow:"hidden", marginBottom:18 }}>
// //         <div style={{ height:"100%", borderRadius:99, background:isComplete?"linear-gradient(90deg,#22c55e,#16a34a)":`linear-gradient(90deg,${barColor},${barColor}cc)`, width:`${percentage}%`, transition:"width 1s ease-out" }} />
// //       </div>
// //       <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
// //         {steps.map(step => (
// //           <div key={step.key} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 14px", borderRadius:12, background:step.done?"#f0fdf4":"#f8fafc", border:`1.5px solid ${step.done?"#bbf7d0":"#e2e8f0"}` }}>
// //             <div style={{ display:"flex", alignItems:"center", gap:10 }}>
// //               <div style={{ width:28, height:28, borderRadius:"50%", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background:step.done?"#22c55e":"#e2e8f0", fontSize:13, color:step.done?"#fff":"#94a3b8" }}>{step.done?"✓":"○"}</div>
// //               <span style={{ fontSize:13, fontWeight:step.done?600:500, color:step.done?"#15803d":"#475569" }}>{step.label}</span>
// //             </div>
// //             <div style={{ display:"flex", alignItems:"center", gap:8 }}>
// //               <span style={{ fontSize:11, fontWeight:700, color:step.done?"#16a34a":"#94a3b8", background:step.done?"#dcfce7":"#f1f5f9", padding:"2px 8px", borderRadius:20 }}>+{step.points} pts</span>
// //               {!step.done&&step.action&&<button onClick={step.action} style={{ fontSize:11, fontWeight:700, color:"#3b82f6", background:"#eff6ff", border:"none", borderRadius:20, padding:"3px 10px", cursor:"pointer" }}>{t.tapToComplete} →</button>}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // function RequestsTab({ t, notifications, showPopup, userProfile, onPostAvail }) {
// //   return (
// //     <div style={{ maxWidth:600, margin:"0 auto" }}>
// //       <ProfileProgress t={t} userProfile={userProfile} onPostAvail={onPostAvail} />
// //       <div style={{ background:"#fff", borderRadius:20, padding:40, textAlign:"center", boxShadow:"0 4px 20px rgba(0,0,0,0.06)" }}>
// //         <div style={{ width:80, height:80, borderRadius:"50%", background:showPopup?"linear-gradient(135deg,#22c55e,#16a34a)":"linear-gradient(135deg,#e2e8f0,#cbd5e1)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:32 }}>{showPopup?"📩":"📭"}</div>
// //         <h3 style={{ fontSize:20, fontWeight:700, color:"#0f172a", marginBottom:8 }}>{showPopup?t.incomingTitle:t.waitingTitle}</h3>
// //         <p style={{ fontSize:14, color:"#64748b", lineHeight:1.6 }}>{showPopup?t.incomingDesc:t.waitingDesc}</p>
// //         {notifications.length>0&&<div style={{ marginTop:24, textAlign:"left" }}><h4 style={{ fontSize:14, fontWeight:600, color:"#475569", marginBottom:12 }}>{t.recentNotifs}</h4>{notifications.slice(-5).reverse().map(n => <div key={n.id} style={{ padding:"10px 14px", background:"#f8fafc", borderRadius:10, fontSize:13, color:"#475569", marginBottom:8 }}>{n.msg}</div>)}</div>}
// //       </div>
// //     </div>
// //   );
// // }

// // function AppliedTab({ t, applied }) {
// //   if (!applied || applied.length === 0) return <div style={{ background:"#fff", borderRadius:16, padding:60, textAlign:"center", color:"#94a3b8" }}><CheckCircle size={52} style={{ margin:"0 auto 16px", opacity:0.3 }} /><p style={{ fontSize:17, fontWeight:600, color:"#475569", marginBottom:8 }}>{t.noApps}</p><p style={{ fontSize:14 }}>Jobs you apply to and requests you accept will appear here.</p></div>;
// //   const statusStyle = (s) => { if (s==="completed") return {bg:"#dcfce7",color:"#15803d"}; if (["confirmed","accepted","in_progress"].includes(s)) return {bg:"#dbeafe",color:"#1d4ed8"}; if (s==="shortlisted") return {bg:"#fef3c7",color:"#d97706"}; if (s==="rejected") return {bg:"#fee2e2",color:"#dc2626"}; return {bg:"#f1f5f9",color:"#475569"}; };
// //   return (
// //     <div style={{ maxWidth:700, margin:"0 auto", display:"flex", flexDirection:"column", gap:16 }}>
// //       {applied.map((app,i) => { const job=app.job||{}; const {bg,color}=statusStyle(app.status); const isRequest=app.source==="request"; return (
// //         <div key={app._id||i} style={{ background:"#fff", borderRadius:16, padding:22, boxShadow:"0 2px 12px rgba(0,0,0,0.06)", border:"1px solid #e2e8f0" }}>
// //           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
// //             <div style={{ flex:1 }}>
// //               <div style={{ marginBottom:6 }}><span style={{ fontSize:11, fontWeight:700, background:isRequest?"#ede9fe":"#e0f2fe", color:isRequest?"#7c3aed":"#0369a1", padding:"2px 10px", borderRadius:20 }}>{isRequest?"📩 Employer Request":"📝 Browse Apply"}</span></div>
// //               <h4 style={{ fontSize:17, fontWeight:700, marginBottom:4, color:"#0f172a" }}>{job.title||app.title||"Job Request"}</h4>
// //               {(job.workLocation||app.workLocation)&&<p style={{ fontSize:13, color:"#64748b", marginBottom:4 }}>📍 {job.workLocation||app.workLocation}</p>}
// //               {(app.employerName||job.employer?.name)&&<p style={{ fontSize:13, color:"#64748b", marginBottom:4 }}>👤 {app.employerName||job.employer?.name}</p>}
// //               <p style={{ fontSize:12, color:"#94a3b8" }}>{new Date(app.createdAt||Date.now()).toLocaleDateString("en-PK",{day:"numeric",month:"short",year:"numeric"})}</p>
// //             </div>
// //             <span style={{ padding:"6px 14px", borderRadius:20, fontSize:12, fontWeight:700, background:bg, color, flexShrink:0, marginLeft:12 }}>{(app.status||"pending").toUpperCase().replace(/_/g," ")}</span>
// //           </div>
// //           {(app.offeredRate||app.agreedPrice)&&<div style={{ marginTop:12, display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", background:"#f0fdf4", borderRadius:10 }}><span style={{ fontSize:13, color:"#16a34a", fontWeight:700 }}>💰 {app.agreedPrice?"Agreed:":"Your Offer:"} Rs. {app.agreedPrice||app.offeredRate}</span></div>}
// //         </div>
// //       );})}
// //     </div>
// //   );
// // }

// // function HistoryTab({ t, history }) {
// //   if (!history||history.length===0) return <div style={{ background:"#fff", borderRadius:16, padding:60, textAlign:"center", color:"#94a3b8" }}><Briefcase size={52} style={{ margin:"0 auto 16px", opacity:0.3 }} /><p style={{ fontSize:17, fontWeight:600, color:"#475569", marginBottom:8 }}>{t.noHistory}</p><p style={{ fontSize:14 }}>{t.noHistorySub}</p></div>;
// //   const total = history.reduce((s,j)=>s+Number(String(j.agreedPrice).replace(/[^0-9]/g,"")||0),0);
// //   return (
// //     <div style={{ maxWidth:700, margin:"0 auto" }}>
// //       <div style={{ background:"linear-gradient(135deg,#064e3b,#065f46)", borderRadius:16, padding:"18px 24px", color:"#fff", display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
// //         <div><div style={{ fontSize:12, opacity:0.6, fontWeight:600, textTransform:"uppercase", letterSpacing:".08em" }}>Jobs Completed</div><div style={{ fontSize:32, fontWeight:900 }}>{history.length}</div></div>
// //         <div style={{ textAlign:"right" }}><div style={{ fontSize:12, opacity:0.6, fontWeight:600, textTransform:"uppercase", letterSpacing:".08em" }}>Total Earned</div><div style={{ fontSize:24, fontWeight:800 }}>Rs. {total.toLocaleString()}</div></div>
// //       </div>
// //       <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
// //         {history.map((job,i)=>(
// //           <div key={job._id||i} style={{ background:"#fff", borderRadius:16, padding:22, boxShadow:"0 2px 12px rgba(0,0,0,0.06)", border:"1.5px solid #dcfce7" }}>
// //             <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
// //               <div style={{ flex:1 }}>
// //                 <h4 style={{ fontSize:17, fontWeight:700, marginBottom:4, color:"#0f172a" }}>{job.title||"Job"}</h4>
// //                 {job.workLocation&&<p style={{ fontSize:13, color:"#64748b", marginBottom:4 }}>📍 {job.workLocation}</p>}
// //                 {job.employerName&&<p style={{ fontSize:13, color:"#64748b", marginBottom:4 }}>👤 {job.employerName}</p>}
// //                 <p style={{ fontSize:12, color:"#94a3b8" }}>✅ Completed on {new Date(job.completedAt||Date.now()).toLocaleDateString("en-PK",{day:"numeric",month:"short",year:"numeric"})}</p>
// //               </div>
// //               <span style={{ padding:"6px 14px", borderRadius:20, fontSize:12, fontWeight:700, background:"#dcfce7", color:"#15803d", flexShrink:0, marginLeft:12 }}>COMPLETED</span>
// //             </div>
// //             {job.agreedPrice&&<div style={{ marginTop:12, display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", background:"#f0fdf4", borderRadius:10 }}><span style={{ fontSize:15, color:"#16a34a", fontWeight:800 }}>💰 Earned: Rs. {job.agreedPrice}</span></div>}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // function BrowseTab({ t, lang, userId, onOpenApplyModal }) {
// //   const [allJobs,setAllJobs]=useState([]); const [filteredJobs,setFilteredJobs]=useState([]); const [searchQuery,setSearchQuery]=useState(""); const [filtering,setFiltering]=useState(false); const [activeFilters,setActiveFilters]=useState(null);
// //   useEffect(()=>{ fetch(`${API}/api/jobs`).then(r=>r.json()).then(d=>{setAllJobs(d);setFilteredJobs(d);}).catch(()=>{}); },[]);
// //   const handleAIFilter=async()=>{ if(!searchQuery.trim())return; setFiltering(true); try{ const res=await fetch(`${API}/api/ai/smart-filter`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:searchQuery})}); const f=await res.json(); setActiveFilters(f); let r=[...allJobs]; if(f.category)r=r.filter(j=>(j.category||j.type||"").toLowerCase().includes(f.category.toLowerCase())||(j.title||"").toLowerCase().includes(f.category.toLowerCase())); if(f.location)r=r.filter(j=>(j.location||"").toLowerCase().includes(f.location.toLowerCase())); if(f.minBudget>0)r=r.filter(j=>Number(String(j.salary).replace(/[^0-9]/g,""))>=f.minBudget); if(f.maxBudget>0)r=r.filter(j=>Number(String(j.salary).replace(/[^0-9]/g,""))<=f.maxBudget); if(f.keywords?.length)r=r.filter(j=>f.keywords.some(kw=>(j.title||"").toLowerCase().includes(kw.toLowerCase())||(j.description||"").toLowerCase().includes(kw.toLowerCase()))); setFilteredJobs(r); }catch(e){console.error(e);} setFiltering(false); };
// //   const clearFilters=()=>{setActiveFilters(null);setFilteredJobs(allJobs);setSearchQuery("");};
// //   return (
// //     <div style={{ maxWidth:700, margin:"0 auto" }}>
// //       <div style={{ background:"#fff", borderRadius:16, padding:20, marginBottom:20, boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
// //         <div style={{ display:"flex", gap:10, alignItems:"center" }}>
// //           <div style={{ flex:1, display:"flex", alignItems:"center", gap:10, background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:12, padding:"10px 14px" }}>
// //             <SlidersHorizontal size={16} color="#6366f1"/>
// //             <input value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleAIFilter()} placeholder={t.aiFilterPlaceholder} style={{ flex:1, border:"none", background:"transparent", fontSize:14, outline:"none", color:"#0f172a" }}/>
// //             {searchQuery&&<button onClick={clearFilters} style={{ background:"none", border:"none", cursor:"pointer", color:"#94a3b8", fontSize:18 }}>×</button>}
// //           </div>
// //           <button onClick={handleAIFilter} disabled={filtering||!searchQuery.trim()} style={{ display:"flex", alignItems:"center", gap:6, padding:"11px 18px", borderRadius:12, border:"none", background:filtering||!searchQuery.trim()?"#e2e8f0":"linear-gradient(135deg,#6366f1,#8b5cf6)", color:filtering||!searchQuery.trim()?"#94a3b8":"#fff", fontSize:13, fontWeight:700, cursor:filtering||!searchQuery.trim()?"not-allowed":"pointer" }}>
// //             <Search size={14}/>{filtering?t.aiFiltering:t.aiFilterBtn}
// //           </button>
// //         </div>
// //         {activeFilters&&<div style={{ marginTop:12, display:"flex", flexWrap:"wrap", gap:8, alignItems:"center" }}><span style={{ fontSize:11, fontWeight:700, color:"#6366f1", textTransform:"uppercase", letterSpacing:".06em" }}>{t.activeFilters}:</span>{activeFilters.category&&<FC label={`📂 ${activeFilters.category}`}/>}{activeFilters.location&&<FC label={`📍 ${activeFilters.location}`}/>}{activeFilters.minBudget>0&&<FC label={`💰 Rs.${activeFilters.minBudget}+`}/>}{activeFilters.maxBudget>0&&<FC label={`💰 Max Rs.${activeFilters.maxBudget}`}/>}{activeFilters.keywords?.map(k=><FC key={k} label={`🔍 ${k}`}/>)}<button onClick={clearFilters} style={{ fontSize:12, color:"#ef4444", fontWeight:600, background:"#fef2f2", border:"none", borderRadius:20, padding:"3px 10px", cursor:"pointer" }}>{t.clearFilters}</button></div>}
// //       </div>
// //       <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
// //         {filteredJobs.length===0?<div style={{ background:"#fff", borderRadius:16, padding:48, textAlign:"center", color:"#94a3b8" }}><div style={{ fontSize:40, marginBottom:12 }}>🔍</div><p style={{ fontWeight:700, fontSize:15, color:"#475569", marginBottom:4 }}>{t.noJobsFound}</p><p style={{ fontSize:13 }}>{t.noJobsFoundSub}</p></div>:filteredJobs.map(job=>(
// //           <div key={job._id} style={{ background:"#fff", borderRadius:16, padding:24, boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
// //             <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}><div><h4 style={{ fontSize:17, fontWeight:700, color:"#0f172a", margin:"0 0 4px" }}>{job.title}</h4><p style={{ fontSize:13, color:"#64748b", margin:0 }}>{job.employer?.name}</p></div><span style={{ background:"#eff6ff", color:"#3b82f6", padding:"4px 12px", borderRadius:20, fontSize:12, fontWeight:600 }}>{job.type||job.category}</span></div>
// //             <p style={{ fontSize:14, color:"#475569", marginBottom:14, lineHeight:1.5 }}>{job.description}</p>
// //             <div style={{ display:"flex", gap:16, marginBottom:16, flexWrap:"wrap" }}>
// //               {job.location&&<span style={{ fontSize:13, color:"#64748b", display:"flex", alignItems:"center", gap:4 }}><MapPin size={14}/>{job.location}</span>}
// //               {job.salary&&<span style={{ fontSize:13, color:"#64748b", display:"flex", alignItems:"center", gap:4 }}><DollarSign size={14}/>Rs. {job.salary}</span>}
// //               {job.urgency&&<span style={{ fontSize:12, color:"#f59e0b", fontWeight:600, background:"#fef3c7", padding:"2px 10px", borderRadius:20 }}>⚡ {job.urgency}</span>}
// //             </div>
// //             <button onClick={() => onOpenApplyModal(job)} style={{ width:"100%", padding:12, background:"linear-gradient(135deg,#16a34a,#059669)", color:"#fff", border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer" }}>{t.applyNow}</button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // function FC({label}){return <span style={{ background:"#f0f0fe", color:"#4f46e5", fontSize:12, fontWeight:600, padding:"4px 12px", borderRadius:20, border:"1px solid #e0e0fc" }}>{label}</span>;}

// // function JobRequestPopup({t,request,popupState,popupTimer,counterPrice,setCounterPrice,employerCounter,onAcceptJob,onDeclineJob,onShowCounter,onSendCounter,onAcceptEmployerCounter,onRejectEmployerCounter,onDismiss,onOpenTracker,userId}){
// //   const timerPct=(popupTimer/30)*100; const isInitial=popupState===null;
// //   return(
// //     <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.65)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:300, padding:24, backdropFilter:"blur(6px)" }}>
// //       <div style={{ background:"#fff", borderRadius:26, width:"100%", maxWidth:460, boxShadow:"0 32px 80px rgba(0,0,0,0.35)", overflow:"hidden", maxHeight:"92vh", overflowY:"auto" }}>
// //         {isInitial&&<div style={{ height:5, background:"#e2e8f0", overflow:"hidden" }}><div style={{ height:"100%", width:`${timerPct}%`, transition:"width 1s linear", background:timerPct>33?"linear-gradient(90deg,#22c55e,#16a34a)":"linear-gradient(90deg,#ef4444,#dc2626)" }}/></div>}
// //         <div style={{ padding:26 }}>
// //           <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
// //             <div style={{ display:"flex", alignItems:"center", gap:8 }}><div style={{ width:9, height:9, borderRadius:"50%", background:"#22c55e" }}/><span style={{ fontSize:12, fontWeight:800, color:"#16a34a", textTransform:"uppercase", letterSpacing:".08em" }}>{t.newJobRequest}</span></div>
// //             <div style={{ display:"flex", alignItems:"center", gap:10 }}>{isInitial&&<span style={{ fontSize:13, fontWeight:700, color:timerPct>33?"#64748b":"#ef4444" }}>⏱ {popupTimer}s</span>}<button onClick={onDismiss} style={{ background:"#f1f5f9", border:"none", borderRadius:8, padding:7, cursor:"pointer" }}><X size={15} color="#64748b"/></button></div>
// //           </div>
// //           <div style={{ background:"linear-gradient(135deg,#0f172a,#1e3a5f)", borderRadius:16, padding:20, marginBottom:16, color:"#fff" }}>
// //             <h3 style={{ fontSize:18, fontWeight:800, margin:"0 0 8px" }}>{request.title||request.category}</h3>
// //             {request.description&&<p style={{ fontSize:13, color:"rgba(255,255,255,0.6)", margin:"0 0 14px", lineHeight:1.5 }}>{request.description}</p>}
// //             {request.workLocation&&<div style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(255,255,255,.08)", borderRadius:8, padding:"5px 10px", width:"fit-content" }}><MapPin size={12} color="#60a5fa"/><span style={{ fontSize:12 }}>{request.workLocation}</span></div>}
// //           </div>
// //           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20, padding:"14px 18px", background:"#f0fdf4", borderRadius:12, border:"1.5px solid #86efac" }}>
// //             <div><div style={{ fontSize:11, color:"#16a34a", fontWeight:700, marginBottom:2 }}>{t.employerOffer}</div><div style={{ fontSize:26, fontWeight:900, color:"#0f172a" }}>Rs. {request.offeredPrice||"Open"}</div></div>
// //             <div style={{ textAlign:"right" }}><div style={{ fontSize:13, fontWeight:700 }}>{request.employerName}</div><div style={{ fontSize:11, color:"#64748b" }}>{request.category}</div></div>
// //           </div>
// //           {isInitial&&<><div style={{ display:"flex", gap:10 }}><button onClick={onAcceptJob} style={{ flex:2, display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"14px", borderRadius:13, border:"none", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", fontSize:15, fontWeight:800, cursor:"pointer" }}><ThumbsUp size={17}/>{t.acceptJob}</button><button onClick={onDeclineJob} style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"14px", borderRadius:13, border:"1.5px solid #fecaca", background:"#fef2f2", color:"#ef4444", fontSize:14, fontWeight:700, cursor:"pointer" }}><ThumbsDown size={15}/>{t.declineJob}</button></div><button onClick={onShowCounter} style={{ width:"100%", marginTop:10, padding:"11px", borderRadius:11, border:"1.5px solid #e2e8f0", background:"#f8fafc", color:"#475569", fontSize:13, fontWeight:600, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}><MessageSquare size={14}/>{t.counterNote}</button></>}
// //           {popupState==="counter_input"&&<div><label style={{ fontSize:13, fontWeight:700, color:"#374151", display:"block", marginBottom:8 }}>{t.counterOffer}</label><div style={{ display:"flex", gap:8 }}><input type="number" value={counterPrice} onChange={e=>setCounterPrice(e.target.value)} placeholder={t.optionalCounter} autoFocus style={{ flex:1, padding:"13px 14px", borderRadius:11, border:"1.5px solid #e2e8f0", fontSize:14, outline:"none" }}/><button onClick={onSendCounter} style={{ padding:"13px 18px", borderRadius:11, border:"none", background:"linear-gradient(135deg,#3b82f6,#2563eb)", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer" }}>{t.sendCounter}</button></div><button onClick={onDeclineJob} style={{ marginTop:10, width:"100%", padding:"11px", borderRadius:11, border:"1.5px solid #fecaca", background:"#fef2f2", color:"#ef4444", fontSize:13, fontWeight:600, cursor:"pointer" }}>{t.declineJob}</button></div>}
// //           {popupState==="accepted_waiting"&&<div style={{ textAlign:"center", padding:"8px 0" }}><div style={{ width:52, height:52, border:"4px solid #dcfce7", borderTopColor:"#16a34a", borderRadius:"50%", animation:"spin 1s linear infinite", margin:"0 auto 16px" }}/><p style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>Request Accepted!</p><p style={{ fontSize:13, color:"#64748b" }}>Waiting for employer to confirm you...</p></div>}
// //           {popupState==="counter_sent"&&<div style={{ textAlign:"center", padding:"8px 0" }}><div style={{ width:52, height:52, border:"4px solid #dbeafe", borderTopColor:"#3b82f6", borderRadius:"50%", animation:"spin 1s linear infinite", margin:"0 auto 16px" }}/><p style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>{t.offerSent}</p><p style={{ fontSize:13, color:"#64748b" }}>{t.yourOfferWas} Rs. {counterPrice}</p></div>}
// //           {popupState==="counter_received"&&employerCounter&&<div><div style={{ background:"#fef3c7", borderRadius:12, padding:16, marginBottom:14, border:"1.5px solid #fcd34d" }}><div style={{ fontSize:12, fontWeight:700, color:"#d97706", marginBottom:4 }}>{t.counterReceived}</div><div style={{ fontSize:26, fontWeight:900, color:"#0f172a", marginBottom:2 }}>Rs. {employerCounter.price}</div><div style={{ fontSize:12, color:"#64748b" }}>{t.yourOfferWasLabel} Rs. {counterPrice}</div></div><div style={{ display:"flex", gap:10 }}><button onClick={onAcceptEmployerCounter} style={{ flex:1, padding:13, borderRadius:12, border:"none", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", fontSize:14, fontWeight:700, cursor:"pointer" }}>{t.accept} Rs. {employerCounter.price}</button><button onClick={onRejectEmployerCounter} style={{ padding:"13px 16px", borderRadius:12, border:"none", background:"#fef2f2", color:"#ef4444", fontSize:13, fontWeight:600, cursor:"pointer" }}>{t.reject}</button></div></div>}
// //           {popupState==="confirmed"&&<div style={{ textAlign:"center", padding:"12px 0" }}><div style={{ fontSize:52, marginBottom:10 }}>🎉</div><h3 style={{ fontSize:20, fontWeight:800, color:"#0f172a", marginBottom:6 }}>{t.jobConfirmed}</h3><p style={{ fontSize:13, color:"#64748b", marginBottom:20 }}>{t.jobConfirmedDesc}</p><button onClick={onOpenTracker} style={{ padding:"13px 32px", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", border:"none", borderRadius:12, fontSize:15, fontWeight:700, cursor:"pointer", width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>🔧 {t.viewJobDetails}</button></div>}
// //           {popupState==="rejected"&&<div style={{ textAlign:"center", padding:"12px 0" }}><div style={{ fontSize:42, marginBottom:10 }}>😔</div><p style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>{t.offerRejected}</p><p style={{ fontSize:13, color:"#64748b", marginBottom:16 }}>{t.offerRejectedDesc}</p><button onClick={onDismiss} style={{ padding:"10px 28px", background:"#f1f5f9", color:"#475569", border:"none", borderRadius:12, fontSize:14, cursor:"pointer" }}>{t.close}</button></div>}
// //           {popupState==="dismissed"&&<div style={{ textAlign:"center", padding:"12px 0" }}><div style={{ fontSize:36, marginBottom:10 }}>🔄</div><p style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>{t.dismissed}</p><p style={{ fontSize:13, color:"#64748b", marginBottom:16 }}>{t.dismissedDesc}</p><button onClick={onDismiss} style={{ padding:"10px 28px", background:"#f1f5f9", color:"#475569", border:"none", borderRadius:12, fontSize:14, cursor:"pointer" }}>{t.close}</button></div>}
// //         </div>
// //       </div>
// //       <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
// //     </div>
// //   );
// // }


// "use client";
// import { useEffect, useState, useRef } from "react";
// import { io } from "socket.io-client";
// import dynamic from "next/dynamic";
// import {
//   Briefcase, CheckCircle, LogOut, Menu, X,
//   MapPin, DollarSign, Bell, PlusCircle,
//   ThumbsUp, ThumbsDown, MessageSquare, Search, SlidersHorizontal,
//   Upload, Car
// } from "lucide-react";
// import JobTracker from "@/components/JobTracker";

// const JobMap = dynamic(() => import("@/components/JobMap"), { ssr: false });

// const socket = io("http://localhost:5000");
// if (typeof window !== "undefined") {
//   window._rozgarSocket = socket;
//   socket.on("connect",    () => console.log("✅ Worker socket CONNECTED"));
//   socket.on("disconnect", () => console.log("❌ Worker socket DISCONNECTED"));
// }

// const API = "http://localhost:5000";

// const T = {
//   en: {
//     dir: "ltr", brand: "RozgarHub", role: "WORKER",
//     navRequests: "Job Requests", navApplied: "My Applications",
//     navBrowse: "Browse Jobs", navHistory: "Job History", navAvail: "Post Availability",
//     logout: "Logout", online: "Online",
//     headerRequests: "Incoming Requests", headerApplied: "My Applications",
//     headerBrowse: "Browse Jobs", headerHistory: "Job History", welcomeBack: "Welcome back",
//     waitingTitle: "Waiting for job requests...",
//     waitingDesc: "When an employer posts a job in your area, it will pop up automatically.",
//     incomingTitle: "New request incoming!", incomingDesc: "Check the popup to respond.",
//     recentNotifs: "Recent Notifications", noApps: "No applications yet.",
//     appliedOn: "Applied", recently: "recently", pending: "Pending", shortlisted: "Shortlisted",
//     applyNow: "Apply Now", applyFor: "Apply for Job",
//     employerListedRate: "Employer Listed Rate", yourOffer: "Your Offer (PKR)",
//     aboveRate: "above listed rate", belowRate: "below listed rate",
//     matchingRate: "Matching employer's listed rate",
//     submitApp: "Submit Application", newJobRequest: "New Job Request", employerOffer: "EMPLOYER OFFER",
//     acceptJob: "Accept Job", declineJob: "Decline",
//     counterOffer: "Counter Offer", sendCounter: "Send Counter",
//     offerSent: "Counter Offer Sent! Waiting for employer...",
//     yourOfferWas: "Your counter offer:", counterReceived: "EMPLOYER COUNTER OFFER",
//     yourOfferWasLabel: "Your offer was",
//     accept: "Accept", reject: "Reject",
//     jobConfirmed: "Job Confirmed!", jobConfirmedDesc: "Get ready to go to the job site",
//     viewJobDetails: "Track Job",
//     offerRejected: "Not Selected", offerRejectedDesc: "The employer chose another worker",
//     close: "Close", dismissed: "Request Dismissed",
//     dismissedDesc: "The employer dismissed your acceptance",
//     postAvailTitle: "Post Your Availability",
//     skillLabel: "Your Skill / Trade", skillPlaceholder: "e.g., Electrician, Plumber, Driver",
//     expLabel: "Years of Experience", expPlaceholder: "e.g., 5 years",
//     rateLabel: "Hourly Rate (PKR)", ratePlaceholder: "e.g., 500",
//     locLabel: "Your Location", locPlaceholder: "e.g., Karachi, Lahore",
//     descLabel: "Description", descPlaceholder: "Describe your skills...",
//     postBtn: "Post Availability", cancelBtn: "Cancel",
//     driverLicenseSection: "Driver License (Required for Drivers)",
//     driverLicenseHint: "Upload your driving license — it will be saved to your profile and earn you points.",
//     uploadLicenseBtn: "Upload License", licenseUploaded: "License Uploaded!",
//     licenseUploading: "Uploading...", chooseLicense: "Choose license image or PDF",
//     swalPosted: "Posted!", swalPostedText: "Availability updated.",
//     swalError: "Error", swalErrorText: "Failed to post.",
//     swalSavedLocally: "Saved Locally", swalSavedLocallyText: "Saved locally.",
//     swalAppSent: "Application Sent!", swalAppSentText: "Submitted. We'll notify you.",
//     swalOops: "Oops!", swalAlreadyApplied: "You may have already applied.",
//     swalRejectCounter: "Reject Counter?", swalRejectCounterText: "Are you sure?",
//     swalYesReject: "Yes, Reject", swalGoBack: "Go Back",
//     swalLogout: "Logout?", swalLogoutText: "Are you sure?",
//     swalYesLogout: "Yes, Logout", swalGreat: "Great!", langToggle: "اردو",
//     optionalCounter: "Enter counter price (Rs.)...",
//     counterNote: "Propose a different price instead",
//     aiFilterPlaceholder: "e.g. Electrician in Lahore under 2000, urgent",
//     aiFilterBtn: "Apply Filter", aiFiltering: "Finding jobs...",
//     activeFilters: "Active Filters", clearFilters: "Clear",
//     noJobsFound: "No jobs found", noJobsFoundSub: "Try a different search or clear filters",
//     noHistory: "No completed jobs yet", noHistorySub: "Finished jobs will appear here",
//     profileProgress: "Profile Progress", profileComplete: "Profile Complete! 🎉",
//     completeYourProfile: "Complete your profile to get more jobs",
//     stepRegistered: "Account Registered",
//     stepProfilePhoto: "Profile Photo Uploaded",
//     stepCnicDocs: "CNIC Documents Uploaded",
//     stepAvailability: "Availability Posted",
//     stepLicense: "Driving License Uploaded",
//     stepVerified: "Admin Verified",
//     tapToComplete: "Tap to complete",
//     trackingHeader: "Job In Progress",
//     notifications: "Notifications",
//     notifSubtitle: "Job alerts will appear here",
//     markAllRead: "Mark all read",
//     clearAll: "Clear all",
//     noNotifications: "No notifications yet",
//     // Profile tips
//     tipProfilePhoto: "Go to Settings → Upload a clear photo of yourself",
//     tipCnic: "Go to Settings → Upload front & back of your CNIC",
//     tipAvailability: "Click 'Post Availability' in the sidebar to post your skills",
//     tipLicense: "In Post Availability form, upload your driving license",
//     tipVerified: "Our team will review and verify your account within 24 hours",
//     boostTitle: "💡 How to get more jobs",
//     boostSub: "Complete these steps to appear in more employer searches",
//     // Skill-based filter
//     skillFilterOn: "Showing jobs matching your skill",
//     skillFilterOff: "Show all jobs",
//     yourSkill: "Your skill",
//     removeFilter: "Remove filter",
//     // Applied tab
//     appliedViaRequest: "📩 Employer Request",
//     appliedViaBrowse: "📝 Browse Apply",
//     agreedPriceLabel: "Agreed Price",
//     yourOfferLabel: "Your Offer",
//     noAppsDesc: "Jobs you apply to and employer requests you accept will appear here",
//     confirmed: "Confirmed", callEmployer: "Call Employer",
//   },
//   ur: {
//     dir: "rtl", brand: "روزگار ہب", role: "ورکر",
//     navRequests: "نوکری کی درخواستیں", navApplied: "میری درخواستیں",
//     navBrowse: "نوکریاں دیکھیں", navHistory: "نوکری کی تاریخ", navAvail: "دستیابی پوسٹ کریں",
//     logout: "لاگ آؤٹ", online: "آن لائن",
//     headerRequests: "آنے والی درخواستیں", headerApplied: "میری درخواستیں",
//     headerBrowse: "نوکریاں دیکھیں", headerHistory: "نوکری کی تاریخ", welcomeBack: "خوش آمدید",
//     waitingTitle: "نوکری کی درخواستوں کا انتظار ہے...",
//     waitingDesc: "جب آپ کے علاقے میں کوئی نوکری پوسٹ ہوگی، خود بخود آجائے گی",
//     incomingTitle: "نئی درخواست آ رہی ہے!", incomingDesc: "پاپ اپ میں جواب دیں",
//     recentNotifs: "حالیہ اطلاعات", noApps: "ابھی کوئی درخواست نہیں",
//     appliedOn: "درخواست دی", recently: "حال ہی میں", pending: "زیر التواء", shortlisted: "منتخب",
//     applyNow: "ابھی درخواست دیں", applyFor: "نوکری کے لیے درخواست",
//     employerListedRate: "آجر کی مقررہ شرح", yourOffer: "آپ کی پیشکش (روپے)",
//     aboveRate: "مقررہ شرح سے زیادہ", belowRate: "مقررہ شرح سے کم",
//     matchingRate: "آجر کی مقررہ شرح کے برابر",
//     submitApp: "درخواست جمع کریں", newJobRequest: "نئی نوکری کی درخواست", employerOffer: "آجر کی پیشکش",
//     acceptJob: "نوکری قبول کریں", declineJob: "رد کریں",
//     counterOffer: "جوابی پیشکش", sendCounter: "بھیجیں",
//     offerSent: "جوابی پیشکش بھیج دی گئی!",
//     yourOfferWas: "آپ کی جوابی پیشکش:", counterReceived: "آجر کی جوابی پیشکش",
//     yourOfferWasLabel: "آپ کی پیشکش تھی",
//     accept: "قبول کریں", reject: "رد کریں",
//     jobConfirmed: "نوکری کی تصدیق!", jobConfirmedDesc: "کام کی جگہ پر جانے کے لیے تیار ہوں",
//     viewJobDetails: "نوکری ٹریک کریں",
//     offerRejected: "منتخب نہیں ہوئے", offerRejectedDesc: "آجر نے دوسرا ورکر منتخب کیا",
//     close: "بند کریں", dismissed: "درخواست واپس",
//     dismissedDesc: "آجر نے آپ کی قبولیت رد کر دی",
//     postAvailTitle: "اپنی دستیابی پوسٹ کریں",
//     skillLabel: "آپ کی مہارت / پیشہ", skillPlaceholder: "مثلاً: الیکٹریشن، پلمبر، ڈرائیور",
//     expLabel: "تجربے کے سال", expPlaceholder: "مثلاً: ۵ سال",
//     rateLabel: "فی گھنٹہ اجرت (روپے)", ratePlaceholder: "مثلاً: ۵۰۰",
//     locLabel: "آپ کا مقام", locPlaceholder: "مثلاً: کراچی، لاہور",
//     descLabel: "تفصیل", descPlaceholder: "اپنی مہارتیں بیان کریں...",
//     postBtn: "دستیابی پوسٹ کریں", cancelBtn: "منسوخ کریں",
//     driverLicenseSection: "ڈرائیونگ لائسنس (ڈرائیوروں کے لیے ضروری)",
//     driverLicenseHint: "اپنا لائسنس اپلوڈ کریں — پروفائل میں محفوظ ہو جائے گا اور پوائنٹس ملیں گے",
//     uploadLicenseBtn: "لائسنس اپلوڈ کریں", licenseUploaded: "لائسنس اپلوڈ ہو گیا!",
//     licenseUploading: "اپلوڈ ہو رہا ہے...", chooseLicense: "لائسنس تصویر یا PDF منتخب کریں",
//     swalPosted: "پوسٹ ہو گئی!", swalPostedText: "دستیابی اپڈیٹ ہو گئی",
//     swalError: "خرابی", swalErrorText: "پوسٹ کرنے میں ناکامی",
//     swalSavedLocally: "مقامی طور پر محفوظ", swalSavedLocallyText: "مقامی طور پر محفوظ کیا گیا",
//     swalAppSent: "درخواست بھیج دی!", swalAppSentText: "جمع ہو گئی",
//     swalOops: "افسوس!", swalAlreadyApplied: "شاید پہلے ہی درخواست دے چکے ہیں",
//     swalRejectCounter: "جوابی پیشکش رد کریں؟", swalRejectCounterText: "کیا آپ واقعی؟",
//     swalYesReject: "ہاں، رد کریں", swalGoBack: "واپس جائیں",
//     swalLogout: "لاگ آؤٹ؟", swalLogoutText: "کیا آپ واقعی؟",
//     swalYesLogout: "ہاں، لاگ آؤٹ", swalGreat: "بہت اچھا!", langToggle: "English",
//     optionalCounter: "جوابی قیمت درج کریں (روپے)...",
//     counterNote: "مختلف قیمت تجویز کریں",
//     aiFilterPlaceholder: "مثلاً: لاہور میں الیکٹریشن، ۲۰۰۰ سے کم، فوری",
//     aiFilterBtn: "AI سے تلاش کریں", aiFiltering: "نوکریاں ڈھونڈ رہے ہیں...",
//     activeFilters: "فعال فلٹر", clearFilters: "صاف کریں",
//     noJobsFound: "کوئی نوکری نہیں ملی", noJobsFoundSub: "مختلف تلاش کریں یا فلٹر صاف کریں",
//     noHistory: "ابھی کوئی مکمل نوکری نہیں", noHistorySub: "مکمل نوکریاں یہاں دکھیں گی",
//     profileProgress: "پروفائل پروگریس", profileComplete: "پروفائل مکمل! 🎉",
//     completeYourProfile: "زیادہ نوکریاں پانے کے لیے پروفائل مکمل کریں",
//     stepRegistered: "اکاؤنٹ رجسٹر",
//     stepProfilePhoto: "پروفائل فوٹو اپلوڈ",
//     stepCnicDocs: "شناختی کارڈ اپلوڈ",
//     stepAvailability: "دستیابی پوسٹ",
//     stepLicense: "ڈرائیونگ لائسنس اپلوڈ",
//     stepVerified: "ایڈمن سے تصدیق",
//     tapToComplete: "مکمل کریں",
//     trackingHeader: "نوکری جاری ہے",
//     notifications: "اطلاعات",
//     notifSubtitle: "نوکری کی اطلاعات یہاں دکھیں گی",
//     markAllRead: "سب پڑھا",
//     clearAll: "سب صاف کریں",
//     noNotifications: "ابھی کوئی اطلاع نہیں",
//     // Profile tips
//     tipProfilePhoto: "سیٹنگز میں جائیں ← اپنی تصویر اپلوڈ کریں",
//     tipCnic: "سیٹنگز میں جائیں ← شناختی کارڈ کے دونوں طرف اپلوڈ کریں",
//     tipAvailability: "سائیڈبار میں 'دستیابی پوسٹ کریں' پر کلک کریں",
//     tipLicense: "دستیابی فارم میں اپنا ڈرائیونگ لائسنس اپلوڈ کریں",
//     tipVerified: "ہماری ٹیم 24 گھنٹوں میں آپ کا اکاؤنٹ تصدیق کرے گی",
//     boostTitle: "💡 زیادہ نوکریاں کیسے پائیں",
//     boostSub: "یہ اقدامات مکمل کریں اور آجروں کی تلاش میں نظر آئیں",
//     // Skill-based filter
//     skillFilterOn: "آپ کی مہارت کے مطابق نوکریاں",
//     skillFilterOff: "تمام نوکریاں دکھائیں",
//     yourSkill: "آپ کی مہارت",
//     removeFilter: "فلٹر ہٹائیں",
//     // Applied tab
//     appliedViaRequest: "📩 آجر کی درخواست",
//     appliedViaBrowse: "📝 براؤز سے درخواست",
//     agreedPriceLabel: "طے شدہ قیمت",
//     yourOfferLabel: "آپ کی پیشکش",
//     noAppsDesc: "آپ کی درخواستیں اور آجر کی تصدیق شدہ نوکریاں یہاں دکھیں گی",
//     confirmed: "تصدیق شدہ", callEmployer: "آجر کو کال کریں",
//   }
// };

// /* ═══════════════ NOTIFICATION BELL ═══════════════ */
// function NotificationBell({ notifications, setNotifications, t }) {
//   const [open, setOpen] = useState(false);
//   const [readIds, setReadIds] = useState(new Set());
//   const ref = useRef(null);

//   useEffect(() => {
//     const handler = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const unreadCount = notifications.filter(n => !readIds.has(n.id)).length;
//   const markAllRead = (e) => { e.stopPropagation(); setReadIds(new Set(notifications.map(n => n.id))); };
//   const clearAll = (e) => { e.stopPropagation(); setNotifications([]); setReadIds(new Set()); setOpen(false); };

//   const notifIcon = (msg) => {
//     if (msg.includes("confirmed") || msg.includes("accepted") || msg.includes("✅")) return { icon: "✅", bg: "#dcfce7" };
//     if (msg.includes("offer") || msg.includes("counter")) return { icon: "💬", bg: "#eff6ff" };
//     if (msg.includes("job") || msg.includes("New") || msg.includes("📩")) return { icon: "📩", bg: "#fef3c7" };
//     return { icon: "🔔", bg: "#f1f5f9" };
//   };

//   return (
//     <div ref={ref} style={{ position: "relative" }}>
//       <div
//         onClick={() => setOpen(o => !o)}
//         style={{
//           display: "flex", alignItems: "center", gap: 6,
//           background: open ? "#dcfce7" : "rgba(255,255,255,0.1)",
//           padding: "6px 12px", borderRadius: 20, cursor: "pointer",
//           border: open ? "1.5px solid #86efac" : "1.5px solid transparent",
//           transition: "all .15s", position: "relative",
//         }}
//       >
//         <Bell size={16} color={unreadCount > 0 ? "#34d399" : "rgba(255,255,255,0.6)"} />
//         {unreadCount > 0 && (
//           <div style={{
//             position: "absolute", top: -4, right: -4,
//             minWidth: 16, height: 16, padding: "0 4px",
//             background: "#ef4444", borderRadius: "99px",
//             fontSize: 9, color: "#fff", display: "flex",
//             alignItems: "center", justifyContent: "center",
//             fontWeight: 800, boxShadow: "0 0 0 2px #065f46",
//           }}>
//             {unreadCount > 9 ? "9+" : unreadCount}
//           </div>
//         )}
//       </div>

//       {open && (
//         <div style={{
//           position: "absolute", top: "calc(100% + 10px)", right: 0,
//           width: 320, background: "#fff", borderRadius: 16,
//           boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
//           border: "1.5px solid #e2e8f0", zIndex: 999, overflow: "hidden",
//         }}>
//           <div style={{
//             padding: "14px 16px", display: "flex",
//             alignItems: "center", justifyContent: "space-between",
//             background: "linear-gradient(135deg,#064e3b,#065f46)",
//             borderBottom: "1px solid rgba(255,255,255,.08)",
//           }}>
//             <div>
//               <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{t.notifications}</div>
//               <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginTop: 1 }}>{t.notifSubtitle}</div>
//             </div>
//             {notifications.length > 0 && (
//               <button onClick={markAllRead} style={{ fontSize: 11, color: "#6ee7b7", background: "rgba(255,255,255,.1)", border: "none", borderRadius: 8, padding: "4px 9px", cursor: "pointer", fontWeight: 600 }}>
//                 {t.markAllRead}
//               </button>
//             )}
//           </div>

//           <div style={{ maxHeight: 320, overflowY: "auto" }}>
//             {notifications.length === 0 ? (
//               <div style={{ padding: "36px 20px", textAlign: "center" }}>
//                 <div style={{ fontSize: 32, marginBottom: 8 }}>🔔</div>
//                 <p style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>{t.noNotifications}</p>
//                 <p style={{ fontSize: 12, color: "#94a3b8" }}>{t.notifSubtitle}</p>
//               </div>
//             ) : (
//               notifications.slice().reverse().map((n, i) => {
//                 const isRead = readIds.has(n.id);
//                 const { icon, bg } = notifIcon(n.msg);
//                 return (
//                   <div key={n.id} onClick={() => setReadIds(prev => new Set([...prev, n.id]))}
//                     style={{
//                       padding: "12px 16px",
//                       borderBottom: i < notifications.length - 1 ? "1px solid #f8fafc" : "none",
//                       display: "flex", alignItems: "flex-start", gap: 10,
//                       background: isRead ? "#fff" : "#f8fff8",
//                       cursor: "pointer", transition: "background .15s",
//                     }}
//                   >
//                     <div style={{ width: 32, height: 32, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{icon}</div>
//                     <div style={{ flex: 1, minWidth: 0 }}>
//                       <p style={{ fontSize: 12.5, color: "#0f172a", fontWeight: isRead ? 400 : 600, lineHeight: 1.45, margin: 0 }}>{n.msg}</p>
//                       <p style={{ fontSize: 11, color: "#94a3b8", margin: "3px 0 0" }}>Just now</p>
//                     </div>
//                     {!isRead && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", flexShrink: 0, marginTop: 4 }} />}
//                   </div>
//                 );
//               })
//             )}
//           </div>

//           {notifications.length > 0 && (
//             <div style={{ padding: "10px 16px", borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "center" }}>
//               <button onClick={clearAll} style={{ fontSize: 12, color: "#ef4444", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "5px 14px", cursor: "pointer", fontWeight: 600 }}>
//                 {t.clearAll}
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function WorkerDashboard() {
//   const [lang, setLang] = useState("en");
//   const t = T[lang];

//   const [user, setUser]               = useState(null);
//   const [activeTab, setActiveTab]     = useState("requests");
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const [incomingRequest, setIncomingRequest] = useState(null);
//   const [showPopup, setShowPopup]             = useState(false);
//   const [popupTimer, setPopupTimer]           = useState(30);
//   const timerRef = useRef(null);
//   const [popupState, setPopupState]           = useState(null);
//   const [counterPrice, setCounterPrice]       = useState("");
//   const [employerCounter, setEmployerCounter] = useState(null);

//   const [confirmedJob, setConfirmedJob] = useState(null);
//   const [showTracker, setShowTracker]   = useState(false);

//   const [showApplyModal, setShowApplyModal] = useState(false);
//   const [selectedJob, setSelectedJob]       = useState(null);
//   const [offeredRate, setOfferedRate]       = useState("");
//   const [appliedJobs, setAppliedJobs]       = useState([]);
//   const [jobHistory, setJobHistory]         = useState([]);

//   const [showAvailModal, setShowAvailModal] = useState(false);
//   const [availability, setAvailability]     = useState({ skill:"", experience:"", hourlyRate:"", location:"", description:"", status:"available" });
//   const [licenseFile, setLicenseFile]       = useState(null);
//   const [licenseUploading, setLicenseUploading] = useState(false);
//   const [licenseUploaded, setLicenseUploaded]   = useState(false);

//   const [notifications, setNotifications] = useState([]);
//   const [userProfile, setUserProfile]     = useState(null);

//   const swal = (opts) => typeof window !== "undefined" && window.Swal && window.Swal.fire(opts);

//   useEffect(() => {
//     const handler = (e) => { e.preventDefault(); e.returnValue = "Your active session will be lost if you reload. Are you sure?"; return e.returnValue; };
//     window.addEventListener("beforeunload", handler);
//     return () => window.removeEventListener("beforeunload", handler);
//   }, []);

//   useEffect(() => {
//     if (document.getElementById("swal-cdn")) return;
//     const link = document.createElement("link"); link.rel = "stylesheet"; link.href = "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"; document.head.appendChild(link);
//     const script = document.createElement("script"); script.id = "swal-cdn"; script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11"; document.head.appendChild(script);
//   }, []);

//   const refetchProfile = (token) => {
//     const tk = token || localStorage.getItem("token");
//     if (!tk) return;
//     fetch(`${API}/api/auth/me`, { headers: { Authorization: `Bearer ${tk}` } })
//       .then(r => r.json()).then(d => { if (d.user) setUserProfile(d.user); }).catch(() => {});
//   };

//   useEffect(() => {
//     const stored = localStorage.getItem("user");
//     if (!stored) return;
//     const u = JSON.parse(stored);
//     setUser(u);
//     socket.emit("join", u.id);
//     socket.emit("worker_online", { workerId: u.id, name: u.name });
//     const token = localStorage.getItem("token");
//     if (token) refetchProfile(token); else setUserProfile(u);

//     fetch(`${API}/api/applications/${u.id}`).then(r => r.json()).then(setAppliedJobs).catch(() => {});

//     const headers = token ? { Authorization: `Bearer ${token}` } : {};
//     fetch(`${API}/api/job-requests/worker/${u.id}`, { headers })
//       .then(r => r.json())
//       .then(data => {
//         if (!Array.isArray(data)) return;
//         const accepted = data.filter(r => ["accepted","confirmed","in_progress","completed"].includes(r.status));
//         setAppliedJobs(prev => {
//           const ids = new Set(prev.map(x => x._id));
//           const merged = [...prev];
//           accepted.forEach(r => {
//             if (!ids.has(r._id)) merged.push({
//               _id: r._id,
//               job: { title: r.jobTitle || r.title || r.category, workLocation: r.workLocation || r.location },
//               status: r.status,
//               offeredRate: r.agreedPrice || r.offeredPrice,
//               agreedPrice: r.agreedPrice || r.offeredPrice,
//               createdAt: r.createdAt,
//               source: "request",
//               employerName: r.employerName,
//               employerPhone: r.employerPhone || "",
//             });
//           });
//           return merged;
//         });
//         const completed = data.filter(r => r.status === "completed");
//         setJobHistory(completed.map(r => ({
//           _id: r._id,
//           title: r.jobTitle || r.title || r.category || "Job",
//           workLocation: r.workLocation || r.location || "",
//           employerName: r.employerName || "",
//           agreedPrice: r.agreedPrice || r.offeredPrice || "",
//           completedAt: r.updatedAt || r.createdAt,
//         })));
//       }).catch(() => {});
//   }, []);

//   useEffect(() => {
//     socket.on("new_job_request", (data) => {
//       if (showTracker) return;
//       setIncomingRequest(data); setCounterPrice(data.offeredPrice || ""); setPopupState(null); setShowPopup(true); setPopupTimer(30);
//       addNotif(`📩 New job: ${data.title || data.category}`);
//     });
//     socket.on("employer_confirm_worker", (data) => {
//       setPopupState("confirmed");
//       setConfirmedJob({ request: incomingRequest, price: data.finalPrice || counterPrice });
//       addNotif("✅ You have been confirmed for the job!");
//       if (incomingRequest) setAppliedJobs(prev => {
//         const exists = prev.some(a => a._id === incomingRequest.requestId);
//         if (exists) return prev.map(a => a._id === incomingRequest.requestId ? { ...a, status:"confirmed", agreedPrice: data.finalPrice || counterPrice || incomingRequest.offeredPrice } : a);
//         return [{
//           _id: incomingRequest.requestId,
//           job: { title: incomingRequest.title || incomingRequest.category, workLocation: incomingRequest.workLocation },
//           status: "confirmed",
//           offeredRate: data.finalPrice || counterPrice || incomingRequest.offeredPrice,
//           agreedPrice: data.finalPrice || counterPrice || incomingRequest.offeredPrice,
//           createdAt: new Date().toISOString(),
//           source: "request",
//           employerName: incomingRequest.employerName,
//           employerPhone: incomingRequest.employerPhone || "",
//         }, ...prev];
//       });
//     });
//     socket.on("employer_accepted", () => {
//       setPopupState("confirmed");
//       setConfirmedJob({ request: incomingRequest, price: counterPrice || incomingRequest?.offeredPrice });
//       addNotif("✅ Your offer was accepted!");
//       if (incomingRequest) setAppliedJobs(prev => {
//         const exists = prev.some(a => a._id === incomingRequest.requestId);
//         if (exists) return prev.map(a => a._id === incomingRequest.requestId ? { ...a, status:"confirmed", agreedPrice: counterPrice || incomingRequest.offeredPrice } : a);
//         return [{
//           _id: incomingRequest.requestId,
//           job: { title: incomingRequest.title || incomingRequest.category, workLocation: incomingRequest.workLocation },
//           status: "confirmed",
//           offeredRate: counterPrice || incomingRequest.offeredPrice,
//           agreedPrice: counterPrice || incomingRequest.offeredPrice,
//           createdAt: new Date().toISOString(),
//           source: "request",
//           employerName: incomingRequest.employerName,
//           employerPhone: incomingRequest.employerPhone || "",
//         }, ...prev];
//       });
//     });
//     socket.on("request_taken_not_selected", () => { if (popupState === "accepted_waiting" || popupState === "counter_sent") setPopupState("rejected"); else if (!showPopup) { setShowPopup(false); setIncomingRequest(null); } });
//     socket.on("employer_rejected", () => { if (popupState === "counter_sent") setPopupState("rejected"); });
//     socket.on("employer_counter",  (data) => { setEmployerCounter(data); setPopupState("counter_received"); addNotif(`💬 Employer sent a counter offer: Rs. ${data.price}`); });
//     socket.on("employer_dismiss_worker", () => { setPopupState("dismissed"); addNotif("Request was dismissed by employer"); });
//     return () => {
//       socket.off("new_job_request"); socket.off("employer_confirm_worker"); socket.off("employer_accepted");
//       socket.off("request_taken_not_selected"); socket.off("employer_rejected"); socket.off("employer_counter"); socket.off("employer_dismiss_worker");
//     };
//   }, [user, incomingRequest, popupState, showPopup, showTracker, counterPrice]);

//   useEffect(() => {
//     if (showPopup && popupState === null) {
//       setPopupTimer(30);
//       timerRef.current = setInterval(() => setPopupTimer(prev => { if (prev <= 1) { clearInterval(timerRef.current); dismissPopup(); return 0; } return prev - 1; }), 1000);
//     } else clearInterval(timerRef.current);
//     return () => clearInterval(timerRef.current);
//   }, [showPopup, popupState]);

//   const addNotif = (msg) => setNotifications(p => [...p, { id: Date.now() + Math.random(), msg }]);
//   const dismissPopup = () => { setShowPopup(false); setPopupState(null); setCounterPrice(""); setEmployerCounter(null); };
//   const openTracker  = () => { setShowPopup(false); setShowTracker(true); setPopupState(null); };

//   const handleTrackerComplete = () => {
//     if (confirmedJob) {
//       const entry = {
//         _id: confirmedJob.request?.requestId || Date.now().toString(),
//         title: confirmedJob.request?.title || confirmedJob.request?.category || "Job",
//         workLocation: confirmedJob.request?.workLocation || "",
//         employerName: confirmedJob.request?.employerName || "",
//         agreedPrice: confirmedJob.price || "",
//         completedAt: new Date().toISOString(),
//       };
//       setJobHistory(prev => [entry, ...prev]);
//       setAppliedJobs(prev => prev.map(a => a._id === confirmedJob.request?.requestId ? { ...a, status:"completed" } : a));
//     }
//     setShowTracker(false); setConfirmedJob(null); setIncomingRequest(null);
//   };

//   const handleAcceptJob = () => { socket.emit("worker_job_accept", { requestId: incomingRequest.requestId, employerId: incomingRequest.employerId, workerId: user.id, workerName: user.name, workerRating: "4.8", workerPhone: user.phone || "" }); setPopupState("accepted_waiting"); };
//   const handleDeclineJob = () => { socket.emit("worker_job_decline", { requestId: incomingRequest.requestId, workerId: user.id }); dismissPopup(); setIncomingRequest(null); };
//   const handleSendCounter = () => { if (!counterPrice) { swal({ title: "Enter a price", icon: "warning" }); return; } socket.emit("worker_offer", { requestId: incomingRequest.requestId, employerId: incomingRequest.employerId, workerId: user.id, workerName: user.name, price: counterPrice, rating: "4.8", phone: user.phone }); setPopupState("counter_sent"); };
//   const handleAcceptEmployerCounter = () => { socket.emit("worker_accepted", { requestId: incomingRequest.requestId, employerId: incomingRequest.employerId, workerId: user.id, workerName: user.name, price: employerCounter.price, phone: user.phone }); setConfirmedJob({ request: incomingRequest, price: employerCounter.price }); setPopupState("confirmed"); };
//   const handleRejectEmployerCounter = () => { swal({ title: t.swalRejectCounter, text: t.swalRejectCounterText, icon: "warning", showCancelButton: true, confirmButtonColor: "#ef4444", cancelButtonColor: "#6b7280", confirmButtonText: t.swalYesReject, cancelButtonText: t.swalGoBack }).then(r => { if (r.isConfirmed) { socket.emit("worker_rejected_counter", { requestId: incomingRequest.requestId, employerId: incomingRequest.employerId, workerId: user.id }); dismissPopup(); setIncomingRequest(null); } }); };

//   const uploadLicenseToBackend = async (file) => {
//     if (!file) return false;
//     const token = localStorage.getItem("token");
//     if (!token) { swal({ title: "Login required", icon: "warning" }); return false; }
//     setLicenseUploading(true);
//     try {
//       const fd = new FormData();
//       fd.append("drivingLicense", file);
//       const res  = await fetch(`${API}/api/auth/upload-driver-license`, { method:"POST", headers:{ Authorization: `Bearer ${token}` }, body: fd });
//       const data = await res.json();
//       if (res.ok) { setLicenseUploaded(true); refetchProfile(token); return true; }
//       else { swal({ title: "Upload failed", text: data.error || "Try again", icon: "error" }); return false; }
//     } catch (err) { swal({ title: "Upload error", text: err.message, icon: "error" }); return false; }
//     finally { setLicenseUploading(false); }
//   };

//   const handlePostAvailability = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     const isDriver = availability.skill.toLowerCase().includes("driver");
//     if (isDriver && !licenseUploaded && licenseFile) await uploadLicenseToBackend(licenseFile);
//     try {
//       const res = await fetch(`${API}/api/workers`, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ ...availability, worker: user.id }) });
//       setShowAvailModal(false);
//       if (token) {
//         try { await fetch(`${API}/api/auth/update-profile`, { method:"PATCH", headers:{"Content-Type":"application/json", Authorization:`Bearer ${token}`}, body: JSON.stringify({ availabilityPosted: true }) }); } catch (_) {}
//         refetchProfile(token);
//       } else setUserProfile(prev => prev ? { ...prev, availabilityPosted: true } : prev);
//       if (res.ok) swal({ title: t.swalPosted, text: t.swalPostedText, icon: "success" });
//       else        swal({ title: t.swalError,  text: t.swalErrorText,  icon: "error" });
//     } catch (_) { setShowAvailModal(false); setUserProfile(prev => prev ? { ...prev, availabilityPosted: true } : prev); swal({ title: t.swalSavedLocally, text: t.swalSavedLocallyText, icon: "info" }); }
//   };

//   const handleApplyJob = async (jobId, rate) => {
//     const res  = await fetch(`${API}/api/applications`, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ job: jobId, worker: user.id, offeredRate: rate }) });
//     const data = await res.json();
//     if (!res.ok) { swal({ title: t.swalOops, text: data.error || t.swalAlreadyApplied, icon: "error" }); return; }
//     setShowApplyModal(false);
//     swal({ title: t.swalAppSent, html: `<strong>Rs. ${rate}</strong> — ${t.swalAppSentText}`, icon: "success" });
//   };

//   const handleLogout = () => { swal({ title: t.swalLogout, text: t.swalLogoutText, icon: "question", showCancelButton: true, confirmButtonColor: "#ef4444", cancelButtonColor: "#6b7280", confirmButtonText: t.swalYesLogout, cancelButtonText: t.swalGoBack }).then(r => { if (r.isConfirmed) { localStorage.removeItem("user"); window.location.href = "/login"; } }); };

//   if (!user) return <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"linear-gradient(135deg,#064e3b,#065f46)" }}><div style={{ width:56, height:56, border:"4px solid #34d399", borderTopColor:"transparent", borderRadius:"50%", animation:"spin 1s linear infinite" }} /><style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style></div>;

//   const isDriverSkill = availability.skill.toLowerCase().includes("driver");
//   const headerTitle = showTracker ? t.trackingHeader : activeTab === "requests" ? t.headerRequests : activeTab === "applied" ? t.headerApplied : activeTab === "history" ? t.headerHistory : t.headerBrowse;

//   return (
//     <div dir={t.dir} style={{ minHeight:"100vh", display:"flex", background:"#f0f4f8", fontFamily: lang==="ur"?"'Noto Nastaliq Urdu',serif":"'Segoe UI',sans-serif" }}>
//       {showPopup && incomingRequest && (
//         <JobRequestPopup t={t} request={incomingRequest} popupState={popupState} popupTimer={popupTimer}
//           counterPrice={counterPrice} setCounterPrice={setCounterPrice} employerCounter={employerCounter}
//           onAcceptJob={handleAcceptJob} onDeclineJob={handleDeclineJob}
//           onShowCounter={() => setPopupState("counter_input")} onSendCounter={handleSendCounter}
//           onAcceptEmployerCounter={handleAcceptEmployerCounter} onRejectEmployerCounter={handleRejectEmployerCounter}
//           onDismiss={dismissPopup} onOpenTracker={openTracker} userId={user.id} />
//       )}

//       {showApplyModal && selectedJob && (
//         <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:200, padding:24, backdropFilter:"blur(4px)" }}>
//           <div style={{ background:"#fff", borderRadius:24, width:"100%", maxWidth:480, boxShadow:"0 24px 60px rgba(0,0,0,0.3)", display:"flex", flexDirection:"column", maxHeight:"88vh", overflow:"hidden" }}>
//             <div style={{ background:"linear-gradient(135deg,#0f172a,#1e3a5f)", padding:"24px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
//               <div><p style={{ fontSize:11, color:"rgba(255,255,255,0.5)", fontWeight:700, textTransform:"uppercase", margin:0 }}>{t.applyFor}</p><h3 style={{ fontSize:20, fontWeight:800, color:"#fff", margin:"6px 0 0" }}>{selectedJob.title}</h3></div>
//               <button onClick={() => setShowApplyModal(false)} style={{ background:"rgba(255,255,255,0.15)", border:"none", borderRadius:10, padding:8, cursor:"pointer" }}><X size={18} color="#fff" /></button>
//             </div>
//             <div style={{ padding:28, overflowY:"auto", flex:1 }}>
//               <div style={{ background:"#f0fdf4", border:"1.5px solid #86efac", borderRadius:12, padding:"12px 18px", marginBottom:20, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//                 <span style={{ fontSize:13, color:"#16a34a", fontWeight:600 }}>{t.employerListedRate}</span>
//                 <span style={{ fontSize:20, fontWeight:800, color:"#0f172a" }}>Rs. {String(selectedJob.salary).replace(/^Rs\.\s*/i,"")}</span>
//               </div>
//               {selectedJob.location && <div style={{ background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:12, padding:"12px 16px", marginBottom:20, display:"flex", alignItems:"center", gap:8 }}><MapPin size={15} color="#3b82f6" /><span style={{ fontSize:14, color:"#475569", fontWeight:600 }}>{selectedJob.location}</span></div>}
//               <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10, marginBottom:24 }}>
//                 <label style={{ fontSize:13, fontWeight:700, color:"#374151" }}>{t.yourOffer}</label>
//                 <div style={{ display:"flex", alignItems:"center", gap:12 }}>
//                   <button onClick={() => setOfferedRate(p => String(Math.max(0,Number(p)-100)))} style={{ width:42, height:42, borderRadius:10, border:"none", background:"#f1f5f9", fontSize:22, fontWeight:700, cursor:"pointer" }}>−</button>
//                   <input type="number" value={offeredRate} onChange={e => setOfferedRate(e.target.value)} style={{ width:130, textAlign:"center", border:"2px solid #16a34a", borderRadius:12, padding:"10px 0", fontSize:22, fontWeight:800, color:"#0f172a", outline:"none" }} />
//                   <button onClick={() => setOfferedRate(p => String(Number(p)+100))} style={{ width:42, height:42, borderRadius:10, border:"none", background:"#f1f5f9", fontSize:22, fontWeight:700, cursor:"pointer" }}>+</button>
//                 </div>
//                 <p style={{ fontSize:12, color:"#94a3b8", margin:0 }}>{Number(offeredRate)>Number(selectedJob.salary)?`Rs. ${Number(offeredRate)-Number(selectedJob.salary)} ${t.aboveRate}`:Number(offeredRate)<Number(selectedJob.salary)?`Rs. ${Number(selectedJob.salary)-Number(offeredRate)} ${t.belowRate}`:t.matchingRate}</p>
//               </div>
//               <button onClick={() => handleApplyJob(selectedJob._id,offeredRate)} style={{ width:"100%", padding:"15px", borderRadius:14, border:"none", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", fontSize:16, fontWeight:700, cursor:"pointer" }}>{t.submitApp}</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <aside style={{ width:sidebarOpen?240:72, background:"linear-gradient(180deg,#064e3b 0%,#065f46 100%)", color:"#fff", display:"flex", flexDirection:"column", transition:"width 0.3s", flexShrink:0 }}>
//         <div style={{ padding:"24px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid rgba(255,255,255,0.1)" }}>
//           {sidebarOpen && <div><div style={{ fontSize:20, fontWeight:800 }}>{t.brand}</div><div style={{ fontSize:11, opacity:0.5, marginTop:2 }}>{t.role}</div></div>}
//           <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background:"rgba(255,255,255,0.1)", border:"none", color:"#fff", padding:8, borderRadius:8, cursor:"pointer" }}>{sidebarOpen?<X size={16}/>:<Menu size={16}/>}</button>
//         </div>
//         <nav style={{ flex:1, padding:"16px 12px", display:"flex", flexDirection:"column", gap:4 }}>
//           {[{id:"requests",icon:Bell,label:t.navRequests},{id:"applied",icon:CheckCircle,label:t.navApplied},{id:"history",icon:Briefcase,label:t.navHistory},{id:"browse",icon:Search,label:t.navBrowse}].map(item => (
//             <button key={item.id} onClick={() => { setActiveTab(item.id); setShowTracker(false); }} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", borderRadius:10, border:"none", cursor:"pointer", background:activeTab===item.id&&!showTracker?"rgba(52,211,153,0.2)":"transparent", color:activeTab===item.id&&!showTracker?"#34d399":"rgba(255,255,255,0.6)", fontWeight:activeTab===item.id&&!showTracker?600:400, fontSize:14, transition:"all 0.2s", flexDirection:t.dir==="rtl"?"row-reverse":"row" }}>
//               <item.icon size={18}/>{sidebarOpen&&<span>{item.label}</span>}
//             </button>
//           ))}
//           <button onClick={() => setShowAvailModal(true)} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", borderRadius:10, border:"none", cursor:"pointer", background:"rgba(251,146,60,0.2)", color:"#fb923c", fontWeight:600, fontSize:14, marginTop:8, flexDirection:t.dir==="rtl"?"row-reverse":"row" }}>
//             <PlusCircle size={18}/>{sidebarOpen&&<span>{t.navAvail}</span>}
//           </button>
//           {confirmedJob && !showTracker && (
//             <button onClick={() => setShowTracker(true)} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", borderRadius:10, border:"2px solid rgba(34,197,94,0.5)", cursor:"pointer", background:"rgba(34,197,94,0.15)", color:"#34d399", fontWeight:700, fontSize:14, marginTop:8, flexDirection:t.dir==="rtl"?"row-reverse":"row", animation:"pulse 2s infinite" }}>
//               🔧{sidebarOpen&&<span>{t.trackingHeader}</span>}
//             </button>
//           )}
//         </nav>
//         <div style={{ padding:"16px 12px", borderTop:"1px solid rgba(255,255,255,0.1)" }}>
//           {sidebarOpen && <div style={{ display:"flex", alignItems:"center", gap:10, padding:"12px 14px", marginBottom:8 }}><div style={{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(135deg,#34d399,#059669)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, fontWeight:700, flexShrink:0 }}>{user.name?.charAt(0).toUpperCase()}</div><div><div style={{ fontSize:13, fontWeight:600 }}>{user.name}</div><div style={{ fontSize:11, opacity:0.5 }}>{user.email}</div></div></div>}
//           <button onClick={handleLogout} style={{ display:"flex", alignItems:"center", gap:12, padding:"10px 14px", borderRadius:10, border:"none", cursor:"pointer", width:"100%", background:"rgba(239,68,68,0.15)", color:"#f87171", fontSize:14, flexDirection:t.dir==="rtl"?"row-reverse":"row" }}><LogOut size={16}/>{sidebarOpen&&<span>{t.logout}</span>}</button>
//         </div>
//       </aside>

//       <main style={{ flex:1, overflow:"auto" }}>
//         <header style={{ background:"#fff", borderBottom:"1px solid #e2e8f0", padding:"20px 32px", display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:5 }}>
//           <div><h1 style={{ fontSize:22, fontWeight:700, color:"#0f172a", margin:0 }}>{headerTitle}</h1><p style={{ fontSize:13, color:"#64748b", margin:"4px 0 0" }}>{t.welcomeBack}, {user.name}</p></div>
//           <div style={{ display:"flex", alignItems:"center", gap:12 }}>
//             <button onClick={() => setLang(l => l==="en"?"ur":"en")} style={{ padding:"6px 16px", borderRadius:20, border:"2px solid #16a34a", background:"#fff", color:"#16a34a", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:lang==="en"?"'Noto Nastaliq Urdu',serif":"'Segoe UI',sans-serif" }}>{t.langToggle}</button>
//             <div style={{ display:"flex", alignItems:"center", gap:6, background:"#dcfce7", padding:"6px 14px", borderRadius:20 }}><div style={{ width:8, height:8, borderRadius:"50%", background:"#16a34a" }} /><span style={{ fontSize:12, fontWeight:600, color:"#16a34a" }}>{t.online}</span></div>
//             <NotificationBell notifications={notifications} setNotifications={setNotifications} t={t} />
//           </div>
//         </header>

//         <div style={{ padding:"32px" }}>
//           {showTracker && confirmedJob && <JobTracker role="worker" job={{ requestId:confirmedJob.request?.requestId, title:confirmedJob.request?.title, category:confirmedJob.request?.category, workLocation:confirmedJob.request?.workLocation, lat:confirmedJob.request?.lat, lng:confirmedJob.request?.lng }} worker={{ workerId:user?.id, workerName:user?.name, workerPhone:user?.phone }} employer={{ employerId:confirmedJob.request?.employerId, employerName:confirmedJob.request?.employerName }} agreedPrice={confirmedJob.price} socket={socket} onJobComplete={handleTrackerComplete} lang={lang} t={t} />}
//           {!showTracker && activeTab === "requests" && <RequestsTab t={t} notifications={notifications} showPopup={showPopup} userProfile={userProfile} onPostAvail={() => setShowAvailModal(true)} />}
//           {!showTracker && activeTab === "applied"  && <AppliedTab  t={t} applied={appliedJobs} lang={lang} />}
//           {!showTracker && activeTab === "history"  && <HistoryTab  t={t} history={jobHistory} lang={lang} />}
//           {!showTracker && activeTab === "browse"   && <BrowseTab   t={t} lang={lang} userId={user.id} userProfile={userProfile} onOpenApplyModal={(job) => { setSelectedJob(job); setOfferedRate(String(job.salary||"")); setShowApplyModal(true); }} />}
//         </div>
//       </main>

//       {showAvailModal && (
//         <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:100, padding:24 }}>
//           <div style={{ background:"#fff", borderRadius:20, padding:32, maxWidth:540, width:"100%", maxHeight:"90vh", overflowY:"auto" }}>
//             <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24 }}>
//               <h3 style={{ fontSize:20, fontWeight:700, margin:0 }}>{t.postAvailTitle}</h3>
//               <button onClick={() => setShowAvailModal(false)} style={{ background:"#f1f5f9", border:"none", borderRadius:8, padding:8, cursor:"pointer" }}><X size={18}/></button>
//             </div>
//             <form onSubmit={handlePostAvailability} style={{ display:"flex", flexDirection:"column", gap:16 }}>
//               {[{key:"skill",label:t.skillLabel,placeholder:t.skillPlaceholder},{key:"experience",label:t.expLabel,placeholder:t.expPlaceholder},{key:"hourlyRate",label:t.rateLabel,placeholder:t.ratePlaceholder},{key:"location",label:t.locLabel,placeholder:t.locPlaceholder}].map(f => (
//                 <div key={f.key}>
//                   <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>{f.label}</label>
//                   <input required value={availability[f.key]} onChange={e => setAvailability({...availability,[f.key]:e.target.value})} placeholder={f.placeholder} style={{ width:"100%", padding:"12px 16px", borderRadius:10, border:"1.5px solid #e2e8f0", fontSize:14, outline:"none", boxSizing:"border-box" }} />
//                 </div>
//               ))}
//               <div>
//                 <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>{t.descLabel}</label>
//                 <textarea required value={availability.description} onChange={e => setAvailability({...availability,description:e.target.value})} rows={3} placeholder={t.descPlaceholder} style={{ width:"100%", padding:"12px 16px", borderRadius:10, border:"1.5px solid #e2e8f0", fontSize:14, outline:"none", resize:"vertical", boxSizing:"border-box" }} />
//               </div>

//               {isDriverSkill && (
//                 <div style={{ background:"#f0f9ff", borderRadius:14, padding:18, border:"2px solid #bae6fd" }}>
//                   <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
//                     <Car size={18} color="#0369a1" />
//                     <span style={{ fontSize:14, fontWeight:700, color:"#0369a1" }}>{t.driverLicenseSection}</span>
//                   </div>
//                   <p style={{ fontSize:12, color:"#64748b", marginBottom:14, marginTop:0 }}>{t.driverLicenseHint}</p>
//                   {licenseUploaded ? (
//                     <div style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 16px", background:"#dcfce7", borderRadius:10, border:"1.5px solid #86efac" }}>
//                       <CheckCircle size={16} color="#16a34a" />
//                       <span style={{ fontSize:13, fontWeight:700, color:"#16a34a" }}>{t.licenseUploaded}</span>
//                     </div>
//                   ) : (
//                     <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
//                       <label style={{ display:"flex", alignItems:"center", gap:10, padding:"12px 16px", background:"#fff", border:"2px dashed #7dd3fc", borderRadius:10, cursor:"pointer" }}>
//                         <Upload size={16} color="#0369a1" />
//                         <span style={{ fontSize:13, color:"#0369a1", fontWeight:600 }}>{licenseFile ? licenseFile.name : t.chooseLicense}</span>
//                         <input type="file" accept="image/*,.pdf" style={{ display:"none" }} onChange={e => { const f = e.target.files?.[0]; if (f) setLicenseFile(f); }} />
//                       </label>
//                       {licenseFile && (
//                         <button type="button" disabled={licenseUploading} onClick={() => uploadLicenseToBackend(licenseFile)}
//                           style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"11px", borderRadius:10, border:"none", background:licenseUploading?"#e2e8f0":"linear-gradient(135deg,#0369a1,#0284c7)", color:licenseUploading?"#94a3b8":"#fff", fontWeight:700, fontSize:13, cursor:licenseUploading?"not-allowed":"pointer" }}>
//                           {licenseUploading ? <><div style={{ width:14, height:14, border:"2px solid #94a3b8", borderTopColor:"transparent", borderRadius:"50%", animation:"spin 1s linear infinite" }}/>{t.licenseUploading}</> : <><Upload size={14}/>{t.uploadLicenseBtn}</>}
//                         </button>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               )}

//               <div style={{ display:"flex", gap:12, marginTop:8 }}>
//                 <button type="submit" style={{ flex:1, padding:14, background:"linear-gradient(135deg,#16a34a,#059669)", color:"#fff", border:"none", borderRadius:12, fontSize:15, fontWeight:700, cursor:"pointer" }}>{t.postBtn}</button>
//                 <button type="button" onClick={() => setShowAvailModal(false)} style={{ padding:"14px 20px", background:"#f1f5f9", color:"#475569", border:"none", borderRadius:12, fontSize:14, cursor:"pointer" }}>{t.cancelBtn}</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <style>{`@keyframes spin{to{transform:rotate(360deg)}} @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}} @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}`}</style>
//     </div>
//   );
// }

// /* ═══════════════ PROFILE PROGRESS — with Tips + Bilingual ═══════════════ */
// function ProfileProgress({ t, userProfile, onPostAvail }) {
//   const [showTips, setShowTips] = useState(false);
//   if (!userProfile) return null;

//   const docs      = userProfile.documents || {};
//   const skillRaw  = (userProfile.category || userProfile.skill || userProfile.trade || "").toLowerCase();
//   const isDriver  = skillRaw.includes("driver");

//   // ── Document checks ──
//   const hasProfilePhoto = !!(
//     docs.profilePhoto ||
//     userProfile.profilePhoto ||
//     userProfile.avatar
//   );

//   const hasCnicFront = !!(docs.cnicFront  || userProfile.cnicFront);
//   const hasCnicBack  = !!(docs.cnicBack   || userProfile.cnicBack);
//   const hasCnic      = !!(
//     (hasCnicFront && hasCnicBack) ||
//     userProfile.cnicVerified
//   );

//   const hasLicense = !!(
//     docs.drivingLicense ||
//     userProfile.drivingLicense ||
//     userProfile.licenseVerified
//   );

//   const isAvailPosted  = !!(userProfile.availabilityPosted || userProfile.availabilityId);
//   const hasFirstJob    = !!(userProfile.firstJobAccepted   || userProfile.firstJobCompleted || userProfile.jobsCompleted > 0);
//   const isAdminVerified = !!(userProfile.isVerified        || userProfile.adminVerified);

//   // ── Steps ──
//   const steps = [
//     {
//       key:    "registered",
//       label:  t.stepRegistered,
//       done:   true,
//       points: 10,
//       action: null,
//       tip:    null,
//     },
//     {
//       key:    "profilePhoto",
//       label:  t.stepProfilePhoto,
//       done:   hasProfilePhoto,
//       points: 20,
//       action: null,
//       tip:    t.tipProfilePhoto,
//     },
//     {
//       key:    "cnicDocs",
//       label:  t.stepCnicDocs,
//       done:   hasCnic,
//       points: 20,
//       action: null,
//       tip:    t.tipCnic,
//     },
//     {
//       key:    "availability",
//       label:  t.stepAvailability,
//       done:   isAvailPosted,
//       points: 15,
//       action: onPostAvail,
//       tip:    t.tipAvailability,
//     },
//     // Driving licence step only appears if worker is a driver
//     ...(isDriver ? [{
//       key:    "license",
//       label:  t.stepLicense,
//       done:   hasLicense,
//       points: 15,
//       action: null,
//       tip:    t.tipLicense,
//     }] : []),
//     {
//       key:    "firstJob",
//       label:  t.stepFirstJob || (t.dir === "rtl" ? "پہلی نوکری مکمل" : "First Job Completed"),
//       done:   hasFirstJob,
//       points: 15,
//       action: null,
//       tip:    t.dir === "rtl"
//         ? "جب آپ پہلی نوکری قبول کریں اور مکمل کریں، پوائنٹس خود بخود ملیں گے"
//         : "Accept and complete your first job — points are awarded automatically",
//     },
//     {
//       key:    "verified",
//       label:  t.stepVerified,
//       done:   isAdminVerified,
//       points: isDriver ? 20 : 20,
//       action: null,
//       tip:    t.tipVerified,
//     },
//   ];

//   const totalPoints  = steps.reduce((s, x) => s + x.points, 0);
//   const earnedPoints = steps.filter(s => s.done).reduce((s, x) => s + x.points, 0);
//   const percentage   = Math.round((earnedPoints / totalPoints) * 100);
//   const isComplete   = percentage === 100;
//   const barColor     = percentage >= 80 ? "#16a34a" : percentage >= 50 ? "#3b82f6" : "#f59e0b";
//   const pendingSteps = steps.filter(s => !s.done && s.tip);

//   // ── Doc completion detail (shown under CNIC step if partially done) ──
//   const cnicDetail = !hasCnic && (hasCnicFront || hasCnicBack)
//     ? (t.dir === "rtl"
//         ? `(${hasCnicFront ? "✓ اگلا" : "✗ اگلا"} · ${hasCnicBack ? "✓ پچھلا" : "✗ پچھلا"})`
//         : `(${hasCnicFront ? "✓ Front" : "✗ Front"} · ${hasCnicBack ? "✓ Back" : "✗ Back"})`)
//     : null;

//   return (
//     <div style={{
//       background: "#fff", borderRadius: 20, padding: 24,
//       boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20,
//       border: isComplete ? "2px solid #22c55e" : "1.5px solid #e2e8f0",
//       animation: "slideUp .4s ease-out",
//     }}>
//       {/* Header */}
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
//         <div>
//           <h3 style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", margin: 0 }}>
//             {isComplete ? t.profileComplete : t.profileProgress}
//           </h3>
//           {!isComplete && (
//             <p style={{ fontSize: 12, color: "#64748b", margin: "3px 0 0" }}>
//               {t.completeYourProfile}
//             </p>
//           )}
//         </div>
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           {!isComplete && pendingSteps.length > 0 && (
//             <button
//               onClick={() => setShowTips(s => !s)}
//               style={{
//                 fontSize: 11, fontWeight: 700, color: "#16a34a",
//                 background: "#f0fdf4", border: "1.5px solid #86efac",
//                 borderRadius: 20, padding: "4px 12px", cursor: "pointer",
//               }}
//             >
//               {showTips
//                 ? (t.dir === "rtl" ? "✕ بند" : "✕ Hide")
//                 : "💡 Tips"}
//             </button>
//           )}
//           <div style={{ textAlign: "center" }}>
//             <div style={{ fontSize: 26, fontWeight: 900, color: barColor, lineHeight: 1 }}>
//               {percentage}%
//             </div>
//             <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600 }}>
//               {earnedPoints}/{totalPoints} pts
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Progress bar */}
//       <div style={{ background: "#e2e8f0", borderRadius: 99, height: 10, overflow: "hidden", marginBottom: 18 }}>
//         <div style={{
//           height: "100%", borderRadius: 99,
//           background: isComplete
//             ? "linear-gradient(90deg,#22c55e,#16a34a)"
//             : `linear-gradient(90deg,${barColor},${barColor}cc)`,
//           width: `${percentage}%`,
//           transition: "width 1s ease-out",
//         }} />
//       </div>

//       {/* Tips panel */}
//       {showTips && pendingSteps.length > 0 && (
//         <div style={{
//           background: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
//           borderRadius: 14, padding: 16, marginBottom: 16,
//           border: "1.5px solid #86efac",
//         }}>
//           <p style={{ fontSize: 13, fontWeight: 800, color: "#15803d", margin: "0 0 4px" }}>
//             {t.boostTitle}
//           </p>
//           <p style={{ fontSize: 11.5, color: "#16a34a", margin: "0 0 12px" }}>
//             {t.boostSub}
//           </p>
//           <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//             {pendingSteps.map(s => (
//               <div key={s.key} style={{
//                 display: "flex", alignItems: "flex-start", gap: 10,
//                 padding: "10px 12px", background: "#fff",
//                 borderRadius: 10, border: "1px solid #bbf7d0",
//               }}>
//                 <span style={{ fontSize: 16, flexShrink: 0 }}>→</span>
//                 <div style={{ flex: 1 }}>
//                   <p style={{ fontSize: 12, fontWeight: 700, color: "#15803d", margin: "0 0 2px" }}>
//                     {s.label}
//                   </p>
//                   <p style={{ fontSize: 11.5, color: "#64748b", margin: 0 }}>{s.tip}</p>
//                 </div>
//                 <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
//                   {s.action && (
//                     <button
//                       onClick={s.action}
//                       style={{
//                         fontSize: 11, fontWeight: 700, color: "#16a34a",
//                         background: "#dcfce7", border: "none", borderRadius: 20,
//                         padding: "3px 10px", cursor: "pointer",
//                       }}
//                     >
//                       {t.tapToComplete} →
//                     </button>
//                   )}
//                   <span style={{
//                     fontSize: 11, fontWeight: 700, color: "#16a34a",
//                     background: "#dcfce7", padding: "2px 8px", borderRadius: 20,
//                   }}>
//                     +{s.points}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Steps list */}
//       <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//         {steps.map(step => (
//           <div key={step.key} style={{
//             display: "flex", alignItems: "center", justifyContent: "space-between",
//             padding: "10px 14px", borderRadius: 12,
//             background: step.done ? "#f0fdf4" : "#f8fafc",
//             border: `1.5px solid ${step.done ? "#bbf7d0" : "#e2e8f0"}`,
//           }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//               <div style={{
//                 width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 background: step.done ? "#22c55e" : "#e2e8f0",
//                 fontSize: 13, color: step.done ? "#fff" : "#94a3b8",
//               }}>
//                 {step.done ? "✓" : "○"}
//               </div>
//               <div>
//                 <span style={{
//                   fontSize: 13,
//                   fontWeight: step.done ? 600 : 500,
//                   color: step.done ? "#15803d" : "#475569",
//                 }}>
//                   {step.label}
//                 </span>
//                 {step.key === "cnicDocs" && cnicDetail && (
//                   <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: 6 }}>
//                     {cnicDetail}
//                   </span>
//                 )}
//               </div>
//             </div>
//             <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//               <span style={{
//                 fontSize: 11, fontWeight: 700,
//                 color: step.done ? "#16a34a" : "#94a3b8",
//                 background: step.done ? "#dcfce7" : "#f1f5f9",
//                 padding: "2px 8px", borderRadius: 20,
//               }}>
//                 +{step.points} pts
//               </span>
//               {!step.done && step.action && (
//                 <button
//                   onClick={step.action}
//                   style={{
//                     fontSize: 11, fontWeight: 700, color: "#3b82f6",
//                     background: "#eff6ff", border: "none", borderRadius: 20,
//                     padding: "3px 10px", cursor: "pointer",
//                   }}
//                 >
//                   {t.tapToComplete} →
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Completion banner */}
//       {isComplete && (
//         <div style={{
//           marginTop: 16, padding: "12px 16px", borderRadius: 12,
//           background: "linear-gradient(135deg,#dcfce7,#bbf7d0)",
//           border: "1.5px solid #86efac", textAlign: "center",
//         }}>
//           <p style={{ fontSize: 14, fontWeight: 800, color: "#15803d", margin: 0 }}>
//             🎉 {t.dir === "rtl"
//               ? "آپ کا پروفائل مکمل ہے! آپ کو زیادہ نوکریاں ملیں گی۔"
//               : "Your profile is 100% complete! You'll appear in more employer searches."}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ═══════════════ REQUESTS TAB ═══════════════ */
// function RequestsTab({ t, notifications, showPopup, userProfile, onPostAvail }) {
//   return (
//     <div style={{ maxWidth:600, margin:"0 auto" }}>
//       <ProfileProgress t={t} userProfile={userProfile} onPostAvail={onPostAvail} />
//       <div style={{ background:"#fff", borderRadius:20, padding:40, textAlign:"center", boxShadow:"0 4px 20px rgba(0,0,0,0.06)" }}>
//         <div style={{ width:80, height:80, borderRadius:"50%", background:showPopup?"linear-gradient(135deg,#22c55e,#16a34a)":"linear-gradient(135deg,#e2e8f0,#cbd5e1)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:32 }}>{showPopup?"📩":"📭"}</div>
//         <h3 style={{ fontSize:20, fontWeight:700, color:"#0f172a", marginBottom:8 }}>{showPopup?t.incomingTitle:t.waitingTitle}</h3>
//         <p style={{ fontSize:14, color:"#64748b", lineHeight:1.6 }}>{showPopup?t.incomingDesc:t.waitingDesc}</p>
//         {notifications.length>0&&<div style={{ marginTop:24, textAlign:"left" }}><h4 style={{ fontSize:14, fontWeight:600, color:"#475569", marginBottom:12 }}>{t.recentNotifs}</h4>{notifications.slice(-5).reverse().map(n => <div key={n.id} style={{ padding:"10px 14px", background:"#f8fafc", borderRadius:10, fontSize:13, color:"#475569", marginBottom:8 }}>{n.msg}</div>)}</div>}
//       </div>
//     </div>
//   );
// }

// /* ═══════════════ APPLIED TAB — full employer info + confirmed banner ═══════════════ */
// function AppliedTab({ t, applied, lang }) {
//   if (!applied || applied.length === 0) return (
//     <div style={{ background:"#fff", borderRadius:16, padding:60, textAlign:"center", color:"#94a3b8", maxWidth:600, margin:"0 auto" }}>
//       <CheckCircle size={52} style={{ margin:"0 auto 16px", opacity:0.3, display:"block" }} />
//       <p style={{ fontSize:17, fontWeight:600, color:"#475569", marginBottom:8 }}>{t.noApps}</p>
//       <p style={{ fontSize:14, color:"#94a3b8" }}>{t.noAppsDesc}</p>
//     </div>
//   );

//   const statusStyle = (s) => {
//     if (s==="completed")   return {bg:"#dcfce7",color:"#15803d"};
//     if (["confirmed","accepted","in_progress"].includes(s)) return {bg:"#dbeafe",color:"#1d4ed8"};
//     if (s==="shortlisted") return {bg:"#fef3c7",color:"#d97706"};
//     if (s==="rejected")    return {bg:"#fee2e2",color:"#dc2626"};
//     return {bg:"#f1f5f9",color:"#475569"};
//   };

//   const statusLabel = (s) => {
//     const m = {
//       confirmed:"✅ CONFIRMED", accepted:"✅ ACCEPTED",
//       in_progress:"🔧 IN PROGRESS", completed:"✓ COMPLETED",
//       rejected:"✗ REJECTED", shortlisted:"⭐ SHORTLISTED", pending:"⏳ PENDING",
//     };
//     return m[s] || (s||"pending").toUpperCase().replace(/_/g," ");
//   };

//   // Summary counts
//   const confirmedCount = applied.filter(a => ["confirmed","accepted","in_progress"].includes(a.status)).length;
//   const pendingCount   = applied.filter(a => !a.status || a.status === "pending").length;
//   const completedCount = applied.filter(a => a.status === "completed").length;

//   return (
//     <div style={{ maxWidth:700, margin:"0 auto" }}>
//       {/* Summary row */}
//       <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:20 }}>
//         {[
//           { label: lang==="ur"?"تصدیق شدہ":"Confirmed",  value: confirmedCount, bg:"#dbeafe", color:"#1d4ed8", icon:"✅" },
//           { label: lang==="ur"?"زیر التواء":"Pending",    value: pendingCount,   bg:"#fef3c7", color:"#d97706", icon:"⏳" },
//           { label: lang==="ur"?"مکمل":"Completed",        value: completedCount, bg:"#dcfce7", color:"#15803d", icon:"✓" },
//         ].map(s => (
//           <div key={s.label} style={{ background:s.bg, borderRadius:12, padding:"12px 14px", textAlign:"center" }}>
//             <div style={{ fontSize:18 }}>{s.icon}</div>
//             <div style={{ fontSize:22, fontWeight:900, color:s.color }}>{s.value}</div>
//             <div style={{ fontSize:11, fontWeight:700, color:s.color, opacity:0.8 }}>{s.label}</div>
//           </div>
//         ))}
//       </div>

//       <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
//         {applied.map((app, i) => {
//           const job = app.job || {};
//           const {bg, color} = statusStyle(app.status);
//           const isRequest = app.source === "request";
//           const isConfirmed = ["confirmed","accepted","in_progress","completed"].includes(app.status);

//           return (
//             <div key={app._id||i} style={{ background:"#fff", borderRadius:16, padding:22, boxShadow:"0 2px 12px rgba(0,0,0,0.06)", border:`1.5px solid ${isConfirmed?"#bfdbfe":"#e2e8f0"}` }}>
//               <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
//                 <div style={{ flex:1, minWidth:0 }}>
//                   <div style={{ marginBottom:6 }}>
//                     <span style={{ fontSize:11, fontWeight:700, background:isRequest?"#ede9fe":"#e0f2fe", color:isRequest?"#7c3aed":"#0369a1", padding:"2px 10px", borderRadius:20 }}>
//                       {isRequest ? t.appliedViaRequest : t.appliedViaBrowse}
//                     </span>
//                   </div>
//                   <h4 style={{ fontSize:16, fontWeight:700, marginBottom:4, color:"#0f172a" }}>{job.title||app.title||"Job Request"}</h4>
//                   {(job.workLocation||app.workLocation) && <p style={{ fontSize:13, color:"#64748b", marginBottom:3 }}>📍 {job.workLocation||app.workLocation}</p>}
//                   {(app.employerName||job.employer?.name) && <p style={{ fontSize:13, color:"#64748b", marginBottom:3 }}>👤 {app.employerName||job.employer?.name}</p>}
//                   <p style={{ fontSize:11, color:"#94a3b8" }}>{new Date(app.createdAt||Date.now()).toLocaleDateString("en-PK",{day:"numeric",month:"short",year:"numeric"})}</p>
//                 </div>
//                 <span style={{ padding:"5px 12px", borderRadius:20, fontSize:11, fontWeight:700, background:bg, color, flexShrink:0, marginLeft:12 }}>
//                   {statusLabel(app.status)}
//                 </span>
//               </div>

//               {/* Price */}
//               {(app.offeredRate||app.agreedPrice) && (
//                 <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom: isConfirmed ? 10 : 0 }}>
//                   {app.offeredRate && <span style={{ fontSize:12.5, color:"#475569", background:"#f1f5f9", padding:"4px 12px", borderRadius:20 }}>💬 {t.yourOfferLabel}: Rs. {app.offeredRate}</span>}
//                   {app.agreedPrice && app.agreedPrice !== app.offeredRate && <span style={{ fontSize:12.5, color:"#1d4ed8", fontWeight:700, background:"#eff6ff", padding:"4px 12px", borderRadius:20 }}>🤝 {t.agreedPriceLabel}: Rs. {app.agreedPrice}</span>}
//                 </div>
//               )}

//               {/* Confirmed banner with employer contact */}
//               {isConfirmed && (
//                 <div style={{ marginTop:10, background:"linear-gradient(135deg,#eff6ff,#dbeafe)", borderRadius:12, padding:"12px 16px", border:"1.5px solid #bfdbfe", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
//                   <div>
//                     <p style={{ fontSize:11, fontWeight:800, color:"#1d4ed8", textTransform:"uppercase", letterSpacing:".05em", margin:"0 0 3px" }}>
//                       {app.status === "completed" ? (lang==="ur"?"✓ نوکری مکمل":"✓ Job Completed") : (lang==="ur"?"✅ آپ تصدیق شدہ ہیں":"✅ You're confirmed for this job")}
//                     </p>
//                     {(app.employerName||job.employer?.name) && <p style={{ fontSize:12.5, color:"#475569", margin:0 }}>👤 {app.employerName||job.employer?.name}</p>}
//                   </div>
//                   {app.employerPhone && (
//                     <a href={`tel:${app.employerPhone}`}
//                       style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 16px", borderRadius:10, background:"linear-gradient(135deg,#3b82f6,#2563eb)", color:"#fff", textDecoration:"none", fontSize:13, fontWeight:700, boxShadow:"0 2px 8px rgba(59,130,246,.3)" }}>
//                       📞 {t.callEmployer}
//                     </a>
//                   )}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// /* ═══════════════ HISTORY TAB ═══════════════ */
// function HistoryTab({ t, history, lang }) {
//   if (!history||history.length===0) return (
//     <div style={{ background:"#fff", borderRadius:16, padding:60, textAlign:"center", color:"#94a3b8" }}>
//       <Briefcase size={52} style={{ margin:"0 auto 16px", opacity:0.3, display:"block" }} />
//       <p style={{ fontSize:17, fontWeight:600, color:"#475569", marginBottom:8 }}>{t.noHistory}</p>
//       <p style={{ fontSize:14 }}>{t.noHistorySub}</p>
//     </div>
//   );
//   const total = history.reduce((s,j)=>s+Number(String(j.agreedPrice).replace(/[^0-9]/g,"")||0),0);
//   return (
//     <div style={{ maxWidth:700, margin:"0 auto" }}>
//       <div style={{ background:"linear-gradient(135deg,#064e3b,#065f46)", borderRadius:16, padding:"18px 24px", color:"#fff", display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
//         <div>
//           <div style={{ fontSize:12, opacity:0.6, fontWeight:600, textTransform:"uppercase", letterSpacing:".08em" }}>{lang==="ur"?"مکمل نوکریاں":"Jobs Completed"}</div>
//           <div style={{ fontSize:32, fontWeight:900 }}>{history.length}</div>
//         </div>
//         <div style={{ textAlign:"right" }}>
//           <div style={{ fontSize:12, opacity:0.6, fontWeight:600, textTransform:"uppercase", letterSpacing:".08em" }}>{lang==="ur"?"کل کمائی":"Total Earned"}</div>
//           <div style={{ fontSize:24, fontWeight:800 }}>Rs. {total.toLocaleString()}</div>
//         </div>
//       </div>
//       <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
//         {history.map((job,i) => (
//           <div key={job._id||i} style={{ background:"#fff", borderRadius:16, padding:22, boxShadow:"0 2px 12px rgba(0,0,0,0.06)", border:"1.5px solid #dcfce7" }}>
//             <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
//               <div style={{ flex:1 }}>
//                 <h4 style={{ fontSize:17, fontWeight:700, marginBottom:4, color:"#0f172a" }}>{job.title||"Job"}</h4>
//                 {job.workLocation&&<p style={{ fontSize:13, color:"#64748b", marginBottom:4 }}>📍 {job.workLocation}</p>}
//                 {job.employerName&&<p style={{ fontSize:13, color:"#64748b", marginBottom:4 }}>👤 {job.employerName}</p>}
//                 <p style={{ fontSize:12, color:"#94a3b8" }}>✅ {lang==="ur"?"مکمل:":"Completed:"} {new Date(job.completedAt||Date.now()).toLocaleDateString("en-PK",{day:"numeric",month:"short",year:"numeric"})}</p>
//               </div>
//               <span style={{ padding:"6px 14px", borderRadius:20, fontSize:12, fontWeight:700, background:"#dcfce7", color:"#15803d", flexShrink:0, marginLeft:12 }}>
//                 {lang==="ur"?"مکمل":"COMPLETED"}
//               </span>
//             </div>
//             {job.agreedPrice&&<div style={{ marginTop:12, display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", background:"#f0fdf4", borderRadius:10 }}>
//               <span style={{ fontSize:15, color:"#16a34a", fontWeight:800 }}>💰 {lang==="ur"?"کمائی:":"Earned:"} Rs. {job.agreedPrice}</span>
//             </div>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ═══════════════ BROWSE TAB — skill-based auto-filter ═══════════════ */
// function BrowseTab({ t, lang, userId, onOpenApplyModal, userProfile }) {
//   const [allJobs, setAllJobs]         = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filtering, setFiltering]     = useState(false);
//   const [activeFilters, setActiveFilters] = useState(null);
//   const [skillFilterActive, setSkillFilterActive] = useState(true);

//   // Derive worker's skill from profile
//   const workerSkill = (userProfile?.skill || userProfile?.category || userProfile?.trade || "").toLowerCase().trim();

//   useEffect(() => {
//     fetch(`${API}/api/jobs`).then(r=>r.json()).then(d=>{
//       const jobs = Array.isArray(d) ? d : [];
//       setAllJobs(jobs);
//     }).catch(()=>{});
//   }, []);

//   // Auto-apply skill filter when jobs load or toggle changes
//   useEffect(() => {
//     if (activeFilters) return; // don't override AI filter
//     if (skillFilterActive && workerSkill) {
//       setFilteredJobs(allJobs.filter(j =>
//         (j.category||j.type||"").toLowerCase().includes(workerSkill) ||
//         workerSkill.split(" ").some(w => (j.category||j.type||j.title||"").toLowerCase().includes(w)) ||
//         (j.title||"").toLowerCase().includes(workerSkill)
//       ));
//     } else {
//       setFilteredJobs(allJobs);
//     }
//   }, [allJobs, skillFilterActive, workerSkill, activeFilters]);

//   const handleAIFilter = async () => {
//     if (!searchQuery.trim()) return;
//     setFiltering(true);
//     try {
//       const res = await fetch(`${API}/api/ai/smart-filter`, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({query:searchQuery}) });
//       const f = await res.json();
//       setActiveFilters(f);
//       let r = [...allJobs];
//       if (f.category) r = r.filter(j=>(j.category||j.type||"").toLowerCase().includes(f.category.toLowerCase())||(j.title||"").toLowerCase().includes(f.category.toLowerCase()));
//       if (f.location)  r = r.filter(j=>(j.location||"").toLowerCase().includes(f.location.toLowerCase()));
//       if (f.minBudget>0) r = r.filter(j=>Number(String(j.salary).replace(/[^0-9]/g,""))>=f.minBudget);
//       if (f.maxBudget>0) r = r.filter(j=>Number(String(j.salary).replace(/[^0-9]/g,""))<=f.maxBudget);
//       if (f.keywords?.length) r = r.filter(j=>f.keywords.some(kw=>(j.title||"").toLowerCase().includes(kw.toLowerCase())||(j.description||"").toLowerCase().includes(kw.toLowerCase())));
//       setFilteredJobs(r);
//     } catch(e) { console.error(e); }
//     setFiltering(false);
//   };

//   const clearFilters = () => {
//     setActiveFilters(null);
//     setSearchQuery("");
//     // Revert to skill filter or all
//     if (skillFilterActive && workerSkill) {
//       setFilteredJobs(allJobs.filter(j =>
//         (j.category||j.type||"").toLowerCase().includes(workerSkill) ||
//         workerSkill.split(" ").some(w => (j.category||j.type||j.title||"").toLowerCase().includes(w))
//       ));
//     } else {
//       setFilteredJobs(allJobs);
//     }
//   };

//   const toggleSkillFilter = () => {
//     const next = !skillFilterActive;
//     setSkillFilterActive(next);
//     setActiveFilters(null);
//     setSearchQuery("");
//   };

//   return (
//     <div style={{ maxWidth:700, margin:"0 auto" }}>

//       {/* Skill filter banner — only show if worker has a skill */}
//       {workerSkill && (
//         <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 16px", borderRadius:12, background:skillFilterActive?"#f0fdf4":"#f8fafc", border:`1.5px solid ${skillFilterActive?"#86efac":"#e2e8f0"}`, marginBottom:14, flexWrap:"wrap", gap:8 }}>
//           <div style={{ display:"flex", alignItems:"center", gap:8 }}>
//             <div style={{ width:8, height:8, borderRadius:"50%", background:skillFilterActive?"#16a34a":"#94a3b8", flexShrink:0 }} />
//             <span style={{ fontSize:13, fontWeight:600, color:skillFilterActive?"#15803d":"#64748b" }}>
//               {skillFilterActive
//                 ? `${t.skillFilterOn}: ${workerSkill.charAt(0).toUpperCase()+workerSkill.slice(1)}`
//                 : t.skillFilterOff}
//             </span>
//           </div>
//           <button onClick={toggleSkillFilter}
//             style={{ fontSize:12, fontWeight:700, color:skillFilterActive?"#16a34a":"#64748b", background:skillFilterActive?"#dcfce7":"#f1f5f9", border:"none", borderRadius:20, padding:"5px 14px", cursor:"pointer" }}>
//             {skillFilterActive ? `✕ ${t.removeFilter}` : `✓ ${t.yourSkill}: ${workerSkill}`}
//           </button>
//         </div>
//       )}

//       {/* AI search bar */}
//       <div style={{ background:"#fff", borderRadius:16, padding:20, marginBottom:20, boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
//         <div style={{ display:"flex", gap:10, alignItems:"center" }}>
//           <div style={{ flex:1, display:"flex", alignItems:"center", gap:10, background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:12, padding:"10px 14px" }}>
//             <SlidersHorizontal size={16} color="#6366f1"/>
//             <input value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleAIFilter()} placeholder={t.aiFilterPlaceholder} style={{ flex:1, border:"none", background:"transparent", fontSize:14, outline:"none", color:"#0f172a" }}/>
//             {searchQuery&&<button onClick={clearFilters} style={{ background:"none", border:"none", cursor:"pointer", color:"#94a3b8", fontSize:18 }}>×</button>}
//           </div>
//           <button onClick={handleAIFilter} disabled={filtering||!searchQuery.trim()} style={{ display:"flex", alignItems:"center", gap:6, padding:"11px 18px", borderRadius:12, border:"none", background:filtering||!searchQuery.trim()?"#e2e8f0":"linear-gradient(135deg,#6366f1,#8b5cf6)", color:filtering||!searchQuery.trim()?"#94a3b8":"#fff", fontSize:13, fontWeight:700, cursor:filtering||!searchQuery.trim()?"not-allowed":"pointer" }}>
//             <Search size={14}/>{filtering?t.aiFiltering:t.aiFilterBtn}
//           </button>
//         </div>
//         {activeFilters && (
//           <div style={{ marginTop:12, display:"flex", flexWrap:"wrap", gap:8, alignItems:"center" }}>
//             <span style={{ fontSize:11, fontWeight:700, color:"#6366f1", textTransform:"uppercase", letterSpacing:".06em" }}>{t.activeFilters}:</span>
//             {activeFilters.category&&<FC label={`📂 ${activeFilters.category}`}/>}
//             {activeFilters.location&&<FC label={`📍 ${activeFilters.location}`}/>}
//             {activeFilters.minBudget>0&&<FC label={`💰 Rs.${activeFilters.minBudget}+`}/>}
//             {activeFilters.maxBudget>0&&<FC label={`💰 Max Rs.${activeFilters.maxBudget}`}/>}
//             {activeFilters.keywords?.map(k=><FC key={k} label={`🔍 ${k}`}/>)}
//             <button onClick={clearFilters} style={{ fontSize:12, color:"#ef4444", fontWeight:600, background:"#fef2f2", border:"none", borderRadius:20, padding:"3px 10px", cursor:"pointer" }}>{t.clearFilters}</button>
//           </div>
//         )}
//       </div>

//       <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
//         {filteredJobs.length === 0 ? (
//           <div style={{ background:"#fff", borderRadius:16, padding:48, textAlign:"center", color:"#94a3b8" }}>
//             <div style={{ fontSize:40, marginBottom:12 }}>🔍</div>
//             <p style={{ fontWeight:700, fontSize:15, color:"#475569", marginBottom:4 }}>{t.noJobsFound}</p>
//             <p style={{ fontSize:13, marginBottom: skillFilterActive && workerSkill ? 16 : 0 }}>{t.noJobsFoundSub}</p>
//             {skillFilterActive && workerSkill && (
//               <button onClick={toggleSkillFilter} style={{ padding:"9px 20px", borderRadius:10, border:"none", background:"#f1f5f9", color:"#475569", fontSize:13, fontWeight:600, cursor:"pointer" }}>
//                 {t.skillFilterOff}
//               </button>
//             )}
//           </div>
//         ) : filteredJobs.map(job => (
//           <div key={job._id} style={{ background:"#fff", borderRadius:16, padding:24, boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
//             <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
//               <div>
//                 <h4 style={{ fontSize:17, fontWeight:700, color:"#0f172a", margin:"0 0 4px" }}>{job.title}</h4>
//                 <p style={{ fontSize:13, color:"#64748b", margin:0 }}>{job.employer?.name}</p>
//               </div>
//               <span style={{ background:"#eff6ff", color:"#3b82f6", padding:"4px 12px", borderRadius:20, fontSize:12, fontWeight:600 }}>{job.type||job.category}</span>
//             </div>
//             <p style={{ fontSize:14, color:"#475569", marginBottom:14, lineHeight:1.5 }}>{job.description}</p>
//             <div style={{ display:"flex", gap:16, marginBottom:16, flexWrap:"wrap" }}>
//               {job.location&&<span style={{ fontSize:13, color:"#64748b", display:"flex", alignItems:"center", gap:4 }}><MapPin size={14}/>{job.location}</span>}
//               {job.salary&&<span style={{ fontSize:13, color:"#64748b", display:"flex", alignItems:"center", gap:4 }}><DollarSign size={14}/>Rs. {job.salary}</span>}
//               {job.urgency&&<span style={{ fontSize:12, color:"#f59e0b", fontWeight:600, background:"#fef3c7", padding:"2px 10px", borderRadius:20 }}>⚡ {job.urgency}</span>}
//             </div>
//             <button onClick={() => onOpenApplyModal(job)} style={{ width:"100%", padding:12, background:"linear-gradient(135deg,#16a34a,#059669)", color:"#fff", border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer" }}>{t.applyNow}</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function FC({label}){return <span style={{ background:"#f0f0fe", color:"#4f46e5", fontSize:12, fontWeight:600, padding:"4px 12px", borderRadius:20, border:"1px solid #e0e0fc" }}>{label}</span>;}

// function JobRequestPopup({t,request,popupState,popupTimer,counterPrice,setCounterPrice,employerCounter,onAcceptJob,onDeclineJob,onShowCounter,onSendCounter,onAcceptEmployerCounter,onRejectEmployerCounter,onDismiss,onOpenTracker,userId}){
//   const timerPct=(popupTimer/30)*100; const isInitial=popupState===null;
//   return(
//     <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.65)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:300, padding:24, backdropFilter:"blur(6px)" }}>
//       <div style={{ background:"#fff", borderRadius:26, width:"100%", maxWidth:460, boxShadow:"0 32px 80px rgba(0,0,0,0.35)", overflow:"hidden", maxHeight:"92vh", overflowY:"auto" }}>
//         {isInitial&&<div style={{ height:5, background:"#e2e8f0", overflow:"hidden" }}><div style={{ height:"100%", width:`${timerPct}%`, transition:"width 1s linear", background:timerPct>33?"linear-gradient(90deg,#22c55e,#16a34a)":"linear-gradient(90deg,#ef4444,#dc2626)" }}/></div>}
//         <div style={{ padding:26 }}>
//           <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
//             <div style={{ display:"flex", alignItems:"center", gap:8 }}><div style={{ width:9, height:9, borderRadius:"50%", background:"#22c55e" }}/><span style={{ fontSize:12, fontWeight:800, color:"#16a34a", textTransform:"uppercase", letterSpacing:".08em" }}>{t.newJobRequest}</span></div>
//             <div style={{ display:"flex", alignItems:"center", gap:10 }}>{isInitial&&<span style={{ fontSize:13, fontWeight:700, color:timerPct>33?"#64748b":"#ef4444" }}>⏱ {popupTimer}s</span>}<button onClick={onDismiss} style={{ background:"#f1f5f9", border:"none", borderRadius:8, padding:7, cursor:"pointer" }}><X size={15} color="#64748b"/></button></div>
//           </div>
//           <div style={{ background:"linear-gradient(135deg,#0f172a,#1e3a5f)", borderRadius:16, padding:20, marginBottom:16, color:"#fff" }}>
//             <h3 style={{ fontSize:18, fontWeight:800, margin:"0 0 8px" }}>{request.title||request.category}</h3>
//             {request.description&&<p style={{ fontSize:13, color:"rgba(255,255,255,0.6)", margin:"0 0 14px", lineHeight:1.5 }}>{request.description}</p>}
//             {request.workLocation&&<div style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(255,255,255,.08)", borderRadius:8, padding:"5px 10px", width:"fit-content" }}><MapPin size={12} color="#60a5fa"/><span style={{ fontSize:12 }}>{request.workLocation}</span></div>}
//           </div>
//           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20, padding:"14px 18px", background:"#f0fdf4", borderRadius:12, border:"1.5px solid #86efac" }}>
//             <div><div style={{ fontSize:11, color:"#16a34a", fontWeight:700, marginBottom:2 }}>{t.employerOffer}</div><div style={{ fontSize:26, fontWeight:900, color:"#0f172a" }}>Rs. {request.offeredPrice||"Open"}</div></div>
//             <div style={{ textAlign:"right" }}><div style={{ fontSize:13, fontWeight:700 }}>{request.employerName}</div><div style={{ fontSize:11, color:"#64748b" }}>{request.category}</div></div>
//           </div>
//           {isInitial&&<><div style={{ display:"flex", gap:10 }}><button onClick={onAcceptJob} style={{ flex:2, display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"14px", borderRadius:13, border:"none", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", fontSize:15, fontWeight:800, cursor:"pointer" }}><ThumbsUp size={17}/>{t.acceptJob}</button><button onClick={onDeclineJob} style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"14px", borderRadius:13, border:"1.5px solid #fecaca", background:"#fef2f2", color:"#ef4444", fontSize:14, fontWeight:700, cursor:"pointer" }}><ThumbsDown size={15}/>{t.declineJob}</button></div><button onClick={onShowCounter} style={{ width:"100%", marginTop:10, padding:"11px", borderRadius:11, border:"1.5px solid #e2e8f0", background:"#f8fafc", color:"#475569", fontSize:13, fontWeight:600, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}><MessageSquare size={14}/>{t.counterNote}</button></>}
//           {popupState==="counter_input"&&<div><label style={{ fontSize:13, fontWeight:700, color:"#374151", display:"block", marginBottom:8 }}>{t.counterOffer}</label><div style={{ display:"flex", gap:8 }}><input type="number" value={counterPrice} onChange={e=>setCounterPrice(e.target.value)} placeholder={t.optionalCounter} autoFocus style={{ flex:1, padding:"13px 14px", borderRadius:11, border:"1.5px solid #e2e8f0", fontSize:14, outline:"none" }}/><button onClick={onSendCounter} style={{ padding:"13px 18px", borderRadius:11, border:"none", background:"linear-gradient(135deg,#3b82f6,#2563eb)", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer" }}>{t.sendCounter}</button></div><button onClick={onDeclineJob} style={{ marginTop:10, width:"100%", padding:"11px", borderRadius:11, border:"1.5px solid #fecaca", background:"#fef2f2", color:"#ef4444", fontSize:13, fontWeight:600, cursor:"pointer" }}>{t.declineJob}</button></div>}
//           {popupState==="accepted_waiting"&&<div style={{ textAlign:"center", padding:"8px 0" }}><div style={{ width:52, height:52, border:"4px solid #dcfce7", borderTopColor:"#16a34a", borderRadius:"50%", animation:"spin 1s linear infinite", margin:"0 auto 16px" }}/><p style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>Request Accepted!</p><p style={{ fontSize:13, color:"#64748b" }}>Waiting for employer to confirm you...</p></div>}
//           {popupState==="counter_sent"&&<div style={{ textAlign:"center", padding:"8px 0" }}><div style={{ width:52, height:52, border:"4px solid #dbeafe", borderTopColor:"#3b82f6", borderRadius:"50%", animation:"spin 1s linear infinite", margin:"0 auto 16px" }}/><p style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>{t.offerSent}</p><p style={{ fontSize:13, color:"#64748b" }}>{t.yourOfferWas} Rs. {counterPrice}</p></div>}
//           {popupState==="counter_received"&&employerCounter&&<div><div style={{ background:"#fef3c7", borderRadius:12, padding:16, marginBottom:14, border:"1.5px solid #fcd34d" }}><div style={{ fontSize:12, fontWeight:700, color:"#d97706", marginBottom:4 }}>{t.counterReceived}</div><div style={{ fontSize:26, fontWeight:900, color:"#0f172a", marginBottom:2 }}>Rs. {employerCounter.price}</div><div style={{ fontSize:12, color:"#64748b" }}>{t.yourOfferWasLabel} Rs. {counterPrice}</div></div><div style={{ display:"flex", gap:10 }}><button onClick={onAcceptEmployerCounter} style={{ flex:1, padding:13, borderRadius:12, border:"none", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", fontSize:14, fontWeight:700, cursor:"pointer" }}>{t.accept} Rs. {employerCounter.price}</button><button onClick={onRejectEmployerCounter} style={{ padding:"13px 16px", borderRadius:12, border:"none", background:"#fef2f2", color:"#ef4444", fontSize:13, fontWeight:600, cursor:"pointer" }}>{t.reject}</button></div></div>}
//           {popupState==="confirmed"&&<div style={{ textAlign:"center", padding:"12px 0" }}><div style={{ fontSize:52, marginBottom:10 }}>🎉</div><h3 style={{ fontSize:20, fontWeight:800, color:"#0f172a", marginBottom:6 }}>{t.jobConfirmed}</h3><p style={{ fontSize:13, color:"#64748b", marginBottom:20 }}>{t.jobConfirmedDesc}</p><button onClick={onOpenTracker} style={{ padding:"13px 32px", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", border:"none", borderRadius:12, fontSize:15, fontWeight:700, cursor:"pointer", width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>🔧 {t.viewJobDetails}</button></div>}
//           {popupState==="rejected"&&<div style={{ textAlign:"center", padding:"12px 0" }}><div style={{ fontSize:42, marginBottom:10 }}>😔</div><p style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>{t.offerRejected}</p><p style={{ fontSize:13, color:"#64748b", marginBottom:16 }}>{t.offerRejectedDesc}</p><button onClick={onDismiss} style={{ padding:"10px 28px", background:"#f1f5f9", color:"#475569", border:"none", borderRadius:12, fontSize:14, cursor:"pointer" }}>{t.close}</button></div>}
//           {popupState==="dismissed"&&<div style={{ textAlign:"center", padding:"12px 0" }}><div style={{ fontSize:36, marginBottom:10 }}>🔄</div><p style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>{t.dismissed}</p><p style={{ fontSize:13, color:"#64748b", marginBottom:16 }}>{t.dismissedDesc}</p><button onClick={onDismiss} style={{ padding:"10px 28px", background:"#f1f5f9", color:"#475569", border:"none", borderRadius:12, fontSize:14, cursor:"pointer" }}>{t.close}</button></div>}
//         </div>
//       </div>
//       <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
//     </div>
//   );
// }


"use client";
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import dynamic from "next/dynamic";
import {
  Briefcase, CheckCircle, LogOut, Menu, X,
  MapPin, DollarSign, Bell, PlusCircle,
  ThumbsUp, ThumbsDown, MessageSquare, Search, SlidersHorizontal,
  Upload, Car
} from "lucide-react";
import JobTracker from "@/components/JobTracker";

const JobMap = dynamic(() => import("@/components/JobMap"), { ssr: false });

const socket = io("http://localhost:5000");
if (typeof window !== "undefined") {
  window._rozgarSocket = socket;
  socket.on("connect",    () => console.log("✅ Worker socket CONNECTED"));
  socket.on("disconnect", () => console.log("❌ Worker socket DISCONNECTED"));
}

const API = "http://localhost:5000";

const T = {
  en: {
    dir: "ltr", brand: "RozgarHub", role: "WORKER",
    navRequests: "Job Requests", navApplied: "My Applications",
    navBrowse: "Browse Jobs", navHistory: "Job History", navAvail: "Post Availability",
    logout: "Logout", online: "Online",
    headerRequests: "Incoming Requests", headerApplied: "My Applications",
    headerBrowse: "Browse Jobs", headerHistory: "Job History", welcomeBack: "Welcome back",
    waitingTitle: "Waiting for job requests...",
    waitingDesc: "When an employer posts a job in your area, it will pop up automatically.",
    incomingTitle: "New request incoming!", incomingDesc: "Check the popup to respond.",
    recentNotifs: "Recent Notifications", noApps: "No applications yet.",
    appliedOn: "Applied", recently: "recently", pending: "Pending", shortlisted: "Shortlisted",
    applyNow: "Apply Now", applyFor: "Apply for Job",
    employerListedRate: "Employer Listed Rate", yourOffer: "Your Offer (PKR)",
    aboveRate: "above listed rate", belowRate: "below listed rate",
    matchingRate: "Matching employer's listed rate",
    submitApp: "Submit Application", newJobRequest: "New Job Request", employerOffer: "EMPLOYER OFFER",
    acceptJob: "Accept Job", declineJob: "Decline",
    counterOffer: "Counter Offer", sendCounter: "Send Counter",
    offerSent: "Counter Offer Sent! Waiting for employer...",
    yourOfferWas: "Your counter offer:", counterReceived: "EMPLOYER COUNTER OFFER",
    yourOfferWasLabel: "Your offer was",
    accept: "Accept", reject: "Reject",
    jobConfirmed: "Job Confirmed!", jobConfirmedDesc: "Get ready to go to the job site",
    viewJobDetails: "Track Job",
    offerRejected: "Not Selected", offerRejectedDesc: "The employer chose another worker",
    close: "Close", dismissed: "Request Dismissed",
    dismissedDesc: "The employer dismissed your acceptance",
    postAvailTitle: "Post Your Availability",
    skillLabel: "Your Skill / Trade", skillPlaceholder: "e.g., Electrician, Plumber, Driver",
    expLabel: "Years of Experience", expPlaceholder: "e.g., 5 years",
    rateLabel: "Hourly Rate (PKR)", ratePlaceholder: "e.g., 500",
    locLabel: "Your Location", locPlaceholder: "e.g., Karachi, Lahore",
    descLabel: "Description", descPlaceholder: "Describe your skills...",
    postBtn: "Post Availability", cancelBtn: "Cancel",
    driverLicenseSection: "Driver License (Required for Drivers)",
    driverLicenseHint: "Upload your driving license — it will be saved to your profile and earn you points.",
    uploadLicenseBtn: "Upload License", licenseUploaded: "License Uploaded!",
    licenseUploading: "Uploading...", chooseLicense: "Choose license image or PDF",
    swalPosted: "Posted!", swalPostedText: "Availability updated.",
    swalError: "Error", swalErrorText: "Failed to post.",
    swalSavedLocally: "Saved Locally", swalSavedLocallyText: "Saved locally.",
    swalAppSent: "Application Sent!", swalAppSentText: "Submitted. We'll notify you.",
    swalOops: "Oops!", swalAlreadyApplied: "You may have already applied.",
    swalRejectCounter: "Reject Counter?", swalRejectCounterText: "Are you sure?",
    swalYesReject: "Yes, Reject", swalGoBack: "Go Back",
    swalLogout: "Logout?", swalLogoutText: "Are you sure?",
    swalYesLogout: "Yes, Logout", swalGreat: "Great!", langToggle: "اردو",
    optionalCounter: "Enter counter price (Rs.)...",
    counterNote: "Propose a different price instead",
    aiFilterPlaceholder: "e.g. Electrician in Lahore under 2000, urgent",
    aiFilterBtn: "Apply Filter", aiFiltering: "Finding jobs...",
    activeFilters: "Active Filters", clearFilters: "Clear",
    noJobsFound: "No jobs found", noJobsFoundSub: "Try a different search or clear filters",
    noHistory: "No completed jobs yet", noHistorySub: "Finished jobs will appear here",
    profileProgress: "Profile Progress", profileComplete: "Profile Complete! 🎉",
    completeYourProfile: "Complete your profile to get more jobs",
    stepRegistered: "Account Registered",
    stepProfilePhoto: "Profile Photo Uploaded",
    stepCnicDocs: "CNIC Documents Uploaded",
    stepAvailability: "Availability Posted",
    stepLicense: "Driving License Uploaded",
    stepVerified: "Admin Verified",
    tapToComplete: "Tap to complete",
    trackingHeader: "Job In Progress",
    notifications: "Notifications",
    notifSubtitle: "Job alerts will appear here",
    markAllRead: "Mark all read",
    clearAll: "Clear all",
    noNotifications: "No notifications yet",
    tipProfilePhoto: "Go to Settings → Upload a clear photo of yourself",
    tipCnic: "Go to Settings → Upload front & back of your CNIC",
    tipAvailability: "Click 'Post Availability' in the sidebar to post your skills",
    tipLicense: "In Post Availability form, upload your driving license",
    tipVerified: "Our team will review and verify your account within 24 hours",
    boostTitle: "💡 How to get more jobs",
    boostSub: "Complete these steps to appear in more employer searches",
    skillFilterOn: "Showing jobs matching your skill",
    skillFilterOff: "Show all jobs",
    yourSkill: "Your skill",
    removeFilter: "Remove filter",
    appliedViaRequest: "📩 Employer Request",
    appliedViaBrowse: "📝 Browse Apply",
    agreedPriceLabel: "Agreed Price",
    yourOfferLabel: "Your Offer",
    noAppsDesc: "Jobs you apply to and employer requests you accept will appear here",
    confirmed: "Confirmed", callEmployer: "Call Employer",
    // ── Rating strings ──
    rateExperience: "Rate Your Experience",
    howWasExperience: "How was working with",
    commentOptional: "Leave a comment (optional)",
    commentPlaceholder: "Share any issues, highlights, or feedback about this job...",
    skipRating: "Skip for now",
    submitRating: "Submit Rating",
    ratingLabels: ["", "Poor", "Fair", "Good", "Very Good", "Excellent!"],
    yourRatingLabel: "Your Rating",
    yourFeedbackLabel: "Your Feedback",
    ratedOn: "Rated",
    noRatingYet: "Not rated yet",
    rateNow: "Rate Now",
  },
  ur: {
    dir: "rtl", brand: "روزگار ہب", role: "ورکر",
    navRequests: "نوکری کی درخواستیں", navApplied: "میری درخواستیں",
    navBrowse: "نوکریاں دیکھیں", navHistory: "نوکری کی تاریخ", navAvail: "دستیابی پوسٹ کریں",
    logout: "لاگ آؤٹ", online: "آن لائن",
    headerRequests: "آنے والی درخواستیں", headerApplied: "میری درخواستیں",
    headerBrowse: "نوکریاں دیکھیں", headerHistory: "نوکری کی تاریخ", welcomeBack: "خوش آمدید",
    waitingTitle: "نوکری کی درخواستوں کا انتظار ہے...",
    waitingDesc: "جب آپ کے علاقے میں کوئی نوکری پوسٹ ہوگی، خود بخود آجائے گی",
    incomingTitle: "نئی درخواست آ رہی ہے!", incomingDesc: "پاپ اپ میں جواب دیں",
    recentNotifs: "حالیہ اطلاعات", noApps: "ابھی کوئی درخواست نہیں",
    appliedOn: "درخواست دی", recently: "حال ہی میں", pending: "زیر التواء", shortlisted: "منتخب",
    applyNow: "ابھی درخواست دیں", applyFor: "نوکری کے لیے درخواست",
    employerListedRate: "آجر کی مقررہ شرح", yourOffer: "آپ کی پیشکش (روپے)",
    aboveRate: "مقررہ شرح سے زیادہ", belowRate: "مقررہ شرح سے کم",
    matchingRate: "آجر کی مقررہ شرح کے برابر",
    submitApp: "درخواست جمع کریں", newJobRequest: "نئی نوکری کی درخواست", employerOffer: "آجر کی پیشکش",
    acceptJob: "نوکری قبول کریں", declineJob: "رد کریں",
    counterOffer: "جوابی پیشکش", sendCounter: "بھیجیں",
    offerSent: "جوابی پیشکش بھیج دی گئی!",
    yourOfferWas: "آپ کی جوابی پیشکش:", counterReceived: "آجر کی جوابی پیشکش",
    yourOfferWasLabel: "آپ کی پیشکش تھی",
    accept: "قبول کریں", reject: "رد کریں",
    jobConfirmed: "نوکری کی تصدیق!", jobConfirmedDesc: "کام کی جگہ پر جانے کے لیے تیار ہوں",
    viewJobDetails: "نوکری ٹریک کریں",
    offerRejected: "منتخب نہیں ہوئے", offerRejectedDesc: "آجر نے دوسرا ورکر منتخب کیا",
    close: "بند کریں", dismissed: "درخواست واپس",
    dismissedDesc: "آجر نے آپ کی قبولیت رد کر دی",
    postAvailTitle: "اپنی دستیابی پوسٹ کریں",
    skillLabel: "آپ کی مہارت / پیشہ", skillPlaceholder: "مثلاً: الیکٹریشن، پلمبر، ڈرائیور",
    expLabel: "تجربے کے سال", expPlaceholder: "مثلاً: ۵ سال",
    rateLabel: "فی گھنٹہ اجرت (روپے)", ratePlaceholder: "مثلاً: ۵۰۰",
    locLabel: "آپ کا مقام", locPlaceholder: "مثلاً: کراچی، لاہور",
    descLabel: "تفصیل", descPlaceholder: "اپنی مہارتیں بیان کریں...",
    postBtn: "دستیابی پوسٹ کریں", cancelBtn: "منسوخ کریں",
    driverLicenseSection: "ڈرائیونگ لائسنس (ڈرائیوروں کے لیے ضروری)",
    driverLicenseHint: "اپنا لائسنس اپلوڈ کریں — پروفائل میں محفوظ ہو جائے گا اور پوائنٹس ملیں گے",
    uploadLicenseBtn: "لائسنس اپلوڈ کریں", licenseUploaded: "لائسنس اپلوڈ ہو گیا!",
    licenseUploading: "اپلوڈ ہو رہا ہے...", chooseLicense: "لائسنس تصویر یا PDF منتخب کریں",
    swalPosted: "پوسٹ ہو گئی!", swalPostedText: "دستیابی اپڈیٹ ہو گئی",
    swalError: "خرابی", swalErrorText: "پوسٹ کرنے میں ناکامی",
    swalSavedLocally: "مقامی طور پر محفوظ", swalSavedLocallyText: "مقامی طور پر محفوظ کیا گیا",
    swalAppSent: "درخواست بھیج دی!", swalAppSentText: "جمع ہو گئی",
    swalOops: "افسوس!", swalAlreadyApplied: "شاید پہلے ہی درخواست دے چکے ہیں",
    swalRejectCounter: "جوابی پیشکش رد کریں؟", swalRejectCounterText: "کیا آپ واقعی؟",
    swalYesReject: "ہاں، رد کریں", swalGoBack: "واپس جائیں",
    swalLogout: "لاگ آؤٹ؟", swalLogoutText: "کیا آپ واقعی؟",
    swalYesLogout: "ہاں، لاگ آؤٹ", swalGreat: "بہت اچھا!", langToggle: "English",
    optionalCounter: "جوابی قیمت درج کریں (روپے)...",
    counterNote: "مختلف قیمت تجویز کریں",
    aiFilterPlaceholder: "مثلاً: لاہور میں الیکٹریشن، ۲۰۰۰ سے کم، فوری",
    aiFilterBtn: "AI سے تلاش کریں", aiFiltering: "نوکریاں ڈھونڈ رہے ہیں...",
    activeFilters: "فعال فلٹر", clearFilters: "صاف کریں",
    noJobsFound: "کوئی نوکری نہیں ملی", noJobsFoundSub: "مختلف تلاش کریں یا فلٹر صاف کریں",
    noHistory: "ابھی کوئی مکمل نوکری نہیں", noHistorySub: "مکمل نوکریاں یہاں دکھیں گی",
    profileProgress: "پروفائل پروگریس", profileComplete: "پروفائل مکمل! 🎉",
    completeYourProfile: "زیادہ نوکریاں پانے کے لیے پروفائل مکمل کریں",
    stepRegistered: "اکاؤنٹ رجسٹر",
    stepProfilePhoto: "پروفائل فوٹو اپلوڈ",
    stepCnicDocs: "شناختی کارڈ اپلوڈ",
    stepAvailability: "دستیابی پوسٹ",
    stepLicense: "ڈرائیونگ لائسنس اپلوڈ",
    stepVerified: "ایڈمن سے تصدیق",
    tapToComplete: "مکمل کریں",
    trackingHeader: "نوکری جاری ہے",
    notifications: "اطلاعات",
    notifSubtitle: "نوکری کی اطلاعات یہاں دکھیں گی",
    markAllRead: "سب پڑھا",
    clearAll: "سب صاف کریں",
    noNotifications: "ابھی کوئی اطلاع نہیں",
    tipProfilePhoto: "سیٹنگز میں جائیں ← اپنی تصویر اپلوڈ کریں",
    tipCnic: "سیٹنگز میں جائیں ← شناختی کارڈ کے دونوں طرف اپلوڈ کریں",
    tipAvailability: "سائیڈبار میں 'دستیابی پوسٹ کریں' پر کلک کریں",
    tipLicense: "دستیابی فارم میں اپنا ڈرائیونگ لائسنس اپلوڈ کریں",
    tipVerified: "ہماری ٹیم 24 گھنٹوں میں آپ کا اکاؤنٹ تصدیق کرے گی",
    boostTitle: "💡 زیادہ نوکریاں کیسے پائیں",
    boostSub: "یہ اقدامات مکمل کریں اور آجروں کی تلاش میں نظر آئیں",
    skillFilterOn: "آپ کی مہارت کے مطابق نوکریاں",
    skillFilterOff: "تمام نوکریاں دکھائیں",
    yourSkill: "آپ کی مہارت",
    removeFilter: "فلٹر ہٹائیں",
    appliedViaRequest: "📩 آجر کی درخواست",
    appliedViaBrowse: "📝 براؤز سے درخواست",
    agreedPriceLabel: "طے شدہ قیمت",
    yourOfferLabel: "آپ کی پیشکش",
    noAppsDesc: "آپ کی درخواستیں اور آجر کی تصدیق شدہ نوکریاں یہاں دکھیں گی",
    confirmed: "تصدیق شدہ", callEmployer: "آجر کو کال کریں",
    // ── Rating strings ──
    rateExperience: "تجربہ ریٹ کریں",
    howWasExperience: "کے ساتھ کام کیسا رہا",
    commentOptional: "تبصرہ کریں (اختیاری)",
    commentPlaceholder: "اس نوکری کے بارے میں کوئی بھی مسئلہ یا تجربہ شیئر کریں...",
    skipRating: "ابھی چھوڑیں",
    submitRating: "ریٹنگ جمع کریں",
    ratingLabels: ["", "خراب", "ٹھیک", "اچھا", "بہت اچھا", "شاندار!"],
    yourRatingLabel: "آپ کی ریٹنگ",
    yourFeedbackLabel: "آپ کا تبصرہ",
    ratedOn: "ریٹ کیا",
    noRatingYet: "ابھی ریٹنگ نہیں دی",
    rateNow: "ابھی ریٹ کریں",
  }
};

/* ═══════════════ STAR DISPLAY ═══════════════ */
function StarDisplay({ rating, size = 15 }) {
  return (
    <span style={{ fontSize: size, letterSpacing: 1 }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ color: s <= rating ? "#f59e0b" : "#e2e8f0" }}>★</span>
      ))}
    </span>
  );
}

/* ═══════════════ RATING MODAL ═══════════════ */
function RatingModal({ t, lang, open, jobTitle, targetName, targetRole, price, onSubmit, onSkip }) {
  const [rating, setRating]   = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => { if (open) { setRating(0); setHovered(0); setComment(""); } }, [open]);

  if (!open) return null;

  const active = hovered || rating;
  const labelColor = active >= 4 ? "#16a34a" : active === 3 ? "#3b82f6" : active === 2 ? "#f59e0b" : "#ef4444";

  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.65)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:500, padding:24, backdropFilter:"blur(6px)" }}>
      <div style={{ background:"#fff", borderRadius:24, width:"100%", maxWidth:440, overflow:"hidden", boxShadow:"0 32px 80px rgba(0,0,0,0.35)", animation:"slideUp .35s ease-out" }}>

        {/* Header */}
        <div style={{ background:"linear-gradient(135deg,#064e3b,#065f46)", padding:"26px 28px", textAlign:"center" }}>
          <div style={{ fontSize:44, marginBottom:8 }}>⭐</div>
          <h3 style={{ color:"#fff", fontSize:19, fontWeight:800, margin:"0 0 6px" }}>{t.rateExperience}</h3>
          <p style={{ color:"rgba(255,255,255,0.55)", fontSize:13, margin:0 }}>{jobTitle}</p>
          {price && <p style={{ color:"#6ee7b7", fontSize:13, fontWeight:700, margin:"4px 0 0" }}>Rs. {price}</p>}
        </div>

        {/* Body */}
        <div style={{ padding:"24px 28px 28px" }}>
          <p style={{ fontSize:14, color:"#475569", textAlign:"center", marginBottom:20, lineHeight:1.5 }}>
            {t.howWasExperience} <strong style={{ color:"#0f172a" }}>{targetName}</strong>?
          </p>

          {/* Stars */}
          <div style={{ display:"flex", justifyContent:"center", gap:6, marginBottom:10 }}>
            {[1,2,3,4,5].map(star => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                style={{ background:"none", border:"none", cursor:"pointer", fontSize:38, lineHeight:1,
                  transform: active >= star ? "scale(1.2)" : "scale(1)",
                  transition:"transform 0.12s ease", color: active >= star ? "#f59e0b" : "#e2e8f0" }}
              >
                ★
              </button>
            ))}
          </div>

          {active > 0 && (
            <p style={{ textAlign:"center", fontSize:14, fontWeight:800, color:labelColor, marginBottom:18, transition:"color 0.15s" }}>
              {t.ratingLabels[active]}
            </p>
          )}
          {active === 0 && <div style={{ height:34, marginBottom:18 }} />}

          {/* Optional comment */}
          <div style={{ marginBottom:20 }}>
            <label style={{ fontSize:11.5, fontWeight:700, color:"#64748b", textTransform:"uppercase", letterSpacing:"0.07em", display:"block", marginBottom:8 }}>
              {t.commentOptional}
            </label>
            <textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder={t.commentPlaceholder}
              rows={3}
              style={{ width:"100%", padding:"12px 14px", borderRadius:12, border:"1.5px solid #e2e8f0", fontSize:13, outline:"none", resize:"none", boxSizing:"border-box", fontFamily:"inherit", color:"#0f172a", lineHeight:1.5 }}
            />
            <p style={{ fontSize:11, color:"#94a3b8", margin:"4px 0 0" }}>
              {lang === "ur" ? "یہ آپ کی تاریخ میں محفوظ ہو گا" : "This will be saved to your job history"}
            </p>
          </div>

          <div style={{ display:"flex", gap:10 }}>
            <button
              onClick={onSkip}
              style={{ flex:1, padding:"13px", borderRadius:13, border:"1.5px solid #e2e8f0", background:"#f8fafc", color:"#64748b", fontSize:13, fontWeight:600, cursor:"pointer" }}
            >
              {t.skipRating}
            </button>
            <button
              onClick={() => onSubmit(rating, comment.trim())}
              disabled={rating === 0}
              style={{ flex:2, padding:"13px", borderRadius:13, border:"none",
                background: rating > 0 ? "linear-gradient(135deg,#16a34a,#059669)" : "#e2e8f0",
                color: rating > 0 ? "#fff" : "#94a3b8",
                fontSize:14, fontWeight:800, cursor: rating > 0 ? "pointer" : "not-allowed",
                transition:"all 0.2s" }}
            >
              {t.submitRating}
            </button>
          </div>
        </div>
      </div>
      <style>{`@keyframes slideUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  );
}

/* ═══════════════ NOTIFICATION BELL ═══════════════ */
function NotificationBell({ notifications, setNotifications, t }) {
  const [open, setOpen] = useState(false);
  const [readIds, setReadIds] = useState(new Set());
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const unreadCount = notifications.filter(n => !readIds.has(n.id)).length;
  const markAllRead = (e) => { e.stopPropagation(); setReadIds(new Set(notifications.map(n => n.id))); };
  const clearAll = (e) => { e.stopPropagation(); setNotifications([]); setReadIds(new Set()); setOpen(false); };

  const notifIcon = (msg) => {
    if (msg.includes("confirmed") || msg.includes("accepted") || msg.includes("✅")) return { icon: "✅", bg: "#dcfce7" };
    if (msg.includes("offer") || msg.includes("counter")) return { icon: "💬", bg: "#eff6ff" };
    if (msg.includes("job") || msg.includes("New") || msg.includes("📩")) return { icon: "📩", bg: "#fef3c7" };
    return { icon: "🔔", bg: "#f1f5f9" };
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <div onClick={() => setOpen(o => !o)}
        style={{ display:"flex", alignItems:"center", gap:6, background:open?"#dcfce7":"rgba(255,255,255,0.1)", padding:"6px 12px", borderRadius:20, cursor:"pointer", border:open?"1.5px solid #86efac":"1.5px solid transparent", transition:"all .15s", position:"relative" }}>
        <Bell size={16} color={unreadCount > 0 ? "#34d399" : "rgba(255,255,255,0.6)"} />
        {unreadCount > 0 && (
          <div style={{ position:"absolute", top:-4, right:-4, minWidth:16, height:16, padding:"0 4px", background:"#ef4444", borderRadius:"99px", fontSize:9, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, boxShadow:"0 0 0 2px #065f46" }}>
            {unreadCount > 9 ? "9+" : unreadCount}
          </div>
        )}
      </div>

      {open && (
        <div style={{ position:"absolute", top:"calc(100% + 10px)", right:0, width:320, background:"#fff", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.18)", border:"1.5px solid #e2e8f0", zIndex:999, overflow:"hidden" }}>
          <div style={{ padding:"14px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", background:"linear-gradient(135deg,#064e3b,#065f46)", borderBottom:"1px solid rgba(255,255,255,.08)" }}>
            <div>
              <div style={{ fontSize:14, fontWeight:700, color:"#fff" }}>{t.notifications}</div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,.4)", marginTop:1 }}>{t.notifSubtitle}</div>
            </div>
            {notifications.length > 0 && (
              <button onClick={markAllRead} style={{ fontSize:11, color:"#6ee7b7", background:"rgba(255,255,255,.1)", border:"none", borderRadius:8, padding:"4px 9px", cursor:"pointer", fontWeight:600 }}>
                {t.markAllRead}
              </button>
            )}
          </div>
          <div style={{ maxHeight:320, overflowY:"auto" }}>
            {notifications.length === 0 ? (
              <div style={{ padding:"36px 20px", textAlign:"center" }}>
                <div style={{ fontSize:32, marginBottom:8 }}>🔔</div>
                <p style={{ fontSize:13, fontWeight:600, color:"#475569", marginBottom:4 }}>{t.noNotifications}</p>
                <p style={{ fontSize:12, color:"#94a3b8" }}>{t.notifSubtitle}</p>
              </div>
            ) : (
              notifications.slice().reverse().map((n, i) => {
                const isRead = readIds.has(n.id);
                const { icon, bg } = notifIcon(n.msg);
                return (
                  <div key={n.id} onClick={() => setReadIds(prev => new Set([...prev, n.id]))}
                    style={{ padding:"12px 16px", borderBottom:i < notifications.length-1?"1px solid #f8fafc":"none", display:"flex", alignItems:"flex-start", gap:10, background:isRead?"#fff":"#f8fff8", cursor:"pointer" }}>
                    <div style={{ width:32, height:32, borderRadius:"50%", background:bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, flexShrink:0 }}>{icon}</div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <p style={{ fontSize:12.5, color:"#0f172a", fontWeight:isRead?400:600, lineHeight:1.45, margin:0 }}>{n.msg}</p>
                      <p style={{ fontSize:11, color:"#94a3b8", margin:"3px 0 0" }}>Just now</p>
                    </div>
                    {!isRead && <div style={{ width:7, height:7, borderRadius:"50%", background:"#16a34a", flexShrink:0, marginTop:4 }} />}
                  </div>
                );
              })
            )}
          </div>
          {notifications.length > 0 && (
            <div style={{ padding:"10px 16px", borderTop:"1px solid #f1f5f9", display:"flex", justifyContent:"center" }}>
              <button onClick={clearAll} style={{ fontSize:12, color:"#ef4444", background:"#fef2f2", border:"1px solid #fecaca", borderRadius:8, padding:"5px 14px", cursor:"pointer", fontWeight:600 }}>{t.clearAll}</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ═══════════════ MAIN DASHBOARD ═══════════════ */
export default function WorkerDashboard() {
  const [lang, setLang] = useState("en");
  const t = T[lang];

  const [user, setUser]               = useState(null);
  const [activeTab, setActiveTab]     = useState("requests");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [incomingRequest, setIncomingRequest] = useState(null);
  const [showPopup, setShowPopup]             = useState(false);
  const [popupTimer, setPopupTimer]           = useState(30);
  const timerRef = useRef(null);
  const [popupState, setPopupState]           = useState(null);
  const [counterPrice, setCounterPrice]       = useState("");
  const [employerCounter, setEmployerCounter] = useState(null);

  const [confirmedJob, setConfirmedJob] = useState(null);
  const [showTracker, setShowTracker]   = useState(false);

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob]       = useState(null);
  const [offeredRate, setOfferedRate]       = useState("");
  const [appliedJobs, setAppliedJobs]       = useState([]);
  const [jobHistory, setJobHistory]         = useState([]);

  const [showAvailModal, setShowAvailModal] = useState(false);
  const [availability, setAvailability]     = useState({ skill:"", experience:"", hourlyRate:"", location:"", description:"", status:"available" });
  const [licenseFile, setLicenseFile]       = useState(null);
  const [licenseUploading, setLicenseUploading] = useState(false);
  const [licenseUploaded, setLicenseUploaded]   = useState(false);

  const [notifications, setNotifications] = useState([]);
  const [userProfile, setUserProfile]     = useState(null);

  // ── Rating state ──
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [ratingJobInfo, setRatingJobInfo]     = useState(null);

  const swal = (opts) => typeof window !== "undefined" && window.Swal && window.Swal.fire(opts);

  useEffect(() => {
    const handler = (e) => { e.preventDefault(); e.returnValue = "Your active session will be lost if you reload."; return e.returnValue; };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, []);

  useEffect(() => {
    if (document.getElementById("swal-cdn")) return;
    const link = document.createElement("link"); link.rel = "stylesheet"; link.href = "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"; document.head.appendChild(link);
    const script = document.createElement("script"); script.id = "swal-cdn"; script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11"; document.head.appendChild(script);
  }, []);

  const refetchProfile = (token) => {
    const tk = token || localStorage.getItem("token");
    if (!tk) return;
    fetch(`${API}/api/auth/me`, { headers: { Authorization: `Bearer ${tk}` } })
      .then(r => r.json()).then(d => { if (d.user) setUserProfile(d.user); }).catch(() => {});
  };

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) return;
    const u = JSON.parse(stored);
    setUser(u);
    socket.emit("join", u.id);
    socket.emit("worker_online", { workerId: u.id, name: u.name });
    const token = localStorage.getItem("token");
    if (token) refetchProfile(token); else setUserProfile(u);
    fetch(`${API}/api/applications/${u.id}`).then(r => r.json()).then(setAppliedJobs).catch(() => {});
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    fetch(`${API}/api/job-requests/worker/${u.id}`, { headers })
      .then(r => r.json())
      .then(data => {
        if (!Array.isArray(data)) return;
        const accepted = data.filter(r => ["accepted","confirmed","in_progress","completed"].includes(r.status));
        setAppliedJobs(prev => {
          const ids = new Set(prev.map(x => x._id));
          const merged = [...prev];
          accepted.forEach(r => {
            if (!ids.has(r._id)) merged.push({ _id:r._id, job:{ title:r.jobTitle||r.title||r.category, workLocation:r.workLocation||r.location }, status:r.status, offeredRate:r.agreedPrice||r.offeredPrice, agreedPrice:r.agreedPrice||r.offeredPrice, createdAt:r.createdAt, source:"request", employerName:r.employerName, employerPhone:r.employerPhone||"" });
          });
          return merged;
        });
        const completed = data.filter(r => r.status === "completed");
        // Load persisted ratings for history items
        setJobHistory(completed.map(r => {
          const review = getStoredReview(r._id);
          return { _id:r._id, title:r.jobTitle||r.title||r.category||"Job", workLocation:r.workLocation||r.location||"", employerName:r.employerName||"", agreedPrice:r.agreedPrice||r.offeredPrice||"", completedAt:r.updatedAt||r.createdAt, myRating:review.workerRating||0, myComment:review.workerComment||"" };
        }));
      }).catch(() => {});
  }, []);

  useEffect(() => {
    socket.on("new_job_request", (data) => {
      if (showTracker) return;
      setIncomingRequest(data); setCounterPrice(data.offeredPrice||""); setPopupState(null); setShowPopup(true); setPopupTimer(30);
      addNotif(`📩 New job: ${data.title||data.category}`);
    });
    socket.on("employer_confirm_worker", (data) => {
      setPopupState("confirmed");
      setConfirmedJob({ request:incomingRequest, price:data.finalPrice||counterPrice });
      addNotif("✅ You have been confirmed for the job!");
      if (incomingRequest) setAppliedJobs(prev => {
        const exists = prev.some(a => a._id === incomingRequest.requestId);
        if (exists) return prev.map(a => a._id === incomingRequest.requestId ? { ...a, status:"confirmed", agreedPrice:data.finalPrice||counterPrice||incomingRequest.offeredPrice } : a);
        return [{ _id:incomingRequest.requestId, job:{ title:incomingRequest.title||incomingRequest.category, workLocation:incomingRequest.workLocation }, status:"confirmed", offeredRate:data.finalPrice||counterPrice||incomingRequest.offeredPrice, agreedPrice:data.finalPrice||counterPrice||incomingRequest.offeredPrice, createdAt:new Date().toISOString(), source:"request", employerName:incomingRequest.employerName, employerPhone:incomingRequest.employerPhone||"" }, ...prev];
      });
    });
    socket.on("employer_accepted", () => {
      setPopupState("confirmed");
      setConfirmedJob({ request:incomingRequest, price:counterPrice||incomingRequest?.offeredPrice });
      addNotif("✅ Your offer was accepted!");
      if (incomingRequest) setAppliedJobs(prev => {
        const exists = prev.some(a => a._id === incomingRequest.requestId);
        if (exists) return prev.map(a => a._id === incomingRequest.requestId ? { ...a, status:"confirmed", agreedPrice:counterPrice||incomingRequest.offeredPrice } : a);
        return [{ _id:incomingRequest.requestId, job:{ title:incomingRequest.title||incomingRequest.category, workLocation:incomingRequest.workLocation }, status:"confirmed", offeredRate:counterPrice||incomingRequest.offeredPrice, agreedPrice:counterPrice||incomingRequest.offeredPrice, createdAt:new Date().toISOString(), source:"request", employerName:incomingRequest.employerName, employerPhone:incomingRequest.employerPhone||"" }, ...prev];
      });
    });
    socket.on("request_taken_not_selected", () => { if (popupState==="accepted_waiting"||popupState==="counter_sent") setPopupState("rejected"); else if (!showPopup) { setShowPopup(false); setIncomingRequest(null); } });
    socket.on("employer_rejected", () => { if (popupState==="counter_sent") setPopupState("rejected"); });
    socket.on("employer_counter", (data) => { setEmployerCounter(data); setPopupState("counter_received"); addNotif(`💬 Employer sent a counter offer: Rs. ${data.price}`); });
    socket.on("employer_dismiss_worker", () => { setPopupState("dismissed"); addNotif("Request was dismissed by employer"); });
    return () => {
      socket.off("new_job_request"); socket.off("employer_confirm_worker"); socket.off("employer_accepted");
      socket.off("request_taken_not_selected"); socket.off("employer_rejected"); socket.off("employer_counter"); socket.off("employer_dismiss_worker");
    };
  }, [user, incomingRequest, popupState, showPopup, showTracker, counterPrice]);

  useEffect(() => {
    if (showPopup && popupState === null) {
      setPopupTimer(30);
      timerRef.current = setInterval(() => setPopupTimer(prev => { if (prev <= 1) { clearInterval(timerRef.current); dismissPopup(); return 0; } return prev - 1; }), 1000);
    } else clearInterval(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, [showPopup, popupState]);

  const addNotif = (msg) => setNotifications(p => [...p, { id:Date.now()+Math.random(), msg }]);
  const dismissPopup = () => { setShowPopup(false); setPopupState(null); setCounterPrice(""); setEmployerCounter(null); };
  const openTracker  = () => { setShowPopup(false); setShowTracker(true); setPopupState(null); };

  // ── Rating helpers ──
  const getStoredReview = (jobId) => {
    try { return JSON.parse(localStorage.getItem(`job_review_${jobId}`) || "{}"); }
    catch { return {}; }
  };

  const saveWorkerReview = (jobId, rating, comment) => {
    try {
      const existing = getStoredReview(jobId);
      localStorage.setItem(`job_review_${jobId}`, JSON.stringify({ ...existing, workerRating:rating, workerComment:comment, workerRatedAt:new Date().toISOString() }));
    } catch(e) { console.error(e); }
  };

  // ── Job complete → rating modal ──
  const handleTrackerComplete = () => {
    if (confirmedJob) {
      const jobId = confirmedJob.request?.requestId || Date.now().toString();
      const entry = {
        _id: jobId,
        title: confirmedJob.request?.title || confirmedJob.request?.category || "Job",
        workLocation: confirmedJob.request?.workLocation || "",
        employerName: confirmedJob.request?.employerName || "",
        agreedPrice: confirmedJob.price || "",
        completedAt: new Date().toISOString(),
        myRating: 0, myComment: "",
      };
      setJobHistory(prev => [entry, ...prev]);
      setAppliedJobs(prev => prev.map(a => a._id === confirmedJob.request?.requestId ? { ...a, status:"completed" } : a));
      // Show rating modal before fully closing
      setRatingJobInfo({ jobId, jobTitle:entry.title, employerName:entry.employerName, price:confirmedJob.price });
      setShowRatingModal(true);
    } else {
      finishClose();
    }
  };

  const handleRatingSubmit = (rating, comment) => {
    if (ratingJobInfo && rating > 0) {
      saveWorkerReview(ratingJobInfo.jobId, rating, comment);
      setJobHistory(prev => prev.map(j => j._id === ratingJobInfo.jobId ? { ...j, myRating:rating, myComment:comment } : j));
    }
    finishClose();
  };

  const handleRatingSkip = () => finishClose();

  const finishClose = () => {
    setShowRatingModal(false);
    setRatingJobInfo(null);
    setShowTracker(false);
    setConfirmedJob(null);
    setIncomingRequest(null);
  };

  // ── Re-rate from history ──
  const handleReRate = (job) => {
    setRatingJobInfo({ jobId:job._id, jobTitle:job.title, employerName:job.employerName, price:job.agreedPrice });
    setShowRatingModal(true);
  };

  const handleAcceptJob = () => { socket.emit("worker_job_accept", { requestId:incomingRequest.requestId, employerId:incomingRequest.employerId, workerId:user.id, workerName:user.name, workerRating:"4.8", workerPhone:user.phone||"" }); setPopupState("accepted_waiting"); };
  const handleDeclineJob = () => { socket.emit("worker_job_decline", { requestId:incomingRequest.requestId, workerId:user.id }); dismissPopup(); setIncomingRequest(null); };
  const handleSendCounter = () => { if (!counterPrice) { swal({ title:"Enter a price", icon:"warning" }); return; } socket.emit("worker_offer", { requestId:incomingRequest.requestId, employerId:incomingRequest.employerId, workerId:user.id, workerName:user.name, price:counterPrice, rating:"4.8", phone:user.phone }); setPopupState("counter_sent"); };
  const handleAcceptEmployerCounter = () => { socket.emit("worker_accepted", { requestId:incomingRequest.requestId, employerId:incomingRequest.employerId, workerId:user.id, workerName:user.name, price:employerCounter.price, phone:user.phone }); setConfirmedJob({ request:incomingRequest, price:employerCounter.price }); setPopupState("confirmed"); };
  const handleRejectEmployerCounter = () => { swal({ title:t.swalRejectCounter, text:t.swalRejectCounterText, icon:"warning", showCancelButton:true, confirmButtonColor:"#ef4444", cancelButtonColor:"#6b7280", confirmButtonText:t.swalYesReject, cancelButtonText:t.swalGoBack }).then(r => { if (r.isConfirmed) { socket.emit("worker_rejected_counter", { requestId:incomingRequest.requestId, employerId:incomingRequest.employerId, workerId:user.id }); dismissPopup(); setIncomingRequest(null); } }); };

  const uploadLicenseToBackend = async (file) => {
    if (!file) return false;
    const token = localStorage.getItem("token");
    if (!token) { swal({ title:"Login required", icon:"warning" }); return false; }
    setLicenseUploading(true);
    try {
      const fd = new FormData(); fd.append("drivingLicense", file);
      const res  = await fetch(`${API}/api/auth/upload-driver-license`, { method:"POST", headers:{ Authorization:`Bearer ${token}` }, body:fd });
      const data = await res.json();
      if (res.ok) { setLicenseUploaded(true); refetchProfile(token); return true; }
      else { swal({ title:"Upload failed", text:data.error||"Try again", icon:"error" }); return false; }
    } catch (err) { swal({ title:"Upload error", text:err.message, icon:"error" }); return false; }
    finally { setLicenseUploading(false); }
  };

  const handlePostAvailability = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const isDriver = availability.skill.toLowerCase().includes("driver");
    if (isDriver && !licenseUploaded && licenseFile) await uploadLicenseToBackend(licenseFile);
    try {
      const res = await fetch(`${API}/api/workers`, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ ...availability, worker:user.id }) });
      setShowAvailModal(false);
      if (token) {
        try { await fetch(`${API}/api/auth/update-profile`, { method:"PATCH", headers:{"Content-Type":"application/json", Authorization:`Bearer ${token}`}, body:JSON.stringify({ availabilityPosted:true }) }); } catch (_) {}
        refetchProfile(token);
      } else setUserProfile(prev => prev ? { ...prev, availabilityPosted:true } : prev);
      if (res.ok) swal({ title:t.swalPosted, text:t.swalPostedText, icon:"success" });
      else        swal({ title:t.swalError,  text:t.swalErrorText,  icon:"error" });
    } catch (_) { setShowAvailModal(false); setUserProfile(prev => prev ? { ...prev, availabilityPosted:true } : prev); swal({ title:t.swalSavedLocally, text:t.swalSavedLocallyText, icon:"info" }); }
  };

  const handleApplyJob = async (jobId, rate) => {
    const res  = await fetch(`${API}/api/applications`, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ job:jobId, worker:user.id, offeredRate:rate }) });
    const data = await res.json();
    if (!res.ok) { swal({ title:t.swalOops, text:data.error||t.swalAlreadyApplied, icon:"error" }); return; }
    setShowApplyModal(false);
    swal({ title:t.swalAppSent, html:`<strong>Rs. ${rate}</strong> — ${t.swalAppSentText}`, icon:"success" });
  };

  const handleLogout = () => { swal({ title:t.swalLogout, text:t.swalLogoutText, icon:"question", showCancelButton:true, confirmButtonColor:"#ef4444", cancelButtonColor:"#6b7280", confirmButtonText:t.swalYesLogout, cancelButtonText:t.swalGoBack }).then(r => { if (r.isConfirmed) { localStorage.removeItem("user"); window.location.href = "/login"; } }); };

  if (!user) return <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"linear-gradient(135deg,#064e3b,#065f46)" }}><div style={{ width:56, height:56, border:"4px solid #34d399", borderTopColor:"transparent", borderRadius:"50%", animation:"spin 1s linear infinite" }} /><style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style></div>;

  const isDriverSkill  = availability.skill.toLowerCase().includes("driver");
  const mergedProfile  = userProfile || user; // ← KEY FIX: always have something to show
  const headerTitle    = showTracker ? t.trackingHeader : activeTab==="requests" ? t.headerRequests : activeTab==="applied" ? t.headerApplied : activeTab==="history" ? t.headerHistory : t.headerBrowse;

  return (
    <div dir={t.dir} style={{ minHeight:"100vh", display:"flex", background:"#f0f4f8", fontFamily:lang==="ur"?"'Noto Nastaliq Urdu',serif":"'Segoe UI',sans-serif" }}>

      {/* Rating Modal */}
      <RatingModal
        t={t} lang={lang}
        open={showRatingModal}
        jobTitle={ratingJobInfo?.jobTitle || ""}
        targetName={ratingJobInfo?.employerName || lang==="ur"?"آجر":"Employer"}
        price={ratingJobInfo?.price}
        onSubmit={handleRatingSubmit}
        onSkip={handleRatingSkip}
      />

      {showPopup && incomingRequest && (
        <JobRequestPopup t={t} request={incomingRequest} popupState={popupState} popupTimer={popupTimer}
          counterPrice={counterPrice} setCounterPrice={setCounterPrice} employerCounter={employerCounter}
          onAcceptJob={handleAcceptJob} onDeclineJob={handleDeclineJob}
          onShowCounter={() => setPopupState("counter_input")} onSendCounter={handleSendCounter}
          onAcceptEmployerCounter={handleAcceptEmployerCounter} onRejectEmployerCounter={handleRejectEmployerCounter}
          onDismiss={dismissPopup} onOpenTracker={openTracker} userId={user.id} />
      )}

      {showApplyModal && selectedJob && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:200, padding:24, backdropFilter:"blur(4px)" }}>
          <div style={{ background:"#fff", borderRadius:24, width:"100%", maxWidth:480, boxShadow:"0 24px 60px rgba(0,0,0,0.3)", display:"flex", flexDirection:"column", maxHeight:"88vh", overflow:"hidden" }}>
            <div style={{ background:"linear-gradient(135deg,#0f172a,#1e3a5f)", padding:"24px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
              <div><p style={{ fontSize:11, color:"rgba(255,255,255,0.5)", fontWeight:700, textTransform:"uppercase", margin:0 }}>{t.applyFor}</p><h3 style={{ fontSize:20, fontWeight:800, color:"#fff", margin:"6px 0 0" }}>{selectedJob.title}</h3></div>
              <button onClick={() => setShowApplyModal(false)} style={{ background:"rgba(255,255,255,0.15)", border:"none", borderRadius:10, padding:8, cursor:"pointer" }}><X size={18} color="#fff" /></button>
            </div>
            <div style={{ padding:28, overflowY:"auto", flex:1 }}>
              <div style={{ background:"#f0fdf4", border:"1.5px solid #86efac", borderRadius:12, padding:"12px 18px", marginBottom:20, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontSize:13, color:"#16a34a", fontWeight:600 }}>{t.employerListedRate}</span>
                <span style={{ fontSize:20, fontWeight:800, color:"#0f172a" }}>Rs. {String(selectedJob.salary).replace(/^Rs\.\s*/i,"")}</span>
              </div>
              {selectedJob.location && <div style={{ background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:12, padding:"12px 16px", marginBottom:20, display:"flex", alignItems:"center", gap:8 }}><MapPin size={15} color="#3b82f6" /><span style={{ fontSize:14, color:"#475569", fontWeight:600 }}>{selectedJob.location}</span></div>}
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10, marginBottom:24 }}>
                <label style={{ fontSize:13, fontWeight:700, color:"#374151" }}>{t.yourOffer}</label>
                <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <button onClick={() => setOfferedRate(p => String(Math.max(0,Number(p)-100)))} style={{ width:42, height:42, borderRadius:10, border:"none", background:"#f1f5f9", fontSize:22, fontWeight:700, cursor:"pointer" }}>−</button>
                  <input type="number" value={offeredRate} onChange={e => setOfferedRate(e.target.value)} style={{ width:130, textAlign:"center", border:"2px solid #16a34a", borderRadius:12, padding:"10px 0", fontSize:22, fontWeight:800, color:"#0f172a", outline:"none" }} />
                  <button onClick={() => setOfferedRate(p => String(Number(p)+100))} style={{ width:42, height:42, borderRadius:10, border:"none", background:"#f1f5f9", fontSize:22, fontWeight:700, cursor:"pointer" }}>+</button>
                </div>
                <p style={{ fontSize:12, color:"#94a3b8", margin:0 }}>{Number(offeredRate)>Number(selectedJob.salary)?`Rs. ${Number(offeredRate)-Number(selectedJob.salary)} ${t.aboveRate}`:Number(offeredRate)<Number(selectedJob.salary)?`Rs. ${Number(selectedJob.salary)-Number(offeredRate)} ${t.belowRate}`:t.matchingRate}</p>
              </div>
              <button onClick={() => handleApplyJob(selectedJob._id,offeredRate)} style={{ width:"100%", padding:"15px", borderRadius:14, border:"none", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", fontSize:16, fontWeight:700, cursor:"pointer" }}>{t.submitApp}</button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside style={{ width:sidebarOpen?240:72, background:"linear-gradient(180deg,#064e3b 0%,#065f46 100%)", color:"#fff", display:"flex", flexDirection:"column", transition:"width 0.3s", flexShrink:0 }}>
        <div style={{ padding:"24px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid rgba(255,255,255,0.1)" }}>
          {sidebarOpen && <div><div style={{ fontSize:20, fontWeight:800 }}>{t.brand}</div><div style={{ fontSize:11, opacity:0.5, marginTop:2 }}>{t.role}</div></div>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background:"rgba(255,255,255,0.1)", border:"none", color:"#fff", padding:8, borderRadius:8, cursor:"pointer" }}>{sidebarOpen?<X size={16}/>:<Menu size={16}/>}</button>
        </div>
        <nav style={{ flex:1, padding:"16px 12px", display:"flex", flexDirection:"column", gap:4 }}>
          {[{id:"requests",icon:Bell,label:t.navRequests},{id:"applied",icon:CheckCircle,label:t.navApplied},{id:"history",icon:Briefcase,label:t.navHistory},{id:"browse",icon:Search,label:t.navBrowse}].map(item => (
            <button key={item.id} onClick={() => { setActiveTab(item.id); setShowTracker(false); }}
              style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", borderRadius:10, border:"none", cursor:"pointer", background:activeTab===item.id&&!showTracker?"rgba(52,211,153,0.2)":"transparent", color:activeTab===item.id&&!showTracker?"#34d399":"rgba(255,255,255,0.6)", fontWeight:activeTab===item.id&&!showTracker?600:400, fontSize:14, transition:"all 0.2s", flexDirection:t.dir==="rtl"?"row-reverse":"row" }}>
              <item.icon size={18}/>{sidebarOpen&&<span>{item.label}</span>}
            </button>
          ))}
          <button onClick={() => setShowAvailModal(true)} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", borderRadius:10, border:"none", cursor:"pointer", background:"rgba(251,146,60,0.2)", color:"#fb923c", fontWeight:600, fontSize:14, marginTop:8, flexDirection:t.dir==="rtl"?"row-reverse":"row" }}>
            <PlusCircle size={18}/>{sidebarOpen&&<span>{t.navAvail}</span>}
          </button>
          {confirmedJob && !showTracker && (
            <button onClick={() => setShowTracker(true)} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", borderRadius:10, border:"2px solid rgba(34,197,94,0.5)", cursor:"pointer", background:"rgba(34,197,94,0.15)", color:"#34d399", fontWeight:700, fontSize:14, marginTop:8, flexDirection:t.dir==="rtl"?"row-reverse":"row", animation:"pulse 2s infinite" }}>
              🔧{sidebarOpen&&<span>{t.trackingHeader}</span>}
            </button>
          )}
        </nav>
        <div style={{ padding:"16px 12px", borderTop:"1px solid rgba(255,255,255,0.1)" }}>
          {sidebarOpen && <div style={{ display:"flex", alignItems:"center", gap:10, padding:"12px 14px", marginBottom:8 }}><div style={{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(135deg,#34d399,#059669)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, fontWeight:700, flexShrink:0 }}>{user.name?.charAt(0).toUpperCase()}</div><div><div style={{ fontSize:13, fontWeight:600 }}>{user.name}</div><div style={{ fontSize:11, opacity:0.5 }}>{user.email}</div></div></div>}
          <button onClick={handleLogout} style={{ display:"flex", alignItems:"center", gap:12, padding:"10px 14px", borderRadius:10, border:"none", cursor:"pointer", width:"100%", background:"rgba(239,68,68,0.15)", color:"#f87171", fontSize:14, flexDirection:t.dir==="rtl"?"row-reverse":"row" }}><LogOut size={16}/>{sidebarOpen&&<span>{t.logout}</span>}</button>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex:1, overflow:"auto" }}>
        <header style={{ background:"#fff", borderBottom:"1px solid #e2e8f0", padding:"20px 32px", display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:5 }}>
          <div><h1 style={{ fontSize:22, fontWeight:700, color:"#0f172a", margin:0 }}>{headerTitle}</h1><p style={{ fontSize:13, color:"#64748b", margin:"4px 0 0" }}>{t.welcomeBack}, {user.name}</p></div>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <button onClick={() => setLang(l => l==="en"?"ur":"en")} style={{ padding:"6px 16px", borderRadius:20, border:"2px solid #16a34a", background:"#fff", color:"#16a34a", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:lang==="en"?"'Noto Nastaliq Urdu',serif":"'Segoe UI',sans-serif" }}>{t.langToggle}</button>
            <div style={{ display:"flex", alignItems:"center", gap:6, background:"#dcfce7", padding:"6px 14px", borderRadius:20 }}><div style={{ width:8, height:8, borderRadius:"50%", background:"#16a34a" }} /><span style={{ fontSize:12, fontWeight:600, color:"#16a34a" }}>{t.online}</span></div>
            <NotificationBell notifications={notifications} setNotifications={setNotifications} t={t} />
          </div>
        </header>

        <div style={{ padding:"32px" }}>
          {showTracker && confirmedJob && (
            <JobTracker role="worker"
              job={{ requestId:confirmedJob.request?.requestId, title:confirmedJob.request?.title, category:confirmedJob.request?.category, workLocation:confirmedJob.request?.workLocation, lat:confirmedJob.request?.lat, lng:confirmedJob.request?.lng }}
              worker={{ workerId:user?.id, workerName:user?.name, workerPhone:user?.phone }}
              employer={{ employerId:confirmedJob.request?.employerId, employerName:confirmedJob.request?.employerName }}
              agreedPrice={confirmedJob.price} socket={socket} onJobComplete={handleTrackerComplete} lang={lang} t={t} />
          )}
          {!showTracker && activeTab==="requests" && <RequestsTab t={t} notifications={notifications} showPopup={showPopup} userProfile={mergedProfile} onPostAvail={() => setShowAvailModal(true)} />}
          {!showTracker && activeTab==="applied"  && <AppliedTab  t={t} applied={appliedJobs} lang={lang} userProfile={mergedProfile} onPostAvail={() => setShowAvailModal(true)} />}
          {!showTracker && activeTab==="history"  && <HistoryTab  t={t} history={jobHistory} lang={lang} userProfile={mergedProfile} onPostAvail={() => setShowAvailModal(true)} onReRate={handleReRate} />}
          {!showTracker && activeTab==="browse"   && <BrowseTab   t={t} lang={lang} userId={user.id} userProfile={mergedProfile} onPostAvail={() => setShowAvailModal(true)} onOpenApplyModal={(job) => { setSelectedJob(job); setOfferedRate(String(job.salary||"")); setShowApplyModal(true); }} />}
        </div>
      </main>

      {/* Availability Modal */}
      {showAvailModal && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:100, padding:24 }}>
          <div style={{ background:"#fff", borderRadius:20, padding:32, maxWidth:540, width:"100%", maxHeight:"90vh", overflowY:"auto" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24 }}>
              <h3 style={{ fontSize:20, fontWeight:700, margin:0 }}>{t.postAvailTitle}</h3>
              <button onClick={() => setShowAvailModal(false)} style={{ background:"#f1f5f9", border:"none", borderRadius:8, padding:8, cursor:"pointer" }}><X size={18}/></button>
            </div>
            <form onSubmit={handlePostAvailability} style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {[{key:"skill",label:t.skillLabel,placeholder:t.skillPlaceholder},{key:"experience",label:t.expLabel,placeholder:t.expPlaceholder},{key:"hourlyRate",label:t.rateLabel,placeholder:t.ratePlaceholder},{key:"location",label:t.locLabel,placeholder:t.locPlaceholder}].map(f => (
                <div key={f.key}>
                  <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>{f.label}</label>
                  <input required value={availability[f.key]} onChange={e => setAvailability({...availability,[f.key]:e.target.value})} placeholder={f.placeholder} style={{ width:"100%", padding:"12px 16px", borderRadius:10, border:"1.5px solid #e2e8f0", fontSize:14, outline:"none", boxSizing:"border-box" }} />
                </div>
              ))}
              <div>
                <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>{t.descLabel}</label>
                <textarea required value={availability.description} onChange={e => setAvailability({...availability,description:e.target.value})} rows={3} placeholder={t.descPlaceholder} style={{ width:"100%", padding:"12px 16px", borderRadius:10, border:"1.5px solid #e2e8f0", fontSize:14, outline:"none", resize:"vertical", boxSizing:"border-box" }} />
              </div>
              {isDriverSkill && (
                <div style={{ background:"#f0f9ff", borderRadius:14, padding:18, border:"2px solid #bae6fd" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}><Car size={18} color="#0369a1" /><span style={{ fontSize:14, fontWeight:700, color:"#0369a1" }}>{t.driverLicenseSection}</span></div>
                  <p style={{ fontSize:12, color:"#64748b", marginBottom:14, marginTop:0 }}>{t.driverLicenseHint}</p>
                  {licenseUploaded ? (
                    <div style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 16px", background:"#dcfce7", borderRadius:10, border:"1.5px solid #86efac" }}><CheckCircle size={16} color="#16a34a" /><span style={{ fontSize:13, fontWeight:700, color:"#16a34a" }}>{t.licenseUploaded}</span></div>
                  ) : (
                    <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                      <label style={{ display:"flex", alignItems:"center", gap:10, padding:"12px 16px", background:"#fff", border:"2px dashed #7dd3fc", borderRadius:10, cursor:"pointer" }}>
                        <Upload size={16} color="#0369a1" />
                        <span style={{ fontSize:13, color:"#0369a1", fontWeight:600 }}>{licenseFile ? licenseFile.name : t.chooseLicense}</span>
                        <input type="file" accept="image/*,.pdf" style={{ display:"none" }} onChange={e => { const f=e.target.files?.[0]; if(f) setLicenseFile(f); }} />
                      </label>
                      {licenseFile && (
                        <button type="button" disabled={licenseUploading} onClick={() => uploadLicenseToBackend(licenseFile)}
                          style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"11px", borderRadius:10, border:"none", background:licenseUploading?"#e2e8f0":"linear-gradient(135deg,#0369a1,#0284c7)", color:licenseUploading?"#94a3b8":"#fff", fontWeight:700, fontSize:13, cursor:licenseUploading?"not-allowed":"pointer" }}>
                          {licenseUploading ? <><div style={{ width:14, height:14, border:"2px solid #94a3b8", borderTopColor:"transparent", borderRadius:"50%", animation:"spin 1s linear infinite" }}/>{t.licenseUploading}</> : <><Upload size={14}/>{t.uploadLicenseBtn}</>}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
              <div style={{ display:"flex", gap:12, marginTop:8 }}>
                <button type="submit" style={{ flex:1, padding:14, background:"linear-gradient(135deg,#16a34a,#059669)", color:"#fff", border:"none", borderRadius:12, fontSize:15, fontWeight:700, cursor:"pointer" }}>{t.postBtn}</button>
                <button type="button" onClick={() => setShowAvailModal(false)} style={{ padding:"14px 20px", background:"#f1f5f9", color:"#475569", border:"none", borderRadius:12, fontSize:14, cursor:"pointer" }}>{t.cancelBtn}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`@keyframes spin{to{transform:rotate(360deg)}} @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}} @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}`}</style>
    </div>
  );
}

/* ═══════════════ PROFILE PROGRESS ═══════════════ */
function ProfileProgress({ t, userProfile, onPostAvail }) {
  const [showTips, setShowTips] = useState(false);

  // ── KEY FIX: always have a profile object ──
  const profile = userProfile || {};

  // Skeleton when nothing is loaded yet
  if (!profile._id && !profile.id && !profile.name) {
    return (
      <div style={{ background:"#fff", borderRadius:20, padding:24, marginBottom:20, border:"1.5px solid #e2e8f0" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
          <div><div style={{ height:16, width:150, background:"#f1f5f9", borderRadius:8, marginBottom:6 }} /><div style={{ height:12, width:220, background:"#f1f5f9", borderRadius:8 }} /></div>
          <div style={{ height:28, width:52, background:"#f1f5f9", borderRadius:8 }} />
        </div>
        <div style={{ height:10, background:"#f1f5f9", borderRadius:99, marginBottom:18 }} />
        {[1,2,3,4].map(i => <div key={i} style={{ height:50, background:"#f8fafc", borderRadius:12, border:"1.5px solid #e2e8f0", marginBottom:10 }} />)}
      </div>
    );
  }

  const docs      = profile.documents || {};
  const skillRaw  = (profile.category || profile.skill || profile.trade || "").toLowerCase();
  const isDriver  = skillRaw.includes("driver");

  const hasProfilePhoto = !!(docs.profilePhoto || profile.profilePhoto || profile.avatar);
  const hasCnicFront    = !!(docs.cnicFront || profile.cnicFront);
  const hasCnicBack     = !!(docs.cnicBack  || profile.cnicBack);
  const hasCnic         = !!((hasCnicFront && hasCnicBack) || profile.cnicVerified);
  const hasLicense      = !!(docs.drivingLicense || profile.drivingLicense || profile.licenseVerified);
  const isAvailPosted   = !!(profile.availabilityPosted || profile.availabilityId);
  const hasFirstJob     = !!(profile.firstJobAccepted || profile.firstJobCompleted || profile.jobsCompleted > 0);
  const isAdminVerified = !!(profile.isVerified || profile.adminVerified);

  const steps = [
    { key:"registered",   label:t.stepRegistered,   done:true,            points:10, action:null, tip:null },
    { key:"profilePhoto", label:t.stepProfilePhoto, done:hasProfilePhoto, points:20, action:null, tip:t.tipProfilePhoto },
    { key:"cnicDocs",     label:t.stepCnicDocs,     done:hasCnic,         points:20, action:null, tip:t.tipCnic },
    { key:"availability", label:t.stepAvailability, done:isAvailPosted,   points:15, action:onPostAvail, tip:t.tipAvailability },
    ...(isDriver ? [{ key:"license", label:t.stepLicense, done:hasLicense, points:15, action:null, tip:t.tipLicense }] : []),
    { key:"firstJob",     label:t.dir==="rtl"?"پہلی نوکری مکمل":"First Job Completed", done:hasFirstJob, points:15, action:null, tip:t.dir==="rtl"?"جب آپ پہلی نوکری مکمل کریں پوائنٹس خود ملیں گے":"Accept and complete your first job" },
    { key:"verified",     label:t.stepVerified,     done:isAdminVerified, points:isDriver?20:20, action:null, tip:t.tipVerified },
  ];

  const totalPoints  = steps.reduce((s,x) => s+x.points, 0);
  const earnedPoints = steps.filter(s => s.done).reduce((s,x) => s+x.points, 0);
  const percentage   = Math.round((earnedPoints/totalPoints)*100);
  const isComplete   = percentage === 100;
  const barColor     = percentage>=80?"#16a34a":percentage>=50?"#3b82f6":"#f59e0b";
  const pendingSteps = steps.filter(s => !s.done && s.tip);

  const cnicDetail = !hasCnic && (hasCnicFront||hasCnicBack)
    ? `(${hasCnicFront?"✓ Front":"✗ Front"} · ${hasCnicBack?"✓ Back":"✗ Back"})`
    : null;

  return (
    <div style={{ background:"#fff", borderRadius:20, padding:24, boxShadow:"0 4px 20px rgba(0,0,0,0.06)", marginBottom:20, border:isComplete?"2px solid #22c55e":"1.5px solid #e2e8f0", animation:"slideUp .4s ease-out" }}>
      {/* Header */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
        <div>
          <h3 style={{ fontSize:16, fontWeight:800, color:"#0f172a", margin:0 }}>{isComplete?t.profileComplete:t.profileProgress}</h3>
          {!isComplete&&<p style={{ fontSize:12, color:"#64748b", margin:"3px 0 0" }}>{t.completeYourProfile}</p>}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          {!isComplete && pendingSteps.length>0 && (
            <button onClick={() => setShowTips(s => !s)} style={{ fontSize:11, fontWeight:700, color:"#16a34a", background:"#f0fdf4", border:"1.5px solid #86efac", borderRadius:20, padding:"4px 12px", cursor:"pointer" }}>
              {showTips?(t.dir==="rtl"?"✕ بند":"✕ Hide"):"💡 Tips"}
            </button>
          )}
          <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:26, fontWeight:900, color:barColor, lineHeight:1 }}>{percentage}%</div>
            <div style={{ fontSize:10, color:"#94a3b8", fontWeight:600 }}>{earnedPoints}/{totalPoints} pts</div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ background:"#e2e8f0", borderRadius:99, height:10, overflow:"hidden", marginBottom:18 }}>
        <div style={{ height:"100%", borderRadius:99, background:isComplete?"linear-gradient(90deg,#22c55e,#16a34a)":`linear-gradient(90deg,${barColor},${barColor}cc)`, width:`${percentage}%`, transition:"width 1s ease-out" }} />
      </div>

      {/* Tips panel */}
      {showTips && pendingSteps.length>0 && (
        <div style={{ background:"linear-gradient(135deg,#f0fdf4,#dcfce7)", borderRadius:14, padding:16, marginBottom:16, border:"1.5px solid #86efac" }}>
          <p style={{ fontSize:13, fontWeight:800, color:"#15803d", margin:"0 0 4px" }}>{t.boostTitle}</p>
          <p style={{ fontSize:11.5, color:"#16a34a", margin:"0 0 12px" }}>{t.boostSub}</p>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {pendingSteps.map(s => (
              <div key={s.key} style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"10px 12px", background:"#fff", borderRadius:10, border:"1px solid #bbf7d0" }}>
                <span style={{ fontSize:16, flexShrink:0 }}>→</span>
                <div style={{ flex:1 }}>
                  <p style={{ fontSize:12, fontWeight:700, color:"#15803d", margin:"0 0 2px" }}>{s.label}</p>
                  <p style={{ fontSize:11.5, color:"#64748b", margin:0 }}>{s.tip}</p>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:6, flexShrink:0 }}>
                  {s.action && <button onClick={s.action} style={{ fontSize:11, fontWeight:700, color:"#16a34a", background:"#dcfce7", border:"none", borderRadius:20, padding:"3px 10px", cursor:"pointer" }}>{t.tapToComplete} →</button>}
                  <span style={{ fontSize:11, fontWeight:700, color:"#16a34a", background:"#dcfce7", padding:"2px 8px", borderRadius:20 }}>+{s.points}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Steps list */}
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {steps.map(step => (
          <div key={step.key} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 14px", borderRadius:12, background:step.done?"#f0fdf4":"#f8fafc", border:`1.5px solid ${step.done?"#bbf7d0":"#e2e8f0"}` }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:28, height:28, borderRadius:"50%", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background:step.done?"#22c55e":"#e2e8f0", fontSize:13, color:step.done?"#fff":"#94a3b8" }}>{step.done?"✓":"○"}</div>
              <div>
                <span style={{ fontSize:13, fontWeight:step.done?600:500, color:step.done?"#15803d":"#475569" }}>{step.label}</span>
                {step.key==="cnicDocs"&&cnicDetail&&<span style={{ fontSize:11, color:"#94a3b8", marginLeft:6 }}>{cnicDetail}</span>}
              </div>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ fontSize:11, fontWeight:700, color:step.done?"#16a34a":"#94a3b8", background:step.done?"#dcfce7":"#f1f5f9", padding:"2px 8px", borderRadius:20 }}>+{step.points} pts</span>
              {!step.done&&step.action&&<button onClick={step.action} style={{ fontSize:11, fontWeight:700, color:"#3b82f6", background:"#eff6ff", border:"none", borderRadius:20, padding:"3px 10px", cursor:"pointer" }}>{t.tapToComplete} →</button>}
            </div>
          </div>
        ))}
      </div>

      {isComplete && (
        <div style={{ marginTop:16, padding:"12px 16px", borderRadius:12, background:"linear-gradient(135deg,#dcfce7,#bbf7d0)", border:"1.5px solid #86efac", textAlign:"center" }}>
          <p style={{ fontSize:14, fontWeight:800, color:"#15803d", margin:0 }}>🎉 {t.dir==="rtl"?"آپ کا پروفائل مکمل ہے! آپ کو زیادہ نوکریاں ملیں گی۔":"Your profile is 100% complete! You'll appear in more employer searches."}</p>
        </div>
      )}
    </div>
  );
}

/* ═══════════════ REQUESTS TAB ═══════════════ */
function RequestsTab({ t, notifications, showPopup, userProfile, onPostAvail }) {
  return (
    <div style={{ maxWidth:600, margin:"0 auto" }}>
      <ProfileProgress t={t} userProfile={userProfile} onPostAvail={onPostAvail} />
      <div style={{ background:"#fff", borderRadius:20, padding:40, textAlign:"center", boxShadow:"0 4px 20px rgba(0,0,0,0.06)" }}>
        <div style={{ width:80, height:80, borderRadius:"50%", background:showPopup?"linear-gradient(135deg,#22c55e,#16a34a)":"linear-gradient(135deg,#e2e8f0,#cbd5e1)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:32 }}>{showPopup?"📩":"📭"}</div>
        <h3 style={{ fontSize:20, fontWeight:700, color:"#0f172a", marginBottom:8 }}>{showPopup?t.incomingTitle:t.waitingTitle}</h3>
        <p style={{ fontSize:14, color:"#64748b", lineHeight:1.6 }}>{showPopup?t.incomingDesc:t.waitingDesc}</p>
        {notifications.length>0&&<div style={{ marginTop:24, textAlign:"left" }}><h4 style={{ fontSize:14, fontWeight:600, color:"#475569", marginBottom:12 }}>{t.recentNotifs}</h4>{notifications.slice(-5).reverse().map(n => <div key={n.id} style={{ padding:"10px 14px", background:"#f8fafc", borderRadius:10, fontSize:13, color:"#475569", marginBottom:8 }}>{n.msg}</div>)}</div>}
      </div>
    </div>
  );
}

/* ═══════════════ APPLIED TAB ═══════════════ */
function AppliedTab({ t, applied, lang, userProfile, onPostAvail }) {
  const statusStyle = (s) => {
    if (s==="completed")   return {bg:"#dcfce7",color:"#15803d"};
    if (["confirmed","accepted","in_progress"].includes(s)) return {bg:"#dbeafe",color:"#1d4ed8"};
    if (s==="shortlisted") return {bg:"#fef3c7",color:"#d97706"};
    if (s==="rejected")    return {bg:"#fee2e2",color:"#dc2626"};
    return {bg:"#f1f5f9",color:"#475569"};
  };
  const statusLabel = (s) => {
    const m = { confirmed:"✅ CONFIRMED", accepted:"✅ ACCEPTED", in_progress:"🔧 IN PROGRESS", completed:"✓ COMPLETED", rejected:"✗ REJECTED", shortlisted:"⭐ SHORTLISTED", pending:"⏳ PENDING" };
    return m[s]||(s||"pending").toUpperCase().replace(/_/g," ");
  };
  const confirmedCount = (applied||[]).filter(a => ["confirmed","accepted","in_progress"].includes(a.status)).length;
  const pendingCount   = (applied||[]).filter(a => !a.status||a.status==="pending").length;
  const completedCount = (applied||[]).filter(a => a.status==="completed").length;

  return (
    <div style={{ maxWidth:700, margin:"0 auto" }}>
      <ProfileProgress t={t} userProfile={userProfile} onPostAvail={onPostAvail} />
      {(!applied||applied.length===0) ? (
        <div style={{ background:"#fff", borderRadius:16, padding:60, textAlign:"center", color:"#94a3b8" }}>
          <CheckCircle size={52} style={{ margin:"0 auto 16px", opacity:0.3, display:"block" }} />
          <p style={{ fontSize:17, fontWeight:600, color:"#475569", marginBottom:8 }}>{t.noApps}</p>
          <p style={{ fontSize:14, color:"#94a3b8" }}>{t.noAppsDesc}</p>
        </div>
      ) : (
        <>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:20 }}>
            {[{label:lang==="ur"?"تصدیق شدہ":"Confirmed",value:confirmedCount,bg:"#dbeafe",color:"#1d4ed8",icon:"✅"},{label:lang==="ur"?"زیر التواء":"Pending",value:pendingCount,bg:"#fef3c7",color:"#d97706",icon:"⏳"},{label:lang==="ur"?"مکمل":"Completed",value:completedCount,bg:"#dcfce7",color:"#15803d",icon:"✓"}].map(s => (
              <div key={s.label} style={{ background:s.bg, borderRadius:12, padding:"12px 14px", textAlign:"center" }}>
                <div style={{ fontSize:18 }}>{s.icon}</div>
                <div style={{ fontSize:22, fontWeight:900, color:s.color }}>{s.value}</div>
                <div style={{ fontSize:11, fontWeight:700, color:s.color, opacity:0.8 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {applied.map((app,i) => {
              const job=app.job||{};
              const {bg,color}=statusStyle(app.status);
              const isRequest=app.source==="request";
              const isConfirmed=["confirmed","accepted","in_progress","completed"].includes(app.status);
              return (
                <div key={app._id||i} style={{ background:"#fff", borderRadius:16, padding:22, boxShadow:"0 2px 12px rgba(0,0,0,0.06)", border:`1.5px solid ${isConfirmed?"#bfdbfe":"#e2e8f0"}` }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ marginBottom:6 }}><span style={{ fontSize:11, fontWeight:700, background:isRequest?"#ede9fe":"#e0f2fe", color:isRequest?"#7c3aed":"#0369a1", padding:"2px 10px", borderRadius:20 }}>{isRequest?t.appliedViaRequest:t.appliedViaBrowse}</span></div>
                      <h4 style={{ fontSize:16, fontWeight:700, marginBottom:4, color:"#0f172a" }}>{job.title||app.title||"Job Request"}</h4>
                      {(job.workLocation||app.workLocation)&&<p style={{ fontSize:13, color:"#64748b", marginBottom:3 }}>📍 {job.workLocation||app.workLocation}</p>}
                      {(app.employerName||job.employer?.name)&&<p style={{ fontSize:13, color:"#64748b", marginBottom:3 }}>👤 {app.employerName||job.employer?.name}</p>}
                      <p style={{ fontSize:11, color:"#94a3b8" }}>{new Date(app.createdAt||Date.now()).toLocaleDateString("en-PK",{day:"numeric",month:"short",year:"numeric"})}</p>
                    </div>
                    <span style={{ padding:"5px 12px", borderRadius:20, fontSize:11, fontWeight:700, background:bg, color, flexShrink:0, marginLeft:12 }}>{statusLabel(app.status)}</span>
                  </div>
                  {(app.offeredRate||app.agreedPrice)&&(
                    <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:isConfirmed?10:0 }}>
                      {app.offeredRate&&<span style={{ fontSize:12.5, color:"#475569", background:"#f1f5f9", padding:"4px 12px", borderRadius:20 }}>💬 {t.yourOfferLabel}: Rs. {app.offeredRate}</span>}
                      {app.agreedPrice&&app.agreedPrice!==app.offeredRate&&<span style={{ fontSize:12.5, color:"#1d4ed8", fontWeight:700, background:"#eff6ff", padding:"4px 12px", borderRadius:20 }}>🤝 {t.agreedPriceLabel}: Rs. {app.agreedPrice}</span>}
                    </div>
                  )}
                  {isConfirmed&&(
                    <div style={{ marginTop:10, background:"linear-gradient(135deg,#eff6ff,#dbeafe)", borderRadius:12, padding:"12px 16px", border:"1.5px solid #bfdbfe", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
                      <div>
                        <p style={{ fontSize:11, fontWeight:800, color:"#1d4ed8", textTransform:"uppercase", letterSpacing:".05em", margin:"0 0 3px" }}>{app.status==="completed"?(lang==="ur"?"✓ نوکری مکمل":"✓ Job Completed"):(lang==="ur"?"✅ آپ تصدیق شدہ ہیں":"✅ You're confirmed for this job")}</p>
                        {(app.employerName||job.employer?.name)&&<p style={{ fontSize:12.5, color:"#475569", margin:0 }}>👤 {app.employerName||job.employer?.name}</p>}
                      </div>
                      {app.employerPhone&&<a href={`tel:${app.employerPhone}`} style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 16px", borderRadius:10, background:"linear-gradient(135deg,#3b82f6,#2563eb)", color:"#fff", textDecoration:"none", fontSize:13, fontWeight:700, boxShadow:"0 2px 8px rgba(59,130,246,.3)" }}>📞 {t.callEmployer}</a>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

/* ═══════════════ HISTORY TAB ═══════════════ */
function HistoryTab({ t, history, lang, userProfile, onPostAvail, onReRate }) {
  const getStoredReview = (jobId) => {
    try { return JSON.parse(localStorage.getItem(`job_review_${jobId}`) || "{}"); }
    catch { return {}; }
  };

  const total = (history||[]).reduce((s,j)=>s+Number(String(j.agreedPrice).replace(/[^0-9]/g,"")||0),0);

  return (
    <div style={{ maxWidth:700, margin:"0 auto" }}>
      <ProfileProgress t={t} userProfile={userProfile} onPostAvail={onPostAvail} />

      {(!history||history.length===0) ? (
        <div style={{ background:"#fff", borderRadius:16, padding:60, textAlign:"center", color:"#94a3b8" }}>
          <Briefcase size={52} style={{ margin:"0 auto 16px", opacity:0.3, display:"block" }} />
          <p style={{ fontSize:17, fontWeight:600, color:"#475569", marginBottom:8 }}>{t.noHistory}</p>
          <p style={{ fontSize:14 }}>{t.noHistorySub}</p>
        </div>
      ) : (
        <>
          <div style={{ background:"linear-gradient(135deg,#064e3b,#065f46)", borderRadius:16, padding:"18px 24px", color:"#fff", display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
            <div><div style={{ fontSize:12, opacity:0.6, fontWeight:600, textTransform:"uppercase", letterSpacing:".08em" }}>{lang==="ur"?"مکمل نوکریاں":"Jobs Completed"}</div><div style={{ fontSize:32, fontWeight:900 }}>{history.length}</div></div>
            <div style={{ textAlign:"right" }}><div style={{ fontSize:12, opacity:0.6, fontWeight:600, textTransform:"uppercase", letterSpacing:".08em" }}>{lang==="ur"?"کل کمائی":"Total Earned"}</div><div style={{ fontSize:24, fontWeight:800 }}>Rs. {total.toLocaleString()}</div></div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {history.map((job,i) => {
              // Load review — prefer in-memory state, fall back to localStorage
              const review = (job.myRating > 0) ? { workerRating:job.myRating, workerComment:job.myComment } : getStoredReview(job._id);
              const hasRating = review.workerRating > 0;
              return (
                <div key={job._id||i} style={{ background:"#fff", borderRadius:16, padding:22, boxShadow:"0 2px 12px rgba(0,0,0,0.06)", border:"1.5px solid #dcfce7" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                    <div style={{ flex:1 }}>
                      <h4 style={{ fontSize:17, fontWeight:700, marginBottom:4, color:"#0f172a" }}>{job.title||"Job"}</h4>
                      {job.workLocation&&<p style={{ fontSize:13, color:"#64748b", marginBottom:4 }}>📍 {job.workLocation}</p>}
                      {job.employerName&&<p style={{ fontSize:13, color:"#64748b", marginBottom:4 }}>👤 {job.employerName}</p>}
                      <p style={{ fontSize:12, color:"#94a3b8" }}>✅ {lang==="ur"?"مکمل:":"Completed:"} {new Date(job.completedAt||Date.now()).toLocaleDateString("en-PK",{day:"numeric",month:"short",year:"numeric"})}</p>
                    </div>
                    <span style={{ padding:"6px 14px", borderRadius:20, fontSize:12, fontWeight:700, background:"#dcfce7", color:"#15803d", flexShrink:0, marginLeft:12 }}>{lang==="ur"?"مکمل":"COMPLETED"}</span>
                  </div>

                  {job.agreedPrice&&(
                    <div style={{ marginTop:12, display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", background:"#f0fdf4", borderRadius:10 }}>
                      <span style={{ fontSize:15, color:"#16a34a", fontWeight:800 }}>💰 {lang==="ur"?"کمائی:":"Earned:"} Rs. {job.agreedPrice}</span>
                    </div>
                  )}

                  {/* ── Rating section ── */}
                  <div style={{ marginTop:14 }}>
                    {hasRating ? (
                      <div style={{ background:"linear-gradient(135deg,#fefce8,#fef9c3)", borderRadius:12, padding:"14px 16px", border:"1.5px solid #fde68a" }}>
                        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:review.workerComment?10:0 }}>
                          <div>
                            <p style={{ fontSize:11, fontWeight:800, color:"#92400e", textTransform:"uppercase", letterSpacing:".06em", margin:"0 0 4px" }}>
                              {lang==="ur"?`${t.yourRatingLabel} — ${job.employerName||"آجر"}`:`${t.yourRatingLabel} for ${job.employerName||"Employer"}`}
                            </p>
                            <StarDisplay rating={review.workerRating} size={18} />
                            <span style={{ fontSize:12, color:"#92400e", fontWeight:700, marginLeft:6 }}>({t.ratingLabels[review.workerRating]})</span>
                          </div>
                          <button onClick={() => onReRate(job)} style={{ fontSize:11, fontWeight:700, color:"#92400e", background:"rgba(251,191,36,0.2)", border:"1px solid #fde68a", borderRadius:20, padding:"4px 12px", cursor:"pointer" }}>
                            {lang==="ur"?"تبدیل کریں":"Edit"}
                          </button>
                        </div>
                        {review.workerComment&&(
                          <div style={{ background:"rgba(255,255,255,0.7)", borderRadius:8, padding:"8px 12px", border:"1px solid #fde68a" }}>
                            <p style={{ fontSize:11, fontWeight:700, color:"#92400e", margin:"0 0 3px" }}>
                              {lang==="ur"?"آپ کا تبصرہ:":"Your comment:"}
                            </p>
                            <p style={{ fontSize:13, color:"#78350f", margin:0, lineHeight:1.5, fontStyle:"italic" }}>"{review.workerComment}"</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 14px", background:"#f8fafc", borderRadius:12, border:"1.5px dashed #e2e8f0" }}>
                        <div>
                          <p style={{ fontSize:12, fontWeight:600, color:"#94a3b8", margin:0 }}>{t.noRatingYet}</p>
                          <p style={{ fontSize:11, color:"#cbd5e1", margin:"2px 0 0" }}>{lang==="ur"?"اس آجر کو ریٹ کریں":"Rate your experience with this employer"}</p>
                        </div>
                        <button onClick={() => onReRate(job)}
                          style={{ display:"flex", alignItems:"center", gap:5, padding:"8px 14px", borderRadius:10, border:"none", background:"linear-gradient(135deg,#f59e0b,#d97706)", color:"#fff", fontSize:12, fontWeight:700, cursor:"pointer" }}>
                          ⭐ {t.rateNow}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

/* ═══════════════ BROWSE TAB ═══════════════ */
function BrowseTab({ t, lang, userId, onOpenApplyModal, userProfile, onPostAvail }) {
  const [allJobs,setAllJobs]           = useState([]);
  const [filteredJobs,setFilteredJobs] = useState([]);
  const [searchQuery,setSearchQuery]   = useState("");
  const [filtering,setFiltering]       = useState(false);
  const [activeFilters,setActiveFilters] = useState(null);
  const [skillFilterActive,setSkillFilterActive] = useState(true);

  const workerSkill = ((userProfile?.skill||userProfile?.category||userProfile?.trade||"").toLowerCase().trim());

  useEffect(() => {
    fetch(`${API}/api/jobs`).then(r=>r.json()).then(d=>{ const jobs=Array.isArray(d)?d:[]; setAllJobs(jobs); }).catch(()=>{});
  }, []);

  useEffect(() => {
    if (activeFilters) return;
    if (skillFilterActive && workerSkill) {
      setFilteredJobs(allJobs.filter(j => (j.category||j.type||"").toLowerCase().includes(workerSkill)||workerSkill.split(" ").some(w=>(j.category||j.type||j.title||"").toLowerCase().includes(w))||(j.title||"").toLowerCase().includes(workerSkill)));
    } else { setFilteredJobs(allJobs); }
  }, [allJobs, skillFilterActive, workerSkill, activeFilters]);

  const handleAIFilter = async () => {
    if (!searchQuery.trim()) return;
    setFiltering(true);
    try {
      const res = await fetch(`${API}/api/ai/smart-filter`, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({query:searchQuery}) });
      const f = await res.json();
      setActiveFilters(f);
      let r = [...allJobs];
      if (f.category) r=r.filter(j=>(j.category||j.type||"").toLowerCase().includes(f.category.toLowerCase())||(j.title||"").toLowerCase().includes(f.category.toLowerCase()));
      if (f.location)  r=r.filter(j=>(j.location||"").toLowerCase().includes(f.location.toLowerCase()));
      if (f.minBudget>0) r=r.filter(j=>Number(String(j.salary).replace(/[^0-9]/g,""))>=f.minBudget);
      if (f.maxBudget>0) r=r.filter(j=>Number(String(j.salary).replace(/[^0-9]/g,""))<=f.maxBudget);
      if (f.keywords?.length) r=r.filter(j=>f.keywords.some(kw=>(j.title||"").toLowerCase().includes(kw.toLowerCase())||(j.description||"").toLowerCase().includes(kw.toLowerCase())));
      setFilteredJobs(r);
    } catch(e) { console.error(e); }
    setFiltering(false);
  };

  const clearFilters = () => {
    setActiveFilters(null); setSearchQuery("");
    if (skillFilterActive && workerSkill) {
      setFilteredJobs(allJobs.filter(j=>(j.category||j.type||"").toLowerCase().includes(workerSkill)||workerSkill.split(" ").some(w=>(j.category||j.type||j.title||"").toLowerCase().includes(w))));
    } else { setFilteredJobs(allJobs); }
  };

  const toggleSkillFilter = () => { setSkillFilterActive(n => !n); setActiveFilters(null); setSearchQuery(""); };

  return (
    <div style={{ maxWidth:700, margin:"0 auto" }}>
      <ProfileProgress t={t} userProfile={userProfile} onPostAvail={onPostAvail} />

      {workerSkill&&(
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 16px", borderRadius:12, background:skillFilterActive?"#f0fdf4":"#f8fafc", border:`1.5px solid ${skillFilterActive?"#86efac":"#e2e8f0"}`, marginBottom:14, flexWrap:"wrap", gap:8 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:skillFilterActive?"#16a34a":"#94a3b8", flexShrink:0 }} />
            <span style={{ fontSize:13, fontWeight:600, color:skillFilterActive?"#15803d":"#64748b" }}>{skillFilterActive?`${t.skillFilterOn}: ${workerSkill.charAt(0).toUpperCase()+workerSkill.slice(1)}`:t.skillFilterOff}</span>
          </div>
          <button onClick={toggleSkillFilter} style={{ fontSize:12, fontWeight:700, color:skillFilterActive?"#16a34a":"#64748b", background:skillFilterActive?"#dcfce7":"#f1f5f9", border:"none", borderRadius:20, padding:"5px 14px", cursor:"pointer" }}>
            {skillFilterActive?`✕ ${t.removeFilter}`:`✓ ${t.yourSkill}: ${workerSkill}`}
          </button>
        </div>
      )}

      <div style={{ background:"#fff", borderRadius:16, padding:20, marginBottom:20, boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
        <div style={{ display:"flex", gap:10, alignItems:"center" }}>
          <div style={{ flex:1, display:"flex", alignItems:"center", gap:10, background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:12, padding:"10px 14px" }}>
            <SlidersHorizontal size={16} color="#6366f1"/>
            <input value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleAIFilter()} placeholder={t.aiFilterPlaceholder} style={{ flex:1, border:"none", background:"transparent", fontSize:14, outline:"none", color:"#0f172a" }}/>
            {searchQuery&&<button onClick={clearFilters} style={{ background:"none", border:"none", cursor:"pointer", color:"#94a3b8", fontSize:18 }}>×</button>}
          </div>
          <button onClick={handleAIFilter} disabled={filtering||!searchQuery.trim()} style={{ display:"flex", alignItems:"center", gap:6, padding:"11px 18px", borderRadius:12, border:"none", background:filtering||!searchQuery.trim()?"#e2e8f0":"linear-gradient(135deg,#6366f1,#8b5cf6)", color:filtering||!searchQuery.trim()?"#94a3b8":"#fff", fontSize:13, fontWeight:700, cursor:filtering||!searchQuery.trim()?"not-allowed":"pointer" }}>
            <Search size={14}/>{filtering?t.aiFiltering:t.aiFilterBtn}
          </button>
        </div>
        {activeFilters&&(
          <div style={{ marginTop:12, display:"flex", flexWrap:"wrap", gap:8, alignItems:"center" }}>
            <span style={{ fontSize:11, fontWeight:700, color:"#6366f1", textTransform:"uppercase", letterSpacing:".06em" }}>{t.activeFilters}:</span>
            {activeFilters.category&&<FC label={`📂 ${activeFilters.category}`}/>}
            {activeFilters.location&&<FC label={`📍 ${activeFilters.location}`}/>}
            {activeFilters.minBudget>0&&<FC label={`💰 Rs.${activeFilters.minBudget}+`}/>}
            {activeFilters.maxBudget>0&&<FC label={`💰 Max Rs.${activeFilters.maxBudget}`}/>}
            {activeFilters.keywords?.map(k=><FC key={k} label={`🔍 ${k}`}/>)}
            <button onClick={clearFilters} style={{ fontSize:12, color:"#ef4444", fontWeight:600, background:"#fef2f2", border:"none", borderRadius:20, padding:"3px 10px", cursor:"pointer" }}>{t.clearFilters}</button>
          </div>
        )}
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
        {filteredJobs.length===0 ? (
          <div style={{ background:"#fff", borderRadius:16, padding:48, textAlign:"center", color:"#94a3b8" }}>
            <div style={{ fontSize:40, marginBottom:12 }}>🔍</div>
            <p style={{ fontWeight:700, fontSize:15, color:"#475569", marginBottom:4 }}>{t.noJobsFound}</p>
            <p style={{ fontSize:13, marginBottom:skillFilterActive&&workerSkill?16:0 }}>{t.noJobsFoundSub}</p>
            {skillFilterActive&&workerSkill&&<button onClick={toggleSkillFilter} style={{ padding:"9px 20px", borderRadius:10, border:"none", background:"#f1f5f9", color:"#475569", fontSize:13, fontWeight:600, cursor:"pointer" }}>{t.skillFilterOff}</button>}
          </div>
        ) : filteredJobs.map(job => (
          <div key={job._id} style={{ background:"#fff", borderRadius:16, padding:24, boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
              <div><h4 style={{ fontSize:17, fontWeight:700, color:"#0f172a", margin:"0 0 4px" }}>{job.title}</h4><p style={{ fontSize:13, color:"#64748b", margin:0 }}>{job.employer?.name}</p></div>
              <span style={{ background:"#eff6ff", color:"#3b82f6", padding:"4px 12px", borderRadius:20, fontSize:12, fontWeight:600 }}>{job.type||job.category}</span>
            </div>
            <p style={{ fontSize:14, color:"#475569", marginBottom:14, lineHeight:1.5 }}>{job.description}</p>
            <div style={{ display:"flex", gap:16, marginBottom:16, flexWrap:"wrap" }}>
              {job.location&&<span style={{ fontSize:13, color:"#64748b", display:"flex", alignItems:"center", gap:4 }}><MapPin size={14}/>{job.location}</span>}
              {job.salary&&<span style={{ fontSize:13, color:"#64748b", display:"flex", alignItems:"center", gap:4 }}><DollarSign size={14}/>Rs. {job.salary}</span>}
              {job.urgency&&<span style={{ fontSize:12, color:"#f59e0b", fontWeight:600, background:"#fef3c7", padding:"2px 10px", borderRadius:20 }}>⚡ {job.urgency}</span>}
            </div>
            <button onClick={() => onOpenApplyModal(job)} style={{ width:"100%", padding:12, background:"linear-gradient(135deg,#16a34a,#059669)", color:"#fff", border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer" }}>{t.applyNow}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function FC({label}){return <span style={{ background:"#f0f0fe", color:"#4f46e5", fontSize:12, fontWeight:600, padding:"4px 12px", borderRadius:20, border:"1px solid #e0e0fc" }}>{label}</span>;}

/* ═══════════════ JOB REQUEST POPUP ═══════════════ */
function JobRequestPopup({t,request,popupState,popupTimer,counterPrice,setCounterPrice,employerCounter,onAcceptJob,onDeclineJob,onShowCounter,onSendCounter,onAcceptEmployerCounter,onRejectEmployerCounter,onDismiss,onOpenTracker,userId}){
  const timerPct=(popupTimer/30)*100; const isInitial=popupState===null;
  return(
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.65)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:300, padding:24, backdropFilter:"blur(6px)" }}>
      <div style={{ background:"#fff", borderRadius:26, width:"100%", maxWidth:460, boxShadow:"0 32px 80px rgba(0,0,0,0.35)", overflow:"hidden", maxHeight:"92vh", overflowY:"auto" }}>
        {isInitial&&<div style={{ height:5, background:"#e2e8f0", overflow:"hidden" }}><div style={{ height:"100%", width:`${timerPct}%`, transition:"width 1s linear", background:timerPct>33?"linear-gradient(90deg,#22c55e,#16a34a)":"linear-gradient(90deg,#ef4444,#dc2626)" }}/></div>}
        <div style={{ padding:26 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}><div style={{ width:9, height:9, borderRadius:"50%", background:"#22c55e" }}/><span style={{ fontSize:12, fontWeight:800, color:"#16a34a", textTransform:"uppercase", letterSpacing:".08em" }}>{t.newJobRequest}</span></div>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>{isInitial&&<span style={{ fontSize:13, fontWeight:700, color:timerPct>33?"#64748b":"#ef4444" }}>⏱ {popupTimer}s</span>}<button onClick={onDismiss} style={{ background:"#f1f5f9", border:"none", borderRadius:8, padding:7, cursor:"pointer" }}><X size={15} color="#64748b"/></button></div>
          </div>
          <div style={{ background:"linear-gradient(135deg,#0f172a,#1e3a5f)", borderRadius:16, padding:20, marginBottom:16, color:"#fff" }}>
            <h3 style={{ fontSize:18, fontWeight:800, margin:"0 0 8px" }}>{request.title||request.category}</h3>
            {request.description&&<p style={{ fontSize:13, color:"rgba(255,255,255,0.6)", margin:"0 0 14px", lineHeight:1.5 }}>{request.description}</p>}
            {request.workLocation&&<div style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(255,255,255,.08)", borderRadius:8, padding:"5px 10px", width:"fit-content" }}><MapPin size={12} color="#60a5fa"/><span style={{ fontSize:12 }}>{request.workLocation}</span></div>}
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20, padding:"14px 18px", background:"#f0fdf4", borderRadius:12, border:"1.5px solid #86efac" }}>
            <div><div style={{ fontSize:11, color:"#16a34a", fontWeight:700, marginBottom:2 }}>{t.employerOffer}</div><div style={{ fontSize:26, fontWeight:900, color:"#0f172a" }}>Rs. {request.offeredPrice||"Open"}</div></div>
            <div style={{ textAlign:"right" }}><div style={{ fontSize:13, fontWeight:700 }}>{request.employerName}</div><div style={{ fontSize:11, color:"#64748b" }}>{request.category}</div></div>
          </div>
          {isInitial&&<><div style={{ display:"flex", gap:10 }}><button onClick={onAcceptJob} style={{ flex:2, display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"14px", borderRadius:13, border:"none", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", fontSize:15, fontWeight:800, cursor:"pointer" }}><ThumbsUp size={17}/>{t.acceptJob}</button><button onClick={onDeclineJob} style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"14px", borderRadius:13, border:"1.5px solid #fecaca", background:"#fef2f2", color:"#ef4444", fontSize:14, fontWeight:700, cursor:"pointer" }}><ThumbsDown size={15}/>{t.declineJob}</button></div><button onClick={onShowCounter} style={{ width:"100%", marginTop:10, padding:"11px", borderRadius:11, border:"1.5px solid #e2e8f0", background:"#f8fafc", color:"#475569", fontSize:13, fontWeight:600, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}><MessageSquare size={14}/>{t.counterNote}</button></>}
          {popupState==="counter_input"&&<div><label style={{ fontSize:13, fontWeight:700, color:"#374151", display:"block", marginBottom:8 }}>{t.counterOffer}</label><div style={{ display:"flex", gap:8 }}><input type="number" value={counterPrice} onChange={e=>setCounterPrice(e.target.value)} placeholder={t.optionalCounter} autoFocus style={{ flex:1, padding:"13px 14px", borderRadius:11, border:"1.5px solid #e2e8f0", fontSize:14, outline:"none" }}/><button onClick={onSendCounter} style={{ padding:"13px 18px", borderRadius:11, border:"none", background:"linear-gradient(135deg,#3b82f6,#2563eb)", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer" }}>{t.sendCounter}</button></div><button onClick={onDeclineJob} style={{ marginTop:10, width:"100%", padding:"11px", borderRadius:11, border:"1.5px solid #fecaca", background:"#fef2f2", color:"#ef4444", fontSize:13, fontWeight:600, cursor:"pointer" }}>{t.declineJob}</button></div>}
          {popupState==="accepted_waiting"&&<div style={{ textAlign:"center", padding:"8px 0" }}><div style={{ width:52, height:52, border:"4px solid #dcfce7", borderTopColor:"#16a34a", borderRadius:"50%", animation:"spin 1s linear infinite", margin:"0 auto 16px" }}/><p style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>Request Accepted!</p><p style={{ fontSize:13, color:"#64748b" }}>Waiting for employer to confirm you...</p></div>}
          {popupState==="counter_sent"&&<div style={{ textAlign:"center", padding:"8px 0" }}><div style={{ width:52, height:52, border:"4px solid #dbeafe", borderTopColor:"#3b82f6", borderRadius:"50%", animation:"spin 1s linear infinite", margin:"0 auto 16px" }}/><p style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>{t.offerSent}</p><p style={{ fontSize:13, color:"#64748b" }}>{t.yourOfferWas} Rs. {counterPrice}</p></div>}
          {popupState==="counter_received"&&employerCounter&&<div><div style={{ background:"#fef3c7", borderRadius:12, padding:16, marginBottom:14, border:"1.5px solid #fcd34d" }}><div style={{ fontSize:12, fontWeight:700, color:"#d97706", marginBottom:4 }}>{t.counterReceived}</div><div style={{ fontSize:26, fontWeight:900, color:"#0f172a", marginBottom:2 }}>Rs. {employerCounter.price}</div><div style={{ fontSize:12, color:"#64748b" }}>{t.yourOfferWasLabel} Rs. {counterPrice}</div></div><div style={{ display:"flex", gap:10 }}><button onClick={onAcceptEmployerCounter} style={{ flex:1, padding:13, borderRadius:12, border:"none", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", fontSize:14, fontWeight:700, cursor:"pointer" }}>{t.accept} Rs. {employerCounter.price}</button><button onClick={onRejectEmployerCounter} style={{ padding:"13px 16px", borderRadius:12, border:"none", background:"#fef2f2", color:"#ef4444", fontSize:13, fontWeight:600, cursor:"pointer" }}>{t.reject}</button></div></div>}
          {popupState==="confirmed"&&<div style={{ textAlign:"center", padding:"12px 0" }}><div style={{ fontSize:52, marginBottom:10 }}>🎉</div><h3 style={{ fontSize:20, fontWeight:800, color:"#0f172a", marginBottom:6 }}>{t.jobConfirmed}</h3><p style={{ fontSize:13, color:"#64748b", marginBottom:20 }}>{t.jobConfirmedDesc}</p><button onClick={onOpenTracker} style={{ padding:"13px 32px", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", border:"none", borderRadius:12, fontSize:15, fontWeight:700, cursor:"pointer", width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>🔧 {t.viewJobDetails}</button></div>}
          {popupState==="rejected"&&<div style={{ textAlign:"center", padding:"12px 0" }}><div style={{ fontSize:42, marginBottom:10 }}>😔</div><p style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>{t.offerRejected}</p><p style={{ fontSize:13, color:"#64748b", marginBottom:16 }}>{t.offerRejectedDesc}</p><button onClick={onDismiss} style={{ padding:"10px 28px", background:"#f1f5f9", color:"#475569", border:"none", borderRadius:12, fontSize:14, cursor:"pointer" }}>{t.close}</button></div>}
          {popupState==="dismissed"&&<div style={{ textAlign:"center", padding:"12px 0" }}><div style={{ fontSize:36, marginBottom:10 }}>🔄</div><p style={{ fontWeight:700, color:"#0f172a", fontSize:15, marginBottom:4 }}>{t.dismissed}</p><p style={{ fontSize:13, color:"#64748b", marginBottom:16 }}>{t.dismissedDesc}</p><button onClick={onDismiss} style={{ padding:"10px 28px", background:"#f1f5f9", color:"#475569", border:"none", borderRadius:12, fontSize:14, cursor:"pointer" }}>{t.close}</button></div>}
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}