function dataHandling2(arr) {

    //Menggunakan Splice
    arr.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    arr.splice(4, 1, 'Pria', 'SMA Internasional Metro')
    console.log(arr);

    //Menggunakan Split dan Swicth Case
    var date = arr[3].split('/');
    var date2 = Array.prototype.slice.apply(date);
    var [day, month, year] = date;

    switch (month) {
        case '01':
            month = "Januari";
            break;
        case '02':
            month = "Februari";
            break;
        case '03':
            month = "Maret";
            break;
        case '04':
            month = "April";
            break;
        case '05':
            month = "Mei";
            break;
        case '06':
            month = "Juni";
            break;
        case '07':
            month = "Juli";
            break;
        case '08':
            month = "Agustus";
            break;
        case '09':
            month = "September";
            break;
        case '10':
            month = "Oktober";
            break;
        case '11':
            month = "November";
            break;
        case '12':
            month = "Desember";
            break;
    }

    // Menggunakan Sort dan Join
    console.log(month);
    date.sort((a, b) => parseInt(a) < parseInt(b));
    console.log(date);
    date2 = date2.join('-');
    console.log(date2);
    const name = arr[1].slice(0, 15);
    console.log(name);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);