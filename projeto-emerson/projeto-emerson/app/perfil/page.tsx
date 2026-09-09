import Link from "next/link";
import BottomNav from "@/components/BottomNav";

const settings = ["Meu perfil", "Notificações", "Privacidade", "Preferências de estilo"];

export default function ProfilePage() {
  return <><main className="mobile-page"><header className="topbar"><div><p className="eyebrow">SEU ESPAÇO</p><h1>Perfil</h1></div><Link href="/" className="close-button" aria-label="Voltar">×</Link></header><section className="profile-card"><div className="large-avatar">AS</div><h2>Ana Silva</h2><p>Construindo uma vida com intenção.</p><div className="profile-stats"><div><strong>12</strong><span>sonhos</span></div><div><strong>04</strong><span>categorias</span></div><div><strong>32%</strong><span>progresso</span></div></div></section><div className="settings-list">{settings.map((item) => <Link href="#" key={item}><span>{item}</span><b>→</b></Link>)}</div><button className="primary-button share-button" type="button">Editar perfil <span>→</span></button></main><BottomNav /></>;
}
