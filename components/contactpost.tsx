import { db } from "../firebase/clientApp";
import { addDoc, collection } from "firebase/firestore";

interface FormData {
  get: (key: string) => string | null;
}

export default async function PostMessage(formData: FormData): Promise<void> {
  'use server'
  const firstname: string | null = formData.get("firstname");
  const lastname: string | null = formData.get("lastname");
  const phone: string | null = formData.get("phone");
  const email: string | null = formData.get("email");
  const event: string | null = formData.get("event");
  const description: string | null = formData.get("description");

  const Contact_Data = {
    firstname,
    lastname,
    phone,
    email,
    event,
    description,
    createdAt: new Date(),
  };

  let errors: string[] = [];

  if (!firstname || firstname.trim().length === 0) {
    errors.push('First Name is required');
  }
  if (!lastname || lastname.trim().length === 0) {
    errors.push('Last Name is required');
  }
  if (!phone || phone.trim().length === 0) {
    errors.push('Phone Number is required');
  }
  if (!description || description.trim().length === 0) {
    errors.push('Description is required');
  }

  if (!Contact_Data) {
    throw new Error("Retry After Some Time");
  }
  const docRef = await addDoc(collection(db, "Contact Data"), Contact_Data);
}