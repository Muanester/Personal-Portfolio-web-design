import PureCounter from "@srexi/purecounterjs";
import { ProgressBar } from '@spectrum-web-components/progress-bar';

new ProgressBar();

new PureCounter();

var clickNav = document.getElementById('navTag');
const heading = document.getElementById('header');

if (clickNav) {
    clickNav.addEventListener('click', () => {
        heading.classList.add('animate');
    })
}

