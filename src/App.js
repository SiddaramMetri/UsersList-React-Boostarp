import CreateUserModal from "./components/CreateUserModal";
import UserDetailsCard from "./components/UserDetailsCard";

function App() {
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
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-primary mt-3 text-end">
          Add User
        </button>
      </div>
      <CreateUserModal show={false} />
      <div className="mt-5 d-flex flex-wrap gap-4">
        <UserDetailsCard
          name="John"
          dob="15-02-2023"
          gender="Male"
          city="Bangalore"
        />
      </div>
    </div>
  );
}

export default App;
