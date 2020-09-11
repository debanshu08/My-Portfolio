const Skills = [
  "B.Tech Under Graduate",
  "Front-End Web Developer",
  "Java Programmer",
];
let index = 0,
  skillIndex = 0,
  skill = "";
!(function e() {
  skillIndex === Skills.length && (skillIndex = 0);
  let l = (skill = Skills[skillIndex]).slice(0, ++index);
  //console.log(l),
    (document.querySelector(".type-text").textContent = l),
    l.length === skill.length
      ? (skillIndex++, (index = 0), setTimeout(e, 500))
      : setTimeout(e, 100);
})();
