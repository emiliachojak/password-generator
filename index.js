const allCharacters = [];
const firstPasswordBox = document.getElementById('first-password-box');
const secondPasswordBox = document.getElementById('second-password-box');
const thirdPasswordBox = document.getElementById('third-password-box');
const fourthPasswordBox = document.getElementById('fourth-password-box');
const allPasswordBoxes = [
  firstPasswordBox,
  secondPasswordBox,
  thirdPasswordBox,
  fourthPasswordBox,
];

const slider = document.getElementById('password-range');
const output = document.getElementById('slider-value');
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

for (let i = 32; i < 127; i++) {
  allCharacters.push(String.fromCharCode(i));
}

function generateAllPasswords() {
  const passwordLength = parseInt(slider.value);
  for (const passwordBox of allPasswordBoxes) {
    passwordBox.textContent = generateRandomPassword(passwordLength);
    passwordBox.style.color = '#15B097';
  }
}

function generateRandomPassword(length) {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  return password;
}
