import { Formik, Form, ErrorMessage, Field } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

const Contact = () => {
  useEffect(() => {
    console.log("Shivang Sharma");
  }, []);
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must be 3 characters or more")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.number()
          .min(10, "Invalid phone number")
          .max(10, "Invalid phone number")
          .required("Required"),
        message: Yup.string()
          .min(1, "Write your message")
          .required("Write your message"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}
    >
      <Form className="mx-14 my-14">
        <label className="flex mb-1 font-semibold text-lg" htmlFor="name">
          Name
        </label>

        <Field
          className="mb-4 p-1 h-8 w-1/2 border-solid border-black border-2"
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
        />

        <div className="flex text-red-500 p-0">
          <ErrorMessage name="name" />
        </div>

        <label className="flex mb-1 font-semibold text-lg" htmlFor="email">
          Email
        </label>

        <Field
          className="mb-4 p-1 h-8 w-1/2 border-solid border-black border-2"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />

        <div className="flex text-red-500">
          <ErrorMessage name="email" />
        </div>

        <label className="flex mb-1 font-semibold text-lg" htmlFor="phone">
          Phone Number
        </label>

        <Field
          className="mb-4 p-1 h-8 w-1/2 border-solid border-black border-2"
          id="phone"
          name="phone"
          type="text"
          placeholder="Enter your phone number"
        />

        <div className="flex text-red-500">
          <ErrorMessage name="phone" />
        </div>

        <label className="flex mb-1 font-semibold text-lg" htmlFor="message">
          Message
        </label>

        <Field
          as="textarea"
          className="mb-4 p-1 w-1/2 border-solid border-black border-2"
          id="message"
          name="message"
          type="text"
          placeholder="Write your message"
        />
        <div className="flex text-red-500">
          <ErrorMessage name="message" />
        </div>

        <button
          className="p-2 flex font-bold rounded-md border-2 border-gray-500 bg-slate-400 text-white"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default Contact;
