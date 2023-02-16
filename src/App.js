import { useState } from "react";
import CreateUserModal from "./components/CreateUserModal";
import UserDetailsCard from "./components/UserDetailsCard";
import Buttons from "./components/Button";

function App() {
  const [showUserModal, setShowUserModal] = useState(false);
  const [users, setUser] = useState([]);

  return (
    <div className="container mt-5">
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
      <div className="d-flex justify-content-end mt-3">
        <Buttons
          color="primary"
          onClick={() => {
            setShowUserModal(true);
          }}
        >
          Add User
        </Buttons>
      </div>
      <CreateUserModal
        show={showUserModal}
        setShowUserModal={setShowUserModal}
        creatUser={setUser}
      />
      <div className="mt-5 d-flex flex-wrap gap-4">
        {users.map((user) => {
          return (
            <UserDetailsCard
              key={user.id}
              name={user.name}
              dob={new Date(user.dob)}
              gender={user.gender}
              city={user.city}
              id={user.id}
              setUser={setUser}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
