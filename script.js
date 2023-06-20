document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if(e.target.age.value>=18){
    alert(`Welcome, ${e.target.name.value}. You can vote.`)
  }
  else{
    alert(`Oh sorry ${e.target.name.value}. You aren't old enough.`)

  }
});
