import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Hakkımızda</h6>
            <p className="text-justify">
              Biz Tuğba Özbek Anadolu Lisesi podcast grubunun Vertical
              takımıyız. Okuldan sonra 2 gün toplanarak kayıtlarımızı almamızın
              yanı sıra çalışmalarımızı farklı yerlere ulaştırıyoruz. (AB
              projeleri, TÜBİTAK projeleri vb.) Aynı zamanda özel günlerde
              okulumuz adına çekimler yapıp okulun sosyal medya hesaplarında
              paylaşıyoruz. En önemlisi, tüm bunları eğlenceli yollarla
              yapıyoruz. Bize her konuda yardım edip bizimle birer arkadaş gibi
              davranan iki öğretmenimiz sayesinde, görevlerimizi sıkılmadan
              yerine getiriyoruz.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Organizasyon</h6>
            <ul className="footer-links">
              <li>
                <span>
                  <Link to="/about">Hakkımızda</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/contact">İletişim</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/bio">Bio</Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Hızlı Linkler</h6>
            <ul className="footer-links">
              <li>
                <span>
                  <a
                    href="https://github.com/DrShahinstein/toal-website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Katkıda Bulunun
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a
                    href="https://github.com/DrShahinstein"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Geliştirici
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p translate="no" className="copyright-text">
              Vertical
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="twitter"
                  href="https://twitter.com/toalpodcast"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  className="youtube"
                  href="https://www.youtube.com/channel/UCCqpIw1useXiKWDOwh_5AOg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href="https://www.instagram.com/invites/contact/?i=dnfvwtohuq57&utm_content=msruy7s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
