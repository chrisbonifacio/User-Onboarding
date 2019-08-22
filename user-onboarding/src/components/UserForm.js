import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import Users from "./Users";
import { Form, Field, withFormik } from "formik";

const UserForm = ({ errors, touched, values, status }) => {
  // State
  const [users, setUsers] = useState([]);

  // Side Effect
  useEffect(() => {
    // checks for POST request
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  // Form
  return (
    <>
      <Form className="form">
        <h1>Sign Up</h1>

        {/* UserName */}
        <Field
          className="field"
          type="text"
          name="username"
          placeholder="username"
        />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}

        {/* Email */}
        <Field
          className="field"
          type="email"
          name="email"
          placeholder="email"
        />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        {/* Password */}
        <Field
          className="field"
          type="password"
          name="password"
          placeholder="password"
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        {/* Terms of Service */}
        <label htmlFor="terms">
          I agree to the Terms of Service
          <Field className="field" type="checkbox" name="terms" />
        </label>
        {touched.terms && errors.terms && (
          <p className="error">{errors.terms}</p>
        )}

        {/* Submit Button */}
        <button type="submit">Register</button>
      </Form>

      <Users users={users} />
    </>
  );
};

// Formik enhancement
const FormikForm = withFormik({
  mapPropsToValues({ username, email, password, terms }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },
  // Form Validation and Error Messaging
  validationSchema: yup.object().shape({
    username: yup.string().required("Please enter a username"),
    email: yup
      .string()
      .email()
      .required("Please enter a valid email"),
    password: yup
      .string()
      .min(6)
      .required("Please enter a password"),
    terms: yup
      .boolean()
      .required("In order to register, you must accept the terms of service")
  }),
  // Submit Handler
  handleSubmit(values, { setStatus }) {
    // POST Request
    axios
      // values is the object with our data in it
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

// Export
export default FormikForm;
