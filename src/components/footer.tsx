import '../styles/footer.css';

export function Footer() {
  return (
    <>
      <footer>
        {/* Primeira linha: logo + navegação */}
        <div className="footer__container">
          <div className="footer__logo">
            <img src="footer-logo.png" alt="Logo Recanto" />
          </div>

          <div className="footer__nav">
            <ul className="nav__lista">
              <li className="nav__item"><a href="#Sobre">Sobre</a></li>
              <li className="nav__item"><a href="#Depoimentos">Depoimentos</a></li>
              <li className="nav__item"><a href="#Contato">Contato</a></li>
              <li className="nav__item"><a href="#Galeria">Galeria</a></li>
              <li className="nav__item"><a href="#Parceiros">Parceiros</a></li>
            </ul>
          </div>
        </div>

        <hr />

        {/* Segunda linha: ícones, copyright e voltar ao topo */}
        <div className="footer__bottom-container">
          {/* Ícones sociais */}
          <div className="footer__social">
            <ul className="nav__lista">
              <li className="nav__item">
                <a href="https://www.instagram.com/instagram/" target="_blank" rel="noopener noreferrer">
                  <img src="/footer-instagram.png" alt="Instagram" />
                </a>
              </li>
              <li className="nav__item">
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/footer-whatsapp.png" alt="WhatsApp" />
                </a>
              </li>
              <li className="nav__item">
                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/footer-tiktok.png" alt="Tiktok" />
                </a>
              </li>
            </ul>
          </div>

          {/* Texto de direitos autorais */}
          <div className="footer__copy">
            <p>Copyright 2025 © Todos os direitos reservados | Desenvolvido por Open Code</p>
          </div>

          {/* Link para voltar ao topo */}
          <div className="footer__top">
            <a href="#Header" className="footer-voltar">
              <p>Voltar ao topo</p>
              <img src="/footer-seta.png" alt="Seta" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
