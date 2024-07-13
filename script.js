// function setupHideFunction() {
//   const closeButton = document.querySelector(".xbox"); //xbox 라는 클래스를 가지고 있는 애한테 클릭 이벤트를 추가 해줄거야
//   closeButton.addEventListener("click", function () {
//     //어떤 이벤트냐면 클릭 이벤트이고, 클릭했을 때 어떤게 발생하냐면
//     const mainBox = document.querySelector(".mainbox"); //mainbox를 가져올건데 이 mainbox는 클래스 이름이 mainbox라는 애를 가지고 올거야
//     mainBox.style.display = "none"; // 이 mainbox는 mainbox로 둘러싸여 있는 전체를 말해. 클릭을 했을 때 해당 class의 css의 디스플레이가 none이 되는거야ㅣ.
//   });
// }

// setupHideFunction();

document.addEventListener("DOMContentLoaded", function () {
  //dom이라는 것에 들어가서 이벤트를 추가해줄건데 그게 어떤 함수냐면 밑에 써있는거랑 같아. (js를 맨 밑에서 불러와야 하는 이유는 다 만들어지고 나서 dom이 불러져오라는거.) 그래서 domcontentloaded는 돔 다 만들어지고나서 실행할거야
  const toggleButton = document.getElementById("toggleButton"); //토글버튼이라는걸 선언했어. 토글버튼이라고 써있는 아이디를 가져올거야. (doucument.querySelector("toggleButton")이랑 서로 같음.)
  const mainBox = document.querySelector(".mainbox"); //(docunent.getElementByClassname("mainbox")랑 같음)

  toggleButton.addEventListener("click", function () {
    //토글버튼한테 해줄거야. 어떤 이벤트냐면 click이라는 이벤트를 넣어줄거고 이런 행위들을 할거야.
    // mainbox의 표시 상태를 토글
    if (mainBox.style.display === "none") {
      //버튼을 눌렀을 때 mainbox의 style의 display가 none이면 그걸 다시 보이게 만들어줘(mainbox).
      mainBox.style.display = "flex"; // mainbox를 보이게 설정 (보이는게 flex 상태)
      toggleButton.textContent = "숨김"; // 그리고 버튼 텍스트를 '숨김'으로 변경해줘.
    } else {
      //none이 아닐때는
      mainBox.style.display = "none"; // mainbox의 display를 숨기기
      toggleButton.textContent = "보임"; // 그리고 버튼 텍스트를 '보임'으로 변경해줘.
    }
  });
});
