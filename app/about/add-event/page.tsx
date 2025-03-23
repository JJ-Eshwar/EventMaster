"use client"
import React, { FC } from 'react';
import createEvent from "../../../components/addeventpost";
import { useActionState } from "react";
import AddEventForm from "../../../components/addeventform";

interface InitialState {
  message: string | null;
}

const initialState: InitialState = {
  message: null,
};

const AddEvent: FC = () => {
  const [state, formAction] = useActionState(createEvent, initialState);
  return (
    <>
      <AddEventForm action={createEvent} state={state} />
    </>
  );
}

export default AddEvent;