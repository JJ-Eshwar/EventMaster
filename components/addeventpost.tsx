"use server";

import { redirect } from "next/navigation";
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();


interface EventData {
  organization: string;
  event: string;
  eventdate: string;
  imageUrl: string;
  phone: string;
  email: string;
  shortnote: string;
  description: string;
  name: string;
  fee: string;
  createdAt: Date;
}

export default async function createEvent(formData: FormData): Promise<{ success: boolean; id?: string; errors?: string[] }> {
  try {
    const Event_Data: EventData = {
      organization: formData.get("organization") as string,
      event: formData.get("event") as string,
      eventdate: formData.get("eventdate") as string,
      imageUrl: formData.get("imageUrl") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      shortnote: formData.get("shortnote") as string,
      description: formData.get("description") as string,
      name: formData.get("name") as string,
      fee: formData.get("fee") as string,
      createdAt: new Date(),
    };

    // Validate required fields
    let errors: string[] = [];
    if (!Event_Data.organization || Event_Data.organization.trim().length === 0) {
      errors.push("Organization is required");
    }
    if (!Event_Data.event) {
      errors.push("Event name is required");
    }
    if (!Event_Data.eventdate) {
      errors.push("Event date is required");
    }
    if (!Event_Data.email) {
      errors.push("Email is required");
    }

    if (errors.length > 0) {
      return { success: false, errors };
    }


    const event = await prisma.event_Data.create({
      data: Event_Data,
    });

    revalidatePath("/about/upcoming-events");

    return { success: true, id: event.id.toString() };

  } catch (error) {
    console.error("Error adding event to database:", error);
    return {
      success: false,
      errors: [(error as Error).message || "An error occurred while creating the event"]
    };
  } finally {
    await prisma.$disconnect();
  }
}
