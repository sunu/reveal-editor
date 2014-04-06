(function (global, document) {

    function init () {
        var addButton = document.getElementById("add");
        addButton.addEventListener("click", onAddClick);
        var saveButton = document.getElementById("save");
        saveButton.addEventListener("click", onSaveClick);
    }

    function onAddClick () {
        var template = "<h1>A NEW SLIDE</h1>\
                    <h3>An awesome one.</h3>\
                    <p>Sample text.</p>"
        var element = document.createElement('section');
        element.innerHTML = template;
        var slides = document.getElementsByClassName('slides')[0];
        slides.appendChild(element);
        Reveal.next();
    }

    function onSaveClick () {
        var slides = document.getElementsByClassName('slides')[0];
        var html = document.getElementById("html");
        html.value = slides.innerHTML;
    }

    init();
})(window, window.document);
