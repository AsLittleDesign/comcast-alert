
var style = document.createElement('style'),
    head  = document.head || document.getElementsByTagName('head')[0],
    css   = "#comcast_content { display: none !important; visibility: hidden !important; opacity: 0 !important; }";

style.type = "text/css";

if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
