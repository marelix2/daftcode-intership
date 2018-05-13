(function () {

    document.getElementById('clipA').addEventListener("mousedown", function (event) {
        console.log("wywoluje event", event);
        document.getElementById('clipA').classList.add('clipAnimation');

        setTimeout(function () {
            document.getElementById('clipA').classList.remove('clipAnimation');
        },2000);
    })
})();
