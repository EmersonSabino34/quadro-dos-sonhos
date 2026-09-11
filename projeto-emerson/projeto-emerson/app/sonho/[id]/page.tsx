import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function DreamPage() {
  return <><main className="mobile-page"><header className="topbar"><div><p className="eyebrow">DETALHES DO SONHO</p><h1>Conhecer Paris</h1></div><Link href="/" className="close-button" aria-label="Voltar">×</Link></header><section className="dream-detail-image"><img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85" alt="Paris" /><span>♡</span></section><div className="dream-detail-title"><div><p className="eyebrow">LUGARES QUE DESEJO CONHECER</p><h2>Paris, França</h2></div><strong>35%</strong></div><div className="progress-track"><div style={{ width: "35%" }} /></div><div className="goal-grid"><div><span>DATA DESEJADA</span><b>2027</b></div><div><span>META FINANCEIRA</span><b>€ 3.000</b></div></div><button className="primary-button share-button" type="button">Atualizar progresso <span>→</span></button></main><BottomNav /></>;
}
