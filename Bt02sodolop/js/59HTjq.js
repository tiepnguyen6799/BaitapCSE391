//xac dinh phan tu chua anh
//const albumView = document.querySelector('#album-view');
//chen nhieu anh
//const image = document.createElement('img'); //tạo ảnh mới
//image.src ='.jpg';
//chèn ảnh vào một vùng chứa ảnh
//albumView.appendChild(image);

//xử lý sự kiện nhấp vào ảnh
//const anhNhap= document.querySelector('img');
//const modelView =document.querySelector('#modelView');
//anhNhap.addEventListener()

$(document).ready(function() {
  //thêm mới ảnh với list tên ảnh
  var anh = [
  'HaNguyenAnh.jpg',
  'HoangNgocAnh.jpg',
  'NguyenTuanAnh.jpg',
  'ndmd.jpg',
  'TranDinhNam.jpg',
  'NguyenXuanChien.jpg',
  'HoangNAnhVu.jpg',
  'CuManhDat.jpg',
  'DangXuanPhong.jpg',
  'BuiChienThang.jpg',
  'DuongMinhTien.jpg',
  'HoangNhatMinh.jpg',
  'HongSon.jpg',
  'Huyentrang.jpg',
  'LeHuuTien.jpg',
  'LeThanhThao.jpg',
  'LeThiHang.jpg',
  'LeTrongLinh.jpg',
 ];
  for(let i=0; i<anh.length; i++) 
  {
    $('#album-view').append('<img src="img/'+anh[i]+'"/>');
  }

  //xử lý sự kiện
  //each tương ứng với 1 vòng lặp
  $('img').each(function(index) {
    $(this).click(function() {
      $('#modal-view').append('<img src="'+$(this).attr('src')+'"/>');
      $('#modal-view').removeClass('hidden');
    })
  })
  $('#modal-view').click(function() {
    $(this).addClass('hidden').html('');
  })
});

$(document).ready(function() {
  //thêm mới ảnh với list tên ảnh
  var anh = [
  'LuuTungLam.jpg',
  'NgoBaoKhoi.jpg',
  'NgocTu.jpg',
  'NgoDoanDat.jpg',
  'NguyenDucDung.jpg',
  'NguyenDuyLinh.jpg',
  'NguyenHoa.jpg',
  'NguyenManhHung.jpg',
  'NguyenPhuHuy.jpg',
  'NguyenThuyHang.jpg',
  'NguyenTienTiep.jpg',
  'NguyenTrang.jpg',
  'NguyenVanThang.jpg',
  'PhamMinhHieu.jpg',
  'PhamThiPhuong.jpg',
  'PhamTienAnh.jpg',
  'NguyenQuan.jpg',
  'TranHien.jpg',
 ];
  for(let i=0; i<anh.length; i++) 
  {
    $('#album-view2').append('<img src="img/'+anh[i]+'"/>');
  }

  //xử lý sự kiện
  //each tương ứng với 1 vòng lặp
  $('img').each(function(index) {
    $(this).click(function() {
      $('#modal-view2').append('<img src="'+$(this).attr('src')+'"/>');
      $('#modal-view2').removeClass('hidden2');
    })
  })
  $('#modal-view2').click(function() {
    $(this).addClass('hidden2').html('');
  })
});

$(document).ready(function() {
  //thêm mới ảnh với list tên ảnh
  var anh = [
  'TranTienVu.jpg',
  'NguyenThiHue.jpg',
  'NguyenThiLoan.jpg',
  'PhamVietTung.jpg',
  'NguyenThanhDu.jpg',
  'PhanHuyAnh.jpg',
  'TrinhBichNgoc.jpg',
  'VuThiThuy.jpg',
  'TranLeHang.jpg',
  'TranThuThuy.jpg',
  'VuMinhLam.jpg',
  'VuManhTRuongGiang.jpg',
 ];
  for(let i=0; i<anh.length; i++) 
  {
    $('#album-view3').append('<img src="img/'+anh[i]+'"/>');
  }

  //xử lý sự kiện
  //each tương ứng với 1 vòng lặp
  $('img').each(function(index) {
    $(this).click(function() {
      $('#modal-view3').append('<img src="'+$(this).attr('src')+'"/>');
      $('#modal-view3').removeClass('hidden3');
    })
  })
  $('#modal-view3').click(function() {
    $(this).addClass('hidden3').html('');
  })
});

var d = new Date();
 
d.getDate();
d.getDay();
d.getFullYear();
d.getYear();
d.getHours();
d.getMilliseconds();
d.getMinutes();
d.getMonth();
d.getSeconds();
d.getTime();
