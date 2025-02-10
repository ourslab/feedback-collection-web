let userdefined_feedback_division_dom = null;
let userdefined_feedback_form_dom = null;
let userdefined_feedback_input_page_dom = null;
let userdefined_feedback_star_set = false;
let userdefined_feedback_stars_dom = [];
let userdefined_feedback_input_stars_dom = null;
let userdefined_feedback_affiliations_dom = [];
let userdefined_feedback_input_affiliation_dom = null;
function userdefined_feedback_stars_opacity_update(number_of_stars) {
  for (let a = 0; a <= number_of_stars; a++) {
    userdefined_feedback_stars_dom[a].style['opacity'] = 1.0;
  }
  for (let a = number_of_stars + 1; a < userdefined_feedback_stars_dom.length; a++) {
    userdefined_feedback_stars_dom[a].style['opacity'] = 0.5;
  }
}
function userdefined_feedback_affiliation_update(affiliation_text) {
  userdefined_feedback_input_affiliation_dom.value = affiliation_text;
  if (confirm("送信しますか？")) {
    let userdefined_feedback_form_data = new FormData();
    userdefined_feedback_form_data.set(userdefined_feedback_input_page_dom.name, userdefined_feedback_input_page_dom.value);
    userdefined_feedback_form_data.set(userdefined_feedback_input_stars_dom.name , userdefined_feedback_input_stars_dom.value);
    userdefined_feedback_form_data.set(userdefined_feedback_input_affiliation_dom.name, userdefined_feedback_input_affiliation_dom.value);
    fetch(userdefined_feedback_form_dom.action, { method: "POST", body: userdefined_feedback_form_data })
    alert("送信しました");
  }
}
window.addEventListener("load", function(e=null) {
  userdefined_feedback_division_dom = document.getElementById("userdefined_feedback_division");
  fetch("https://ourslab.github.io/feedback-collection-web/feedback-collection-form.html")
  .then((data) => data.text())
  .then((text) => userdefined_feedback_division_dom.innerHTML = text)
  .then(() => {
    userdefined_feedback_form_dom = document.getElementById("userdefined_feedback_form");
    userdefined_feedback_input_page_dom = document.getElementById("userdefined_feedback_input_page");
    userdefined_feedback_input_page_dom.value = document.title;
    userdefined_feedback_stars_dom = document.getElementsByClassName("userdefined_feedback_stars");
    userdefined_feedback_input_stars_dom = document.getElementById("userdefined_feedback_input_stars");
    userdefined_feedback_stars_opacity_update(0);
    userdefined_feedback_input_stars_dom.value = 1;
    for (let a = 0; a < userdefined_feedback_stars_dom.length; a++) {
      userdefined_feedback_stars_dom[a].children[0].addEventListener("mouseover", function(e=null) {
        if (userdefined_feedback_star_set == false) {
          userdefined_feedback_stars_opacity_update(a);
        }
      });
      userdefined_feedback_stars_dom[a].children[0].addEventListener("mouseout", function(e=null) {
        if (userdefined_feedback_star_set == false) {
          userdefined_feedback_stars_opacity_update(0);
        }
      });
      userdefined_feedback_stars_dom[a].children[0].addEventListener("click", function(e=null) {
        userdefined_feedback_star_set = true;
        userdefined_feedback_input_stars_dom.value = a + 1;
        userdefined_feedback_stars_opacity_update(a);
      });
    }
    userdefined_feedback_affiliations_dom = document.getElementsByClassName("userdefined_feedback_affiliations");
    for (let a = 0; a < userdefined_feedback_affiliations_dom.length; a++) {
      userdefined_feedback_affiliations_dom[a].style["width"] = "5em";
      userdefined_feedback_affiliations_dom[a].style["height"] = "2em";
      userdefined_feedback_affiliations_dom[a].style["cursor"] = "pointer";
      userdefined_feedback_affiliations_dom[a].style["text-align"] = "center";
      userdefined_feedback_affiliations_dom[a].style["color"] = "black";
      userdefined_feedback_affiliations_dom[a].addEventListener("mouseover", function() {
        userdefined_feedback_affiliations_dom[a].style["font-weight"] = "bold";
      });
      userdefined_feedback_affiliations_dom[a].addEventListener("mouseout", function() {
        userdefined_feedback_affiliations_dom[a].style["font-weight"] = "initial";
      });
    }
    userdefined_feedback_input_affiliation_dom = document.getElementById("userdefined_feedback_input_affiliation");
  });
});
<!-- Google tag (gtag.js) -->
window.dataLayer = window.dataLayer || [];
function gtag(){
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-86SEBBTSZ2');
