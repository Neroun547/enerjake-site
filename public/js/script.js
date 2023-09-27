const sendMailForm = document.getElementById("send-mail-form");
const messageForm = document.querySelector(".message-form");

sendMailForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const api = await fetch("/send-mail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: e.target[0].value,
            message: e.target[1].value
        })
    });

    if(api.ok) {
        messageForm.style.display = "block";
        messageForm.style.color = "#fff";
        messageForm.style.backgroundColor = "green";
        messageForm.innerHTML = "Message sent";
    } else {
        messageForm.style.display = "block";
        messageForm.style.color = "#fff";
        messageForm.style.backgroundColor = "red";
        messageForm.innerHTML = "Opps, some error";
    }

    const timeOut = setTimeout(() => {
        messageForm.style.display = "none";

        clearTimeout(timeOut);
    }, 5000);
});
