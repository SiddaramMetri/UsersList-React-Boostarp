import InputField from "./InputField";
import Buttons from "./Button";
import { useState } from "react";

const CreateUserModal = (props) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");
  const [city, setCity] = useState("");

  return (
    <>
      <div
        className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded"
        hidden={!props.show}
        style={{
          width: "30%",
          margin: "auto",
          background: "#eee",
          position: "absolute",
          zIndex: "50",
          marginLeft: "30%",
        }}
      >
        <div className="card-body ">
          <InputField
            type="text"
            id="name"
            placeholder="Enter Name"
            title="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <InputField
            type="date"
            id="date"
            placeholder="Enter Date"
            title="Date of Birth"
            onChange={(e) => {
              setDob(e.target.value);
            }}
            value={dob}
          />
          <div className="form-outline mb-2">
            <label className="form-label" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              className="select form-control"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              value={gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Binary">Binary</option>
            </select>
          </div>
          <InputField
            type="text"
            id="city"
            placeholder="Enter City"
            title="City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            value={city}
          />
          <div className="d-flex flex-row justify-content-end gap-3">
            <Buttons
              color="secondary"
              onClick={() => {
                props.setShowUserModal(false);
              }}
            >
              Cancel
            </Buttons>
            <Buttons
              color="success"
              onClick={() => {
                props.creatUser((prev) => {
                  return [
                    {
                      name,
                      dob,
                      gender,
                      city,
                      id: Number(new Date()),
                    },
                    ...prev,
                  ];
                });
                setName("");
                setCity("");
                setDob("");
                setGender("Male");
                props.setShowUserModal(false);
              }}
            >
              Add Users
            </Buttons>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUserModal;
