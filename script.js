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








// const btnActive = document.querySelector('.portBox')
// const iconClose = document.querySelector('.icon-close')


// btnActive.addEventListener('click', ()=> {
//     wrapper.classList.add('portActive');
// });
// iconClose.addEventListener('click', ()=> {
//     wrapper.classList.remove('.portActive');
// });

