import React from "react";

function activateReadMore(event) {
  let length = event.target.parentNode.childNodes.length;
  event.target.parentNode.childNodes[length - 1].classList.remove("d-none");
  event.target.remove();
}

const datas = [
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146684976-23c4d65f-1e4f-44e3-8b5b-49438ee991ee.jpg",
    bio: {
      turkish: (
        <span>
          Herkese merhaba, Ben Erdem ASIBOSTAN. İzmir doğumluyum ve tüm
          eğitimimi İzmir'de tamamladım. 2000 yılından bu yana da öğrencilerimle
          öğrenme serüvenim devam ediyor. Edebiyatın büyülü dünyasını hissetmek
          ve öğrencilerime de hissettirmek için elimizden gelen her türlü yardım
          ve çalışmayı sürdürüyorum. Edebiyatın kalem oynattığı her alana ilgim
          var.{" "}
          <span className="bio--section-link" onClick={activateReadMore}>
            Dahasını oku...
          </span>
          <span className="d-none">
            Ayrıca su ve deniz hayatımın vazgeçilmez unsurları. Denizin olmadığı
            yerde kendimi sudan çıkmış balık gibi hissederim. Öyle ki sudan
            ayrılmamak için akvaryum hobisiyle de ilgileniyorum. Bunlara bir de
            teknolojiyi eklemek gerekiyor artık. Ses, resim ve video işleme
            konularına ilgi duyuyorum. Bu konuda çeşitli çalışmalarım da mevcut.
            Ayrıca Python programlama dilini öğrenmek için çalışmalarımı devam
            ettiriyorum. Öğrenme yönetim sistemleri ve içerik yönetim sistemleri
            de ayrıca öğrenmek için çaba harcadığım diğer alanlar. Öğrenme
            hayatımız boyunca devam edecek ve bu öğrendiklerimi öğrencilerimizle
            paylaşmaya da devam edeceğim. Tüm öğrenme arkadaşlarıma selamlar.
          </span>
        </span>
      ),
      english: (
        <span>
          Hello everyone, I am Erdem ASIBOSTAN. I was born in Izmir and
          completed all of my education there. Since 2000, my journey of
          learning with my students has been ongoing. I continue to make every
          effort to experience the enchanting world of literature and to convey
          this feeling to my students. I have an interest in every aspect of
          literature where a pen is involved.{" "}
          <span className="bio--section-link" onClick={activateReadMore}>
            Read more...
          </span>
          <span className="d-none">
            Additionally, water and the sea are indispensable elements of my
            life. Without the sea, I feel like a fish out of water. In fact, I
            am also interested in aquarium hobby to stay close to the water.
            Technology is another area that I am interested in. I have been
            working on sound, image, and video processing topics. Furthermore, I
            am learning the Python programming language. Learning management
            systems and content management systems are other areas where I am
            putting forth effort to learn. Learning will continue throughout our
            lives, and I will continue to share what I have learned with my
            students. Greetings to all of my learning companions.
          </span>
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146785190-d300d023-6262-48ee-b462-89d8a6a20325.jpg",
    bio: {
      turkish: (
        <span>
          Merhaba ben Can Cicioğlu. İzmir doğumlu olan bendeniz tam bir Ege ve
          deniz aşığıyım. Eğitim ile birlikte öğrenme yolculuğum 1998'den beri
          devam ediyor. Eğitimin alternatifi makbuldür diyerek çocuklarla ve
          gençlerle birlikte öğrenme deneyimi yaşadığımız bir çok projede yer
          aldım. Bu yolculuk sırasında hep{" "}
          <a
            className="bio--section-link"
            href="https://twitter.com/hashtag/hayalkurveitirazet?src=hashtag_click"
            target="_blank"
            rel="noreferrer"
          >
            #hayalkurveitirazet
          </a>{" "}
          sloganım oldu . Birlikte hayal kurmaya devam ediyoruz.
        </span>
      ),
      english: (
        <span>
          Hello, I am Can Cicioglu. As a native of Izmir, I am a true lover of
          the Aegean and the sea. My journey of learning along with education
          has been ongoing since 1998. Believing that alternatives to
          traditional education are valuable, I have participated in many
          projects where we experience learning together with children and young
          people. Throughout this journey, my slogan has always been{" "}
          <a
            className="bio--section-link"
            href="https://twitter.com/hashtag/hayalkurveitirazet?src=hashtag_click"
            target="_blank"
            rel="noreferrer"
          >
            #hayalkurveitirazet
          </a>
          . We continue to dream together.
        </span>
      ),
    },
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/81323808?v=4",
    bio: {
      turkish: (
        <span>
          Ben Taylan. Programlama, İngilizce konuşma, satranç oynama ve dövüş
          sanatları gibi ilgi alanlarım var. Programlamayı gerçekten çok
          sevdiğim için oldukça düşkün olduğum bir ilgi alanımdır. Programlama
          hakkında beceri ölçeğimi genellikle full-stack web geliştirme, komut
          satırı arayüzleri ve masaüstü uygulamaları üzerinde tanımlarım.{" "}
          <span className="bio--section-link" onClick={activateReadMore}>
            Dahasını oku...
          </span>{" "}
          <span className="d-none">
            Bunun dışında bir Linux kullanıcısı olarak özgür yazılımları
            destekliyorum, %99 tescilli yazılımı reddediyorum ve bir programcı
            olarak özgür yazılım geliştiriyorum. İngilizce'ye gelince,
            İngilizceye çok uzun zamandır aşinayım ve şu anda ana dili İngilizce
            olanlara benzer bir düzeyde İngilizce konuşabiliyorum (C1). Satranca
            gelince, satranç oynamak konusunda çok hevesliyim ve satrançta
            kendimi sürekli geliştiriyorum.
            <a
              className="bio--section-link"
              href="https://lichess.org/@/DrShahinstein"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Lichess{" "}
            </a>{" "}
            hesabımı görebilirsiniz.
          </span>
        </span>
      ),
      english: (
        <span>
          My name is Taylan. I have interests in programming, speaking English,
          playing chess, and martial arts. Programming is a passion of mine, and
          I am deeply devoted to it. I usually measure my skill level in
          programming based on full-stack web development, command-line
          interfaces, and desktop applications.{" "}
          <span className="bio--section-link" onClick={activateReadMore}>
            Dahasını oku...
          </span>{" "}
          <span className="d-none">
            Additionally, as a Linux user, I support free software, reject
            proprietary software about 99% of the time, and develop free
            software as a programmer. Regarding English, I have been familiar
            with it for a very long time, and I can currently speak English at a
            level similar to that of a native speaker (C1). As for chess, I am
            very enthusiastic about playing chess and continually improving my
            skills. You can see my{" "}
            <a
              className="bio--section-link"
              href="https://lichess.org/@/DrShahinstein"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Lichess{" "}
            </a>{" "}
            account.
          </span>
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146669348-15e28976-1992-4fb7-8958-9bd71357478e.jpg",
    bio: {
      turkish: (
        <span>
          Ben Seçkin. İzmirliyim. İlkokulu ve ortaokulu Egekent 2'de okudum.
          Şuanda Tuğba Özbek Anadolu Lisesi' nin 9/A sınıfında okuyorum.
          Okulumuzun okuldışı faaliyeti olan Podcast'e katılıyorum. Burada
          kendimizi ve çevremizi tanımaya çalışıyoruz ve fikir alışverişinde
          bulunuyoruz.
        </span>
      ),
      english: (
        <span>
          My name is Seçkin. I am from Izmir. I attended primary and middle
          school at Egekent 2. Currently, I am in the 9th grade at Tuğba Özbek
          Anatolian High School. I participate in the school's extracurricular
          activity called Podcast. Here, we try to get to know ourselves and our
          surroundings better and exchange ideas.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146671283-92915024-cc29-4064-8752-d1cc8d5b7e37.png",
    bio: {
      turkish: (
        <span>
          Ben Çiğdem Buse Taş. Tuğba Özbek Anadolu Lisesinde okuyan bir
          öğrenciyim. 10. sınıfım. Kitap okumayı ve gitar çalmayı severim. Okul
          dışı aktivitesi olarak Podcast'e katılıyorum.
        </span>
      ),
      english: (
        <span>
          My name is Çiğdem Buse Taş. I am a student at Tuğba Özbek Anatolian
          High School. I am in the 10th grade. I enjoy reading books and playing
          the guitar. As an extracurricular activity, I participate in a Podcast
          where we try to get to know ourselves and our surroundings better, and
          exchange ideas.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146672010-fc417164-6611-4ca5-ac82-db638cf0d983.jpg",
    bio: {
      turkish: (
        <span>
          Merhabalar ben Tuğba Özbek Anadolu Lisesi 9. sınıf öğrencisi Ayşe Gül.
          Okulumuzda radyo, podcast vb. ders dışı etkinliklerde yer alıyorum.
          Podcast uygulamalarında alternatif eğitimi hedeflerken, mevcut radyo
          etkinliklerimizde okul öğrencilerimizin fikirlerini alarak öğle
          aralarını daha keyifli hale getirmeye çalışıyoruz.
        </span>
      ),
      english: (
        <span>
          "Hello, I'm Ayşe Gül, a 9th grade student at Tuğba Özbek Anatolian
          High School. I participate in extracurricular activities such as radio
          and podcasting at our school. While aiming for alternative education
          in podcast applications, in our current radio activities, we try to
          make our lunch breaks more enjoyable by taking ideas from our school
          students."
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146973251-0321afe6-b1fd-4395-a12e-45cccc267b3c.jpg",
    bio: {
      turkish: (
        <span>
          Ben Aslı. Tuğba Özbek Anadolu Lisesi'nde 9.sınıf öğrencisiyim.
          Renklerin kodlarını öğrenmeyi çok severim. Sinema ve müzik endüstrisi
          ilgimi çekiyor. Uyumaya çok düşkünüm. Okulumuzun okuldışı faaliyeti
          olan Podcast'e katılıyorum. Burada yeni şeyler öğrenip projeler
          üretiyoruz.
        </span>
      ),
      english: (
        <span>
          "My name is Aslı. I am a 9th grade student at Tuğba Özbek Anatolian
          High School. I love learning color codes. I am interested in the
          cinema and music industry. I am very fond of sleeping. I participate
          in the school's extracurricular activity, Podcast, where we learn new
          things and work on projects.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146681056-d6611095-a53b-43da-8461-785a71458570.png",
    bio: {
      turkish: (
        <span>
          Ben Arda Ceylan. Tuğba Özbek Anadolu Okulu'nda öğrenciyim. 9.
          sınıftayım. Filmlere bağımlıyım. Film izlediğim zamanlar dışında
          zamanımı kitaplarla, video oyunlarıyla, D&D ve çizgi romanlarla
          geçiriyorum. Aynı zamanda Vertical, TÖAL Podcast üyesiyim.{" "}
        </span>
      ),
      english: (
        <span>
          My name is Arda Ceylan. I am a student at Tuğba Özbek Anatolian High
          School and I am in 9th grade. I am addicted to movies. Apart from
          watching movies, I spend my time with books, video games, D&D and
          comics. I am also a member of Vertical and TÖAL Podcast.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146681220-4a069239-dd9c-4bf2-a8da-2262c843c9c5.png",
    bio: {
      turkish: (
        <span>
          Ben M.Osman Gültepe. Sivaslıyım. Tuğba Özbek Anadolu Lisesinde, 9/B
          sınıfında okuyorum. TÖAL Podcast grubundayım. Futbol oynamayı ve
          online oyunlar oynamayı severim. Okulumda ders dışı bir etkinlik
          olarak TÖAL Podcast'e katılıyorum.{" "}
        </span>
      ),
      english: (
        <span>
          I am M.Osman Gültepe. I'm from Sivas. I'm a 9th-grade student at Tuğba
          Özbek Anatolian High School. I am a member of TÖAL Podcast group. I
          enjoy playing football and online games. I participate in TÖAL Podcast
          as an extracurricular activity at my school.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146688310-9408ec6d-07d1-417a-b8ff-88dae68a86b4.png",
    bio: {
      turkish: (
        <span>
          Adım Tuğsem Özçiçekçi. 13 yaşındayım. Tuğba Özbek Anadolu Lisesi'nde
          9. sınıf okuyorum. Podcast grubumuzun kameramanıyım. Klip çekiyorum,
          editliyorum ve editlenmiş videoları sosyal medya platformlarında
          paylaşıyorum. Hobilerim şarkı söylemek ve müzik dinlemek.{" "}
        </span>
      ),
      english: (
        <span>
          "My name is Tuğsem Özçiçekçi. I'm 13 years old and I'm a 9th grade
          student at Tuğba Özbek Anadolu High School. I'm the cameraperson of
          our podcast group. I shoot and edit videos and share them on social
          media platforms. My hobbies are singing and listening to music.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146972310-4c129751-030a-4efb-9fde-9a2ca42fd92f.png",
    bio: {
      turkish: (
        <span>
          Merhaba, ben Zeynep Bakıcı. İzmir'de Tuğba Özbek Anadolu Lisesi'nde
          okuyorum. Okulumuzda hepimizin düşüncelerinin beyan edildiği podcast
          ve radyo grubunun bir üyesiyim bu grupta ses işleme ve radyo kısmında
          faaliyet gösteriyorum. Bu grupta olmaktan mutluluk duyuyorum
        </span>
      ),
      english: (
        <span>
          Hello, I'm Zeynep Bakıcı. I'm studying at Tuğba Özbek Anatolian High
          School in Izmir. I'm a member of the podcast and radio group where
          everyone's thoughts are expressed. I'm involved in voice processing
          and radio activities in this group. I'm happy to be part of this
          group."
        </span>
      ),
    },
  },

  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146785687-99f3e6d0-74be-4ad2-84dc-7217903bb124.png",
    bio: {
      turkish: (
        <span>
          Adım Ömer Ali Kılıç, Tuğba Özbek Anadolu Lisesi öğrencisiyim.
          Bulunduğum podcast grubunun ses işleme bölümünde çalışıyorum.
        </span>
      ),
      english: (
        <span>
          My name is Ömer Ali Kılıç, I am a student at Tuğba Özbek Anatolian
          High School. I work in the sound processing section of the podcast
          group I am a part of.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146785778-ec826ed2-6e01-4935-80e7-bfd37ea169aa.png",
    bio: {
      turkish: (
        <span>
          Ben Yağmur Sefil. 10. sınıf öğrencisiyim. Edebiyat başta olmak üzere
          felsefe, psikoloji ve popüler bilimle ilgileniyorum. Okulumuzun
          Podcast etkinliklerinde şiir, pasaj seslendirmeleri yapıyorum, bunun
          dışında kendi fikirlerim ve film incelemelerimi de bu şekilde
          paylaşıyorum.
        </span>
      ),
      english: (
        <span>
          "My name is Yağmur Sefil. I'm a 10th-grade student. I'm interested in
          literature, philosophy, psychology, and popular science. In our
          school's Podcast activities, I recite poetry and passages, and also
          share my own ideas and film reviews.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146962882-dc117ea4-d36d-4862-ae57-d69c4dcf0741.png",
    bio: {
      turkish: (
        <span>
          Ben Asya, İzmir’de yaşıyorum. Tuğba Özbek Anadolu lisesi, 11. sınıf
          öğrencisiyim. Okul dışı yaptığımız bu projeye kayıt yaparak yardım
          ediyorum. Daha çok fikirler sunmaya ve öğretmeye dayalı bu proje
          alternatif bir eğitim sunuyor bizlere. Ben daha çok fikir sunmaya veya
          felsefe dayalı konular hakkında kayıtlar yapıyorum. Eğer projemize
          fırsat tanınırsa çok iyi yerlere gelebileceğimizi düşünüyorum.
        </span>
      ),
      english: (
        <span>
          My name is Asya, and I live in Izmir. I am an 11th grade student at
          Tuğba Özbek Anatolian High School. I contribute to this
          extracurricular project by recording sessions. This project offers an
          alternative education approach that focuses more on providing ideas
          and teaching. I mainly record sessions related to sharing ideas or
          philosophy-based topics. I believe that if we are given the
          opportunity, our project can go to great heights.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146963827-c897c338-11fe-42a3-b79e-7718ea65e264.jpg",
    bio: {
      turkish: (
        <span>
          Merhaba. Benim adım Yaren. 17 yaşındayım ve 11. sınıf öğrencisiyim.
          Genelde enerjik ve neşeliyimdir. Tuğba Özbek Anadolu Lisesi Vertical
          takımındayım. Kitap okumayı, fotoğraf çekmeyi ve film izlemeyi
          severim. Sahne Tozu Tiyatrosu'nda iki yıl tiyatro dersi aldım ve bir
          tiyatro oyununda oynadım.
        </span>
      ),
      english: (
        <span>
          Hello. My name is Yaren. I'm 17 years old and a student in 11th grade.
          I'm generally energetic and cheerful. I'm a member of the Vertical
          team at Tuğba Özbek Anatolian High School. I like reading books,
          taking photos, and watching movies. I took two years of theater
          classes at Sahne Tozu Theater and acted in a theater play.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146965724-708b1728-3fc6-4ac9-a129-793aef917c21.png",
    bio: {
      turkish: (
        <span>
          Merhaba ben Kağan. Dört sene önce öğretmenlerim ve arkadaşlarım
          aracılığıyla katıldığım bu grupta mükemmel işler yaptık. Biz bir sanat
          oluşturduk evet ses düzenlemek de resim yapmak gibi bir sanat...
          Hayatımı ders çalışarak ve eğlenerek geçirdim. Ama aslında biz
          üreticiyiz ve bu bizle de bizden sonra da devam etmeli biz ve ben
          bunun için çalışıyoruz.
        </span>
      ),
      english: (
        <span>
          Hello, I am Kağan. Four years ago, I joined this group through my
          teachers and friends, and we did great work. We created an art, and
          yes, sound editing is like painting, it's an art... I have spent my
          life studying and having fun. But in fact, we are producers, and this
          should continue with us and after us, and I am working towards that
          goal.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/147108056-9570194d-0738-4753-b46c-c320b2247332.jpg",
    bio: {
      turkish: (
        <span>
          Ben Berke. Okulumuzun podcast grubunun en uzun süreye sahip
          katılımcısıyım. Ses düzenleme ekibindeki diğer arkadaşımla beraber
          alınan ses kayıtlarını düzenleyip sunulabilecek hale getiriyoruz.
        </span>
      ),
      english: (
        <span>
          My name is Berke. I am the longest-standing member of our school's
          podcast group. Together with my colleague in the audio editing team,
          we edit the recorded audio to make it presentable for the audience.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146972491-d32d975d-eee7-4362-bb69-e27ce7819ddc.jpg",
    bio: {
      turkish: (
        <span>
          Herkese merhaba ben Esmanur Gültekin Tuğba Özbek Anadolu Lisesinde 10.
          Sınıf öğrenciyim Yapmaktan zevk aldığım birçok çeşit aktivite var
          bunlardan birkaç tanesi müzik dinlemek, yoga veya yürüyüş yapmak ve
          kitap okumaktan fazlasıyla hoşlanırım onun dışında okul dışı faaliyet
          olarak podcast grubunun katılımcıları arasında metin yazarıyım ve bu
          konuda da kendimi birçok anlamda geliştirmek istiyorum Şuan kurgusunu
          kendim yazdığım bir roman yazıyorum ve podcast grubununda bu alanda
          fayda sağlayacağını düşünüyorum:)
        </span>
      ),
      english: (
        <span>
          Hello everyone, my name is Esmanur Gültekin and I am a 10th grade
          student at Tuğba Özbek Anatolian High School. I enjoy a variety of
          activities such as listening to music, doing yoga or going for walks,
          and reading books. Apart from that, as an extracurricular activity, I
          am a scriptwriter for the podcast group and I would like to develop
          myself in this field. Currently, I am writing a novel that I created
          the plot for and I think it would be beneficial for the podcast group
          as well:)
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146973405-2b74cb22-0dda-41bb-9a17-24ca0d679a0c.jpeg",
    bio: {
      turkish: (
        <span>
          Ben Zeynep Yaşlıca. 15 yaşındayım ve Tuğba Özbek Anadolu Lisesinde 10.
          Sınıf öğrencisiyim. Müzik dinleneyi , kitap okumayı ve uyumayı
          seviyorum . Onun dışında okul dışı faaliyet olan podcaste katılıyorum.
        </span>
      ),
      english: (
        <span>
          My name is Zeynep Yaşlıca. I'm 15 years old and I'm a 10th grade
          student at Tuğba Özbek Anatolian High School. I enjoy listening to
          music, reading books, and sleeping. Besides that, I participate in the
          podcast group as an extracurricular activity.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146974579-783a0487-548a-468b-8349-72c48c47c1d0.jpg",
    bio: {
      turkish: (
        <span>
          Ben Helin. İzmir'de yaşıyorum.Tuğba Özbek Anadolu lisesinde okuyorum.
          11. sınıfım. Okul dışı bir etkinlik olan podcaste katkıda bulunuyorum.
          Yaratıcı fikirlerle ilerlettiğimiz grubumuzun hem eğlendirici hem
          öğretici olduğunu düşünüyorum.
        </span>
      ),
      english: (
        <span>
          My name is Helin. I live in Izmir and I am an 11th grade student at
          Tuğba Özbek Anatolian High School. I contribute to a podcast, which is
          an extracurricular activity. I think our group, which we advance with
          creative ideas, is both entertaining and educational.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146975023-3621251e-2c53-4dff-b2ac-f7c3b77be68a.jpg",
    bio: {
      turkish: (
        <span>
          Ben Yusuf Kutsi Kirmizi. Tuğba Özbek Anadolu Lisesi 9. Sınıf
          öğrencisiyim Vertical TÖAL podcast ve radyo grubunda yer aliyorum. Boş
          zamanlarimda Film ve dizi izlemeyi severim. Oyun oynayan biri
          değilimdir. Koleksiyon yapmayi severim. Son zamanlarda arkadaşlarımla
          küçük bir D&D grubu kurduk.
        </span>
      ),
      english: (
        <span>
          My name is Yusuf Kutsi Kirmizi. I am a 9th-grade student at Tuğba
          Özbek Anatolian High School and a member of the Vertical TÖAL podcast
          and radio group. In my free time, I enjoy watching movies and series.
          I am not someone who plays games, but I like to collect things.
          Recently, I formed a small D&D group with my friends.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/147111377-3383b564-f82e-4851-b604-ba1257ba12ca.jpeg",
    bio: {
      turkish: (
        <span>
          Ben Ceren Kocakahya. 10 Ocak 2005’te İzmir’de doğdum. Ancak Bursa’da
          büyüdüm ve ilköğretimimi orada tamamladım. 6. Sınıfta müzik
          öğretmenimin yönlendirmesiyle keman çalmaya başladım. Bunun yanında
          akademik olarak da gayet başarılıydım ve sınıfımda 2. olarak mezun
          oldum. İlköğretimden sonra ortaöğretim için İzmir’e geldim.{" "}
          <span className="bio--section-link" onClick={activateReadMore}>
            Dahasını oku...
          </span>
          <span className="d-none">
            Dışa dönük ve kendini ortaya atan biri olduğum için daha ilk yılımda
            ilk etkinlikte sahne aldım. Tam gaz etkinliklere devam ederken bir
            yandan tekrar keman kursuna başladım. Ancak pandemi sebebiyle
            kursumdan da okulumdan da uzak kaldım. Bu süreçte kendim
            çalışmalarıma devam ettim. Şan dersi almaya başladım, evdeki
            gitarımla çalışmalar yaptım. Okullar açılınca tekrar etkinliklere
            katıldım. Piyano kursuna başladım. Şimdi de diğer ilgi alanlarımla
            ilgili etkinliklere katılıyorum.
          </span>
        </span>
      ),
      english: (
        <span>
          My name is Ceren Kocakahya. I was born on January 10, 2005 in Izmir,
          but I grew up in Bursa and completed my primary education there. In
          6th grade, I started playing the violin at the direction of my music
          teacher. Along with this, I was academically successful and graduated
          2nd in my class. After primary school, I came to Izmir for high
          school.{" "}
          <span className="bio--section-link" onClick={activateReadMore}>
            Read more...
          </span>
          <span className="d-none">
            As an outgoing and self-expressive person, I performed on stage at
            the first event in my school. While continuing with events, I also
            resumed my violin lessons. However, due to the pandemic, I was away
            from my lessons and my school. During this time, I continued
            practicing on my own, started taking vocal lessons, and practiced
            with the guitar at home. When schools reopened, I started attending
            events again and also began taking piano lessons. Now I participate
            in activities related to my other interests.
          </span>
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/147111276-c07a25d0-10da-4b8e-94aa-1c899951bb8d.jpeg",
    bio: {
      turkish: (
        <span>
          Herkese merhaba. Ben Naz Akan. Tuğba Özbek Anadolu Lisesinde okuyorum.
          Şarkı söylemek benim için nefes almak gibi bir şey. Çok seviyorum.
          Yeni şeyler keşfetmeyi seviyorum. Ayrıca okulumuzda bulunan Podcast
          etkinliğine katılıyorum. Burada hem fikir alışverişi yapıyoruz hem de
          takım ruhuyla çalışmayı öğreniyoruz.
        </span>
      ),
      english: (
        <span>
          Hello everyone. I am Naz Akan. I am a student at Tuğba Özbek Anatolian
          High School. Singing is like breathing for me, I love it. I enjoy
          discovering new things. Also, I participate in the Podcast activity in
          our school. Here, we exchange ideas and learn to work as a team.
        </span>
      ),
    },
  },
];

export default datas;
