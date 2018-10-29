const toggleTeamMemberPanel = e => {
  e.target.closest(".team-member-wrap").classList.toggle("toggled");
};

var teamMemberBoxes = document.querySelectorAll(".team-member-wrap");
for (let i = 0; i < teamMemberBoxes.length; i++) {
  teamMemberBoxes[i].addEventListener("click", toggleTeamMemberPanel);
}
