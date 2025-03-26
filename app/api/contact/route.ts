import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

interface ContactData {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  event: string;
  description: string;
}

export async function POST(req: Request) {
  console.log("API route /api/contact hit!");
  try {
    const contactData: ContactData = await req.json();
    console.log("Data received by API:", contactData);

    const contact = await prisma.contact_Data.create({
      data: contactData,
    });

    console.log("Contact created successfully:", contact);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ success: false, error: (error as Error).message || "An error occurred" }, { status: 500 });
  }
}
