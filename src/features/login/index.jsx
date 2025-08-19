import React, { useState } from "react";
import { validateEmail } from "../../utils/validation";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleEmailValidation = (event) => {
  //     const { value } = event.target;
  //     setErrors({ ...errors, email: validateEmail(value) });
  //   };
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailNotValid = validateEmail(form.email);
    if (emailNotValid) {
      setErrors({ ...errors, email: emailNotValid });
      return;
    }
    setErrors({ ...errors, email: "" });
    console.log(form);
  };
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              //   onBlur={handleEmailValidation}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
