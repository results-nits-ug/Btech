document.getElementById('lgin').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the input fields
    const username = document.getElementById('Rol').value;
    const password = document.getElementById('pass').value;

    // Simple validation (replace this with your actual validation logic)
    if (username === "221310017" && password === "deepak17") {
        // Redirect to another page if credentials are correct
        window.location.href = "result.html"; // Change this to your desired page
    } else if (username === "221320012" && password === "nikhil@#123") {
        // Redirect to another page if credentials are correct
        window.location.href = "resultnikhil.html"; // Change this to your desired page
    } else {
        // Show error message
        alert('Wrong Password');
    }
});