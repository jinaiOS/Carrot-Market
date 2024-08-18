document.getElementById("goToChat").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:8000/chat.html";
});

const fetchData = async () => {
  const res = await fetch("/items");
  const data = await res.json;
};

fetchData();
