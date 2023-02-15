import InputField from "./InputField";

const CreateUserModal = (props) => {
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
          />
          <InputField
            type="date"
            id="date"
            placeholder="Enter Date"
            title="Date of Birth"
          />
          <div className="form-outline mb-2">
            <label className="form-label" htmlFor="gender">
              Gender
            </label>
            <select id="gender" className="select form-control">
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
          />
        </div>
      </div>
    </>
  );
};

export default CreateUserModal;
