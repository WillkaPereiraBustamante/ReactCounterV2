const ButtonClear = (props) => {
    return (
      <button
        onClick={() => {
            props.setCounter(0);
        }}
      >
        reset
      </button>
    );
  };
  
  export default ButtonClear;
  