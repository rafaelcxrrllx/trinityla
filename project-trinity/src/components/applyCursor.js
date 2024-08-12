import {convertAniBinaryToCSS} from 'ani-cursor';

async function applyCursor(selector, aniUrl) {
    const response = await fetch(aniUrl);
    const data = new Uint8Array(await response.arrayBuffer());

    const style = document.createElement('style');
    style.innerText = convertAniBinaryToCSS(selector, data);

    document.head.appendChild(style);
}


applyCursor(document.body, "../assets/cursor/Matrix\ Pixel\ Animated--pointer--SweezyCursors.cur");