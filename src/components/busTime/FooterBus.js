import React, { useState } from "react";
import "../FooterMain.css";

const FooterBus = (props) => {

  const [isOpen, setIsopen] = useState(true);
  const toStation = () => {
      setIsopen(true)
      props.setGoto("station")
  }
  const toCampus = () => {
     setIsopen(false)
     props.setGoto("campus")

}
  
  return (
    <div>
      <div className="footer-container">
        <div onClick={toStation} className={`footer-to-station ${isOpen ? "footer-line" : "" }`}>학교-&gt;밀양역 </div>
        <div onClick={toCampus} className={`footer-to-campus ${isOpen ? "" : "footer-line" }`}>밀양역-&gt;학교 </div>
      </div>
    </div>
  )
}

export default FooterBus
