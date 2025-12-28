"use client";

import { useState } from "react";
import Link from "next/link";
import { translations, Language } from "../translations";

export default function Login() {
  const [lang, setLang] = useState<Language>("pt");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const t = {
    pt: {
      welcome: "⭐ Bem-vindo de volta!",
      subtitle: "Entre na sua conta para acessar seu Vision Board",
      email: "E-mail",
      emailPlaceholder: "seu@email.com",
      password: "Senha",
      passwordPlaceholder: "••••••••",
      forgotPassword: "Esqueceu a senha?",
      enter: "Entrar",
      noAccount: "Não tem uma conta?",
      signUpNow: "Cadastre-se agora",
    },
    en: {
      welcome: "⭐ Welcome back!",
      subtitle: "Sign in to your account to access your Vision Board",
      email: "Email",
      emailPlaceholder: "your@email.com",
      password: "Password",
      passwordPlaceholder: "••••••••",
      forgotPassword: "Forgot password?",
      enter: "Sign In",
      noAccount: "Don't have an account?",
      signUpNow: "Sign up now",
    },
    es: {
      welcome: "⭐ ¡Bienvenido de nuevo!",
      subtitle: "Inicia sesión en tu cuenta para acceder a tu Vision Board",
      email: "Correo electrónico",
      emailPlaceholder: "tu@email.com",
      password: "Contraseña",
      passwordPlaceholder: "••••••••",
      forgotPassword: "¿Olvidaste tu contraseña?",
      enter: "Entrar",
      noAccount: "¿No tienes una cuenta?",
      signUpNow: "Regístrate ahora",
    }
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log("Login:", { email, senha });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Seletor de Idioma */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem", gap: "0.5rem" }}>
          <button 
            onClick={() => setLang("pt")}
            style={{
              padding: "0.4rem 0.8rem",
              background: lang === "pt" ? "linear-gradient(135deg, #d4af37, #c9a961)" : "rgba(212, 175, 55, 0.1)",
              border: lang === "pt" ? "2px solid #d4af37" : "2px solid rgba(212, 175, 55, 0.3)",
              borderRadius: "8px",
              color: lang === "pt" ? "white" : "#2c2c2c",
              cursor: "pointer",
              fontSize: "0.8rem",
              fontWeight: "600"
            }}
          >
            🇧🇷 PT
          </button>
          <button 
            onClick={() => setLang("en")}
            style={{
              padding: "0.4rem 0.8rem",
              background: lang === "en" ? "linear-gradient(135deg, #d4af37, #c9a961)" : "rgba(212, 175, 55, 0.1)",
              border: lang === "en" ? "2px solid #d4af37" : "2px solid rgba(212, 175, 55, 0.3)",
              borderRadius: "8px",
              color: lang === "en" ? "white" : "#2c2c2c",
              cursor: "pointer",
              fontSize: "0.8rem",
              fontWeight: "600"
            }}
          >
            🇺🇸 EN
          </button>
          <button 
            onClick={() => setLang("es")}
            style={{
              padding: "0.4rem 0.8rem",
              background: lang === "es" ? "linear-gradient(135deg, #d4af37, #c9a961)" : "rgba(212, 175, 55, 0.1)",
              border: lang === "es" ? "2px solid #d4af37" : "2px solid rgba(212, 175, 55, 0.3)",
              borderRadius: "8px",
              color: lang === "es" ? "white" : "#2c2c2c",
              cursor: "pointer",
              fontSize: "0.8rem",
              fontWeight: "600"
            }}
          >
            🇪🇸 ES
          </button>
        </div>

        <div className="auth-header">
          <h1>{t.welcome}</h1>
          <p>{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">{t.email}</label>
            <input
              id="email"
              type="email"
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">{t.password}</label>
            <input
              id="senha"
              type="password"
              placeholder={t.passwordPlaceholder}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="form-links">
            <Link href="/recuperar-senha">{t.forgotPassword}</Link>
          </div>

          <button type="submit" className="btn-primary">
            {t.enter}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {t.noAccount}{" "}
            <Link href="/cadastro" className="link-highlight">
              {t.signUpNow}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
