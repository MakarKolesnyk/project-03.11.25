//string

const fileName = prompt("enter file");
const findLastPoint = fileName.lastIndexOf(".");
const sliceAfterPoint = fileName.slice(findLastPoint+1).trim();
switch (sliceAfterPoint) {
  case "txt":
  case "doc":
    console.log("text");
    break;
  case "jpg":
  case "png":
    console.log("Image");
    break;
  case "html":
  case "css":
  case "js":
    console.log("web");
    break;
    default:
      console.log('unknown format');
      break;
}
