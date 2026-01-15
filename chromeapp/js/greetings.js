const loginForm = document.querySelector("#login-form");

// 수정: loginForm(이미 찾은 폼) 안에서 input 태그를 바로 찾습니다.
const loginInput = loginForm.querySelector("input"); 
const loginButton = loginForm.querySelector("button");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username" //반복되는 string은 대문자변수로저장해놓는것이 좋음

function onLoginSubmit(event) {
    event.preventDefault(); // 페이지 새로고침 방지
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    loginForm.classList.add(HIDDEN_CLASSNAME); // 폼 숨기기 처음에는 보여줬다가 유저가 정보를 입력하면 다시 숨김 
    console.log(username);
    
    paintGreetings(username);

}

function paintGreetings(username){
    greeting.innerText= `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername)

if (savedUsername === null) { //아무것도안저장되어있으면코드가실행이안됨
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    paintGreetings(savedUsername);
}

function sayHello() {
    console.log("hello")
}