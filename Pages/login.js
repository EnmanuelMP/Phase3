import React from "react";
import './Styles/login.css'

function Login () {

return (

    <div className="login__wrapper">
        <form action="" className="form">
            <h2>Login</h2>
            <div className="input__group">
                <input type="text" name="loginUser" id="loginUser" required />
                <label for="loginUser">User Name</label>
            </div>
            <div className="input__group">
                <input type="password" name="loginPassword" id="loginPassword" required />
                <label for="loginPassword">Password</label>
            </div>
            <div className="submit">
                <input type="submit" value="Login" className="submit-btn" />
                <a href="_blank" className="forgot-pw">Forgot Password?</a>
            </div>
            <div className="register">
                <p>Don't have you an account?</p>
                <a href="/register.html" className="forgot-pw">Sing up</a>
            </div>
        </form>
    </div>
);

}

export { Login };