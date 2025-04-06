let progressBar = document.getElementById("progress-bar");
let increaseProgress = document.getElementById("increaseProgress");
let decreaseProgress = document.getElementById("decreaseProgress");

increaseProgress.addEventListener('click', () => {
    let currentWidth = parseFloat(progressBar.style.width) || 0;
    if (currentWidth < 100) {
        progressBar.style.width = (currentWidth + 10) + "%";
    }
});

decreaseProgress.addEventListener('click', () => {
    let currentWidth = parseFloat(progressBar.style.width) || 0;
    if (currentWidth > 0) {
        progressBar.style.width = (currentWidth - 10) + "%";
    }
});
