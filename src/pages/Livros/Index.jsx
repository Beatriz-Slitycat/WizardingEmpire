var _jsxFileName = "C:/Users/Acer/wizardingEmpire/src/pages/Livros/index.jsx";
import Appcss from './Livros.module.css';

function Livros() {
  return (
    <main>
      <header className={Appcss.cabecalho}>
        <h2 className={Appcss.txtCabecalho}>Livros</h2>
        <nav className={Appcss.navBar}>
          <a href="/" className={Appcss.link}>home</a>
          <a href="/sobre" className={Appcss.link}>sobre</a>
          <a href="/feticos" className={Appcss.link}>feticos</a>
          <a href="/rituais" className={Appcss.link}>rituais</a>
          <a href="/livros" className={Appcss.link}>livros</a>
        </nav>
      </header>
      <section className={Appcss.corpo}>
        <div className={Appcss.textS}>
        </div>
      </section>

      <section className={Appcss.livros}>
        <div className={Appcss.bvi}>
          <h3 className={Appcss.titbvi}>Biblia dos Vampiros - Intordução</h3>
          <p className={Appcss.txtbvi}>A Bíblia dos vampiros é um livro que mostra como é o vapirismo da forma mais natural e qual a diferença entre vampirismo psiquico e vampirismo fisíco.</p>
          <a href="src\pages\Livros\Pdfs\A Bíblia do Vampiro - Introdução e Práticas Essenciais.pdf" download="A Bíblia do Vampiro - Introdução e Práticas Essenciais.pdf" className={Appcss.linkPdf}>A Bíblia do Vampiro - Introdução e Práticas Essenciais</a><br />
        </div><br />

        <div className={Appcss.adp}>
          <h3 className={Appcss.titadp}>Auto Defesa Psiquica</h3>
          <p className={Appcss.txtadp}>chbajkfbkabk</p>
          <a href="src\pages\Livros\Pdfs\pdfcoffee.com_autodefesa-psiquica-dion-fortune-completo-pdf-free.pdf" download="Auto Defesa Psiquica.pdf" className={Appcss.linkPdf}>Auto Defesa Psiquica</a>
        </div><br />

        <div className={Appcss.gmo}>
          <h3 className={Appcss.titgmo}>O Grimório Moderno Das Bruxas - Jason Mankey_cópia</h3>
          <p className={Appcss.txtgmo}>chbajkfbkabk</p>
          <a href="src\pages\Livros\Pdfs\O Grimório Moderno Das Bruxas.pdf" download="O Grimório Moderno Das Bruxas" className={Appcss.linkPdf}>O Grimório Moderno Das Bruxas</a><br />
        </div><br />
      </section>
    </main >
  )
}

export default Livros