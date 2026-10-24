var _jsxFileName = "C:/Users/Acer/wizardingEmpire/src/pages/Rituais/index.jsx";
import Appcss from './Rituais.module.css';

function Rituais() {
  return (
    <main>
      <header className={Appcss.cabecalho}>
        <h2 className={Appcss.txtCabecalho}>Rituais</h2>
        <nav className={Appcss.navBar}>
          <a href="/" className={Appcss.link}>home</a>
          <a href="/sobre" className={Appcss.link}>sobre</a>
          <a href="/feticos" className={Appcss.link}>feticos</a>
          <a href="/rituais" className={Appcss.link}>rituais</a>
          <a href="/livros" className={Appcss.link}>livros</a>
        </nav>
      </header>
      <section className={Appcss.capa}>
        
      </section>
      <section className={Appcss.corpo}>
        <p>vamos ver o que nos espera</p>
        <p className={Appcss.textC}>Aqui ficará os rituais, divididos por seções e não por páginas,e também terá dicas de que páginas você pode visitar</p>
      </section>
    </main>
  )
}

export default Rituais