import React, { Fragment } from "react";
import { useForm } from "hooks";

import "./FormValidation.scss";

const states = {
  AN: "Andaman and Nicobar Islands",
  AP: "Andhra Pradesh",
  AR: "Arunachal Pradesh",
  AS: "Assam",
  BR: "Bihar",
  CG: "Chandigarh",
  CH: "Chhattisgarh",
  DN: "Dadra and Nagar Haveli",
  DD: "Daman and Diu",
  DL: "Delhi",
  GA: "Goa",
  GJ: "Gujarat",
  HR: "Haryana",
  HP: "Himachal Pradesh",
  JK: "Jammu and Kashmir",
  JH: "Jharkhand",
  KA: "Karnataka",
  KL: "Kerala",
  LA: "Ladakh",
  LD: "Lakshadweep",
  MP: "Madhya Pradesh",
  MH: "Maharashtra",
  MN: "Manipur",
  ML: "Meghalaya",
  MZ: "Mizoram",
  NL: "Nagaland",
  OR: "Odisha",
  PY: "Puducherry",
  PB: "Punjab",
  RJ: "Rajasthan",
  SK: "Sikkim",
  TN: "Tamil Nadu",
  TS: "Telangana",
  TR: "Tripura",
  UP: "Uttar Pradesh",
  UK: "Uttarakhand",
  WB: "West Bengal",
};

const FormValidationPage = () => {
  const { errors, register, handleSubmit, reset, getValue } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    // reset();
  };

  const ErrorMessage = ({ error, message }) => {
    if (!error) return null;
    return error && <span className="error-msg">{message[error.type]}</span>;
  };

  console.log(errors);

  return (
    <Fragment>
      <h1>Form Validation</h1>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            name="userName"
            ref={register({ required: true })}
            autoComplete="off"
          />
          <ErrorMessage
            error={errors?.userName}
            message={{ required: "Please enter username" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Email ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email id"
            name="emailId"
            ref={register({
              required: true,
              pattern:
                /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            })}
            autoComplete="off"
          />
          <ErrorMessage
            error={errors?.emailId}
            message={{
              required: "Please enter email id",
              pattern: "Invalid email id",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter phone number"
            name="phone"
            maxLength={10}
            required
            ref={register({
              required: true,
              isNumber: true,
              pattern: /^[0-9]{10}$/,
              minLength: 10,
            })}
            autoComplete="off"
          />
          <ErrorMessage
            error={errors?.phone}
            message={{
              required: "Please enter phone number",
              pattern: "Phone number should contain number only",
              minLength: "Phone number should contain atleast 10 digit",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">State</label>
          <select
            name="state"
            ref={register({ required: true })}
            className="form-select"
            defaultValue=""
          >
            <option value="" disabled>
              Select State
            </option>
            {Object.values(states).map((state, index) => {
              return (
                <option key={index} value={state}>
                  {state}
                </option>
              );
            })}
          </select>
          <ErrorMessage
            error={errors?.state}
            message={{ required: "Please select state" }}
          />
        </div>
      </div>
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </Fragment>
  );
};

export default FormValidationPage;
