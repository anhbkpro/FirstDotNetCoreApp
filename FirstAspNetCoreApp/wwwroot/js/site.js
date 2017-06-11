// site.js
(function () {
    var name = $("#userName");
    name.text("Francis"); // text(1)

    var main = $("#main");

    main.on("mouseenter", function () {
        main.style = "background-color: #888;";
    });

    main.on("mouseleave", function () {
        main.style = "";
    });

    var menuItems = $("ul.menu li a");
    menuItems.on("click", function () { // it's magical in here, you can wire the function with each item in menuItems when it is clicked
        var me = $(this);
        alert(me.text()); // Note: text(2) when you pass a parameter into text() function --> it sets the text, against it returns the text that is contained in that element
    });

})();
