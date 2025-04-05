document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".rervese button").addEventListener("click", function () {
        swapFields();
    });
    function swapFields() {
        let input1 = document.getElementById("searchbarfeild1");
        let input2 = document.getElementById("searchbarfeild2");
        let temp = input1.value;
        input1.value = input2.value;
        input2.value = temp;
    }
});
