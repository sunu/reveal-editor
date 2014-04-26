(function (global, document) {

    'use strict';

    function init () {
        var addButton = document.getElementById('add');
        addButton.addEventListener('click', onAddClick);
        var saveButton = document.getElementById('save');
        saveButton.addEventListener('click', onSaveClick);
    }


    function onAddClick () {
        var template = '<h1>Untitled Slide</h1>';
        var element = document.createElement('section');
        element.innerHTML = template;
        var slides = document.getElementsByClassName('slides')[0];
        slides.appendChild(element);
        Reveal.next();
    }

    function onSaveClick () {
        var slides = document.getElementsByClassName('slides')[0];
        var html = document.getElementById('html');
        html.value = slides.innerHTML;
    }

    init();
})(window, window.document);
