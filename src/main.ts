import "./style.css";

(function () {
    const bars = document.querySelector('.bars') as HTMLButtonElement;

    bars.onclick = () => {
        document.querySelector('.links')?.classList.toggle('mobile');
    }

})()