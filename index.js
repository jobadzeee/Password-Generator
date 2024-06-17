const characters = {
  ABC: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  abc: "abcdefghijklmnopqrstuvwxyz",
  num: "0123456789",
  str: "~`!@#$%^&*()_-+={}[],|:;<>.?",
};

const generated_1 = document.getElementById("generated_1");
const pass_length = document.getElementById("pass_length");
const inp_length = document.getElementById("inp_length");

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
    alert("Password is not generated yet");
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied the text: " + text);
      console.log("copy");
    });
  }
}
