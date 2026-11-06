import { summarize } from "./state.js";
import { renderList, renderSum } from "./render.js";

const rows = [
  { key: "alpha", value: 2 },
  { key: "beta", value: -1 },
];
const list = document.getElementById("list");
const sum = document.getElementById("sum");
const form = document.getElementById("f");

function paint() {
  renderList(list, rows);
  renderSum(sum, summarize(rows));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const key = document.getElementById("key").value.trim() || "item";
  const value = Number(document.getElementById("val").value || 0);
  rows.push({ key, value });
  form.reset();
  paint();
});
paint();
