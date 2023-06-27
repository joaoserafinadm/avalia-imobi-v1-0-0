
import html2canvas from "html2canvas";
import saveAs from "./saveAs";

export default function downloadContet(id, fileName) {
    html2canvas(document.querySelector(`#${id}`)).then(canvas => {
        saveAs(canvas.toDataURL(), fileName)
    });
}