import './Header.css';

export const Header = () =>{
    const logout = () => {
        localStorage.clear();
        window.location.href = window.location.origin;
    }

    return (
        <div className="header">
            <button className="waves-effect waves-light btn-flat logout-btn" onClick={logout}>Logout</button>
        </div>
    )
}
