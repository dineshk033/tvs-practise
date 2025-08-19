import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Pattern not matching"
    ),
});
const LoginReactHookForm = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
  console.log(formState);
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${
                formState.errors.email ? "border-danger" : ""
              }`}
              id="email"
              placeholder="Enter email"
              {...register("email")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              // className="form-control"
              id="password"
              placeholder="Enter password"
              className={`form-control ${
                formState.errors.password ? "border-danger" : ""
              }`}
              {...register("password")}
            />
            {formState.errors.password && (
              <small className="text-danger mt-1">
                {formState.errors.password.message}
              </small>
            )}
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

export default LoginReactHookForm;
