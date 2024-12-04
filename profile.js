document.addEventListener("DOMContentLoaded", () => {
    fetch("profile.php")
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                document.getElementById("profileContainer").innerHTML = `
                    <h2>Welcome, ${data.user.name}</h2>
                    <p>Email: ${data.user.email}</p>
                `;
            } else {
                alert(data.message);
                window.location.href = "login.html";
            }
        })
        .catch(error => console.error("Error:", error));
});
