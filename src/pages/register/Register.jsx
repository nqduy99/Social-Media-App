import './register.css'

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">Connect with friends and people around you on Lamasocial.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input className="loginInput" type="text" placeholder="Username"/>
            <input className="loginInput" type="text" placeholder="Email"/>
            <input className="loginInput" type="text" placeholder="Password"/>
            <input className="loginInput" type="text" placeholder="Password Again"/>
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
