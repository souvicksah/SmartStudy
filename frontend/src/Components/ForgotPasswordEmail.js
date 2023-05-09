import React from "react";
import emailjs from "emailjs-com";

function ForgotPasswordEmail(fname, femail, fpassword) {
  const templateParams = {
    name: fname,
    email: femail,
    password: fpassword,
  };
  console.log(templateParams);

  emailjs
    .send(
      "service_2g9rrmb",
      "template_qaxmayo",
      templateParams,
      "EpWuoRn3f61UyaP7v"
    )
    .then(
      (response) => {
        console.log("Email sent!", response.status, response.text);
      },
      (error) => {
        console.error("Error sending email:", error);
      }
    );
}

export default ForgotPasswordEmail;
