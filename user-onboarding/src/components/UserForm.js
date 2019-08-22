import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Form, Field, withFormik, ErrorMessage } from "formik";

const UserForm = ({ errors, touched, values, status }) => {
  // State
  const [users, setUsers] = useState([]);

  // Form
  return (
    <Form className="form">
      <h1>Sign Up</h1>
      <Field
        className="field"
        type="text"
        name="username"
        placeholder="username"
      />
      {touched.username && errors.username && (
        <p className="error">{errors.username}</p>
      )}
      <Field className="field" type="email" name="email" placeholder="email" />
      <Field
        className="field"
        type="password"
        name="password"
        placeholder="password"
      />
      <label htmlFor="terms">
        I agree to the Terms of Service
        <Field className="field" type="checkbox" name="terms" />
      </label>
      <button type="submit">Register</button>
    </Form>
  );
};

// Form Validation and Error Messaging
const FormikForm = withFormik({
  mapPropsToValues({ username, email, password, terms }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required("Please enter a username"),
    email: yup
      .string()
      .email()
      .required("Please enter a valid email"),
    password: yup
      .string()
      .min(6)
      .required("Please enter a password"),
    tos: yup.boolean()
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(response => {
        setStatus(response.data);
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(UserForm);

// POST Request

// Display Returned Data to Screen

// Export
export default FormikForm;
