import { KhachHang, NhanVien, SinhVien } from "./objects.js";

export default class ChucNang {
  constructor() {
    this.tatCaDoiTuong = [];
  }
  tatMoForm = () => {
    document.getElementById("formContent").classList.toggle("transform0");
    document.getElementById("myOverlay").classList.toggle("none");
    document.getElementById("luuDoiTuongMoi").classList.remove("none");
    document.getElementById("capNhatDoiTuong").classList.add("none");
    document.getElementById("checkMa").innerHTML = "";
    document.getElementById("checkTen").innerHTML = "";
    document.getElementById("checkEmail").innerHTML = "";
    document.getElementById("checkDiaChi").innerHTML = "";
    document.getElementById("checkDoiTuong").innerHTML = "";
    document.getElementById("checkDiemToan").innerHTML = "";
    document.getElementById("checkDiemLy").innerHTML = "";
    document.getElementById("checkDiemHoa").innerHTML = "";
    document.getElementById("checkSoNgayLam").innerHTML = "";
    document.getElementById("checkTienLuongMoiNgay").innerHTML = "";
    document.getElementById("checkTenCongTy").innerHTML = "";
    document.getElementById("checkGiaTriHoaDon").innerHTML = "";
  };
  themDoiTuong = (doiTuong) => {
    this.tatCaDoiTuong.push(doiTuong);
  };
  luuLocal = () => {
    localStorage.setItem("tatcadoituong", JSON.stringify(this.tatCaDoiTuong));
  };
  goiLocal = () => {
    let tatcadoituongLocal = JSON.parse(localStorage.getItem("tatcadoituong"));
    if (tatcadoituongLocal != null) {
      this.tatCaDoiTuong = tatcadoituongLocal;
    }
  };
  renderGiaoDien = (arr) => {
    // gọi hàm render nhưng không truyền mảng mới
    if (!arr) {
      arr = this.tatCaDoiTuong;
    }
    let content = "";
    arr.forEach((item) => {
      let { doiTuong } = item;

      if (doiTuong == "sinh viên") {
        let sinhVien = new SinhVien();
        Object.assign(sinhVien, item);
        let { ma, ten, email, diaChi, doiTuong, xepLoai, tinhDiemTb } =
          sinhVien;
        content += `
        <tr>
          <td class="code">${ma}</td>
          <td class="text">${ten}</td>
          <td>${email}</td>
          <td class="text">${diaChi}</td>
          <td class="text">${
            doiTuong == "sinh viên" ? "Sinh Viên" : "hullo mentor ngok :)"
          }</td>
          <td class="text">
          Điểm TB: ${tinhDiemTb()}
          </td>
          <td class="text">${xepLoai()}</td>
          <td>
            <button type="button" onclick="chinhSua('${ma}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" onclick="xoa('${ma}')">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
        `;
      } else if (doiTuong == "nhân viên") {
        let nhanVien = new NhanVien();
        Object.assign(nhanVien, item);
        let { ma, ten, email, diaChi, doiTuong, xepLoai, tongTienLuong } =
          nhanVien;
        content += `
        <tr>
          <td class="code">${ma}</td>
          <td class="text">${ten}</td>
          <td>${email}</td>
          <td class="text">${diaChi}</td>
          <td class="text">${
            doiTuong == "nhân viên" ? "nhân viên" : "hullo mentor ngok :)"
          }</td>
          <td class="text">
          Tổng tiền lương: ${tongTienLuong()}đ
          </td>
          <td class="text">${xepLoai()}</td>
          <td>
            <button type="button" onclick="chinhSua('${ma}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" onclick="xoa('${ma}')">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
        `;
      } else if (doiTuong == "khách hàng") {
        let khachHang = new KhachHang();
        Object.assign(khachHang, item);
        let { ma, ten, email, diaChi, doiTuong, tenCty, giaTriHd, xepLoai } =
          khachHang;
        content += `
        <tr>
          <td class="code">${ma}</td>
          <td class="text">${ten}</td>
          <td>${email}</td>
          <td class="text">${diaChi}</td>
          <td class="text">${
            doiTuong == "khách hàng" ? "khách hàng" : "hullo mentor ngok :)"
          }</td>
          <td class="text">
          Cty: ${tenCty} <br>
          Giá trị HĐ: ${giaTriHd.toLocaleString()}đ
          </td>
          <td class="text">${xepLoai()}</td>
          <td>
            <button type="button" onclick="chinhSua('${ma}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" onclick="xoa('${ma}')">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
        `;
      }
    });
    document.getElementById("tBody").innerHTML = content;
  };
  chinhSua = (ma) => {
    this.tatMoForm();
    document.getElementById("luuDoiTuongMoi").classList.add("none");
    document.getElementById("capNhatDoiTuong").classList.remove("none");
    document.getElementById("ketQua").innerHTML = "";
    let doiTuongCanSua = this.tatCaDoiTuong.find((item) => {
      return item.ma == ma;
    });

    let { doiTuong } = doiTuongCanSua;
    if (doiTuong == "sinh viên") {
      document.getElementById("doiTuong").value = "sinh viên";
      document.getElementById("doiTuong").disabled = "true";
      document.getElementById("ma").disabled = "true";
      document.getElementById("sinhVien").classList.remove("none");
      document.getElementById("nhanVien").classList.add("none");
      document.getElementById("khachHang").classList.add("none");
      let personInputs = document.querySelectorAll(
        "#myForm #person input, select "
      );
      let inputSinhVien = document.querySelectorAll("#myForm #sinhVien input");
      let allInputs = [...personInputs, ...inputSinhVien];

      for (let input of allInputs) {
        let { id } = input;
        input.value = doiTuongCanSua[id];
      }
    } else if (doiTuong == "nhân viên") {
      document.getElementById("doiTuong").value = "nhân viên";
      document.getElementById("doiTuong").disabled = "true";
      document.getElementById("ma").disabled = "true";
      document.getElementById("sinhVien").classList.add("none");
      document.getElementById("nhanVien").classList.remove("none");
      document.getElementById("khachHang").classList.add("none");
      let personInputs = document.querySelectorAll(
        "#myForm #person input, select "
      );
      let inputnhanVien = document.querySelectorAll("#myForm #nhanVien input");
      let allInputs = [...personInputs, ...inputnhanVien];
      for (let input of allInputs) {
        let { id } = input;
        input.value = doiTuongCanSua[id];
      }
    } else if (doiTuong == "khách hàng") {
      document.getElementById("doiTuong").value = "khách hàng";
      document.getElementById("doiTuong").disabled = "true";
      document.getElementById("ma").disabled = "true";
      document.getElementById("sinhVien").classList.add("none");
      document.getElementById("nhanVien").classList.add("none");
      document.getElementById("khachHang").classList.remove("none");
      let personInputs = document.querySelectorAll(
        "#myForm #person input, select "
      );
      let inputKhachHang = document.querySelectorAll(
        "#myForm #khachHang input"
      );
      let allInputs = [...personInputs, ...inputKhachHang];

      for (let input of allInputs) {
        let { id } = input;
        input.value = doiTuongCanSua[id];
      }
    }
  };
  xoa = (ma) => {
    let xacNhanXoa = confirm(
      "Bạn có chắc muốn xóa đối tượng có mã là " + ma.toUpperCase() + " ?"
    );
    if (xacNhanXoa == true) {
      let viTri = this.tatCaDoiTuong.findIndex((item) => {
        return item.ma == ma;
      });
      this.tatCaDoiTuong.splice(viTri, 1);
      this.luuLocal();
      this.goiLocal();
      this.doDuLieuChoSort();
      this.renderGiaoDien();
    }
  };
  capNhat = (doiTuong) => {
    let viTri = this.tatCaDoiTuong.findIndex((item) => {
      return item.ma == doiTuong.ma;
    });
    this.tatCaDoiTuong[viTri] = doiTuong;
    this.luuLocal();
    this.goiLocal();
    this.renderGiaoDien();
    document.getElementById("ketQua").innerHTML = "Cập nhật thành công";
  };
  timKiemDoiTuong = () => {
    let input = this.boDauTiengViet(
      document.getElementById("timKiem").value
    ).toLowerCase();

    let sortDoiTuong = document.getElementById("sortDoiTuong").value;
    let content = "";
    if (sortDoiTuong == "") {
      let ketQua = this.tatCaDoiTuong.filter((item) => {
        return (
          this.boDauTiengViet(item.ma).includes(input) ||
          this.boDauTiengViet(item.ten).includes(input) ||
          this.boDauTiengViet(item.diaChi).includes(input) ||
          this.boDauTiengViet(item.email).includes(input) ||
          this.boDauTiengViet(item.doiTuong).includes(input)
        );
      });
      this.renderGiaoDien(ketQua);
    } else {
      let ketQuaSortDoiTuong = this.tatCaDoiTuong.filter((item) => {
        return (
          this.boDauTiengViet(item.doiTuong) ==
          this.boDauTiengViet(sortDoiTuong)
        );
      });
      let ketQua = ketQuaSortDoiTuong.filter((item) => {
        return (
          this.boDauTiengViet(item.ma).includes(input) ||
          this.boDauTiengViet(item.ten).includes(input) ||
          this.boDauTiengViet(item.diaChi).includes(input) ||
          this.boDauTiengViet(item.email).includes(input) ||
          this.boDauTiengViet(item.doiTuong).includes(input)
        );
      });
      console.log(ketQua);
      this.renderGiaoDien(ketQua);
    }
  };
  resetForm = () => {
    document.getElementById("myForm").reset();
  };

