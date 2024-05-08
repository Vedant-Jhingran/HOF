let input = "vedant";

function reverseWithDelay(inputStr) {
    setTimeout(() => {
        console.log(inputStr.split("").reverse().join(""));
    }, 2000);
}

reverseWithDelay(input);