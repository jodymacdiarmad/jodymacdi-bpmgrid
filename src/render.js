export function renderList(el, rows) {
  el.innerHTML = rows.map((r) => `<li><span>${r.key}</span><b>${r.value}</b></li>`).join("");
}
export function renderSum(el, s) {
  el.textContent = JSON.stringify(s, null, 2);
}
