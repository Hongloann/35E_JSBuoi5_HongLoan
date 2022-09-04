//  Bài 1:Quản lý tuyển sinh

var btnKQ = document.getElementById("btnKQ");
btnKQ.onclick = function(){
// đầu vào: 
var diemChuan = document.getElementById("diemChuan").value*1;
var KV = document.getElementById("KV").value*1;
var DT = document.getElementById("DT").value*1;
var d1 = document.getElementById("d1").value*1;
var d2 = document.getElementById("d2").value*1;
var d3 = document.getElementById("d3").value*1;
var KetQua = "";

//xử lý:
var tongDiem = d1+d2+d3+(KV+DT);
if(tongDiem >= diemChuan && d1>0 && d2>0 && d3>0){
    KetQua += "Bạn đã đậu.Tổng điểm bằng: "+tongDiem;
}else if(tongDiem < diemChuan && d1>0 && d2>0 && d3>0){
    KetQua += "Bạn đã rớt.Tổng điểm bằng: "+tongDiem;
}else{KetQua = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"};

//Đầu ra:
document.getElementById("showInfoKQ").innerHTML = KetQua;
};

//  Bài 2: Tính tiền điện


var btnTienDien = document.getElementById("btnTienDien");
btnTienDien.onclick = function(){
    //đầu vào:
    var ten = document.getElementById("ten").value;
    var soKW = document.getElementById("soKW").value*1;
    const KW1 = 500;
    const KW2 = 650;
    const KW3 = 850;
    const KW4 = 1100;
    const KW5 = 1300;
    var tien=0;

    //xử lý:

    if(soKW>0 && soKW<=50){
        tien+=KW1*soKW;
    }else if(soKW>50 && soKW<=100){
        tien+=(50*KW1)+(soKW-50)*KW2;
    }else if(soKW>100 && soKW<=200){
        tien+=(50*KW1)+(50*KW2)+(soKW-100)*KW3;
    }else if(soKW>200 && soKW<=350){
        tien+=(50*KW1)+(50*KW2)+(100*KW3)+(soKW-200)*KW4;
    }else if(soKW>350){
        tien+=(50*KW1)+(50*KW2)+(100*KW3)+(150*KW4)+(soKW-350)*KW5;
    }else{
        tien+= alert("Số kw không hợp lệ! Vui lòng nhập lại");
    };
    var currenFormat = new Intl.NumberFormat("VN-vn");
    
    //đầu ra:
    document.getElementById("showInfoTienDien").innerHTML="<p class='alert alert-success'>Họ Tên: "+ten+"</p> <p class='alert alert-success'> Tiền điện: "+currenFormat.format(tien)+" VND</p>";
};
