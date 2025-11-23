const express = require("express");
const router = express.Router();
const supabase = require("../db/supabase");

router.get("/", async (req, res) => {
  try {
    // Try to fetch from DB first
    const { data, error } = await supabase.from("proyectos").select("*");

    if (error) {
      throw error;
    }

    // Map DB fields to frontend expected format
    const projects = data.map((p) => ({
      ...p,
      image: p.despues_url, // Map for frontend compatibility
    }));

    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Error fetching projects" });
  }
});

module.exports = router;
