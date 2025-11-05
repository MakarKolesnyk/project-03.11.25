//string

const userName = "bred";

const userNameTrim = userName.trim().toLowerCase();
const fisrtLettarUpecerCase = userNameTrim.charAt(0).toUpperCase();
const lastLettars = userNameTrim.slice(1);
const finalyUserName = fisrtLettarUpecerCase + lastLettars;
// console.log(finalyUserName);

while (true) {
  const varibleUserName = prompt("Enter varible name");
  const codeFirstLettar = varibleUserName.trim().charCodeAt(0);
  if (codeFirstLettar >= 48 && codeFirstLettar <= 57) {
    alert("please enter latter");
    continue;
  } else {
    alert("all good");
    break;
  } 
}
