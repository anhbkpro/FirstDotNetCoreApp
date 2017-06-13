// site.js
(function () {
    //var name = $("#userName");
    //name.text("Francis"); // text(1)

    //var main = $("#main");

    //main.on("mouseenter", function () {
    //    main.style = "background-color: #888;";
    //});

    //main.on("mouseleave", function () {
    //    main.style = "";
    //});

    //var menuItems = $("ul.menu li a");
    //menuItems.on("click", function () { // it's magical in here, you can wire the function with each item in menuItems when it is clicked
    //    var me = $(this);
    //    alert(me.text()); // Note: text(2) when you pass a parameter into text() function --> it sets the text, against it returns the text that is contained in that element
    //});

    var $sidebarAndWrapper = $("#sidebar,#wrapper"); // I add $ to $sidebarAndWrapper --> I can more easily as I read it, know that this is a jQuery object
    var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar"); // hide-sidebar: name of class we will toggle
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        } else {
            $icon.removeClass("fa-angle-right");
            $icon.addClass("fa-angle-left");
        }
    });

})();
