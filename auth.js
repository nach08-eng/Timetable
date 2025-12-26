function handleLogin(event) {
    event.preventDefault();

    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("loginMessage");

    // Demo credentials (replace later with backend)
    if (role === "admin" && username === "admin" && password === "admin123") {
        localStorage.setItem("role", "admin");
        window.location.href = "index.html";
    }
    else if (role === "teacher" && username === "teacher" && password === "teacher123") {
        localStorage.setItem("role", "teacher");
        window.location.href = "index.html";
    }
    else {
        msg.textContent = "Invalid credentials!";
    }
}

// Disable right-click
                document.addEventListener('contextmenu', function(e) {
                 e.preventDefault();
                });

            // Disable right-click with an alert
                document.addEventListener('contextmenu', function(e) {
                 alert("Sorry, right click is disabled!");
                e.preventDefault();
            });

            // Disable specific keyboard shortcuts
            document.onkeydown = function(e) {
            if (e.keyCode == 123) { // Disable F12
            return false;
           }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Disable Ctrl+Shift+I
            return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Disable Ctrl+Shift+C
            return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Disable Ctrl+Shift+J
            return false;
            }
            if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Disable Ctrl+U
            return false;
            }
            if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) { // Disable Ctrl+S
            return false;
            }
            };
