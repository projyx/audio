window.events = {};

window.events.onclick = {}
window.events.onclick.document = async function(event) {
    var target = event.target;
    var elem = target;

    Array.from(document.querySelectorAll('.modal')).forEach(elem=>{
        elem.remove();
    }
    );

    elem = target.closest('[href]');
    if (elem) {
        event.preventDefault();
        var href = elem.getAttribute('href');
        //console.log(47, href);
        rout.er(href);
    }
}

window.events.oncontextmenu = {}

window.events.onfocusout = {};

window.events.onsubmit = {};
