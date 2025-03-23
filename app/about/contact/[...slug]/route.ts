// app/about/contact/[...slug]/route.ts
"use server"
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function POST(req: Request) { // Named export!
  try {
    const data = await req.json();
    console.log("Data received on server:", data);

    // Validation (important!):
    if (!data || !data.firstname || !data.lastname || !data.email || !data.description) {
      return new Response("Missing required fields", { status: 400 });
    }

    const query = prisma.$queryRaw`INSERT INTO "contact_Data" (firstname, lastname, email, phone, event, description) VALUES (${data.firstname}, ${data.lastname}, ${data.email}, ${data.phone}, ${data.event}, ${data.description}) RETURNING *`;
    console.log("Generated SQL:", query); // Log the generated SQL (query.sql, not just query)

    const contact = await query;

    if (!contact) {
        // ... handle the error ...
    } else if ((contact as any[]).length === 0 || Object.keys(contact).length === 0){
        // ... handle the error ...
    } else {
        // Success: Log the created contact for verification
        console.log("Contact created successfully:", contact);
        return new Response("Contact created successfully", { status: 201 });
    }
  } catch (error) {
    // ... (handle errors as before)
  } finally {
    await prisma.$disconnect();
  }
}
