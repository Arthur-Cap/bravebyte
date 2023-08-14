const pagesRight = document.querySelectorAll('.body-page_right');
const pages = document.querySelectorAll('.page');
const bodyPage = document.querySelector('.body-page'); // Chọn phần tử đúng

// Hàm thay đổi chiều cao của page và áp dụng hiệu ứng
function increaseHeight(element) {
  element.style.transition = 'height 1s';
  element.style.height = '100%';
  bodyPage.style.height = '90%'; // Áp dụng thay đổi trực tiếp
}

// Hàm thực hiện hiệu ứng scaleY(1) cho các phần tử có lớp .body-page_right
function scaleUpElements(elements) {
  elements.forEach(element => {

    element.style.transform = 'scaleY(1)';
    bodyPage.style.height = '90%';
  });
}

// Đếm ngược 1 giây và thực hiện tăng chiều cao cho các page
function countdownAndExpand() {
  setTimeout(() => {
    pages.forEach(page => {
      increaseHeight(page);
    });

    setTimeout(() => {
      scaleUpElements(pagesRight);
    }, 1000); // Đợi 1 giây sau khi tăng chiều cao

  }, 1500); // Đếm ngược 1 giây (1000ms)
}

// Gọi hàm đếm ngược và thực hiện hiệu ứng
countdownAndExpand();


const bodyLeft = document.querySelector('.body-page_left');
const bodyRight = document.querySelector('.body-page_right');


