import React, { useRef } from 'react';
const UnControlled = () => {
  //it like a useState only its preserve the value. NO RENDER
  const yName = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    console.log(yName);
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div className="mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your Good Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            ref={yName}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default UnControlled;
