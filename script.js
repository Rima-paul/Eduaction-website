document.addEventListener("DOMContentLoaded", () => {
    // Handle Login Form Submission
    const loginForm = document.querySelector(".login-form form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            if (email && password) {
                alert("Login successful!"); // Replace with actual authentication
                window.location.href = "dashboard.html";
            } else {
                alert("Please enter valid credentials.");
            }
        });
    }
    
    // Handle Registration Form Submission
    const registerForm = document.querySelector(".register-form form");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            
            if (name && email && password && confirmPassword) {
                if (password === confirmPassword) {
                    alert("Registration successful!"); // Replace with actual user creation logic
                    window.location.href = "login.html";
                } else {
                    alert("Passwords do not match.");
                }
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
    
    // Dynamic Course Recommendations (Mock Example)
    const recommendedCourses = document.querySelector(".recommended .course-list");
    if (recommendedCourses) {
        const courses = [
            { title: "Machine Learning Basics", img: "ml-basics.jpg", link: "course-details.html" },
            { title: "React for Beginners", img: "react.jpg", link: "course-details.html" }
        ];
        courses.forEach(course => {
            const div = document.createElement("div");
            div.classList.add("course");
            div.innerHTML = `
                <img src="${course.img}" alt="${course.title}">
                <h4>${course.title}</h4>
                <a href="${course.link}" class="btn">Start Learning</a>
            `;
            recommendedCourses.appendChild(div);
        });
    }
    
    // Handle Join Live Class Button Clicks
    const liveClassButtons = document.querySelectorAll(".live-classes .btn");
    liveClassButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Redirecting to live class..."); // Replace with actual live session logic
        });
    });
});
