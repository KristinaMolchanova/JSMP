import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

export const LoginPage = () =>{
    const history = useHistory();

    const [formFields, setFormFields] = useState({});

    const formFieldsChange = e => {
        setFormFields({ ...formFields, [e.target.id]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault()
        window.localStorage.setItem('userCredentials', JSON.stringify(formFields));
        if(localStorage.getItem("userCredentials") !== null){
            history.goBack("/main");
        }
    }

    return (
        <div className="sign-in-page_container row">
            <h2 className="sign-in-page_title">SignIn</h2>
            <form className="col s12" onSubmit={submit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email"
                               type="email"
                               className="validate"
                               onChange={formFieldsChange}
                               required/>
                            <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password"
                               type="password"
                               className="validate"
                               onChange={formFieldsChange}
                               required/>
                            <label htmlFor="password">Password</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light deep-orange lighten-2" type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}
