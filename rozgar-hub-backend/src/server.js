require("dotenv").config();
const express    = require("express");
const cors       = require("cors");
const helmet     = require("helmet");
const http       = require("http");
const { Server } = require("socket.io");
const connectDB  = require("./config/db");

// ─────────────────────────────────────────────────────────────
// Models ko sabse pehle load kar rahe hain
// ─────────────────────────────────────────────────────────────
require("./models/User");
require("./models/Job");
require("./models/Application");
require("./models/JobTitle");

const app    = express();
const server = http.createServer(app);

// Socket.io Setup
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://rozgar-hub-fyp-pearl.vercel.app",
      "https://rozgar-hub-9ywqpotnw-mahrukh-bashirs-projects.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Socket Handler
require("./socket/socketHandler")(io);

// Database Connection + auto-seed job titles
connectDB().then(async () => {
  try {
    const JobTitle = require("./models/JobTitle");
    const count = await JobTitle.countDocuments();
    if (count === 0) {
      const { seed } = require("./controllers/jobTitle.controller");
      const JobTitleCtrl = require("./controllers/jobTitle.controller");
      const fakeRes = { json: (d) => console.log("✅ Job titles seeded:", d.message) };
      await JobTitleCtrl.seed({}, fakeRes);
    }
  } catch (e) {
    console.error("Job title seed error:", e.message);
  }
}).catch(() => {});

// Security
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
}));

// CORS
const allowedOrigins = [
  "http://localhost:3000",
  "https://rozgar-hub-fyp-pearl.vercel.app",
  "https://rozgar-hub-9ywqpotnw-mahrukh-bashirs-projects.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
}));

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth",          require("./routes/auth.routes"));
app.use("/api/jobs",          require("./routes/job.routes"));
app.use("/api/workers",       require("./routes/worker.routes"));
app.use("/api/chat",          require("./routes/chat.routes"));
app.use("/api/ai",            require("./routes/ai.routes"));
app.use("/api/admin",         require("./routes/admin.routes"));
app.use("/api/job-requests",  require("./routes/jobRequest.routes"));
app.use("/api/job-titles",    require("./routes/jobTitle.routes"));
app.use("/api/notifications", require("./routes/notification.routes"));

// Health Check
app.get("/", (req, res) => {
  res.send("Rozgar Backend Running");
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    error: err.message || "Internal server error",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`🔌 Socket.io is ready ✅`);
});
