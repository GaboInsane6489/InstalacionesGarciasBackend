const express = require("express");
const router = express.Router();
const supabase = require("../db/supabase");

router.post("/", async (req, res) => {
  const { nombre, telefono, email, tipo_servicio, m2, urgencia, mensaje } =
    req.body;

  try {
    const { data, error } = await supabase
      .from("leads")
      .insert([
        { nombre, telefono, email, tipo_servicio, m2, urgencia, mensaje },
      ]);

    if (error) throw error;

    res.status(201).json({ message: "Lead created successfully", data });
  } catch (error) {
    console.error("Error creating lead:", error);
    res.status(500).json({ error: "Error saving lead" });
  }
});

module.exports = router;
