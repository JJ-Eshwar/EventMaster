"use server"
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server'


const prisma = new PrismaClient();

export async function POST() {
  try {
    
    
     return NextResponse.json({ message: "Message sent successfully!" }); // Send a JSON response

  } catch (error) {
    console.error("Error adding contact data:", error);
    return NextResponse.json({ error: "Failed to send message." }, {status: 500}); // Send a 500 status code for errors
  } finally {
    await prisma.$disconnect();  // Important: Disconnect Prisma Client
  }
}
