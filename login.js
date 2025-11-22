function loginStudent() {
    const reg = document.getElementById("regNumber").value.trim().toUpperCase();

    if (students[reg]) {
        localStorage.setItem("student", JSON.stringify(students[reg]));
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid Registration Number!";
    }
}
