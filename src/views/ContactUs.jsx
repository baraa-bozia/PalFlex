import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qfx3vg8",
        "template_stl3uqt",
        form.current,
        "_DR-YK4OpGqh-IdbD"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-lime-200 w-[1350px] h-[600px]">

    {/* <StyledContactForm > */}
      <form className="ml-[500px] flex flex-col" ref={form} onSubmit={sendEmail}>
        <label className="mt-16">Your Name</label>
        <input className="mb-4 border rounded p-1 w-[400px] focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent " type="text" name="user_name" />
        <label>Your Email</label>
        <input className="mb-4 border rounded p-1 w-[400px] focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent " type="email" name="user_email" />
        <label>Message</label>
        <textarea className="mb-4 border rounded p-6 w-[400px] focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent " name="message" />
        <input  className="transition ease-in 50ms hover:cursor-pointer hover:bg-orange-600 hover:text-white p-2 w-[400px] hover:cursor mt-4 mr-96 border rounded text-black border-orange-600" type="submit" value="Send" />
      </form>
    {/* </StyledContactForm> */}
    </div>

  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;