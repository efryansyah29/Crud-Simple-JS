var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["No"] = document.getElementById("No").value;
    formData["Nama_Perumahan"] = document.getElementById("Nama_Perumahan").value;
    formData["Nama_Developer"] = document.getElementById("Nama_Developer").value;
    formData["Nama_Cluster"] = document.getElementById("Nama_Cluster").value;
    formData["Luas_Tanah"] = document.getElementById("Luas_Tanah").value;
    formData["Panjang_Tanah"] = document.getElementById("Panjang_Tanah").value;
    formData["Lebar_Tanah"] = document.getElementById("Lebar_Tanah").value;
    formData["Luas_Bangunan"] = document.getElementById("Luas_Bangunan").value;
    formData["Harga_Jual"] = document.getElementById("Harga_Jual").value;
    formData["Jumlah_Lantai"] = document.getElementById("Jumlah_Lantai").value;
    formData["Jumlah_Kamar_Mandi"] = document.getElementById("Jumlah_Kamar_Mandi").value;
    formData["Jumlah_Kamar_Tidur"] = document.getElementById("Jumlah_Kamar_Tidur").value;
    formData["Sudah_Ada_Dapur"] = document.getElementById("Sudah_Ada_Dapur").value;
    formData["Sudah_Ada_Canopy"] = document.getElementById("Sudah_Ada_Canopy").value;
    formData["Sudah_Ada_Pagar"] = document.getElementById("Sudah_Ada_Pagar").value;
    formData["Sudah_Ada_Taman"] = document.getElementById("Sudah_Ada_Taman").value;
    formData["Sudah_One_Gate_System"] = document.getElementById("Sudah_One_Gate_System").value;
    formData["Sudah_Smart_Home"] = document.getElementById("Sudah_Smart_Home").value;
    formData["Keabsahan"] = document.getElementById("Keabsahan").value;
    formData["Sudah_Bisa_KPR"] = document.getElementById("Sudah_Bisa_KPR").value;
    formData["Jenis_Air"] = document.getElementById("Jenis_Air").value;
    formData["Lebar_Akses_Jalan"] = document.getElementById("Lebar_Akses_Jalan").value;
    formData["Jarak_dengan_Bandara_terdekat"] = document.getElementById("Jarak_dengan_Bandara_terdekat").value;
    formData["Jarak_dengan_Rumah_Sakit_terdekat"] = document.getElementById("Jarak_dengan_Rumah_Sakit_terdekat").value;
    formData["Jarak_dengan_Pusat_Pembelian_Bahan_Pokok"] = document.getElementById("Jarak_dengan_Pusat_Pembelian_Bahan_Pokok").value;
    formData["Jarak_dengan_Pusat_Kota"] = document.getElementById("Jarak_dengan_Pusat_Kota").value;
    formData["Tahun_Data"] = document.getElementById("Tahun_Data").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.No;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Nama_Perumahan;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Nama_Developer;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Nama_Cluster;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Luas_Tanah;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Panjang_Tanah;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Lebar_Tanah;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.Luas_Bangunan;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.Harga_Jual;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.Jumlah_Lantai;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = data.Jumlah_Kamar_Mandi;
    cell12 = newRow.insertCell(11);
    cell12.innerHTML = data.Jumlah_Kamar_Tidur;
    cell13 = newRow.insertCell(12);
    cell13.innerHTML = data.Sudah_Ada_Dapur;
    cell14 = newRow.insertCell(13);
    cell14.innerHTML = data.Sudah_Ada_Canopy;
    cell15 = newRow.insertCell(14);
    cell15.innerHTML = data.Sudah_Ada_Pagar;
    cell16 = newRow.insertCell(15);
    cell16.innerHTML = data.Sudah_Ada_Taman;
    cell17 = newRow.insertCell(16);
    cell17.innerHTML = data.Sudah_One_Gate_System;
    cell18 = newRow.insertCell(17);
    cell18.innerHTML = data.Sudah_Smart_Home;
    cell19 = newRow.insertCell(18);
    cell19.innerHTML = data.Keabsahan;
    cell20 = newRow.insertCell(19);
    cell20.innerHTML = data.Sudah_Bisa_KPR;
    cell21 = newRow.insertCell(20);
    cell21.innerHTML = data.Jenis_Air;
    cell22 = newRow.insertCell(21);
    cell22.innerHTML = data.Lebar_Akses_Jalan;
    cell23 = newRow.insertCell(22);
    cell23.innerHTML = data.Jarak_dengan_Bandara_terdekat;
    cell23 = newRow.insertCell(23);
    cell23.innerHTML = data.Jarak_dengan_Rumah_Sakit_terdekat;
    cell24 = newRow.insertCell(24);
    cell24.innerHTML = data.Jarak_dengan_Pusat_Pembelian_Bahan_Pokok;
    cell25 = newRow.insertCell(25);
    cell25.innerHTML = data.Jarak_dengan_Pusat_Kota;
    cell26 = newRow.insertCell(26);
    cell26.innerHTML = data.Tahun_Data;
    cell26 = newRow.insertCell(27);
    cell26.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("No").value = "";
    document.getElementById("Nama_Perumahan").value = "";
    document.getElementById("Nama_Developer").value = "";
    document.getElementById("Nama_Cluster").value = "";
    document.getElementById("Luas_Tanah").value = "";
    document.getElementById("Panjang_Tanah").value = "";
    document.getElementById("Lebar_Tanah").value = "";
    document.getElementById("Luas_Bangunan").value = "";
    document.getElementById("Harga_Jual").value = "";
    document.getElementById("Jumlah_Lantai").value = "";
    document.getElementById("Jumlah_Kamar_Mandi").value = "";
    document.getElementById("Jumlah_Kamar_Tidur").value = "";
    document.getElementById("Sudah_Ada_Dapur").value = "";
    document.getElementById("Sudah_Ada_Canopy").value = "";
    document.getElementById("Sudah_Ada_Pagar").value = "";
    document.getElementById("Sudah_Ada_Taman").value = "";
    document.getElementById("Sudah_One_Gate_System").value = "";
    document.getElementById("Sudah_Smart_Home").value = "";
    document.getElementById("Keabsahan").value = "";
    document.getElementById("Sudah_Bisa_KPR").value = "";
    document.getElementById("Jenis_Air").value = "";
    document.getElementById("Lebar_Akses_Jalan").value = "";
    document.getElementById("Jarak_dengan_Bandara_terdekat").value = "";
    document.getElementById("Jarak_dengan_Rumah_Sakit_terdekat").value = "";
    document.getElementById("Jarak_dengan_Pusat_Pembelian_Bahan_Pokok").value = "";
    document.getElementById("Jarak_dengan_Pusat_Kota").value = "";
    document.getElementById("Tahun_Data").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("No").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Nama_Perumahan").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Nama_Developer").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Nama_Cluster").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Luas_Tanah").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Panjang_Tanah").value = selectedRow.cells[5].innerHTML;
    document.getElementById("Lebar_Tanah").value = selectedRow.cells[6].innerHTML;
    document.getElementById("Luas_Bangunan").value = selectedRow.cells[7].innerHTML;
    document.getElementById("Harga_Jual").value = selectedRow.cells[8].innerHTML;
    document.getElementById("Jumlah_Lantai").value = selectedRow.cells[9].innerHTML;
    document.getElementById("Jumlah_Kamar_Mandi").value = selectedRow.cells[10].innerHTML;
    document.getElementById("Jumlah_Kamar_Tidur").value = selectedRow.cells[11].innerHTML;
    document.getElementById("Sudah_Ada_Dapur").value = selectedRow.cells[12].innerHTML;
    document.getElementById("Sudah_Ada_Canopy").value = selectedRow.cells[13].innerHTML;
    document.getElementById("Sudah_Ada_Pagar").value = selectedRow.cells[14].innerHTML;
    document.getElementById("Sudah_Ada_Taman").value = selectedRow.cells[15].innerHTML;
    document.getElementById("Sudah_One_Gate_System").value = selectedRow.cells[16].innerHTML;
    document.getElementById("Sudah_Smart_Home").value = selectedRow.cells[17].innerHTML;
    document.getElementById("Keabsahan").value = selectedRow.cells[18].innerHTML;
    document.getElementById("Sudah_Bisa_KPR").value = selectedRow.cells[19].innerHTML;
    document.getElementById("Jenis_Air").value = selectedRow.cells[20].innerHTML;
    document.getElementById("Lebar_Akses_Jalan").value = selectedRow.cells[21].innerHTML;
    document.getElementById("Jarak_dengan_Bandara_terdekat").value = selectedRow.cells[22].innerHTML;
    document.getElementById("Jarak_dengan_Rumah_Sakit_terdekat").value = selectedRow.cells[23].innerHTML;
    document.getElementById("Jarak_dengan_Pusat_Pembelian_Bahan_Pokok").value = selectedRow.cells[24].innerHTML;
    document.getElementById("Jarak_dengan_Pusat_Kota").value = selectedRow.cells[25].innerHTML;
    document.getElementById("Tahun_Data").value = selectedRow.cells[26].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.No;
    selectedRow.cells[1].innerHTML = formData.Nama_Perumahan;
    selectedRow.cells[2].innerHTML = formData.Nama_Developer;
    selectedRow.cells[3].innerHTML = formData.Nama_Cluster;
    selectedRow.cells[4].innerHTML = formData.Luas_Tanah;
    selectedRow.cells[5].innerHTML = formData.Panjang_Tanah;
    selectedRow.cells[6].innerHTML = formData.Lebar_Tanah;
    selectedRow.cells[7].innerHTML = formData.Luas_Bangunan;
    selectedRow.cells[8].innerHTML = formData.Harga_Jual;
    selectedRow.cells[9].innerHTML = formData.Jumlah_Lantai;
    selectedRow.cells[10].innerHTML = formData.Jumlah_Kamar_Mandi;
    selectedRow.cells[11].innerHTML = formData.Jumlah_Kamar_Tidur;
    selectedRow.cells[12].innerHTML = formData.Sudah_Ada_Dapur;
    selectedRow.cells[13].innerHTML = formData.Sudah_Ada_Canopy;
    selectedRow.cells[14].innerHTML = formData.Sudah_Ada_Pagar;
    selectedRow.cells[15].innerHTML = formData.Sudah_Ada_Taman;
    selectedRow.cells[16].innerHTML = formData.Sudah_One_Gate_System;
    selectedRow.cells[17].innerHTML = formData.Sudah_Smart_Home;
    selectedRow.cells[18].innerHTML = formData.Keabsahan;
    selectedRow.cells[19].innerHTML = formData.Sudah_Bisa_KPR;
    selectedRow.cells[20].innerHTML = formData.Jenis_Air;
    selectedRow.cells[21].innerHTML = formData.Lebar_Akses_Jalan;
    selectedRow.cells[22].innerHTML = formData.Jarak_dengan_Bandara_terdekat;
    selectedRow.cells[23].innerHTML = formData.Jarak_dengan_Rumah_Sakit_terdekat;
    selectedRow.cells[24].innerHTML = formData.Jarak_dengan_Pusat_Pembelian_Bahan_Pokok;
    selectedRow.cells[25].innerHTML = formData.Jarak_dengan_Pusat_Kota;
    selectedRow.cells[26].innerHTML = formData.Tahun_Data;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("No").value == "") {
        isValid = false;
        document.getElementById("NoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NoValidationError").classList.contains("hide"))
            document.getElementById("NoValidationError").classList.add("hide");
    }
    return isValid;
}
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
