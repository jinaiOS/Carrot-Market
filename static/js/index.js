document.getElementById("goToChat").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:8000/chat.html";
});

const calcTime = (timestamp) => {
  const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
  const time = new Date(curTime - timestamp);
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  if (hour > 0) return `${hour}시간 전`;
  else if (minute > 0) return `${minute}분 전`;
  else if (second > 0) return `${second}초 전`;
  else "방금 전";
};

const renderData = (data) => {
  const main = document.querySelector("main");

  // 데이터가 배열인지 확인
  if (!Array.isArray(data)) {
    console.error("데이터가 배열이 아닙니다:", data);
    return;
  }

  data.reverse().forEach((obj) => {
    const div = document.createElement("div");
    div.className = "item-list";

    const imgDiv = document.createElement("div");
    imgDiv.className = "item-list__img";

    const img = document.createElement("img");
    img.src = "assets/img.svg";

    const infoDiv = document.createElement("div");
    infoDiv.className = "item-list__info";

    const infoTitleDiv = document.createElement("div");
    infoTitleDiv.className = "item-list__info-title";
    infoTitleDiv.innerText = obj.title;

    const infoMetaDiv = document.createElement("div");
    infoMetaDiv.className = "item-list__info-meta";
    infoMetaDiv.innerText = obj.place + " " + calcTime(obj.insertAt);

    const infoPriceDiv = document.createElement("div");
    infoPriceDiv.className = "item-list__info-price";
    infoPriceDiv.innerText = obj.price;

    imgDiv.appendChild(img);
    infoDiv.appendChild(infoTitleDiv);
    infoDiv.appendChild(infoMetaDiv);
    infoDiv.appendChild(infoPriceDiv);

    div.appendChild(imgDiv);
    div.appendChild(infoDiv);

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
