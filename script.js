function setupHideFunction() {
  const closeButton = document.querySelector(".xbox"); //xbox 라는 클래스를 가지고 있는 애한테 클릭 이벤트를 추가 해줄거야
  closeButton.addEventListener("click", function () {
    //어떤 이벤트냐면 클릭 이벤트이고, 클릭했을 때 어떤게 발생하냐면
    const mainBox = document.querySelector(".mainbox"); //mainbox를 가져올건데 이 mainbox는 클래스 이름이 mainbox라는 애를 가지고 올거야
    mainBox.style.display = "none"; // 이 mainbox는 mainbox로 둘러싸여 있는 전체를 말해. 클릭을 했을 때 해당 class의 css의 디스플레이가 none이 되는거야ㅣ.
  });
}

setupHideFunction();
