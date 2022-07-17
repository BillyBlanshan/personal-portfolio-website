let htmlClick = document.getElementById('htmlClicker');
let cssClick = document.getElementById('cssClicker');
const jsClick = document.getElementById('jsClicker');

function resetCSSText() {
    cssClick.style.color = '#463f3a'
    cssClick.style.backgroundColor = '#f4f3ee'
    document.getElementById('css-text').style.display = 'none'
}

function resetHTMLText() {
    htmlClick.style.color = '#463f3a'
    htmlClick.style.backgroundColor = '#f4f3ee'
    document.getElementById('html-text').style.display = 'none'
}

function resetJSText() {
    jsClick.style.color = '#463f3a'
    jsClick.style.backgroundColor = '#f4f3ee'
    document.getElementById('js-text').style.display = 'none'
}

function revealHTMLText() {
    if (document.getElementById('html-text').style.display === 'block') {
        resetHTMLText()
    } else {
        document.getElementById('html-text').style.display = 'block'
        htmlClick.style.color = '#f4f3ee'
        htmlClick.style.backgroundColor = '#463f3a'
    
        resetCSSText()
        resetJSText()
    }
}

function revealCSSText() {
    if (document.getElementById('css-text').style.display === 'block') {
        resetCSSText()
    } else {
        document.getElementById('css-text').style.display = 'block'
        cssClick.style.color = '#f4f3ee'
        cssClick.style.backgroundColor = '#463f3a'
    
        resetHTMLText()
        resetJSText()
    }
}

function revealJSText() {
    if (document.getElementById('js-text').style.display === 'block') {
        resetJSText()
    } else {
        document.getElementById('js-text').style.display = 'block'
        jsClick.style.color = '#f4f3ee'
        jsClick.style.backgroundColor = '#463f3a'
    
        resetHTMLText()
        resetCSSText()
    }
}

htmlClick.onclick = revealHTMLText
cssClick.onclick = revealCSSText
jsClick.onclick = revealJSText

