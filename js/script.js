const allYear = new Date().getFullYear();
        document.getElementById('year').textContent = allYear;

        // menu
        document.getElementById("menu-icon").addEventListener("click", function () {
            const navlist = document.getElementById("navlist");
            navlist.classList.toggle("active"); // Toggle the active class
        });

        // Close the navlist when clicking outside of it
        document.addEventListener("click", function (event) {
            const navlist = document.getElementById("navlist");
            const menuIcon = document.getElementById("menu-icon");

            if (!navlist.contains(event.target) && !menuIcon.contains(event.target)) {
                navlist.classList.remove("active");
            }
        });