import React from "react";
import "./Styles/register.css"

function Register () {

    return (

        <section className="login__wrapper">
            <form action="" className="form">
                <h2>Register</h2>
                <div className="input__group">
                    <input type="text" name="nameUser" id="nameUser" required />
                    <label for="nameUser">Name</label>
                </div>
                <div className="input__group">
                    <input type="text" name="loginUser" id="loginUser" required />
                    <label for="loginUser">User Name</label>
                </div>
                <div className="input__group">
                    <input type="email" name="email" id="email" required />
                    <label for="email">Email</label>
                </div>
                <div className="input__group">
                    <input type="password" name="loginPassword" id="loginPassword" required />
                    <label for="loginPassword">Password</label>
                </div>
                <div className="submit">
                    <input type="submit" value="register" className="submit-btn" />
                    <a href="/login.html" className="forgot-pw">Sign Up</a>
                </div>
            </form>
        </section>

    );


}

export { Register };