// Draging and Droping Multiple files using vanila js
let dropzone = document.getElementById("dropzone");
let dropzone_input = dropzone.querySelector(".dropzone-input");
let multiple = dropzone_input.getAttribute("multiple") ? true : false;

[
  "drag",
  "dragstart",
  "dragend",
  "dragover",
  "dragenter",
  "dragleave",
  "drop",
].forEach(function (event) {
  dropzone.addEventListener(event, function (e) {
    e.preventDefault();
    e.stopPropagation();
  });
});

dropzone.addEventListener(
  "dragover",
  function (e) {
    this.classList.add("dropzone-dragging");
  },
  false
);

dropzone.addEventListener(
  "dragleave",
  function (e) {
    this.classList.remove("dropzone-dragging");
  },
  false
);

dropzone.addEventListener(
  "drop",
  function (e) {
    console.log(e.dataTransfer.files);
    this.classList.remove("dropzone-dragging");
    let files = e.dataTransfer.files;
    let dataTransfer = new DataTransfer();

    let for_alert = "";
    Array.prototype.forEach.call(files, (file) => {
      for_alert +=
        "# " + file.name + " (" + file.type + " | " + file.size + " bytes)\r\n";
      dataTransfer.items.add(file);
      if (!multiple) {
        return false;
      }
    });

    let filesToBeAdded = dataTransfer.files;
    dropzone_input.files = filesToBeAdded;
    // alert(for_alert);
  },
  false
);

dropzone.addEventListener("click", function (e) {
  dropzone_input.click();
});

// Button swapping based on click
let copyPast = document.getElementById("copyPast");
let uploadFile = document.getElementById("uploadFile");
let importGSC = document.getElementById("importGSC");

copyPast.addEventListener("click", (e) => {});
