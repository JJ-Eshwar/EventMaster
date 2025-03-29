"use server";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface EventData {
  created_at: Date;
  organization: string;
  event: string;
  eventdate: Date;
  phone: string;
  email: string;
  shortnote: string;
  description: string;
  firstname: string;
  lastname: string;
  typeofEvent?: string;
  fee: number;
  createdAt: Date;
}

export default async function createEvent(formData: FormData): Promise<{ success: boolean; id?: string; errors?: string[] }> {
  console.log("createEvent function called");
  try {
    const name = formData.get("name") as string;
    const [firstname, lastname] = name.split(" ");

    const Event_Data: Partial<EventData> = {
      organization: formData.get("organization") as string,
      event: formData.get("event") as string,
      eventdate: new Date(formData.get("eventdate") as string),
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      shortnote: formData.get("shortnote") as string,
      typeofEvent: formData.get("typeofEvent") as string || undefined,
      description: formData.get("description") as string,
      firstname: firstname,
      lastname: lastname,
      fee: parseInt(formData.get("fee") as string, 10),
      createdAt: new Date(),
    };

    console.log("Event_Data from form:", Event_Data);

    const errors: string[] = [];
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
    if (!Event_Data.phone) {
      errors.push("Phone is required");
    }
    if (!Event_Data.fee) {
      errors.push("Fee is required");
    }
    if (!Event_Data.firstname) {
        errors.push("First name is required");
    }
    if (!Event_Data.lastname) {
        errors.push("Last name is required");
    }
    
    if (errors.length > 0) {
      console.log("Validation errors:", errors);
      return { success: false, errors };
    }

    const validatedEventData: EventData = Event_Data as EventData;

    console.log("Data being sent to Prisma:", validatedEventData);

    const event = await prisma.event_Data.create({
      data: {
        organization: validatedEventData.organization,
        event: validatedEventData.event,
        eventdate: validatedEventData.eventdate,
        phone: validatedEventData.phone,
        email: validatedEventData.email,
        shortnote: validatedEventData.shortnote,
        typeofEvent: validatedEventData.typeofEvent,
        description: validatedEventData.description,
        firstname: validatedEventData.firstname,
        lastname: validatedEventData.lastname,
        fee: validatedEventData.fee,
        created_at: validatedEventData.created_at,
      },
    });

    console.log("Event created successfully:", event);

    return { success: true, id: event.id.toString() };

  } catch (error) {
    console.error("Error adding event to database:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return {
      success: false,
      errors: [(error as Error).message || "An error occurred while creating the event"]
    };
  } finally {
    await prisma.$disconnect();
  }
}
