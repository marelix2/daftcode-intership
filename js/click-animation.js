
        // let element = document.querySelector('.clipA');
        // console.log(element);
        //
        // element.addEventListener("click", function () {
        //     let el = document.querySelector('.clipA');
        //     el.classList.add('clipAnimation');
        //
        //     setTimeout(function () {
        //         el.classList.remove('clipAnimation');
        //     }, 2000);
        // });


    (()=>{

            const svg = document.querySelector('.clipA');

            svg.addEventListener("load", () => {
                const image = svg.contentDocument.rootElement;
                image.addEventListener('click', () => {
                    svg.classList.add('clipAnimation');

                    setTimeout(() => {
                        svg.classList.remove('clipAnimation');

                    }, 2000);
                });


            })
        })();