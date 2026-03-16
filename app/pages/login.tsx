import { useState } from "react";
import { DEMO_USERS } from "../utils/demo-users";

// ── AUTH SCREEN ───────────────────────────────────────────────────────────────
function AuthScreen({ onLogin }: { onLogin: (user: any) => void }) {
  const [mode, setMode] = useState("login"); // login | register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (mode === "login") {
      const user = DEMO_USERS.find(
        (u) => u.email === email && u.password === password,
      );
      if (user) {
        onLogin(user);
      } else setError("Invalid email or password.");
    } else {
      if (!name.trim()) return setError("Please enter your name.");
      if (password.length < 6)
        return setError("Password must be at least 6 characters.");
      onLogin({ email, name, password });
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-visual">
        <div className="auth-deco">🍽️</div>
        <div className="auth-brand">
          <h1>Coooking</h1>
          <p>Your personal recipe collection</p>
        </div>
      </div>
      <div className="auth-form-panel">
        <div className="auth-form-wrap">
          <h2>{mode === "login" ? "Welcome back" : "Create account"}</h2>
          <p>
            {mode === "login"
              ? "Sign in to access your recipes."
              : "Start your culinary collection today."}
          </p>
          {error && <div className="auth-error">{error}</div>}
          <form onSubmit={handleSubmit}>
            {mode === "register" && (
              <div className="field">
                <label>Full Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Julia Child"
                  required
                />
              </div>
            )}
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="chef@kitchen.com"
                required
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <button className="btn-primary" type="submit">
              {mode === "login" ? "Sign in" : "Create account"}
            </button>
          </form>
          <div className="auth-hint">
            {mode === "login" ? (
              <>
                No account?{" "}
                <span
                  onClick={() => {
                    setMode("register");
                    setError("");
                  }}
                >
                  Register
                </span>
              </>
            ) : (
              <>
                Have an account?{" "}
                <span
                  onClick={() => {
                    setMode("login");
                    setError("");
                  }}
                >
                  Sign in
                </span>
              </>
            )}
          </div>
          {mode === "login" && (
            <div
              className="auth-hint"
              style={{ marginTop: "0.5rem", fontSize: "0.78rem" }}
            >
              Demo: chef@kitchen.com / recipe123
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthScreen;
