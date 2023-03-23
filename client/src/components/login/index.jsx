import { useState, useEffect } from "react";
import { usePostLoginMutation, usePostSignUpMutation } from "@/state/api";
import Footer from "../Footer";

const Login = ({ setUser, setSecret }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, resultLogin] = usePostLoginMutation();
  const [triggerSignUp] = usePostSignUpMutation();

  const handleLogin = () => {
    triggerLogin({ username, password });
  };

  const handleRegister = () => {
    triggerSignUp({ username, password });
  };

  useEffect(() => {
    if (resultLogin.data?.response) {
      setUser(username);
      setSecret(password);
    }
  }, [resultLogin.data]); // eslint-disable-line

  //   If you want your own chat:
  // register and log in
  // then create a chat depending on the assistant you want; the chat you create must start with AiChat_: GPT 3.5 Chat
  // AiCode_: Coder Assistant
  return (
    <div
      className="login-page"
      style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
    >
      <div style={{ color: "aliceblue" }}>
        <p>You can test it with:</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>
            username: <span style={{ color: "red" }}>user</span>
          </span>
          <span>
            password: <span style={{ color: "red" }}>123</span>
          </span>
        </div>
      </div>
      <div className="login-container">
        <h2 className="title">CHATGPT APP</h2>
        <p
          className="register-change"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Already a user?" : "Are you a new user?"}
        </p>

        <div>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-actions">
          {isRegister ? (
            <button className="login-button" type="button" onClick={handleRegister}>
              Register
            </button>
          ) : (
            <button className="login-button" type="button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </div>
      <div style={{ color: "aliceblue" }}>
        <p>If you want your own chat:</p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <li>register and log in</li>{" "}
          <li>
            <span>
              then create a chat depending on the assistant you want, the chat
              you create must start with:
            </span>
          </li>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <li>
              <span style={{ color: "red", marginRight: "0.7rem" }}>
                AiChat_
              </span>
              : GPT 3.5 Chat{" "}
            </li>
            <li>
              <span style={{ color: "red", marginRight: "0.7rem" }}>
                AiCode_
              </span>
              : Coder Assistant{" "}
            </li>
          </ul>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
