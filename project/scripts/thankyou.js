window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    document.getElementById("first_name").innerText = params.get("first_name");
    document.getElementById("last_name").innerText = params.get("last_name");
    document.getElementById("email").innerText = params.get("email");
    document.getElementById("mobile").innerText = params.get("mobile");
    document.getElementById("business_name").innerText = params.get("business_name");
    document.getElementById("timestamp").innerText = new Date().toLocaleString();
};
