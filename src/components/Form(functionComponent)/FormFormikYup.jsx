import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormLabel } from "./FormFormikYup.styled";
import { FormUser } from "./FormFormikYup.styled";

export const FormFormikYup = () => {
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
  };
  const validationSchemaUser = Yup.object({
    firstName: Yup.string().max(15).required(),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6).max(15).required(),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      resetForm();
      setSubmitting(false);
    }, 5000);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchemaUser}
    >
      <FormUser>
        <FormLabel>
          Name
          <Field type="text" name="firstName" />
          <ErrorMessage name="firstName" />
        </FormLabel>

        <FormLabel>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
        </FormLabel>
        <FormLabel>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </FormLabel>
        <FormLabel>
          <Field type="radio" name="experience" value="junior" />
          Junior
        </FormLabel>
        <FormLabel>
          <Field type="radio" name="experience" value="middle" />
          Middle
        </FormLabel>
        <FormLabel>
          <Field type="radio" name="experience" value="senior" />
          Senior
        </FormLabel>
        <FormLabel>
          <Field type="checkbox" name="agree" />I agree with all rules
        </FormLabel>
        <button type="submit">Submit</button>
      </FormUser>
    </Formik>
  );
};
