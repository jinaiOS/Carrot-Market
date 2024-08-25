async function readChat() {
  const res = await fetch("/chats");
  const jsonRes = await res.json();
  console.log(jsonRes);
  //   jsonRes.forEach(displayMemo);
}

async function createMenu(value) {
  const res = await fetch("/chats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      content: value,
    }),
  });
  readChat();
}

function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector("#message-box__input");
  createMenu(input.value);
  input.value = "";
}

document.querySelector("#submit").addEventListener("submit", handleSubmit);

readChat();
