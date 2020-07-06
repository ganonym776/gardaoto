// Validating Empty Field
function check_empty() {
    if (document.getElementById('Nim').value == "" || document.getElementById('Nama').value == "" || document.getElementById('Keterangan').value == "") {
    alert("Fill All Fields !");
    } else {
    document.getElementById('form').submit();
    alert("Form Submitted Successfully...");
    }
    }
    //Function To Display Popup
    function div_show(Nim) {
        fetch('/teams/'+Nim)
            .then(res => res.json()
            )
            .then(res => {
                console.log(res)
                var User=res.values[0]
                console.log(User)
                $('input[name="Nama"]').val(User.Nama);
                $('input[name="Nim"]').val(User.Nim);
                $('input[name="Id_posisi"]').val(User.Id_posisi);
                $('input[name="Id_jurusan"]').val(User.Id_jurusan);
                $('input[name="Id_kelas"]').val(User.Id_kelas);
                $('input[name="Keterangan"]').val(User.Keterangan);
                $('input[name="Tgl_lahir"]').val(User.Tgl_lahir);
            });
    document.getElementById('abc').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('abc').style.display = "none";
    }

    function hapus(Nim) {
        fetch('/teams/'+Nim, {method: "DELETE",
        headers: {
            'Content-Type': 'application/json' }})
            .then(res => res.json()
            )
            .then(res => {
              console.log(res)
              if(res.status=200)
              swal("Good job!", "the data have been deleted!", "success").then(hapus=>{document.location.reload()});
              else
              swal("wiu.. wiuu..!", "the data have runaway!", "error");
            });
    }