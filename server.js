const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:4321",
      "http://localhost:3000",
      "https://instalacionesgarciasfronted.vercel.app",
      "https://instalaciones-garcias.com",
      "https://www.instalaciones-garcias.com",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const simuladorRoutes = require("./routes/simulador");
const leadsRoutes = require("./routes/leads");
const proyectosRoutes = require("./routes/proyectos");

app.use("/api/simulador", simuladorRoutes);
app.use("/api/leads", leadsRoutes);
app.use("/api/proyectos", proyectosRoutes);

// Health Check endpoint for monitoring services
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Instalaciones Garcias Backend API",
    version: "1.0.0",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    error: "Internal server error",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});
