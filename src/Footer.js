import { FiMail } from "react-icons/fi";
import "./Footer.css"

export default function Footer() {
  return (<div className="footer-head">

    <div className="mail-div"><FiMail style={{ marginTop: '5%' }} size={32} />
      <p className="support-text">support@experienceconcerts.co</p></div>
    <p className="exp">EXP|CON</p>
    <p className="speer">2019 @ Al Rights Reserved | Speer Technologies Incorporated</p>

  </div>)
}