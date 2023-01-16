import { renderTableRow } from "./nutrition.js";

let htmlForCarbs = renderTableRow("Carbs", "17g");
const tbody = document.querySelector("#nutrition-table tbody");
tbody.insertAdjacentHTML("beforeend", htmlForCarbs);

