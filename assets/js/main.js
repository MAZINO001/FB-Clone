const menuItems = document.querySelectorAll(".menu__item");

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    });
};

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");

        const notificationPopup = document.querySelector(".notification__popup");
        const notificationCount1 = document.querySelector("#notification .notification__count");

        if (notificationPopup) {
            if (item.id !== "notification") {
                notificationPopup.style.display = "none";
            } else {
                notificationPopup.style.display = "block";
                notificationCount1.style.display = "none";

            }
        }
    });
});


const MessagesNotification = document.querySelector("#messages-notifications")
const Messages = document.querySelector(".messages")
const Message = document.querySelectorAll(".message")
const MessageSearch = document.querySelector("#message-search")
const notificationCount2 = document.querySelector("#messages-notifications .notification__count");


MessagesNotification.addEventListener("click", () => {
    notificationCount2.style.display = "none"
    Messages.style.boxShadow = "0 0 1rem var(--color-primary)"
    setTimeout(() => {
        Messages.style.boxShadow = "none"
    }, 2000);
})


/* ................messgaes filter .............................*/
function searchMesages() {
    const val = MessageSearch.value.toLowerCase();
    Message.forEach(chat => {
        let name = chat.querySelector("h5").textContent.toLowerCase();
        if (name.includes(val)) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    });
}

MessageSearch.addEventListener("keyup", searchMesages);

/* ........................... them csutomation..........................*/
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize__theme");

function openThemeModal() {
    themeModal.style.display = "grid";
}

function closeThemeModal(e) {
    if (e.target.classList.contains("customize__theme")) {
        themeModal.style.display = "none";
    }
}

theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);


/* ........ custom fonts......... */ 
