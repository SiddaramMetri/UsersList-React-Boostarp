const InputField = (props) => {
  return (
    <>
      <div className="form-outline mb-2">
        <label className="form-label" htmlFor={props.id}>
          {props.title}
        </label>
        <input
          type={props.type}
          id={props.id}
          className="form-control"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default InputField;
