// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//Filtering Portfolio
$(document).ready(function () {
  // Menambahkan class active pada elemen yang diklik, sehingga akan memiliki warna kuning
  $(".cat-card").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    // Mengambil nilai atribut "data-filter" dari elemen yang diklik
    var filter = $(this).attr("data-filter");

    // Jika filter bernilai "all", maka semua menu akan ditampilkan
    if (filter == "all") {
      $(".menu-card").show(0);

      // Menu yang ditampilkan adalah semua menu yang ada, dari makanan hingga minuman
    } else {
      // Menyembunyikan menu yang tidak sesuai dengan filter yang dipilih
      $(".menu-card")
        .not("." + filter)
        .hide(0);

      // Menampilkan menu yang sesuai dengan filter yang dipilih
      $(".menu-card." + filter).show(0);    
    }
  });
});
