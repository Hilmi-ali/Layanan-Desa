function kirimData() {
  var nama = document.getElementById("nama").value;
  var nik = document.getElementById("nik").value;
  var tempat = document.getElementById("tempat").value;
  var tanggal = document.getElementById("tanggal").value;
  var cowo = document.getElementById("laki").value;
  var cewe = document.getElementById("perempuan").value;
  var alamat = document.getElementById("alamat").value;
  var rt = document.getElementById("rt").value;
  var rw = document.getElementById("rw").value;
  var desa = document.getElementById("desa").value;
  var kecamatan = document.getElementById("kecamatan").value;
  var kabupaten = document.getElementById("kabupaten").value;
  var provinsi = document.getElementById("provinsi").value;
  var agama = document.getElementById("agama").value;
  var status = document.getElementById("status").value;
  var pekerjaan = document.getElementById("pekerjaan").value;
  var kewarganegaraan = document.getElementById("kewarganegaraan").value;

  var httpr = new XMLHttpRequest();
  httpr.open("POST", "../getKTP.php", true);
  httpr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  httpr.onreadystatechange = function () {
    if (httpr.readyState == 4 && httpr.status == 200) {
      document.getElementById("response").innerHTML = httpr.responseText;
    }
  };
  httpr.send(
    "nama = " +
      nama +
      "nik = " +
      nik +
      "tempat = " +
      tempat +
      "tanggal = " +
      tanggal +
      "cowo = " +
      cowo +
      "cewe = " +
      cewe +
      "alamat = " +
      alamat +
      "rt = " +
      rt +
      "rw = " +
      rw +
      "desa = " +
      desa +
      "kecamatan = " +
      kecamatan +
      "kabupaten = " +
      kabupaten +
      "provinsi = " +
      provinsi +
      "agama = " +
      agama +
      "status = " +
      status +
      "pekerjaan = " +
      pekerjaan +
      "kewarganegaraan = " +
      kewarganegaraan
  );
}
