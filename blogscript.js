function showDropDownMenu_form_layout_wizard3(el) {
    el.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptext_form_layout_wizard3(el) {
    const targetText = el.innerText;
    document.getElementById(
      "drop-down-content-setter_form_layout_wizard3"
    ).innerText = targetText;
    document
      .getElementById("drop-down-div_form_layout_wizard3")
      .classList.toggle("hidden");
  }
  function showDropDownMenuOne_form_layout_wizard3(el) {
    el.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptextone_form_layout_wizard3(el) {
    const targetText = el.innerText;
    document.getElementById(
      "drop-down-content-setter-one_form_layout_wizard3"
    ).innerText = targetText;
    document
      .getElementById("drop-down-div-one_form_layout_wizard3")
      .classList.toggle("hidden");
  }
  function showDropDownMenutwo_form_layout_wizard3(el) {
    el.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptexttwo_form_layout_wizard3(el) {
    const targetText = el.innerHTML;
    document.getElementById(
      "drop-down-content-setter-two_form_layout_wizard3"
    ).innerHTML = targetText;
    document
      .getElementById("drop-down-div-two_form_layout_wizard3")
      .classList.toggle("hidden");
  }
  
