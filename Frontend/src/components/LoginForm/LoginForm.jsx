import { Button } from "../Button/Button";

export const LoginForm = () => (
    <div className="login-form row">
        <h3 className="col s4 offset-s4">Sign In</h3>
        <form className="col s12">
                <div className="input-field col s4 offset-s4">
                    <input id="email" type="email" className="validate"/>
                    <label htmlFor="email"/>
                    <span className="helper-text" data-error="wrong" data-success="right">Email</span>
                    <input id="password" type="password" className="validate"/>
                    <label htmlFor="password"/>
                    <span className="helper-text" data-error="wrong" data-success="right">Password</span>
                    <Button className="btn waves-effect waves-light col s12" text='Login'/>
                </div>
        </form>
    </div>
)