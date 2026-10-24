var _jsxFileName = "C:/Users/Acer/wizardingEmpire/src/pages/About/index.jsx";
import Appcss from './About.module.css';

function About() {
    return (
        <main className={Appcss.pagina}>
            <header className={Appcss.cabecalho}>
                <h2 className={Appcss.txtCabecalho}>SOBRE O SITE</h2>
                <nav className={Appcss.navBar}>
                    <a href="/" className={Appcss.link}>home</a>
                    <a href="/sobre" className={Appcss.link}>sobre</a>
                    <a href="/feticos" className={Appcss.link}>feticos</a>
                    <a href="/rituais" className={Appcss.link}>rituais</a>
                    <a href="/livros" className={Appcss.link}>livros</a>
                </nav>
            </header>

            <section className={Appcss.capa}>
            </section >

            <section className={Appcss.corpo}>
                <p>Este site foi feito para postar e deixar mais organizado os documentos e histórias que encontramos sobre bruxaria e outras religiões.</p>
                <p>Inicialmente o site não terá a opção de vocês mesmo postarem conteúdo, mas deixarei um formulário no final para que vocês me mandem e eu adicione a página, enquanto a função adicionar não for feita!</p>
                <p>Não tenho muitas ideias para o site em si ,então AJUDEM PFVR!</p>
            </section>
        </main>
    )
}

export default About
