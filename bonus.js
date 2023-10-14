const link = document.getElementById("xuLi");
  link.addEventListener("click",function(event){
 
    event.preventDefault();
    

    // const elements = document.getElementsByClassName('tongGia');
    // for (const element of elements) {
    //   element.textContent = "Hello";
    // }
    
    const uPriceElements = document.querySelectorAll('.donGia');
    const uInputElements = document.querySelectorAll('.nhap');
    const tongGiaElements = document.querySelectorAll('.tongGia');
    for (let i = 0; i < uPriceElements.length; i++) {
        // Lấy giá trị từ phần tử u-price
        const uPriceValue = parseFloat(uPriceElements[i].textContent);

        // Lấy giá trị từ phần tử u-input
        const uInputValue = parseFloat(uInputElements[i].value);

        // Tính tổng giá (hoặc bạn có thể thực hiện các phép tính khác ở đây)
        const totalPrice = uPriceValue * uInputValue;

        // Gán giá trị vào phần tử tongGia
        tongGiaElements[i].textContent = totalPrice+".000đ";
    }
    let tong_subtotal = 0;
    const subtotal = document.querySelector(".subtotal-price")
    for(let i = 0 ; i <tongGiaElements.length;i++){
        const temp = parseFloat(tongGiaElements[i].textContent);
        tong_subtotal += temp;
    }
    
    subtotal.textContent = tong_subtotal + ".000đ";
    const total = document.querySelector(".total-end");
    total.textContent = subtotal.textContent;
    
    
});