import React from "react";
import Image from "../Image/Image";
import "./about.css";
import img1 from "../../assets/about-image-1.jpg";
import img2 from "../../assets/about-image-2.jpg";
import img3 from "../../assets/about-image-3.jpg";
import img4 from "../../assets/about-image-4.jpg";
import img5 from "../../assets/about-image-5.jpg";
import Center from "../Center";

export default function About() {
  return (
    <Center centralizeBy="flex">
      <div className="about--container my-5">
        <div className="about--section-summary">
          Biz Tuğba Özbek Anadolu Lisesi podcast grubunun Vertical takımıyız.
          Okuldan sonra 2 gün toplanarak kayıtlarımızı almamızın yanı sıra
          çalışmalarımızı farklı yerlere ulaştırıyoruz. (AB projeleri, TÜBİTAK
          projeleri vb.) Aynı zamanda özel günlerde okulumuz adına çekimler
          yapıp okulun sosyal medya hesaplarında paylaşıyoruz. En önemlisi, tüm
          bunları eğlenceli yollarla yapıyoruz. Bize her konuda yardım edip
          bizimle birer arkadaş gibi davranan 2 öğretmenimiz sayesinde,
          görevlerimizi sıkılmadan yerine getiriyoruz.
        </div>
        <div className="about--section-pictures">
          <div>
            <div>
              <Image src={img1} />
            </div>
            <div>
              <Image src={img2} />
            </div>
            <div>
              <Image src={img4} />
            </div>
            <div>
              <Image src={img5} />
            </div>
            <div>
              <Image src={img3} />
            </div>
          </div>
        </div>
      </div>
    </Center>
  );
}
