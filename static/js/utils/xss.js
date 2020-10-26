export default class Xss {

  static removeScript(string) {
    let div = document.createElement("div");
    div.innerHTML = string;
    let scripts = div.getElementsByTagName("script");
    let i = scripts.length;
    while (i--) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
    return div.innerHTML;
  }
}