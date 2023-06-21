export default class CheckInput {
  checkMa = (id, thongBao) => {
    let regexMa = document.getElementById(id).value;
    if (regexMa == "") {
      document.getElementById(thongBao).innerHTML = "Vui lòng nhập trường này";
      return false;
    } else {
      document.getElementById(thongBao).innerHTML = "";
      return true;
    }
  };

  checkTen = (id, thongBao) => {
    let regexTen = document.getElementById(id).value;
    if (regexTen == "") {
      document.getElementById(thongBao).innerHTML = "Vui lòng nhập trường này";
      return false;
    } else {
      let chiLayChu = /^[\p{L} ]+$/u;
      let tenHopLe = chiLayChu.test(regexTen);
      if (tenHopLe) {
        document.getElementById(thongBao).innerHTML = "";
        return true;
      } else {
        document.getElementById(thongBao).innerHTML =
          "Vui lòng nhập tên chỉ chứa ký tự chữ";
        return false;
      }
    }
  };

  checkEmail = (id, thongBao) => {
    let regexEmail = document.getElementById(id).value;
    if (regexEmail == "") {
      document.getElementById(thongBao).innerHTML = "Vui lòng nhập trường này";
      return false;
    } else {
      let mauRegexEmail =
        /^[^\s@áàảãạăắằẳẵặâấầẩẫậđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+@[^\s@áàảãạăắằẳẵặâấầẩẫậđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+\.[^\s@áàảãạăắằẳẵặâấầẩẫậđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+$/i;
      let mailHopLe = mauRegexEmail.test(regexEmail);

      if (mailHopLe == true) {
        document.getElementById(thongBao).innerHTML = "";
        return true;
      } else {
        document.getElementById(thongBao).innerHTML =
          "Vui lòng nhập email hợp lệ (info@gmail.com)";
        return false;
      }
    }
  };

  checkDiaChi = (id, thongBao) => {
    let regexDiaChi = document.getElementById(id).value;
    if (regexDiaChi == "") {
      document.getElementById(thongBao).innerHTML = "Vui lòng nhập trường này";
      return false;
    } else {
      document.getElementById(thongBao).innerHTML = "";
      return true;
    }
  };

  checkDiem = (id, thongBao) => {
    let regexDiem = document.getElementById(id).value;
    if (regexDiem == "") {
      document.getElementById(thongBao).innerHTML = "Vui lòng nhập trường này";
      return false;
    } else {
      let chiLaySo = /[0-9]/g;
      let diemHopLe = chiLaySo.test(regexDiem);
      if (diemHopLe) {
        if (regexDiem >= 0 && regexDiem <= 10) {
          document.getElementById(thongBao).innerHTML = "";
          return true;
        } else {
          document.getElementById(thongBao).innerHTML =
            "Vui lòng nhập số điểm hợp lệ";
          return false;
        }
      } else {
        document.getElementById(thongBao).innerHTML = "Vui lòng nhập ký tự số";
      }
    }
  };
  checkSoNgayLam = (id, thongBao) => {
    let regexSoNgayLam = document.getElementById(id).value;
    if (regexSoNgayLam == "") {
      document.getElementById(thongBao).innerHTML = "Vui lòng nhập trường này";
      return false;
    } else {
      let chiLaySo = /[0-9]/g;
      let ngayHopLe = chiLaySo.test(regexSoNgayLam);
      if (ngayHopLe) {
        if (regexSoNgayLam >= 0 && regexSoNgayLam <= 30) {
          document.getElementById(thongBao).innerHTML = "";
          return true;
        } else {
          document.getElementById(thongBao).innerHTML =
            "Vui lòng nhập số ngày làm hợp lệ";
          return false;
        }
      } else {
        document.getElementById(thongBao).innerHTML = "Vui lòng nhập ký tự số";
      }
    }
  };
  checkDiem = (id, thongBao) => {
    let input = document.getElementById(id).value;
    let myRegex = /^[0-9]+$/g;
    let result = myRegex.test(input);
    if (input == "") {
      document.getElementById(thongBao).innerHTML = "Vui lòng nhập trường này";
      return false;
    } else if (result == false) {
      document.getElementById(id).value = "";
      document.getElementById(thongBao).innerHTML = "Chỉ được nhập số";
      return false;
    } else if (input > 10) {
      document.getElementById(thongBao).innerHTML = "Điểm lớn nhất là 10.";
      return false;
    } else {
      document.getElementById(thongBao).innerHTML = "";
      return true;
    }
  };
}
