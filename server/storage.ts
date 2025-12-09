import { type MenuItem, type InsertMenuItem, type GalleryImage, type InsertGalleryImage, type Reservation, type InsertReservation, menuItems, galleryImages, reservations } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getAllMenuItems(): Promise<MenuItem[]>;
  getMenuItemById(id: string): Promise<MenuItem | undefined>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  
  getAllGalleryImages(): Promise<GalleryImage[]>;
  getGalleryImagesBySection(section: string): Promise<GalleryImage[]>;
  createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage>;
  
  getAllReservations(): Promise<Reservation[]>;
  getReservationById(id: string): Promise<Reservation | undefined>;
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  updateReservationStatus(id: string, status: string): Promise<Reservation | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getAllMenuItems(): Promise<MenuItem[]> {
    const items = await db.select().from(menuItems).orderBy(menuItems.order);
    return items;
  }

  async getMenuItemById(id: string): Promise<MenuItem | undefined> {
    const [item] = await db.select().from(menuItems).where(eq(menuItems.id, id));
    return item || undefined;
  }

  async createMenuItem(insertItem: InsertMenuItem): Promise<MenuItem> {
    const [item] = await db.insert(menuItems).values(insertItem).returning();
    return item;
  }

  async getAllGalleryImages(): Promise<GalleryImage[]> {
    const images = await db.select().from(galleryImages).orderBy(galleryImages.order);
    return images;
  }

  async getGalleryImagesBySection(section: string): Promise<GalleryImage[]> {
    const images = await db.select().from(galleryImages).where(eq(galleryImages.section, section)).orderBy(galleryImages.order);
    return images;
  }

  async createGalleryImage(insertImage: InsertGalleryImage): Promise<GalleryImage> {
    const [image] = await db.insert(galleryImages).values(insertImage).returning();
    return image;
  }

  async getAllReservations(): Promise<Reservation[]> {
    const allReservations = await db.select().from(reservations).orderBy(desc(reservations.createdAt));
    return allReservations;
  }

  async getReservationById(id: string): Promise<Reservation | undefined> {
    const [reservation] = await db.select().from(reservations).where(eq(reservations.id, id));
    return reservation || undefined;
  }

  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const [reservation] = await db.insert(reservations).values(insertReservation).returning();
    return reservation;
  }

  async updateReservationStatus(id: string, status: string): Promise<Reservation | undefined> {
    const [reservation] = await db.update(reservations).set({ status }).where(eq(reservations.id, id)).returning();
    return reservation || undefined;
  }
}

export const storage = new DatabaseStorage();
