const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={`btn btn-${props.color}`}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
