import { Fragment } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import './form.css'

const ValidationForm = () => {
  return (
    <div className="container">
      <Fragment>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email format")
              .required("Email is required"),
            phone: Yup.string()
              .matches(/^[0-9]{10}$/, "Invalid phone number")
              .required("Phone number is required"),
            address: Yup.string().required("Address is required"),
            password: Yup.string()
              .required("Password is required")
              .min(8, "Password must be at least 8 characters"),
            confirmPassword: Yup.string()
              .required("Confirm Password is required")
              .oneOf([Yup.ref("password"), null], "Passwords must match"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <h1>Validation Form</h1>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && touched.name && (
                  <div className="error">{errors.name}</div>
                )}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                {errors.phone && touched.phone && (
                  <div className="error">{errors.phone}</div>
                )}
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                />
                {errors.address && touched.address && (
                  <div className="error">{errors.address}</div>
                )}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="error">{errors.confirmPassword}</div>
                )}
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </Fragment>
    </div>
  );
};

export default ValidationForm;
