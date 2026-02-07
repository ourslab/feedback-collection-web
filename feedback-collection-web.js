function feedback_collection_submit(e=null) {
  let is_valid_data = true;
  const form_action = "https://www.rs.cs.okayama-u.ac.jp/members/users-sekioka/#contact-form-1177";
  const form_data = new FormData();
  form_data.append("_wpnonce", "63d3366ae6");
  form_data.append("_wp_http_referer", `${location.href}`);
  form_data.append("contact-form-id", "1177");
  form_data.append("action", "grunion-contact-form");
  form_data.append("contact-form-hash", "d496b377fcc52021a255cf41e129d5aeaa079117");
  form_data.append("g1177", `${document.title}`);
  [].slice.call(document.querySelectorAll('.feedback-collection-items')).forEach(e => {
    if (e.getAttribute("required") && !e.value) {
      is_valid_data = false;
      console.log(`Required item: "${e.getAttribute("title")}" is empty.`)
    }
    form_data.append(e.name, e.value);
  });
  if (is_valid_data) {
    fetch(`${form_action}`, {method:'POST', body:form_data}).then(e => e.text()).then(t => {
      alert("回答を送信しました");
      location.reload();
    });
  }
}
function feedback_collection_create_input_element(type, title, name, optional=true) {
  const div_dom = document.createElement("div");
  div_dom.style.display = "flex";
  div_dom.style.flexFlow = "column";
  div_dom.style.width = "100%";
  const label_dom = document.createElement("label");
  label_dom.innerHTML = title;
  label_dom.style.display = "block";
  label_dom.style.float = "none";
  label_dom.style.fontWeight = "700";
  label_dom.style.marginBottom = "0.25em";
  const label_optional_dom = document.createElement("span");
  label_optional_dom.innerHTML = (optional)? "(任意)" : "(必須)";
  label_optional_dom.style.fontSize = "85%";
  label_optional_dom.style.fontWeight = "400";
  label_optional_dom.style.marginLeft = "0.25em";
  label_optional_dom.style.opasity = "0.6";
  label_dom.appendChild(label_optional_dom);
  div_dom.appendChild(label_dom);
  const input_dom = document.createElement("input");
  input_dom.className = "feedback-collection-items";
  input_dom.type = type;
  input_dom.name = name;
  input_dom.setAttribute("title", title);
  if (!optional) {
    input_dom.setAttribute("required", "true");
  }
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
  div_dom.style.display = "flex";
  div_dom.style.flexFlow = "column";
  div_dom.style.width = "100%";
  const label_dom = document.createElement("label");
  label_dom.innerHTML = title;
  label_dom.style.display = "block";
  label_dom.style.float = "none";
  label_dom.style.fontWeight = "700";
  label_dom.style.marginBottom = "0.25em";
  const label_optional_dom = document.createElement("span");
  label_optional_dom.innerHTML = (optional)? "(任意)" : "(必須)";
  label_optional_dom.style.fontSize = "85%";
  label_optional_dom.style.fontWeight = "400";
  label_optional_dom.style.marginLeft = "0.25em";
  label_optional_dom.style.opasity = "0.6";
  label_dom.appendChild(label_optional_dom);
  div_dom.appendChild(label_dom);
  const select_dom = document.createElement("select");
  select_dom.className = "feedback-collection-items";
  select_dom.name = name;
  select_dom.setAttribute("title", title);
  if (!optional) {
    select_dom.setAttribute("required", "true");
  }
  options.forEach(o => select_dom.appendChild(feedback_collection_create_option_element(o)));
  div_dom.appendChild(select_dom);
  return div_dom;
}
function feedback_collection_create_form_element(main_dom) {
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
  const header_dom = document.createElement("h2");
  header_dom.innerHTML = "アンケート";
  form_dom.appendChild(header_dom);
  form_dom.appendChild(feedback_collection_create_select_element(
    title="あなたの所属", 
    name=`g1177-1`, 
    options=["", "小学生", "中学生", "高校生", "高専生", "大学生", "大学院生", "保護者", "その他"], 
    optional=false
  ));
  form_dom.appendChild(feedback_collection_create_input_element(
    type="text",
    title="名前", 
    name=`g1177-2`, 
    optional=true
  ));
  form_dom.appendChild(feedback_collection_create_input_element(
    type="email",
    title="メール", 
    name=`g1177-3`, 
    optional=true
  ));
  form_dom.appendChild(feedback_collection_create_input_element(
    type="text",
    title="メッセージ", 
    name=`g1177-4`, 
    optional=true
  ));
  const submit_button = document.createElement("input");
  submit_button.type = "button";
  submit_button.value = "回答";
  submit_button.addEventListener("click", feedback_collection_submit);
  form_dom.appendChild(submit_button);
  main_dom.appendChild(form_dom);
}
function feedback_collection_onload(e=null) {
  const main_dom = document.querySelector("main#main");
  if (!main_dom) {
    console.log("main element is not found");
    return true;
  }
  feedback_collection_create_form_element(main_dom);
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
