"use client";

import React, { FC } from "react";
import { useActionState } from "react";
import AddEventForm from "../../../components/addeventform";
import { addEventAction } from "./action";

interface State {
  message?: {
    success?: boolean;
    errors?: string[];
  };
}

const AddEvent: FC = () => {
  const [state, formAction] = useActionState<State, FormData>(
    addEventAction,
    { message: { success: false, errors: [] } }
  );

  return (
    <>
      <AddEventForm state={state} formAction={formAction} />
    </>
  );
};

export default AddEvent;
