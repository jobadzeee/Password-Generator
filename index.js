const characters = {
  ABC: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  abc: "abcdefghijklmnopqrstuvwxyz",
  num: "0123456789",
  str: "~`!@#$%^&*()_-+={}[],|:;<>.?",
};

const generated_1 = document.getElementById("generated_1");
const pass_length = document.getElementById("pass_length");
const inp_length = document.getElementById("inp_length");
const copy_btn = document.getElementById("copy_btn");

inp_length.addEventListener("input", (event) => {
  pass_length.textContent = "Password length: " + event.target.value;
});

function generate() {
  function getRandomPassword() {
    let selectedCharacters = "";
    if (document.getElementById("ABC").checked)
      selectedCharacters += characters.ABC;
    if (document.getElementById("abc").checked)
      selectedCharacters += characters.abc;
    if (document.getElementById("num").checked)
      selectedCharacters += characters.num;
    if (document.getElementById("str").checked)
      selectedCharacters += characters.str;
    if (selectedCharacters === "") {
      alert("Please select at least one character type.");
      return "";
    }
    let password = "";
    let num_length = inp_length.value;
    for (let i = 0; i < num_length; i++) {
      let randomIndex = Math.floor(Math.random() * selectedCharacters.length);
      password += selectedCharacters[randomIndex];
    }
    return password;
  }
  generated_1.textContent = getRandomPassword();
}

function Copy() {
  const text = generated_1.textContent;

  if (text === "") {
    copy_btn.textContent = "NOT GENERATED YET";
    copy_btn.classList.add("error");
  } else {
    copy_btn.classList.remove("error");
    navigator.clipboard.writeText(text).then(() => {
      copy_btn.textContent = "COPIED!";
    });
    setTimeout(() => {
      copy_btn.textContent = "COPY TO CLIPBOARD!";
    }, 900);
  }
}
