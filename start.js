
               // Function to display the warning message for 5 seconds
        function showWarning() {
            var warningDiv = document.getElementById('warning');
            warningDiv.style.display = 'block';
            setTimeout(function() {
                warningDiv.style.display = 'none';
            }, 10000); // Hide after 5 seconds (5000 milliseconds)
        }

        // Call the function to show the warning when the page loads
        window.onload = function() {
            showWarning();
        };
// Check if sessionStorage contains a flag indicating that the page was already opened
if (sessionStorage.getItem('pageOpened')) {
    // If the flag is found, close the window
    window.close();
} else {
    // If the flag is not found, set it in sessionStorage
    sessionStorage.setItem('pageOpened', 'true');
}
// Check if sessionStorage contains the count of refreshes
var refreshCount = sessionStorage.getItem('refreshCount');
if (refreshCount === null) {
    // If count is not found, set it to 0
    sessionStorage.setItem('refreshCount', 0);
    refreshCount = 0;
} else {
    // If count is found, increment it
    refreshCount = parseInt(refreshCount) + 1;
    sessionStorage.setItem('refreshCount', refreshCount);
}

// Check if the page has been refreshed twice
if (refreshCount >= 1) {
    // If refreshed twice, reload the page
    location.reload();
}




        function toggleDeveloperInfo() {
            var developerInfo = document.getElementById('developer-info');
            if (developerInfo.style.display === 'none') {
                developerInfo.style.display = 'block';
            } else {
                developerInfo.style.display = 'none';
            }
        }
        function validatePassword() {
            var passwordInput = document.getElementById('password').value;
            if (passwordInput === 'cicada 3301') {
                // Redirect to the next page
                window.location.href = 'homepage.html';
                return false; // Prevent default form submission
            } else {
                alert('Incorrect answer, please try again.');
                return false; // Prevent default form submission
            }
        }
