document.getElementById("goToChat").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:8000/chat.html";
});

const renderData = (data) => {
  const main = document.querySelector("main");

  // 데이터가 배열인지 확인
  if (!Array.isArray(data)) {
    console.error("데이터가 배열이 아닙니다:", data);
    return;
  }

  data.forEach((obj) => {
    const div = document.createElement("div");
    div.innerText = obj.title; // obj.title이 존재하는지 확인 필요
    main.appendChild(div);
  });
};

const fetchData = async () => {
  try {
    const res = await fetch("/items");
    const data = await res.json(); // 메서드 호출

    console.log(data); // 데이터 구조 확인
    renderData(data); // 데이터 렌더링
  } catch (error) {
    console.error("데이터를 가져오는 데 오류가 발생했습니다:", error);
  }
};

// 데이터 가져오기 함수 호출
fetchData();
