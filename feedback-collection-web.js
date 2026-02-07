function feedback_collection_submit(e=null) {
  const form_action = location.href.split("?")[0].split("#")[0];
  const form_data = new FormData();
  form_data.append("_wpnonce", "63d3366ae6");
  form_data.append("_wp_http_referer", `${location.href}`);
  form_data.append("contact-form-id", "1177");
  form_data.append("action", "grunion-contact-form");
  form_data.append("contact-form-hash", "182a0ad8b4d8b96de8127cd68e31a117456e2b8b");
  fetch(`${form_action}#contact-form-1177`, {method:'POST', body:form_data}).then(
  ).then (
  );
}
function feedback_collection_create_input_element(type, title, name, optional=true) {
  const div_dom = document.createElement("div");
  const label_dom = document.createElement("label");
  label_dom.innerHTML = title;
  const label_optional_dom = document.createElement("span");
  label_optional_dom.innerHTML = (optional)? "(任意)" : "(必須)";
  label_dom.appendChild(label_optional_dom);
  div_dom.appendChild(label_dom);
  const input_dom = document.createElement("input");
  input_dom.type = type;
  input_dom.name = name;
  div_dom.appendChild(input_dom);
  return div_dom;
}
function feedback_collection_create_option_element(name) {
  const option_dom = document.createElement("option");
  option_dom.value = name;
  option_dom.innerHTML = (name)? name : "オプションを1つ選択";
  return option_dom;
}
function feedback_collection_create_select_element(title, name, options=[], optional=true) {
  const div_dom = document.createElement("div");
  const label_dom = document.createElement("label");
  label_dom.innerHTML = title;
  const label_optional_dom = document.createElement("span");
  label_optional_dom.innerHTML = (optional)? "(任意)" : "(必須)";
  label_dom.appendChild(label_optional_dom);
  div_dom.appendChild(label_dom);
  const select_dom = document.createElement("select");
  select_dom.name = name;
  if (!optional) {
    select_dom.required = "true";
  }
  options.forEach(o => select_dom.appendChild(feedback_collection_create_option_element(o)));
  div_dom.appendChild(select_dom);
  return div_dom;
}
function feedback_collection_create_form_element(page_dom, footer_dom) {
  const form_dom = document.createElement("div");
  form_dom.style.border = "solid";
  form_dom.style.display = "flex";
  form_dom.style.flexBasis = "100%";
  form_dom.style.flexDirection = "row";
  form_dom.style.flexGrow = "0";
  form_dom.style.flexShrink = "0";
  form_dom.style.flexWrap = "wrap";
  form_dom.style.gap = "1.5rem";
  form_dom.style.padding = "16px";
  form_dom.style.visibility = "hidden";
  form_dom.appendChild(feedback_collection_create_select_element(
    title="あなたの所属", 
    name="g1177", 
    options=["", "小学生", "中学生", "高校生", "高専生", "大学生", "大学院生", "保護者", "その他"], 
    optional=false
  ));
  form_dom.appendChild(feedback_collection_create_input_element(
    type="text",
    title="名前", 
    name="g1177-1", 
    optional=true
  ));
  form_dom.appendChild(feedback_collection_create_input_element(
    type="email",
    title="メール", 
    name="g1177-2", 
    optional=true
  ));
  form_dom.appendChild(feedback_collection_create_input_element(
    type="text",
    title="メッセージ", 
    name="g1177-3", 
    optional=true
  ));
  const submit_button = document.createElement("input");
  submit_button.type = "button";
  submit_button.value = "回答";
  submit_button.addEventListener("click", feedback_collection_submit);
  form_dom.appendChild(submit_button);
  page_dom.insertBefore(form_dom, footer_dom);
}
function feedback_collection_onload(e=null) {
  const page_dom = document.querySelector("div#page");
  if (!page_dom) {
    console.log("page element not found");
    return true;
  }
  const footer_dom = document.querySelector("div#footer");
  if (!footer_dom) {
    console.log("footer element not found");
    return true;
  }
  feedback_collection_create_form_element(page_dom, footer_dom);
  return false;
}
window.addEventListener("load", feedback_collection_onload);
// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-86SEBBTSZ2');
