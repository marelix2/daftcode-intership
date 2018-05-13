( () => {

    const svg = document.querySelector('.burger-ico');

    svg.addEventListener("load", () => {
        const image = svg.contentDocument.rootElement;
        image.addEventListener('click', () => {

           const burgerDiv = document.createElement('div');
           burgerDiv.classList.add('burger_body');

            burgerDiv.innerHTML = ' <div class="burger_body">\n' +
                '        <div class="burger_top">\n' +
                '            <div class="logo">\n' +
                '                <object type="image/svg+xml" data="assets/logo_awesome.svg">  </object>\n' +
                '            </div>\n' +
                '            <div class="header-burger">\n' +
                '                <object class="burger-x" type="image/svg+xml" data="assets/iks.svg">  </object>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '        <div class="burger_middle">\n' +
                '            <ul>\n' +
                '                <li><a href="#">features</a></li>\n' +
                '                <li><a href="#">case studies</a></li>\n' +
                '                <li><a href="#">about</a></li>\n' +
                '                <li class="contact"><a href="#">contact</a></li>\n' +
                '            </ul>\n' +
                '        </div>\n' +
                '\n' +
                '        <div class="burger_socials">\n' +
                '            <ul>\n' +
                '                <li><object class="social_ico" type="image/svg+xml" data="assets/fb.svg"></object></li>\n' +
                '                <li><object class="social_ico" type="image/svg+xml" data="assets/twitter.svg"></object></li>\n' +
                '                <li><object class="social_ico" type="image/svg+xml" data="assets/google+.svg"></object></li>\n' +
                '            </ul>\n' +
                '        </div>\n' +
                '\n' +
                '\n' +
                '    </div>'

           document.querySelector('body').appendChild(burgerDiv);

            const burgerX = document.querySelector('.burger-x');
            console.log("sth", burgerX);
            burgerX.addEventListener("load", () => {
                const imgSec = burgerX.contentDocument.rootElement;
                console.log(imgSec);
                imgSec.addEventListener('click', () => {

                    document.querySelector('body').removeChild(burgerDiv);
                });

            });


         });



    })
})();
