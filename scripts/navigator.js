const codeSwitch = document.getElementById('code-navigator');
const workSwitch = document.getElementById('work-navigator');
const workSection = document.getElementById('work');
const codeSection = document.getElementById('code');
const aboutSection = document.getElementById('about');
const aboutSwitch = document.getElementById('about-navigator');

workSection.hidden = false;
codeSection.hidden = true;
aboutSection.hidden = true;

const switchToWork = () => {
    workSection.hidden = '';
    codeSection.hidden = true;
    aboutSection.hidden = true;
    workSwitch.classList.remove('unselected-tab');
    workSwitch.classList.add('selected-tab');
    codeSwitch.classList.remove('selected-tab');
    codeSwitch.classList.add('unselected-tab');
    aboutSwitch.classList.add('unselected-tab');
    aboutSwitch.classList.remove('selected-tab');
}


const switchToCode = () => {
    workSection.hidden = true;
    codeSection.hidden = false;
    aboutSection.hidden = true;
    codeSwitch.classList.remove('unselected-tab');
    codeSwitch.classList.add('selected-tab');
    workSwitch.classList.remove('selected-tab');
    workSwitch.classList.add('unselected-tab');
    aboutSwitch.classList.add('unselected-tab');
    aboutSwitch.classList.remove('selected-tab');
}


const switchToAbout = () => {
    workSection.hidden = true;
    codeSection.hidden = true;
    aboutSection.hidden = false;
    workSwitch.classList.add('unselected-tab');
    workSwitch.classList.remove('selected-tab');
    codeSwitch.classList.add('unselected-tab');
    codeSwitch.classList.remove('selected-tab');
    aboutSwitch.classList.add('selected-tab');
    aboutSwitch.classList.remove('unselected-tab');
}

codeSwitch.onclick = switchToCode;
workSwitch.onclick = switchToWork;
aboutSwitch.onclick = switchToAbout;