import './RegisterStyle.css'
import { Link, useHistory } from "react-router-dom"
import { useState, useRef } from "react"
import {
    Button,
    TextInput
} from "../../ui"
export const RegisterPage = () => {

    const [showPassword, setShowPassword] = useState(false)
    const userName = useRef()
    const userPass = useRef()
    let history = useHistory();

    const onSubmit = () => {
        const nameValue = userName.current.value;
        const passValue = userPass.current.value;
        console.log(nameValue + " " + passValue);

        history.push("/home")
    }

    return (
        <div className="register-page-wrapper">
            <div className="register-input-box">
                <div className="register-input-wrapper">
                    <h2>Register</h2>
                    <TextInput className="register-input" type="text" placeholder="Name" id="registerName" ref={userName} />
                    <TextInput className="register-input" showPassword={showPassword} placeholder="Password" id="registerPass" ref={userPass} />
                    <TextInput className="register-input" showPassword={showPassword} placeholder="Confirm Password" id="reRegisterPass" />
                    <br />
                    <input type="checkbox" value={showPassword} onChange={() => { setShowPassword(!showPassword) }}></input> <a className="text-dhv">See Password</a>
                    <br />
                    <a className="text-dhv">Already have an account?</a> <Link className="text-register" to="/login">Login</Link>
                </div>
                <div className="register-button-wrapper">
                    <Button type="register" onClick={onSubmit} />
                </div>
            </div>
        </div>
    )
}