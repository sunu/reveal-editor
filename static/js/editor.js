(function (global, document) {

    function init () {
        var addButton = document.getElementById("add");
        addButton.addEventListener("click", onAddClick);
        var saveButton = document.getElementById("save");
        saveButton.addEventListener("click", onSaveClick);
        initTinyMCE();
    }

    function initTinyMCE () {
        tinymce.init({
            selector: "section",
            theme: "modern",
            add_unload_trigger: false,
            schema: "html5",
            inline: true,
            plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste"
            ],
            toolbar1: "styleselect | bold italic | alignleft aligncenter alignright alignjustify",
            toolbar2: "bullist numlist outdent indent | link image media",
            statusbar: true,
            fixed_toolbar_container: "#toolbar",
            menubar: false,
        });
    }

    function onAddClick () {
        var template = "<h1>A NEW SLIDE</h1>\
                    <h3>An awesome one.</h3>\
                    <p>Sample text.</p>"
        var element = document.createElement('section');
        element.innerHTML = template;
        var slides = document.getElementsByClassName('slides')[0];
        slides.appendChild(element);
        initTinyMCE();
        Reveal.next();
        tinyMCE.activeEditor.focus();
    }

    function onSaveClick () {
        var slides = document.getElementsByClassName('slides')[0];
        var html = document.getElementById("html");
        html.value = slides.innerHTML;
    }

    init();
})(window, window.document);