  doDuLieuChoSort = () => {
    this.goiLocal();
    let arrSort = this.tatCaDoiTuong.map((item) => {
      return item.doiTuong;
    });
    arrSort = [...new Set(arrSort)];

    if (arrSort.length == 0) {
      document.getElementById("myTable").classList.add("none");
      document.getElementById("mySearch").classList.add("none");
      document.getElementById("mySort").classList.add("none");
      document.getElementById("tbRender").innerHTML = `
      <h2 style="color:red; text-align:center; margin-top:20px">Chưa có dữ liệu</h2>
      `;
    } else {
      document.getElementById("myTable").classList.remove("none");
      document.getElementById("mySearch").classList.remove("none");
      document.getElementById("mySort").classList.remove("none");
      document.getElementById("tbRender").innerHTML = "";
      let content = `<option value="">Chọn đối tượng</option>`;
      arrSort.forEach((item) => {
        content += `
      <option value="${item}">${item.toUpperCase()}</option>
      `;
      });
      document.getElementById("sortDoiTuong").innerHTML = content;
    }
  };

  sortDoiTuong = (doiTuongCanSort) => {
    let ketQuaSort = this.tatCaDoiTuong.filter((item) => {
      let { doiTuong } = item;
      return doiTuong == doiTuongCanSort;
    });
    if (ketQuaSort.length == 0) {
      ketQuaSort = this.tatCaDoiTuong;
    }

    let content = "";
    ketQuaSort.forEach((item) => {
      let { doiTuong } = item;

      if (doiTuong == "sinh viên") {
        let sinhVien = new SinhVien();
        Object.assign(sinhVien, item);
        let { ma, ten, email, diaChi, doiTuong, xepLoai, tinhDiemTb } =
          sinhVien;
        content += `
        <tr>
          <td class="code">${ma}</td>
          <td class="text">${ten}</td>
          <td>${email}</td>
          <td class="text">${diaChi}</td>
          <td class="text">${
            doiTuong == "sinh viên" ? "Sinh Viên" : "hullo mentor ngok :)"
          }</td>
          <td class="text">
          Điểm TB: ${tinhDiemTb()}
          </td>
          <td class="text">${xepLoai()}</td>
          <td>
            <button type="button" onclick="chinhSua('${ma}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" onclick="xoa('${ma}')">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
        `;
      } else if (doiTuong == "nhân viên") {
        let nhanVien = new NhanVien();
        Object.assign(nhanVien, item);
        let { ma, ten, email, diaChi, doiTuong, xepLoai, tongTienLuong } =
          nhanVien;
        content += `
        <tr>
          <td class="code">${ma}</td>
          <td class="text">${ten}</td>
          <td>${email}</td>
          <td class="text">${diaChi}</td>
          <td class="text">${
            doiTuong == "nhân viên" ? "nhân viên" : "hullo mentor ngok :)"
          }</td>
          <td class="text">
          Tổng tiền lương: ${tongTienLuong()}đ
          </td>
          <td class="text">${xepLoai()}</td>
          <td>
            <button type="button" onclick="chinhSua('${ma}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" onclick="xoa('${ma}')">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
        `;
      } else if (doiTuong == "khách hàng") {
        let khachHang = new KhachHang();
        Object.assign(khachHang, item);
        let { ma, ten, email, diaChi, doiTuong, tenCty, giaTriHd, xepLoai } =
          khachHang;
        content += `
        <tr>
          <td class="code">${ma}</td>
          <td class="text">${ten}</td>
          <td>${email}</td>
          <td class="text">${diaChi}</td>
          <td class="text">${
            doiTuong == "khách hàng" ? "khách hàng" : "hullo mentor ngok :)"
          }</td>
          <td class="text">
          Cty: ${tenCty} <br>
          Giá trị HĐ: ${giaTriHd.toLocaleString()}đ
          </td>
          <td class="text">${xepLoai()}</td>
          <td>
            <button type="button" onclick="chinhSua('${ma}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" onclick="xoa('${ma}')">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
        `;
      }
    });
    document.getElementById("tBody").innerHTML = content;
  };

