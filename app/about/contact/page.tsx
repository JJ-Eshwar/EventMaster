import Contact_Details from "../../../components/Contactdetails";
import Contact_Form from "../../../components/contactform";
import Post from "./[...slug]/route";
import React, { FC } from 'react';

const Contactus: FC = () => {
  return (
    <>
      <Contact_Form  />
      <Contact_Details />
    </>
  );
}

export default Contactus;