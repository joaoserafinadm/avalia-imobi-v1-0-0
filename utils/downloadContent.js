
import html2canvas from "html2canvas";
import saveAs from "./saveAs";

export default function downloadContent(id, fileName) {
    
    html2canvas(document.querySelector(`#${id}`)).then(canvas => {
        saveAs(canvas.toDataURL(), fileName)
    });
}