const chatBubble = document.getElementById("chat-bubble");
const chatWindow = document.getElementById("chat-window");
const closeBtn = document.getElementById("close-btn");
const sendBtn = document.getElementById("send-btn");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");
const fileUpload = document.getElementById("file-upload");
const cmsBtn = document.getElementById("cms-btn");
const cmsInputArea = document.getElementById("cms-input-area");
const cmsSaveBtn = document.getElementById("cms-save-btn");
const cmsText = document.getElementById("cms-text");

chatBubble.addEventListener("click", () => {
    chatWindow.classList.remove("hidden");
    setTimeout(() => chatWindow.classList.add("show"), 10);
    chatBubble.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    chatWindow.classList.remove("show");
    setTimeout(() => {
        chatWindow.classList.add("hidden");
        chatBubble.style.display = "block";
  }, 400);
});

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, "user");
    setTimeout(() => {
        addMessage("🤖 I am a work-in-progress!", "bot");
    }, 600);
  
    chatInput.value = "";
}

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

fileUpload.addEventListener("change", () => {
    const file = fileUpload.files[0];
    if (file) {
        addMessage(`📂 Uploaded file: ${file.name}`, "user");
        setTimeout(() => {
            addMessage(`🤖 Got your file "${file.name}". I'll analyze it soon!`, "bot");
        }, 600);
    }
});

cmsBtn.addEventListener("click", () => {
    cmsInputArea.classList.toggle("hidden");
});

cmsSaveBtn.addEventListener("click", () => {
    const text = cmsText.value.trim();
    if (text) {
        addMessage("📝 CMS content saved!", "user");
        cmsInputArea.classList.add("hidden");
        cmsText.value = "";
        setTimeout(() => {
            addMessage("🤖 CMS content stored. Ready for questions!", "bot");
        }, 600);
    }
});
