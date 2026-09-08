import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="#inicio" className="footer-logo">
              Izabelle Sabino
            </Link>
            <p>
              Cursos de bolos, doces e salgados para quem quer aprender,
              praticar e transformar receitas em resultados.
            </p>
          </div>

          <div>
            <h4>Menu</h4>
            <div className="footer-links">
              <Link href="#inicio">Início</Link>
              <Link href="#cursos">Cursos</Link>
              <Link href="#sobre">Sobre</Link>
              <Link href="#receitas">Receitas</Link>
              <Link href="#depoimentos">Depoimentos</Link>
            </div>
          </div>

          <div>
            <h4>Contato</h4>
            <div className="footer-links">
              <Link href="#">Instagram</Link>
              <Link href="#">WhatsApp</Link>
              <Link href="#">E-mail</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Izabelle Sabino. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
