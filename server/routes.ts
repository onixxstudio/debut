import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMenuItemSchema, insertGalleryImageSchema, insertReservationSchema, reservationStatusEnum } from "@shared/schema";
import { sendReservationNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/menu-items", async (_req, res) => {
    try {
      const items = await storage.getAllMenuItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch menu items" });
    }
  });

  app.get("/api/menu-items/:id", async (req, res) => {
    try {
      const item = await storage.getMenuItemById(req.params.id);
      if (!item) {
        return res.status(404).json({ error: "Menu item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch menu item" });
    }
  });

  app.post("/api/menu-items", async (req, res) => {
    try {
      const validatedData = insertMenuItemSchema.parse(req.body);
      const item = await storage.createMenuItem(validatedData);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ error: "Invalid menu item data" });
    }
  });

  app.get("/api/gallery-images", async (_req, res) => {
    try {
      const images = await storage.getAllGalleryImages();
      res.json(images);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch gallery images" });
    }
  });

  app.get("/api/gallery-images/:section", async (req, res) => {
    try {
      const images = await storage.getGalleryImagesBySection(req.params.section);
      res.json(images);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch gallery images" });
    }
  });

  app.post("/api/gallery-images", async (req, res) => {
    try {
      const validatedData = insertGalleryImageSchema.parse(req.body);
      const image = await storage.createGalleryImage(validatedData);
      res.status(201).json(image);
    } catch (error) {
      res.status(400).json({ error: "Invalid gallery image data" });
    }
  });

  app.post("/api/reservations", async (req, res) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      const reservation = await storage.createReservation(validatedData);
      
      try {
        await sendReservationNotification({
          name: reservation.name,
          email: reservation.email,
          phone: reservation.phone,
          date: reservation.date,
          time: reservation.time,
          guests: reservation.guests,
          message: reservation.message,
        });
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
      }
      
      res.status(201).json({
        message: "Reservation request received successfully",
        reservation,
      });
    } catch (error) {
      res.status(400).json({ error: "Invalid reservation data" });
    }
  });

  app.post("/api/admin/verify", async (req, res) => {
    try {
      const { password } = req.body;
      const adminPassword = process.env.ADMIN_PASSWORD;

      if (!adminPassword) {
        return res.status(500).json({ error: "Admin password not configured" });
      }

      if (password === adminPassword) {
        res.json({ success: true });
      } else {
        res.status(401).json({ error: "Invalid password" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to verify password" });
    }
  });

  app.get("/api/reservations", async (_req, res) => {
    try {
      const allReservations = await storage.getAllReservations();
      res.json(allReservations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reservations" });
    }
  });

  app.patch("/api/reservations/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      const validatedStatus = reservationStatusEnum.parse(status);
      const reservation = await storage.updateReservationStatus(id, validatedStatus);
      
      if (!reservation) {
        return res.status(404).json({ error: "Reservation not found" });
      }

      res.json(reservation);
    } catch (error) {
      res.status(400).json({ error: "Invalid status value" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
