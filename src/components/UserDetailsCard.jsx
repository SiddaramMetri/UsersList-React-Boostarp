import Button from "./Button";

const UserDetailsCard = (props) => {
  return (
    <>
      <div className="card" style={{ width: "fit-content" }}>
        <div className="card-body">
          <p>
            Name: <span className="fw-bold ms-2">{props.name}</span>
          </p>
          <p>
            DOB:
            <span className="fw-bold ms-2">
              {props.dob.toLocaleDateString()}
            </span>
          </p>
          <p>
            Gender: <span className="fw-bold ms-2">{props.gender}</span>
          </p>
          <p>
            City: <span className="fw-bold ms-2">{props.city}</span>
          </p>
          <div className="d-flex justify-content-end">
            <Button
              color="danger"
              onClick={() => {
                props.setUser((prev) => {
                  return prev.filter((user) => {
                    return user.id !== props.id;
                  });
                });
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailsCard;
