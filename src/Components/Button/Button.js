import classNames from "classnames";
import './Button.css'
import { useEffect } from "react";


const ButtonRipple = {
  init: () => {
    ButtonRipple.rippleEffectMovement();
  },

  rippleEffectMovement: () => {
    const buttonsNodeList = document.querySelectorAll("button");
    buttonsNodeList.forEach((btn) => {
      btn.addEventListener("mouseenter", function (e) {
        const target = e.target;
        const x = e.clientX - target.offsetLeft;
        const y = e.clientY - target.offsetTop;
        const rEffect = document.createElement("span");

        rEffect.style.left = `${x}px`;
        rEffect.style.top = `${y}px`;

        this.appendChild(rEffect);
        setTimeout(() => {
          rEffect.remove();
        }, 850);
      });
    });
  }
};

function Button({ children, secondary, primary, ...rest }) {

  useEffect(() => {
    ButtonRipple.init();
  }, [])
  
  const classes = classNames(
    {
      "primaryButton": primary,
      "secondaryButton": secondary
    },rest.className
  )
  return (
    <div className="ripple-btn-wrapper ">
      <button {...rest} className={classes}>{children}</button>
    </div>
  )
}


export default Button