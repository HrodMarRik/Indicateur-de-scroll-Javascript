window.onscroll = function () {
  handleScroll();
};

function handleScroll() {
  var scrollValue = window.documentElement.scrollTop || window.body.scrollTop;
  var totalHeight = window.documentElement.scrollHeight - window.documentElement.clientHeight;
  var scrollPercentage = (scrollValue / totalHeight) * 100;
  
  window.getElementById('bar').style.width = scrollPercentage + '%';
}