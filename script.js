function toggleImageInput() {
    var imageInput = document.getElementById("image-input");
    imageInput.click();
}

function handleImageUpload(event) {
    var file = event.target.files[0];

    if (file) {
        displayImage(file);

        var messageInput = document.getElementById("message-input");
        var messageText = messageInput.value.trim();

        if (messageText !== "") {
            displayTextMessage(messageText);
            messageInput.value = "";
        }

        sendImageResponse();

        event.target.value = "";
    }
}

function displayMessage(message, isUser) {
    var chatOutput = document.getElementById("chat-output");

    var messageContainer = document.createElement("div");
    messageContainer.classList.add(
        "message-container",
        isUser ? "user-message-container" : "response-message-container"
    );

    var messageElement = document.createElement("div");
    messageElement.classList.add(
        "message",
        isUser ? "user-message" : "response-message"
    );

    if (typeof message === "object") {
        var imageElement = document.createElement("img");
        imageElement.classList.add("chat-image");
        imageElement.src = message.image;
        messageElement.appendChild(imageElement);

        var textElement = document.createElement("div");
        textElement.textContent = message.text;
        messageElement.appendChild(textElement);
    } else {
        messageElement.textContent = message;
    }

    messageContainer.appendChild(messageElement);
    chatOutput.appendChild(messageContainer);

    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function displayTextMessage(messageText) {
    const chatOutput = document.getElementById("chat-output");

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container", "user-message-container");

    const textMessageElement = document.createElement("div");
    textMessageElement.classList.add("message", "user-message");
    textMessageElement.textContent = messageText;

    messageContainer.appendChild(textMessageElement);
    chatOutput.appendChild(messageContainer);

    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function displayImage(file) {
    const chatOutput = document.getElementById("chat-output");

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container", "user-message-container");

    const imageElement = document.createElement("img");
    imageElement.classList.add("message", "user-message", "chat-image");
    imageElement.src = URL.createObjectURL(file);

    messageContainer.appendChild(imageElement);
    chatOutput.appendChild(messageContainer);

    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function sendImageResponse() {
    var chatOutput = document.getElementById("chat-output");

    setTimeout(function () {
        var responseContainer = document.createElement("div");
        responseContainer.classList.add(
            "message-container",
            "response-message-container"
        );

        var responseMessageElement = document.createElement("div");
        responseMessageElement.classList.add("message", "response-message");
        responseMessageElement.textContent = "Your image looks great!";

        responseContainer.appendChild(responseMessageElement);
        chatOutput.appendChild(responseContainer);

        chatOutput.scrollTop = chatOutput.scrollHeight;
    }, 1000);
}

function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var chatOutput = document.getElementById("chat-output");

    var messageText = messageInput.value.trim();

    if (messageText !== "") {
        var messageContainer = document.createElement("div");
        messageContainer.classList.add(
            "message-container",
            "user-message-container"
        );

        var userMessageElement = document.createElement("div");
        userMessageElement.classList.add("message", "user-message");
        userMessageElement.textContent = messageText;

        messageContainer.appendChild(userMessageElement);
        chatOutput.appendChild(messageContainer);

        chatOutput.scrollTop = chatOutput.scrollHeight;

        sendTextResponse(messageText);

        messageInput.value = "";
    }
}

function sendTextResponse(userMessage) {
    var chatOutput = document.getElementById("chat-output");

    setTimeout(function () {
        var responseContainer = document.createElement("div");
        responseContainer.classList.add(
            "message-container",
            "response-message-container"
        );

        var responseMessageElement = document.createElement("div");
        responseMessageElement.classList.add("message", "response-message");
        responseMessageElement.textContent = getResponse(userMessage);

        responseContainer.appendChild(responseMessageElement);
        chatOutput.appendChild(responseContainer);

        chatOutput.scrollTop = chatOutput.scrollHeight;
    }, 1000);
}

function getResponse(message) {
    return "I don't know what you're talking about!";
}
