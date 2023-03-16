<?php
if(isset($_POST['nama'])){
    $nama = $_POST['nama'];
    $nik = $_POST['nik'];
    $tempat = $_POST['tempat'];
    $tanggal = $_POST['tanggal'];
    $jk = $_POST['cowo'];
    $alamat = $_POST['alamat'];
    $rt = $_POST['rt'];
    $rw = $_POST['rw'];
    $desa = $_POST['desa'];
    $kecamatan = $_POST['kecamatan'];
    $kabupaten = $_POST['kabupaten'];
    $provinsi = $_POST['provinsi'];
    $agama = $_POST['agama'];
    $status = $_POST['status'];
    $pekerjaan = $_POST['pekerjaan'];
    $kewarganegaraan = $_POST['kewarganegaraan'];

    $conx = mysqli_connect("localhost", "root", "", "desa");
    $sql = "INSERT INTO `info`(`nama`, `nik`, `tempat`, `tanggal`, `jk`, `alamat`, `rt`, `rw`, `desa`, `kecamatan`, `kabupaten`, `provinsi`, `agama`, `status`, `pekerjaan`, `kewarganegaraan`) VALUES ('$nama','$nik','$tempat','$tanggal','$jk','$alamat','$rt','$rw','$desa','$kecamatan','$kabupaten','$provinsi','$agama','$status','$pekerjaan','$kewarganegaraan');";
    $result = mysqli_query($conx, $sql);
    if($result == true){
        echo "Data berhasil disimpan";
}
}
?>