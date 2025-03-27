"use server";

import createEvent from "../../../components/addeventpost";
import { revalidatePath } from "next/cache";

interface State {
  message?: {
    success?: boolean;
    errors?: string[];
  };
}

export async function addEventAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const result = await createEvent(formData);

  if (result.success) {
    revalidatePath("/about/add-event");
    return {
      message: {
        success: true,
      },
    };
  } else {
    return {
      message: {
        success: false,
        errors: result.errors,
      },
    };
  }
}
