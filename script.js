const qs = q => {
  return document.querySelector(q);
};
const ce = c => {
  return document.createElement(c);
};

let inp = qs(".textIn");
let tbl = qs(".tbl");
btn = qs(".btn");
main = qs(".myClass");
main.appendChild(tbl);

inp.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    if (inp.value == "") {
      inp.placeholder = "Please enter any one";
    } else {
      let tr = ce("tr");
      let td = ce("td");
      let del = ce("td");
      tbl.appendChild(tr);
      tr.appendChild(td);
      tr.appendChild(del);
      td.innerText = inp.value;
      del.innerText = "Delete";
      del.setAttribute("class", "del");
      inp.value = "";
      del.addEventListener("click", function() {
        tr = tr.remove();
      });
    }
  } else {
    btn.addEventListener("click", () => {
      if (inp.value == "") {
        inp.placeholder = "Please enter any one";
      } else {
        let tr = ce("tr");
        let td = ce("td");
        let del = ce("td");
        tbl.appendChild(tr);
        tr.appendChild(td);
        tr.appendChild(del);
        td.innerText = inp.value;
        del.innerText = "Delete";
        del.setAttribute("class", "del");
        inp.value = "";
        del.addEventListener("click", function() {
          tr = tr.remove();
        });
      }
    });
  }
});
