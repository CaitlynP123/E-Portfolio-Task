function dropdownFunction(dropdownname) {
    document.getElementById(dropdownname).classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.int-dropbtn')) {
      const dropdowns = document.getElementsByClassName("int-dropdown-content");

      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }