(function () {

    var myNavIcon = document.querySelector('.mobile-menu');
    var myMainMenu = document.querySelector('.menu');

    myNavIcon.addEventListener('click', function (event) {
        event.preventDefault();
        myMainMenu.classList.toggle('show');

    }, false);

})();
