export default class PerSon {
  constructor() {
    this.ma = "";
    this.ten = "";
    this.diaChi = "";
    this.email = "";
    this.doiTuong = "";
  }
}

export class SinhVien extends PerSon {
  constructor() {
    super();
    this.toan = "";
    this.ly = "";
    this.hoa = "";
  }
  tinhDiemTb = () => {
    return ((this.toan + this.ly + this.hoa) / 3).toFixed(2);
  };
  xepLoai = () => {
    if (this.tinhDiemTb() >= 9) {
      return "giỏi";
    } else if (this.tinhDiemTb() >= 7) {
      return "khá";
    } else if (this.tinhDiemTb() >= 5) {
      return "trung bình";
    } else {
      return "yếu";
    }
  };
}

export class NhanVien extends PerSon {
  constructor() {
    super();
    this.soNgayLam = "";
    this.luongNgay = "";
  }
  xepLoai = () => {
    if (this.soNgayLam >= 24) {
      return "xuất sắc";
    } else if (this.soNgayLam >= 22) {
      return "chăm chỉ";
    } else if (this.soNgayLam >= 20) {
      return "lười biếng";
    } else {
      return "Sắp bị đuổi";
    }
  };
  tongTienLuong = () => {
    return (this.soNgayLam * this.luongNgay).toLocaleString();
  };
}
export class KhachHang extends PerSon {
  constructor() {
    super();
    this.tenCty = "";
    this.giaTriHd = "";
  }
  xepLoai = () => {
    if (this.giaTriHd >= 30000000) {
      return "khách vip";
    } else {
      return "khách bèo";
    }
  };
}
