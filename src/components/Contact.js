import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const Contact = () => {
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
      <Form className="contact-form">
        <label className="contact-label" htmlFor="name">
          Name
        </label>

        <Field
          className="contact-input"
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
        />

        <div className="contact-form-error">
          <ErrorMessage name="name" />
        </div>

        <label className="contact-label" htmlFor="email">
          Email
        </label>

        <Field
          className="contact-input"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />

        <div className="contact-form-error">
          <ErrorMessage name="email" />
        </div>

        <label className="contact-label" htmlFor="phone">
          Phone Number
        </label>

        <Field
          className="contact-input"
          id="phone"
          name="phone"
          type="text"
          placeholder="Enter your phone number"
        />

        <div className="contact-form-error">
          <ErrorMessage name="phone" />
        </div>

        <label className="contact-label" htmlFor="message">
          Message
        </label>

        <Field
          as="textarea"
          className="contact-textarea"
          id="message"
          name="message"
          type="text"
          placeholder="Write your message"
        />
        <div className="contact-form-error">
          <ErrorMessage name="message" />
        </div>

        <button className="contact-button" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default Contact;
