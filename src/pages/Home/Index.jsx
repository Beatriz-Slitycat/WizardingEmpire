var _jsxFileName = "C:/Users/Acer/wizardingEmpire/src/pages/home/index.jsx";
import Appcss from './home.module.css';
import { Link } from 'react-router-dom';

function Home() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            message: e.target.message.value
        };

        const res = await fetch("https://formspree.io/f/xqpelwbj", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(payload)
        });

        console.log(await res.json());
    };

    return (
        <main className={Appcss.pagina}>
            <header className={Appcss.cabecalho}>
                <h2 className={Appcss.txtCabecalho}>Wizarding Empire</h2>
                <nav className={Appcss.navBar}>
                    <Link to="/" className={Appcss.link}>home</Link>
                    <Link to="/sobre" className={Appcss.link}>sobre</Link>
                    <Link to="/feticos" className={Appcss.link}>feticos</Link>
                    <Link to="/rituais" className={Appcss.link}>rituais</Link>
                    <Link to="/livros" className={Appcss.link}>livros</Link>
                </nav>
            </header>

            <section className={Appcss.imgp}>
                <img src="src\pages\Home\imagesHome\Wizarding.png" alt="logooficial" className={Appcss.imgPrincipal} />
            </section>

            <section className={Appcss.corpo}>
                <div className={Appcss.textS}>
                    <p className={Appcss.textC}>Aqui está o site que nínguem pediu, mas eu criei mesmo assim, apenas por diversão.</p><br />
                    <p className={Appcss.textC2}>Foi criado para vocês amigos próximos,podem mostrar para outros colegas,mas não recomendo fazerem alvoroço pelo site pois ne, livros...</p>
                </div>
            </section>

            <section>
                <form className={Appcss.formulario} onSubmit={handleSubmit}>
                    <label className={Appcss.label}>Digite o que você quer modificar ou adicionar:</label>
                    <textarea name="message" className={Appcss.textarea} placeholder="Digite aqui..." />
                    <button type="submit" className={Appcss.btn}>Enviar</button>
                </form>
            </section>

            <section className={Appcss.footer}>
                <p className={Appcss.textFooter}>Todos os direitos reservados &copy;<a href="https://github.com/Stalyitc" className={Appcss.linkFooter}>Stalyitc</a></p>
            </section>
        </main>
    )
}

export default Home
