import React, { useState } from "react";
import "./Collapse.scss";

function Collapse({ titleCollapse, textCollapse }) {
    const [isOpen, setIsOpen] = useState(false);
    const [animation, setAnimation] = useState("0");

    const open = () => {
        setAnimation("1");
        setIsOpen(true);
    };

    const close = () => {
        setAnimation("0");
        setIsOpen(false);
    };

    return isOpen ? (
        <div className="collapse" animation={animation}>
            <button aria-haspopup="true" aria-expanded="true" onClick={() => close()}>
                <h3 className="title">{titleCollapse}</h3>
                <i className={`fa-solid fa-chevron-down fa-1x icone`} animation={animation}></i>
            </button>
            <div className="containerText">{textCollapse}</div>
        </div>
    ) : (
        <div className="collapse" animation={animation}>
            <button aria-haspopup="true" aria-expanded="false" className="button" onClick={() => open()}>
                <h3 className="title">{titleCollapse}</h3>
                <i className={`fa-solid fa-chevron-down fa-1x icone`} animation={animation}></i>
            </button>
        </div>
    );
}

export default Collapse;
