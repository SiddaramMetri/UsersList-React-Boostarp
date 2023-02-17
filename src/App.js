import { useEffect, useState } from "react";
import CreateUserModal from "./components/CreateUserModal";
import UserDetailsCard from "./components/UserDetailsCard";
import Buttons from "./components/Button";
import InputField from "./components/InputField";

function App() {
  const [showUserModal, setShowUserModal] = useState(false);
  const [users, setUser] = useState([]);
  const [searchHandle, setSearchHandle] = useState("");
  const [diplayUsers, setDiplayUsers] = useState([]);

  const SearchFun = () => {
    setUser(
      diplayUsers.filter((user) => {
        return user.name.toLowerCase().includes(searchHandle.toLowerCase());
      })
    );
  };

  useEffect(SearchFun, [diplayUsers, searchHandle]);

  return (
    <div className="container mt-5">
      <InputField
        type="text"
        id="Seach"
        value={searchHandle}
        onChange={(e) => {
          setSearchHandle(e.target.value);
        }}
        placeholder="Seach Here"
      />
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
        creatUser={setDiplayUsers}
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
              setUser={setDiplayUsers}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
