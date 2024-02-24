import "./footer.scss";
import logoFooter from '../../assets/LOGOFOOTER.png'

export function Footer() {
    return (
        <div className="footer">
            <div className="footer_logo">
                <img src={logoFooter} alt="Logo du site" />
            </div>
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}