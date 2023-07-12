import { Lilita_One, Didact_Gothic } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import style from "@styles/CompanyAndVentures.module.scss";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin-ext"],
});

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin-ext"],
});

const CompanyAndVentures = () => {
  return (
    <div className={style.container}>
      {/* <div className={style.circle}>
        <div className={style.outerBorder}>
          <div className={style.innerBorder}></div>
        </div>
      </div>
      <div className={style.circle2}>
        <div className={style.outerBorder}>
          <div className={style.innerBorder}></div>
        </div>
      </div>
      <div className={style.circle3}>
        <div className={style.outerBorder}>
          <div className={style.innerBorder}></div>
        </div>
      </div> */}
      <h1 className={`${style.title} ${didact.className}`}>
        Our <span> Ventures</span>
      </h1>
      <div className={style.ventures}>
        <div className={style.company}>
          <div className={style.logo}>
            <Image src={"/corpLogos/tps.png"} alt="" fill />
          </div>
          <h1>The Pune Studio</h1>
          <p className={didact.className}>
            The Pune Studio is a dynamic and versatile multipurpose studio
            with Pune's first-biggest Chroma Screen that has been serving the
            creative industry since its establishment in 2021. With two
            successful years under its belt, it has become a go-to destination
            for corporate ad shoots, advertisement shorts, video shoots, and
            more. Located in the vibrant neighbourhood of Erandwane, Pune, our
            state-of-the-art facilities and experienced team ensure
            exceptional quality and seamless production experiences for our
            clients.
          </p>
        </div>
        <div className={style.company}>
          <div className={style.logo}>
            <Image src={"/corpLogos/delilah.png"} alt="" fill />
          </div>
          <h1>Delilah Kitchen & Bar</h1>
          <p className={didact.className}>
            Delilah Restaurant & Bar, an exquisite haven inspired by Roman
            elegance and charm. Nestled in the heart of Kothrud, our newly
            launched establishment invites you to indulge in a delightful
            dining experience like no other. With a tastefully crafted menu
            featuring contemporary culinary innovations, our restaurant offers
            a tantalizing array of dishes to please even the most discerning
            palates. To enhance your dining experience, we feature live
            singing performances that captivate and entertain. Delilah
            promises a memorable journey through tantalizing flavors and
            captivating melodies.
          </p>
        </div>
      </div>
      <h1 className={`${style.title} ${didact.className}`}>
        Our <span> Companies</span>
      </h1>
      <div className={style.logos}>
        <div className={style.company}>
          <div className={style.logo}>
            <Image src={"/corpLogos/trispirit.png"} alt="" fill />
          </div>
          <h1>Trispirit Studios Private Limited</h1>
        </div>
        <div className={style.company}>
          <div className={style.logo}>
            <Image src={"/corpLogos/tapas.png"} alt="" fill />
          </div>
          <h1>Tapas Hospitality LLP</h1>
        </div>
        <div className={style.company}>
          <div className={style.logo}>
            <Image src={"/assets/images/about.jpg"} alt="" fill />
          </div>
          <h1>BlendWhite International</h1>
        </div>
        <div className={style.company}>
          <div className={style.logo}>
            <Image src={"/assets/images/about.jpg"} alt="" fill />
          </div>
          <h1>Namoji Adhya Sports Management</h1>
        </div>
        <div className={style.company}>
          <div className={style.logo}>
            <Image src={"/corpLogos/dynastical.png"} alt="" fill />
          </div>
          <h1>Dynastical Communication Private Limited</h1>
        </div>
      </div>
    </div>
  );
};

export default CompanyAndVentures;
