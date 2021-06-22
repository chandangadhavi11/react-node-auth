import './LoginStyle.css'
import {
    Button,
    TextInput
} from "../../ui"

import { Link, useHistory } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

export const LoginPage = () => {
    const [userName, setUserName] = useState("")
    const [userPass, setUserPass] = useState("")
    const [nameIsE, setNameIsE] = useState(false)
    const [passIsE, setPassIsE] = useState(false)

    let history = useHistory();

    const validateValues = () => {
        if (!userName || !userPass) {
            if (!userName) { setNameIsE(true) } else { setNameIsE(false) }
            if (!userPass) { setPassIsE(true) } else { setPassIsE(false) }
            return true;
        }
        return null;
    }

    const onClickLogin = () => {

        var validationError = validateValues();
        if (validationError) return;

        // Login Logic will be here

        history.push("/home")
    }

    const nameChangeHandler = (e) => {
        setUserName(e.target.value);
        setNameIsE(false)
    }

    const passChangeHandler = (e) => {
        setUserPass(e.target.value);
        setPassIsE(false)
    }

    return (
        <div className="login-page-wrapper">
            <div className="login-input-box">
                <div className="login-input-wrapper">
                    <h2>Login</h2>
                    <TextInput
                        value={userName}
                        onChange={nameChangeHandler}
                        isError={nameIsE}
                        type="text"
                        placeholder="Name"
                        id="loginName" />
                    <TextInput
                        value={userPass}
                        onChange={passChangeHandler}
                        isError={passIsE}
                        type="password"
                        placeholder="Password"
                        id="loginPass" />
                    <br />
                    <a className="text-dhv">Don't have an account? </a>
                    <Link className="text-register" to="/register">Register</Link>
                </div>
                <div className="login-button-wrapper">
                    <Button type="login" onClick={onClickLogin} />
                </div>
            </div>
        </div>
    )
}