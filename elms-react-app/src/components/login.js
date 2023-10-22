import React from 'react';

const Login = () => {
  return (
    <div className="container">
        <h1>Login Form</h1>
        <form className="row eeds-validation was-validated" noValidate>
            <div className="col-12">
                <label htmlFor="validationCustom01" className="form-label">ID</label>
                <input
                type="text"
                className="form-control"
                id="validationCustom01"
                defaultValue="Mark"
                placeholder="Enter ID here"
                required
                spellCheck="false"
                data-ms-editor="true"
                />
                <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-12">
                <label htmlFor="validationCustom02" className="form-label">Password</label>
                <input
                type="password"
                className="form-control"
                id="validationCustom02"
                value="Otto"
                placeholder="Enter Password here"
                required
                spellCheck="false"
                data-ms-editor="true"
                />
                <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-12">
                <label htmlFor="validationCustom03" className="form-label">This test for invalid feedback</label>
                <input
                type="text"
                className="form-control is-invalid"
                id="validationCustom03"
                required
                spellCheck="false"
                data-ms-editor="true"
                />
                <div className="invalid-feedback">Please provide a valid feedback.</div>
            </div>

            <div className="col-12">
                <button className="btn btn-primary" type="submit">
                Submit form
                </button>
            </div>
        </form>
    </div>
    
  );
};

export default Login;
