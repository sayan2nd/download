const downloadButton = document.getElementById("downloadButton");
const buttonContent = document.getElementById("buttonContent");
const text = document.getElementById("text");
const icon = document.getElementById("icon");
const lottieContainer = document.getElementById("lottieAnimation");

let isDownloading = false;
let isCompleted = false;

downloadButton.addEventListener("click", () => {
  if (isDownloading || isCompleted) return; // Prevent multiple clicks or resetting after completion

  isDownloading = true;
  downloadButton.disabled = true;
  icon.classList.remove("bounce");
  icon.classList.add("spin");
  text.textContent = "Downloading...";

  // Simulate download delay
  setTimeout(() => {
    // Hide the button and show the animation in its place
    downloadButton.style.visibility = "hidden"; // Hide the button
    lottieContainer.style.display = "block"; // Show the animation container

    // Configure Lottie animation
    lottie.loadAnimation({
      container: lottieContainer,
      renderer: "svg",
      loop: true, // Infinite loop for tick animation
      autoplay: true,
      path: "tick.json", // Ensure the path is correct
    });

    // Update states
    isDownloading = false;
    isCompleted = true;
  }, 4000); // Simulate download duration
});