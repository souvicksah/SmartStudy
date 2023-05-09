import emailjs from "emailjs-com";

export function sendEmail(fname, femail) {
  const templateParams = {
    name: fname,
    email: femail,
  };

  emailjs
    .send(
      "service_2g9rrmb",
      "template_65hj5pi",
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
