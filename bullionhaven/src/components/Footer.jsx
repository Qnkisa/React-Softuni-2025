import PampLogo from "../assets/pamp-logo.svg";
import PerthMintLogo from "../assets/perth-mint-logo.svg";
import RoyalMintLogo from "../assets/royal-mint-logo.svg";
import ValcambiLogo from "../assets/valcambi-logo.svg";
import AustrianMintLogo from "../assets/austrian-mint.svg"
import ArgorHeraeusLogo from "../assets/argor-heraeus-logo.svg";
import ChinaMintLogo from "../assets/china-mint-logo.svg";

import WebsiteLogo from "../components/WebsiteLogo";

export default function Footer(){
    return (
        <footer>
            <div className="footer-partners">
                <img src={ChinaMintLogo} alt="" />
                <img src={PampLogo} alt="" />
                <img src={PerthMintLogo} alt="" />
                <img src={RoyalMintLogo} alt="" />
                <img src={ValcambiLogo} alt="" />
                <img src={AustrianMintLogo} alt="" />
                <div className="argor-heraeus-class">
                    <img src={ArgorHeraeusLogo} alt=""/>
                </div>
            </div>
            <div className="footer-info">
                <div className="footer-info-div">
                    <div className="footer-website-logo">
                        <WebsiteLogo/>
                        <p>BullionHaven has a wealth of experience in financial services and precious metals trading. We are your trusted partner for buying and selling gold, silver, and currencies, providing secure transactions, expert guidance, and a seamless trading experience.</p>
                    </div>
                </div>
                <div className="footer-info-div footer-simular">
                    <p>Contacts</p>
                    <span>Phone: (415) 867-5309</span>
                    <span>Email: bullion@bullionhaven.com</span>
                    <div className="footer-socials">
                        <img src="/website-icons/facebook-logo.png" alt="" />
                        <img src="/website-icons/linkedin-logo.png" alt="" />
                        <img src="/website-icons/instagram-logo.png" alt="" />
                        <img src="/website-icons/youtube-logo.png" alt="" />
                        <img src="/website-icons/twitter-logo.png" alt="" />
                    </div>
                </div>
                <div className="footer-info-div footer-simular">
                    <p>Working time</p>
                    <span><strong>Monday:</strong> 09:00 - 18:00</span>
                    <span><strong>Tuesday:</strong> 09:00 - 18:00</span>
                    <span><strong>Wednesday:</strong> 09:00 - 18:00</span>
                    <span><strong>Thursday:</strong> 09:00 - 18:00</span>
                    <span><strong>Friday:</strong> 09:00 - 18:00</span>
                    <span><strong>Saturday:</strong> 09:00 - 18:00</span>
                    <span><strong>Sunday:</strong> 09:00 - 18:00</span>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 BullionHaven, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}