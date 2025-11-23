const express = require("express");
const router = express.Router();
const supabase = require("../db/supabase");

router.get("/", async (req, res) => {
  try {
    // Try to fetch from DB first
    const { data, error } = await supabase.from("proyectos").select("*");

    if (error || !data || data.length === 0) {
      // Fallback to hardcoded data if DB is empty or error (for initial setup)
      // This ensures the frontend still works while we transition
      const hardcodedProjects = [
        {
          id: 1,
          title: "Centro Comercial Andares",
          location: "Guadalajara, JAL",
          date: "2024",
          category: "Comercial",
          // Note: Images are still handled by frontend assets for now
        },
        // ... add more if needed
      ];
      return res.json(hardcodedProjects);
    }

    res.json(data);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Error fetching projects" });
  }
});

module.exports = router;
