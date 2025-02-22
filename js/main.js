document.addEventListener('DOMContentLoaded', function() {
    renderMathInElement(document.body, {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "\\(", right: "\\)", display: false},
            {left: "\\[", right: "\\]", display: true}
        ]
    });
});

function renderMathInElement(el, options) {
    const mathElements = el.querySelectorAll('.math, .inline-math, .display-math');
    mathElements.forEach(function(el) {
        katex.render(el.textContent, el, options);
    });
}