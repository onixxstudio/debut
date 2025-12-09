import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const menuItems = pgTable("menu_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  order: integer("order").notNull().default(0),
});

export const galleryImages = pgTable("gallery_images", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  section: text("section").notNull(),
  imageUrl: text("image_url").notNull(),
  alt: text("alt").notNull(),
  order: integer("order").notNull().default(0),
});

export const reservations = pgTable("reservations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  date: text("date").notNull(),
  time: text("time").notNull(),
  guests: text("guests").notNull(),
  message: text("message"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({
  id: true,
});

export const insertGalleryImageSchema = createInsertSchema(galleryImages).omit({
  id: true,
});

export const insertReservationSchema = createInsertSchema(reservations).omit({
  id: true,
  createdAt: true,
});

export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
export type MenuItem = typeof menuItems.$inferSelect;

export type InsertGalleryImage = z.infer<typeof insertGalleryImageSchema>;
export type GalleryImage = typeof galleryImages.$inferSelect;

export type InsertReservation = z.infer<typeof insertReservationSchema>;
export type Reservation = typeof reservations.$inferSelect;

export const reservationStatusEnum = z.enum(["pending", "confirmed", "completed", "cancelled"]);

export const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  guests: z.string().min(1, "Number of guests is required"),
  message: z.string().optional().or(z.literal("")),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;
export type ReservationStatus = z.infer<typeof reservationStatusEnum>;
