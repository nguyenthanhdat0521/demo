window.onscroll = () => {
  if (window.pageYOffset > 550) {
    document.getElementById("body_fp_content").classList.add("appearance");
  }
  if (window.pageYOffset > 1250) {
    document.getElementById("body_vaf_content").classList.add("appearance");
  }
  if (window.pageYOffset > 100) {
    document.getElementById("navbar").classList.add("navbar_bg-scroll");
    var navbarScroll = document.getElementsByClassName("navbar_scroll");
    for (let index = 0; index < navbarScroll.length; index++) {
      navbarScroll[index].classList.add("navbar_text-scroll");
      document.getElementById("bar").classList.add("navbar_text-scroll");
      document.getElementById("navbar-toggler").style.borderColor="white";
    }
  } else {
    document.getElementById("navbar").classList.remove("navbar_bg-scroll");
    var navbarScroll = document.getElementsByClassName("navbar_scroll");
    for (let index = 0; index < navbarScroll.length; index++) {
      navbarScroll[index].classList.remove("navbar_text-scroll");
      document.getElementById("bar").classList.remove("navbar_text-scroll");
      document.getElementById("navbar-toggler").style.borderColor="rgba(0,0,0,.5)";
    }
  }
};
if(document.body.offsetWidth <= 1000)
  document.getElementsByClassName("header_appearance")[0].style.width="85%";