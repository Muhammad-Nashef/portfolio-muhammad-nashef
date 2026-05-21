import { useEffect } from "react";

export default function ClickEffect() {

  useEffect(() => {

    const createParticles = (x, y) => {

      for (let i = 0; i < 8; i++) {

        const particle = document.createElement("div");

        particle.className = "click-particle";

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        const angle = Math.random() * 360;
        const distance = 40 + Math.random() * 30;

        particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

        document.body.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 700);
      }
    };

    const handleClick = (e) => {
      createParticles(e.clientX, e.clientY);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };

  }, []);

  return null;
}