  //BỎ DẤU TIẾNG VIỆT
  boDauTiengViet = (str) => {
    const mauText = {
      à: "a",
      á: "a",
      ạ: "a",
      ả: "a",
      ã: "a",
      â: "a",
      ầ: "a",
      ấ: "a",
      ậ: "a",
      ẩ: "a",
      ẫ: "a",
      ă: "a",
      ằ: "a",
      ắ: "a",
      ặ: "a",
      ẳ: "a",
      ẵ: "a",
      è: "e",
      é: "e",
      ẹ: "e",
      ẻ: "e",
      ẽ: "e",
      ê: "e",
      ề: "e",
      ế: "e",
      ệ: "e",
      ể: "e",
      ễ: "e",
      ì: "i",
      í: "i",
      ị: "i",
      ỉ: "i",
      ĩ: "i",
      ò: "o",
      ó: "o",
      ọ: "o",
      ỏ: "o",
      õ: "o",
      ô: "o",
      ồ: "o",
      ố: "o",
      ộ: "o",
      ổ: "o",
      ỗ: "o",
      ơ: "o",
      ờ: "o",
      ớ: "o",
      ợ: "o",
      ở: "o",
      ỡ: "o",
      ù: "u",
      ú: "u",
      ụ: "u",
      ủ: "u",
      ũ: "u",
      ư: "u",
      ừ: "u",
      ứ: "u",
      ự: "u",
      ử: "u",
      ữ: "u",
      ỳ: "y",
      ý: "y",
      ỵ: "y",
      ỷ: "y",
      ỹ: "y",
      đ: "d",
      À: "A",
      Á: "A",
      Ạ: "A",
      Ả: "A",
      Ã: "A",
      Â: "A",
      Ầ: "A",
      Ấ: "A",
      Ậ: "A",
      Ẩ: "A",
      Ẫ: "A",
      Ă: "A",
      Ằ: "A",
      Ắ: "A",
      Ặ: "A",
      Ẳ: "A",
      Ẵ: "A",
      È: "E",
      É: "E",
      Ẹ: "E",
      Ẻ: "E",
      Ẽ: "E",
      Ê: "E",
      Ề: "E",
      Ế: "E",
      Ệ: "E",
      Ể: "E",
      Ễ: "E",
      Ì: "I",
      Í: "I",
      Ị: "I",
      Ỉ: "I",
      Ĩ: "I",
      Ò: "O",
      Ó: "O",
      Ọ: "O",
      Ỏ: "O",
      Õ: "O",
      Ô: "O",
      Ồ: "O",
      Ố: "O",
      Ộ: "O",
      Ổ: "O",
      Ỗ: "O",
      Ơ: "O",
      Ờ: "O",
      Ớ: "O",
      Ợ: "O",
      Ở: "O",
      Ỡ: "O",
      Ù: "U",
      Ú: "U",
      Ụ: "U",
      Ủ: "U",
      Ũ: "U",
      Ư: "U",
      Ừ: "U",
      Ứ: "U",
      Ự: "U",
      Ử: "U",
      Ữ: "U",
      Ỳ: "Y",
      Ý: "Y",
      Ỵ: "Y",
      Ỷ: "Y",
      Ỹ: "Y",
      Đ: "D",
    };
    return str.replace(/[^\u0000-\u007E]/g, function (a) {
      return mauText[a] || a;
    });
  };
}
