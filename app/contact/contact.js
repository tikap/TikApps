"use client";

import { useState } from "react";

import SimpleCard from "@/components/content/SimpleCard.js";
import ContactForm from "./ContactForm.js";

// Main component
export default function Contact() {
  // States
  const emailState = Object.freeze({
    Idle: "idle",
    Sending: "sending",
    Done: "done",
    Failed: "failed",
  });
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [sendCopyChecked, setSendCopyChecked] = useState(false);
  const [currentEmailState, setCurrentEmailState] = useState(emailState.Idle);
  const [errorMessage, setErrorMessage] = useState("");

  // Input handlers
  function handleNameValueChange(event) {
    setNameInput(event.target.value);
  }

  function handleEmailValueChange(event) {
    setEmailInput(event.target.value);
  }

  function handleMessageValueChange(event) {
    setMessageInput(event.target.value);
  }

  function handleSendCopyCheckedChange(event) {
    event.target.checked ? setSendCopyChecked(true) : setSendCopyChecked(false);
  }

  // User action handlers
  function handleContactSend(e) {
    setCurrentEmailState(emailState.Sending);
    e.preventDefault();

    fetch("/api/emailer", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInput,
        email: emailInput,
        message: messageInput,
        sendCopy: sendCopyChecked,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          setCurrentEmailState(emailState.Done);
        } else {
          setErrorMessage(response.status + ": " + response.statusText);
          setCurrentEmailState(emailState.Failed);
        }
      })
      .catch((error) => {
        setErrorMessage(error);
        setCurrentEmailState(emailState.Failed);
      });
  }

  const contactHeader = (
    <>
      <h4 className="mb-6 text-xl font-semibold">Contact Me</h4>
      <p>
        If you have new tool ideas, feature improvement suggestions, bug reports
        and any other queries, please contact me using the email form below:
      </p>
    </>
  );

  // Final
  switch (currentEmailState) {
    case emailState.Sending:
      return <SimpleCard title="Submitting form" text="Please wait..." />;
    case emailState.Done:
      if (sendCopyChecked) {
        return (
          <SimpleCard
            title="Form submitted successfully"
            text="Thank you for contacting! A copy has been sent to your email address (this may take a few minutes to reach your inbox)."
          />
        );
      } else {
        return (
          <SimpleCard
            title="Form submitted successfully"
            text="Thank you for contacting!"
          />
        );
      }
    case emailState.Failed:
      return <SimpleCard title="Form submission failed" text={errorMessage} />;
    case emailState.Idle:
    default:
      return (
        <>
          {contactHeader}
          <ContactForm
            nameChangeHandler={handleNameValueChange}
            emailChangeHandler={handleEmailValueChange}
            messageChangeHandler={handleMessageValueChange}
            sendCopyCheckChangeHandler={handleSendCopyCheckedChange}
            contactSendHandler={handleContactSend}
          />
        </>
      );
  }
}
