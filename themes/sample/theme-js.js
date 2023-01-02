function getDateString() {
  const date = new Date();
  return date.toDateString();
}

function applyDateToCreatedAt() {
  const createdAt = document.getElementById("created-at");
  createdAt.innerText = getDateString();
}

applyDateToCreatedAt();

function getSkillElems() {
  return document.querySelectorAll('[data-theme-id="skills-item-name"]');
}

function getSkillHashMap() {
  return {
    Typescript:
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    Javascript:
      "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  };
}

function filterByLanguage(elems) {
  const skills = getSkillHashMap();
  const keys = Object.keys(skills);
  return [...elems].filter((elem, index) => {
    return keys.includes(elem.innerText);
  });
}

function applyImage(elems) {
  const skills = getSkillHashMap();
  elems.forEach((elem) => {
    const img = document.createElement("img");
    img.src = skills[elem.innerText];
    elem.parentNode.insertBefore(img, elem);
    elem.remove();
  });
}

function changeSkillsToImg() {
  const elems = getSkillElems();
  const skillsToImg = filterByLanguage(elems);
  applyImage(skillsToImg);
}

changeSkillsToImg();
