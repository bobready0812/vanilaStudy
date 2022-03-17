const emailInput = document.querySelector("#i-a");
const idInput = document.querySelector("#i-b");
const pwInput = document.querySelector("#i-c");
const cfpwInput = document.querySelector("#i-d");
const button = document.querySelector(".btn");
const modal = document.querySelector("#mod");
const loginBtn = document.querySelector(".sub");
let num = 0;

const getValue = () => {
  if(num % 2 == 0) {
  const password = pwInput.value;
  const cfpassword = cfpwInput.value;
  const confirm = judge(password,cfpassword); //함수가 return 하는 값을 변수에 저장할 수 있다.

  const data = {
      email:emailInput.value,
      id:idInput.value,
      password, //password:password 와 같다
      confirm, //confirm:confirm 과 같다

  }
  console.log(num);  
  console.log(data);
} else {
  const id = idInput.value;
  console.log(`${id}님이 로그인 하셨습니다.`);
}
}


const judge = (pw,cf) => {
    if(pw == cf) {
        return true;
    } else {
        return false;
    }
};

const changeModal = () => {
  if(num % 2 == 0)  {
   num++
   console.log(num);
   modal.classList.remove("modal");
   modal.classList.add("modal2");
   emailInput.classList.add("hidden");
   cfpwInput.classList.add("hidden");
   idInput.value = "";
   pwInput.value = "";
   button.innerText = "Log in";
   loginBtn.innerText = "Don't you have an account?"
  } else {
   num++
   console.log(num);
   modal.classList.remove("modal2");
   modal.classList.add("modal");
   emailInput.classList.remove("hidden");
   cfpwInput.classList.remove("hidden");
   idInput.value = "";
   pwInput.value = "";
   button.innerText = "Create Account";
   loginBtn.innerText = "Already have an account?"
  };
};





button.addEventListener("click", getValue);
loginBtn.addEventListener("click", changeModal);
