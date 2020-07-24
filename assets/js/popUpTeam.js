// Validating Empty Field
function check_empty() {
    if (document.getElementById('Nim').value == "" || document.getElementById('Nama').value == "" || document.getElementById('Keterangan').value == "") {
        alert("Fill All Fields !");
    } 
}

//Function To Display Popup
function div_show(Nim) {
    fetch('/team/' + Nim)
        .then(res => res.json()
        )
        .then(res => {
            console.log(res)
            var User = res.values[0]
            console.log(User)
            $('input[name="Nama"]').val(User.Nama);
            $('input[name="Nim"]').val(User.Nim);
            $('select[name="Posisi"]').val(User.Posisi);
            $('select[name="Jurusan"]').val(User.Jurusan);
            $('select[name="Kelas"]').val(User.Kelas);
            $('textarea[name="Keterangan"]').val(User.Keterangan);
            $('input[name="Tgl_lahir"]').val(User.Tgl_lahir);
        });
    document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('abc').style.display = "none";
}

function hapus(Nim) {
    fetch('/team/' + Nim, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json()
        )
        .then(res => {
            console.log(res)
            if (res.status = 200)
                swal("Good job!", "the data have been deleted!", "success").then(hapus => { document.location.reload() });
            else
                swal("wiu.. wiuu..!", "the data have runaway!", "error");
        });
}

function updateTeam(Nim) {
    var deta ={}
    deta.Nim = (document.getElementById("Nim").value),
    deta.Nama = (document.getElementById("Nama").value),
    deta.Posisi = (document.getElementById("Posisi").value),
    deta.Jurusan = (document.getElementById("Jurusan").value),
    deta.Kelas = (document.getElementById("Kelas").value),
    deta.Keterangan = (document.getElementById("Keterangan").value),
    deta.Tgl_lahir = document.getElementById("Tgl_lahir").value,
    console.log(deta)
    
    fetch('/team/' + Nim, {
        method: 'put', body:JSON.stringify(deta),
        headers: {
            'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
            if (res.status = 200)
                swal("Good job!", "the data have been Modified!", "success").then(hapus => { document.location.reload() });
            else
                swal("wiu.. wiuu..!", "the data have runaway!", "error");
        })
}


function benefit_show(Id_layanan) {
    fetch('/layananplus/' + Id_layanan)
        .then(res => res.json()
        )
        .then(res => {
            console.log(res)
            var Layanan = res.values[0]
            console.log(Layanan)
            $('input[name="Id_layanan"]').val(Layanan.Id_layanan);
            $('input[name="Nm_layanan"]').val(Layanan.Nm_layanan);
            $('textarea[name="Deskripsi_layanan"]').val(Layanan.Deskripsi_layanan);
        });
    document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('abc').style.display = "none";
}

function hapus_benefit(Id_layanan) {
    fetch('/layananplus/' + Id_layanan, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json()
        )
        .then(res => {
            console.log(res)
            if (res.status = 200)
                swal("Good job!", "the data have been deleted!", "success").then(hapus => { document.location.reload() });
            else
                swal("wiu.. wiuu..!", "the data have runaway!", "error");
        });
}

function updateBenefit(Id_layanan) {
    var datalayanan ={}
    datalayanan.Id_layanan = (document.getElementById("Id_layanan").value),
    datalayanan.Nm_layanan = (document.getElementById("Nm_layanan").value),
    datalayanan.Deskripsi_layanan = (document.getElementById("Deskripsi_layanan").value),
    console.log(datalayanan),
    
    fetch('/layananplus/' + Id_layanan, {
        method: 'put', body:JSON.stringify(datalayanan),
        headers: {
            'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
            if (res.status = 200)
                swal("Good job!", "the data have been Modified!", "success").then(reload => { document.location.reload() });
            else
                swal("wiu.. wiuu..!", "the data have runaway!", "error");
        })
}


function fitur_show(Kd_jaminan) {
    fetch('/jaminan/' + Kd_jaminan)
        .then(res => res.json()
        )
        .then(res => {
            console.log(res)
            var Jaminan = res.values[0]
            console.log(Jaminan)
            $('input[name="Kd_jaminan"]').val(Jaminan.Kd_jaminan);
            $('input[name="Nm_jaminan"]').val(Jaminan.Nm_jaminan);
            $('textarea[name="Deskripsi_jaminan"]').val(Jaminan.Deskripsi_jaminan);
        });
    document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('abc').style.display = "none";
}

function hapus_fitur(Kd_jaminan) {
    fetch('/jaminan/' + Kd_jaminan, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json()
        )
        .then(res => {
            console.log(res)
            if (res.status = 200)
                swal("Good job!", "the data have been deleted!", "success").then(hapus => { document.location.reload() });
            else
                swal("wiu.. wiuu..!", "the data have runaway!", "error");
        });
}

function updateJaminan(Kd_jaminan) {
    var dataJaminan ={}
    dataJaminan.Kd_jaminan = (document.getElementById("Kd_jaminan").value),
    dataJaminan.Nm_jaminan = (document.getElementById("Nm_jaminan").value),
    dataJaminan.Deskripsi_jaminan = (document.getElementById("Deskripsi_jaminan").value),
    console.log(dataJaminan),
    
    fetch('/jaminan/' + Kd_jaminan, {
        method: 'put', body:JSON.stringify(dataJaminan),
        headers: {
            'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
            if (res.status = 200)
                swal("Good job!", "the data have been Modified!", "success").then(reload => { document.location.reload() });
            else
                swal("wiu.. wiuu..!", "the data have runaway!", "error");
        })
}




function product_show(Kd_product) {
    fetch('/products/' + Kd_product)
        .then(res => res.json()
        )
        .then(res => {
            console.log(res)
            var product = res.values[0]
            console.log(product)
            $('input[name="Kd_product"]').val(product.Kd_product);
            $('input[name="Nm_product"]').val(product.Nm_product);
            $('textarea[name="Deskripsi_product"]').val(product.Deskripsi_product);
        });
    document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('abc').style.display = "none";
}

function hapus_product(Kd_product) {
    fetch('/products/' + Kd_product, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json()
        )
        .then(res => {
            console.log(res)
            if (res.status = 200)
                swal("Good job!", "the data have been deleted!", "success").then(hapus => { document.location.reload() });
            else
                swal("wiu.. wiuu..!", "the data have runaway!", "error");
        });
}

function updateProduct(Kd_product) {
    var dataProduct ={}
    dataProduct.Kd_product = (document.getElementById("Kd_product").value),
    dataProduct.Nm_product = (document.getElementById("Nm_product").value),
    dataProduct.Deskripsi_product = (document.getElementById("Deskripsi_product").value),
    console.log(dataProduct),
    
    fetch('/products/' + Kd_product, {
        method: 'put', body:JSON.stringify(dataProduct),
        headers: {
            'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
            if (res.status = 200)
                swal("Good job!", "the data have been Modified!", "success").then(reload => { document.location.reload() });
            else
                swal("wiu.. wiuu..!", "the data have runaway!", "error");
        })
}



function hapus_massages(Id_massages) {
    fetch('/messages/' + Id_massages, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json()
        )
        .then(res => {
            console.log(res)
            if (res.status = 200)
                swal("Good job!", "the data have been deleted!", "success").then(hapus => { document.location.reload() });
            else
                swal("wiu.. wiuu..!", "the data have runaway!", "error");
        });
}