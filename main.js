

console.log("Hello con sâu");

// hạn chế xài alert vì nó sẽ bị dừng lại
// alert("Hello con sâu");

/*
    * Biến

*/

var username = "Nguyen Ba Trong";

console.log(username);

var address = "112 Cao Thang";
// alert(username);

console.log("ten la: " + username + " " + "\n" + "dia chi: " + address);
console.log(username, address);
// number
var age = 18;
// Boolean
var status = false;

// Null
var numberStudent = null;
// Undefined
var fibo;
console.log("fibo: " + fibo);

var fistName = "Nguyen";
var lastName = "Ba";


var a = 12;
var b = 12;

console.log(a + b);


// Hoisting
// nếu log full name trước khai báo biến thì nó tự tạo ra 1 biến fullname không có giá trị
var fullName;
console.log("fullname: " + fullName);

var fullName = "NGUYEN BA TRONG";
console.log("fullname: " + fullName);

isLogin = true;
console.log("isLogin:", isLogin);

// chưa được khai báo => erro!
// console.log(student);

// nếu const không gán giá trị =>> erro!
const PI = 3.14;
//PI = 3.15;
console.log(PI);

/*
    *Câu lệnh điều kiện
 */
if (false) {
    console.log("Đúng rồi đó!");
} else {
    console.log("sai rồi cưng");
}

var a = 10;
if (a == 5) {
    console.log("Good");
} else {
    console.log("Oc cho")
}

// Nếu so sánh == thì chỉ so sánh giá trị, nếu so sánh === thì so sánh kiểu dữ liệu
if (1 == "1" && 1 != "2") {
    console.log("true");
} else {
    console.log("false");
}

// 
if (1 != 1 || 1 != 2) {
    console.log("dk dung");
} else {
    console.log("dk sai");
}


if (1 == 1 && 1 == "1") {
    console.log("dk dung roi");
} else {
    console.log("dk sai roi");
}

// dieu kien ? "dung" : "sai" (cách viết toán tử 3 ngôi)
1 === "1" ? console.log("OK dung roi") : console.log("DK sai roi ban");

// Bieu thuc
var btA = true;
var btB = false;
// bieu thuc && (và) đúng && đúng => true, false && false => false, false && true => false
console.log("Ket qua &&: ", btA && btB);
// Biểu thức hoặc
console.log("Ket qua ||: ", btA || btB);
// Biểu thức phủ định
console.log("Kết quả !: ", !btA);

// Switch case
switch (5) {
    case 0:
        console.log("Đây là số 0");
        break;
    case 1:
        console.log("Đây là số 1");
        break;
    case 2:
        console.log("Đây là số 2");
        break;
    case 3:
        console.log("Đây là số 3");
        break;

    default:
        console.log("Undefied");
        break;
}


var list = ["Trong", "Ba", "Nguyen"];
console.log(list[2]);

// Vòng lặp
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}

var number1 = 10;
var number2 = 5;
var number3 = 20;
var number4 = 7;


var total1 = number1 + number2;
console.log("Total 1: ", total1);

var total2 = number3 + number4;
console.log("Total 2: ", total2);

var totalAll = total2 + total1;
console.log("Total All: ", totalAll);


// FUNCTION (hàm) không tham số
// Có thể tái sử dụng

function sum() {
    var total = number1 + number2;
    console.log("Total", total);
}


sum();


// FUNCTION có tham số
function tinhTong(a, b) {
    var sum = a + b;
    console.log("Sum: ", sum);
}

tinhTong(number1, number3);
tinhTong(number1, number4);
tinhTong(number2, number3);


// Hàm không có giá trị trả về
function tinhTong(a, b) {
    var sum = a + b;
    console.log("Sum: ", sum);
}

tinhTong(number1, number3);

// Hàm có giá trị trả về
function tinhTong(a, b) {
    var sum = a + b;
    return sum;
}

// var total_2 = tinhTong(100, 30) + 111;
// console.log("Tổng là : ", total_2);

console.log("Tổng là : ", tinhTong(50, 50) + 111);


// VD: tính điểm trung bình toán, lý, hóa : 
/**
 * dtb = (toan + ly + hoa)/3;
 * xếp loại: 9-10 : xuất sắc, 8-9 : giỏi, 6-7 khá, 5-6: trung bình, dtb < 5 : yếu
 * 
 * 
 */

function dtb(a, b, c) {
    return (a + b + c) / 3;
}



