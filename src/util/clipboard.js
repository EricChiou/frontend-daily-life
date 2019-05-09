export default class clipboard {
  static copy2Clipboard(element) {
    const textarea = document.createElement('textarea');
    textarea.value = element.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}
