import emailjs from "@emailjs/browser";
import env from "react-dotenv";

export const sendSubmissionEmail = (to_name, to_email, message) => {
  var formData = {
    from_name: "CBIT Admin",
    to_email: to_email,
    to_name: to_name,
    message: message,
  };

  emailjs
    .send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID1,
      formData,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

export const sendAssignmentEmail = (to_name, to_email, teacher, assignmentname, totalmarks, deadline) => {
  var formData = {
    teacher: teacher,
    to_email: to_email,
    to_name: to_name,
    assignmentname: assignmentname,
    createdby: teacher,
    totalmarks: totalmarks,
    deadline: deadline
  };

  emailjs
    .send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID2,
      formData,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

