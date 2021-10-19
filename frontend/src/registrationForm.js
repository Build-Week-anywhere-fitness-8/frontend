import React from "react";

export default function RegisterForm(props) {
  const { values, submit, change, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    change(name, value);
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="form-group-submit">
        <h2>JOIN US</h2>
        <button>submit</button>
      </div>
    </form>
  );
}