function xeploai(dtb) {
    var loai = "";
    if (9 <= dtb) {
        loai = "Xuất sắc";
    } else if (8 <= dtb && dtb < 9) {
        loai = "Giỏi";
    } else if (7 <= dtb && dtb < 8) {
        loai = "khá";
    } else if (5 <= dtb && dtb < 7) {
        loai = "Trung bình";
    } else {
        loai = "yếu";
    }

    console.log("Loại là: ", loai);
}

var tinhDTB = dtb(8, 8, 7);
xeploai(tinhDTB);



/*
 * DOM
 * 
 */
var txtInput = document.getElementById("txtInput");
console.log(txtInput.value);

var username = document.getElementById("username");
console.log(username.innerText);

/**
 * Event
 */

// Cach 1:
// function eventClick(){
//     console.log("Event click");
//     txtInput.style.border = '2px solid blue';

//     username.style.color = "green";

//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }

// Cach 2:
//  document.getElementById("btnClick").onclick = function (){
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }

// Cach 3
// document.getElementById("btnClick").addEventListener("click", function () {
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);


// })


// 
// function demoClick(){
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }

// document.getElementById("btnClick").addEventListener("click", demoClick);


document.getElementById("btnNhanEmDi").addEventListener("click", function () {
    console.log("123");
    document.getElementById("noidung").innerHTML = "Nội dung đã thay đổi";

    document.getElementById("noidung").style.background = "aqua";

    document.getElementById("noidung").style.fontSize = "40px";


});

document.getElementById("btnHide").addEventListener("click", function () {
    document.getElementById("noidung").style.display = "none";

});

document.getElementById("btnShow").addEventListener("click", function () {
    document.getElementById("noidung").style.display = "block";
});


document.getElementById("btnDisable").addEventListener("click", function () {


    var btnValue = document.getElementById("btnNhanEmDi").disabled;


    if (btnValue != true) {
        document.getElementById("btnNhanEmDi").disabled = true;
    }
    else if (btnValue == true) {
        document.getElementById("btnNhanEmDi").disabled = false;
    }

});

document.getElementById("btnOpen").addEventListener("click", function () {
    document.getElementById("btnNhanEmDi").disabled = false;

});




// On Off img

document.getElementById("btnOff").addEventListener("click", function () {
    document.getElementById("imgBuld").src = "././imgs/pic_bulboff.gif";
});

document.getElementById("btnOn").addEventListener("click", function () {
    document.getElementById("imgBuld").src = "././imgs/pic_bulbon.gif";
});

// Check login

document.getElementById("btnLogin").addEventListener("click", function () {
    var usernameValue = document.getElementById("ipUserName").value;
    var passwoldValue = document.getElementById("ipPassword").value;

    if (usernameValue == "cybersoft" && passwoldValue == "cybersoft") {
        changerColor2("Login thành công", "alert alert-success");
    } else {
        changerColor2("Login fail", "alert alert-danger");
    }



});

// function changerColor(mess, bg) {
//     console.log("Login fail");
//     document.getElementById("divThongBao").style.display = "block";
//     document.getElementById("divThongBao").innerHTML = mess;
//     document.getElementById("divThongBao").style.backgroundColor = bg;
//     document.getElementById("divThongBao").style.color = "white";
// }


// function changer color
function changerColor2(mess, classes) {
    document.getElementById("divThongBao").innerHTML = mess;
    document.getElementById("divThongBao").className = classes;
    document.getElementById("divThongBao").style.display = "block";
}


/**
 * DOM Tagname
 */

var tagname = document.getElementsByTagName("button")[1];
console.log(tagname);

/**
 * DOM className
 */

 var _className = document.getElementsByClassName("btn")[0];
 console.log(_className);


 /**
  * DOM querySelector
  */

var _querySelector =  document.querySelector(".container #divThongBao");
console.log(_querySelector);

/**
 * DOM querySelectorAll
 */

var _querySelectorAll = document.querySelectorAll(".container .form-group");
console.log(_querySelectorAll);



// TINH TIEN TIP


document.getElementById("btnTinhTienTip").addEventListener("click", function(){
    var txtTongTien = document.getElementById("txtTongTien").value;
    var tientip = document.getElementById("slPhanTramTip").value;

    var soNguoi = document.getElementById("txtSoNguoi").value;

    var soTienTip = txtTongTien*(tientip/100)/soNguoi;

    document.getElementById("txtThongBaoTienTip").innerHTML = "TIP AMOUNT $ " + soTienTip + ".00 mỗi người" ;
    // document.getElementById("txtThongBaoTienTip").style.display = "block";
    document.getElementById("txtThongBaoTienTip").className = "alert alert-danger d-block";
})