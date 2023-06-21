export default class CheckInput {
  checkMa = (id, thongBao) => {
    let regexMa = document.getElementById(id).value;
    if (regexMa == "") {
      document.getElementById(thongBao).innerHTML = "Không được bỏ trống";
      return false;
    } else {
      document.getElementById(thongBao).innerHTML = "";
      return true;
    }
  };

  checkTen = (id, thongBao) => {
    let regexTen = document.getElementById(id).value;
    if (regexTen == "") {
      document.getElementById(thongBao).innerHTML = "Không được bỏ trống";
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
      document.getElementById(thongBao).innerHTML = "Không được bỏ trống";
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
      document.getElementById(thongBao).innerHTML = "Không được bỏ trống";
      return false;
    } else {
      document.getElementById(thongBao).innerHTML = "";
      return true;
    }
  };

  checkSoNgayLam = (id, thongBao) => {
    let input = document.getElementById(id).value;
    if (input == "") {
      document.getElementById(thongBao).innerHTML = "Không được bỏ trống";
      return false;
    } else {
      document.getElementById(thongBao).innerHTML = "";
      let number = Number(
        this.chiLaySoCuaChuoi(document.getElementById(id).value)
      );
      document.getElementById(id).value = number;
      if (number < 0 || number > 31) {
        document.getElementById(thongBao).innerHTML = "Số ngày làm từ 0 đến 31";
        return false;
      } else {
        document.getElementById(thongBao).innerHTML = "";
        return true;
      }
    }
  };
  checkDiem = (id, thongBao) => {
    let input = document.getElementById(id).value;
    if (input == "") {
      document.getElementById(thongBao).innerHTML = "Không được bỏ trống";
      return false;
    } else {
      document.getElementById(thongBao).innerHTML = "";
      let number = Number(
        this.chiLaySoCuaChuoi(document.getElementById(id).value)
      );
      console.log(number);
      document.getElementById(id).value = number;
      if (number < 0 || number > 10) {
        document.getElementById(thongBao).innerHTML = "Số điểm từ 0 đến 10";
        return false;
      } else {
        document.getElementById(thongBao).innerHTML = "";
        return true;
      }
    }
  };
  checkSoTien = (id, thongBao) => {
    let input = document.getElementById(id).value;
    if (input == "") {
      document.getElementById(thongBao).innerHTML = "Không được bỏ trống";
      return false;
    } else {
      document.getElementById(thongBao).innerHTML = "";
      let number = Number(
        this.chiLaySoCuaChuoi(
          document.getElementById(id).value.replaceAll(/[, .]/g, "")
        )
      );
      document.getElementById(id).value = number.toLocaleString();
      document.getElementById(thongBao).innerHTML = "";
      return true;
    }
  };
  chiLaySoCuaChuoi = (str) => {
    var numberRegex = /\d+/g;
    var numbers = str.match(numberRegex);
    var result = numbers ? numbers.join("") : "";
    return result;
  };
}
