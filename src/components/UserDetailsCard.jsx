const UserDetailsCard = (props) => {
  return (
    <>
      <div className="card" style={{ width: "fit-content" }}>
        <div className="card-body">
          <p>
            Name: <span className="fw-bold ms-2">{props.name}</span>
          </p>
          <p>
            DOB: <span className="fw-bold ms-2">{props.dob}</span>
          </p>
          <p>
            Gender: <span className="fw-bold ms-2">{props.gender}</span>
          </p>
          <p>
            City: <span className="fw-bold ms-2">{props.city}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserDetailsCard;
