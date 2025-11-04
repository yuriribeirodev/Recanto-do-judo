export function Footer (){
    return(
        <>
            <footer>
                <div class="footer__container">
                <div class="footer__logo">
                    <img src="footer-logo.png" alt="Logo Recanto"/>
                </div>
                <div class="footer__nav">
                    <ul class="nav__lista">
                    <li class="nav__item"><a href="#Sobre">Sobre</a></li>
                    <li class="nav__item"><a href="#Depoimentos">Depoimentos</a></li>
                    <li class="nav__item"><a href="#Contato">Contato</a></li>
                    <li class="nav__item"><a href="#Galeria">Galeria</a></li>
                    <li class="nav__item"><a href="#Parceiros">Parceiros</a></li>
                    </ul>
                </div>
                </div>

                <hr/>

                <ul class="nav__lista">
                    <li class="nav__item">
                        <a href="https://www.instagram.com/instagram/" target="_blank">
                        <img src="/footer-instagram.png" alt="Instagram"/>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="https://web.whatsapp.com/" target="_blank">
                        <img src="/footer-whatsapp.png" alt="LinkedIn"/>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fpt-BR%2F&lang=en&enter_method=mandatory" target="_blank">
                        <img src="/footer-tiktok.png" alt="Tiktok"/>
                        </a>
                    </li>
                <p>
                    Copyright 2025 © Todos os direitos reservados | Desenvolvido por Open Code
                </p>
                <a href="#Header" className="footer-voltar">
                    <p>Voltar ao topo</p>
                    <img src="/footer-seta.png" alt="Seta"/>
                </a>
                </ul>
            </footer>
        </>
    )

}