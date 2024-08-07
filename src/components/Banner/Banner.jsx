import "./Banner.scss";
import bannerAbout from "../../assets/images/banner-about.webp";
import bannerHome from "../../assets/images/banner-home.webp";
import { useLocation } from "react-router-dom";

function Banner({ children }) {
    const location = useLocation();
    const isAboutPage = location.pathname === "/about";
    const bannerImage = isAboutPage ? bannerAbout : bannerHome;
    const classNameBanner = isAboutPage ? "banner bannerAbout" : "banner bannerHome";

    return (
        <section aria-label="Bannière" className={classNameBanner}>
            <div className="overlay">
                {children}
            </div>
            <img className="img" src={bannerImage} alt="Bannière - Paysage" title="Bannière - Paysage "/>
        </section>
    );
}

export default Banner;
