"use client";

import { useState } from "react";
import Link from "next/link";

export default function Cadastro() {
  const [lang, setLang] = useState<"pt" | "en" | "es">("pt");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const t = {
    pt: {
      title: "⭐ Comece sua jornada",
      subtitle: "Crie sua conta e transforme seus sonhos em realidade",
      month: "/mês",
      fullName: "Nome completo",
      fullNamePlaceholder: "Seu nome",
      email: "E-mail",
      emailPlaceholder: "seu@email.com",
      password: "Senha",
      passwordPlaceholder: "Mínimo 8 caracteres",
      confirmPassword: "Confirmar senha",
      confirmPasswordPlaceholder: "Digite a senha novamente",
      benefitsIncluded: "✓ Benefícios inclusos:",
      benefit1: "20 imagens inspiradoras",
      benefit2: "Upload ilimitado de fotos pessoais",
      benefit3: "Frases motivacionais e bíblicas diárias",
      benefit4: "Quadro personalizado dos seus sonhos",
      benefit5: "Acesso em todos os dispositivos",
      subscribe: "Assinar por €4,99/mês",
      haveAccount: "Já tem uma conta?",
      login: "Faça login",
    },
    en: {
      title: "⭐ Start your journey",
      subtitle: "Create your account and turn your dreams into reality",
      month: "/month",
      fullName: "Full name",
      fullNamePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      password: "Password",
      passwordPlaceholder: "Minimum 8 characters",
      confirmPassword: "Confirm password",
      confirmPasswordPlaceholder: "Enter password again",
      benefitsIncluded: "✓ Benefits included:",
      benefit1: "20 inspiring images",
      benefit2: "Unlimited personal photo uploads",
      benefit3: "Daily motivational and biblical quotes",
      benefit4: "Personalized vision board",
      benefit5: "Access on all devices",
      subscribe: "Subscribe for €4.99/month",
      haveAccount: "Already have an account?",
      login: "Sign in",
    },
    es: {
      title: "⭐ Comienza tu viaje",
      subtitle: "Crea tu cuenta y convierte tus sueños en realidad",
      month: "/mes",
      fullName: "Nombre completo",
      fullNamePlaceholder: "Tu nombre",
      email: "Correo electrónico",
      emailPlaceholder: "tu@email.com",
      password: "Contraseña",
      passwordPlaceholder: "Mínimo 8 caracteres",
      confirmPassword: "Confirmar contraseña",
      confirmPasswordPlaceholder: "Ingresa la contraseña nuevamente",
      benefitsIncluded: "✓ Beneficios incluidos:",
      benefit1: "20 imágenes inspiradoras",
      benefit2: "Carga ilimitada de fotos personales",
      benefit3: "Frases motivacionales y bíblicas diarias",
      benefit4: "Tablero personalizado de tus sueños",
      benefit5: "Acceso en todos los dispositivos",
      subscribe: "Suscribirse por €4,99/mes",
      haveAccount: "¿Ya tienes una cuenta?",
      login: "Iniciar sesión",
    }
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    // Lógica de cadastro aqui
    console.log("Cadastro:", { nome, email, senha });
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
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>

        <div className="pricing-badge">
          <span className="price">€4,99</span>
          <span className="period">{t.month}</span>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="nome">{t.fullName}</label>
            <input
              id="nome"
              type="text"
              placeholder={t.fullNamePlaceholder}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

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
              minLength={8}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmar">{t.confirmPassword}</label>
            <input
              id="confirmar"
              type="password"
              placeholder={t.confirmPasswordPlaceholder}
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>

          <div className="benefits">
            <h3>{t.benefitsIncluded}</h3>
            <ul>
              <li>{t.benefit1}</li>
              <li>{t.benefit2}</li>
              <li>{t.benefit3}</li>
              <li>{t.benefit4}</li>
              <li>{t.benefit5}</li>
            </ul>
          </div>

          <button type="submit" className="btn-primary">
            {t.subscribe}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {t.haveAccount}{" "}
            <Link href="/login" className="link-highlight">
              {t.login}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
