function generateRandomNumberWithDelay(delayInSeconds) {
    let remainingTime = delayInSeconds;

    const interval = setInterval(function() {
        if (remainingTime > 0) {
            console.log("Time remaining:", remainingTime, "seconds");
            remainingTime--;
        } else {
            clearInterval(interval);
            const randomNumber = Math.floor(Math.random() * 100);
            console.log("Random number generated:", randomNumber);
        }
    }, 1000);
}

generateRandomNumberWithDelay(3);
