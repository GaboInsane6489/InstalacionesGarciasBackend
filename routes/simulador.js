const express = require("express");
const router = express.Router();

// Service configuration with rates
const services = [
  { id: "drywall", name: "Drywall y Tablaroca", rate: 0.12 },
  { id: "remodelacion", name: "Remodelación General", rate: 0.18 },
  { id: "construccion", name: "Construcción Obra Civil", rate: 0.25 },
];

/**
 * POST /api/simulador/tiempo
 * Calculate estimated project duration
 */
router.post("/tiempo", (req, res) => {
  try {
    const { area, serviceType, finish, painting } = req.body;

    // Validation
    if (!area || area <= 0) {
      return res.status(400).json({ error: "El área debe ser mayor a 0" });
    }

    if (!serviceType) {
      return res.status(400).json({ error: "Tipo de servicio es requerido" });
    }

    const service = services.find((s) => s.id === serviceType);
    if (!service) {
      return res.status(400).json({ error: "Tipo de servicio inválido" });
    }

    // Calculate base days
    let days = parseFloat(area) * service.rate;

    // Apply modifiers
    if (finish === "premium") {
      days *= 1.3;
    }
    if (painting) {
      days += 1;
    }

    // Round up to nearest 0.5
    days = Math.ceil(days * 2) / 2;
    if (days < 1) days = 1;

    res.json({
      days,
      serviceName: service.name,
      area: parseFloat(area),
      finish: finish || "standard",
      painting: !!painting,
    });
  } catch (error) {
    console.error("Error calculating time:", error);
    res.status(500).json({ error: "Error al calcular el tiempo" });
  }
});

/**
 * POST /api/simulador/materiales
 * Calculate estimated materials needed
 */
router.post("/materiales", (req, res) => {
  try {
    const { area, serviceType } = req.body;
    const m2 = parseFloat(area);

    // Validation
    if (!m2 || m2 <= 0) {
      return res.status(400).json({ error: "El área debe ser mayor a 0" });
    }

    if (!serviceType) {
      return res.status(400).json({ error: "Tipo de servicio es requerido" });
    }

    let materials = [];

    // Calculate materials based on service type
    switch (serviceType) {
      case "drywall":
        materials = [
          { name: "Placas de Yeso", qty: Math.ceil(m2 / 2.88), unit: "pzas" },
          { name: "Postes Metálicos", qty: Math.ceil(m2 * 1.5), unit: "pzas" },
          { name: "Tornillería", qty: Math.ceil(m2 * 30), unit: "pzas" },
          { name: "Compuesto (Masilla)", qty: Math.ceil(m2 * 0.8), unit: "kg" },
        ];
        break;

      case "remodelacion":
        materials = [
          { name: "Recubrimiento", qty: Math.ceil(m2 * 1.1), unit: "m²" },
          { name: "Adhesivo", qty: Math.ceil(m2 * 0.25), unit: "bultos" },
          { name: "Boquilla", qty: Math.ceil(m2 * 0.1), unit: "kg" },
        ];
        break;

      case "construccion":
        materials = [
          { name: "Cemento", qty: Math.ceil(m2 * 0.5), unit: "bultos" },
          { name: "Arena", qty: (m2 * 0.08).toFixed(1), unit: "m³" },
          { name: "Grava", qty: (m2 * 0.09).toFixed(1), unit: "m³" },
        ];
        break;

      default:
        return res.status(400).json({ error: "Tipo de servicio inválido" });
    }

    res.json({
      materials,
      area: m2,
      serviceType,
    });
  } catch (error) {
    console.error("Error calculating materials:", error);
    res.status(500).json({ error: "Error al calcular materiales" });
  }
});

module.exports = router;
