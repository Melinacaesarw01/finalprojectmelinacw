function validasi_input(){
  if (document.getElementById('nama').value == ""){
    alert("Username masih kosong!");
    document.getElementById('nama').focus();
    return false;
  } else if (document.getElementById('sandi').value == '') {
  	alert("Password masih kosong!")
  	return false;
  }
  return true;
}

let dataKota;
$.get('script.json', async function(data) {
    dataKota = await data;
}, 'json')


function comboboxkota(){
    let indexSelected = $('#ddlProvinsi').val();
    let listDataKota = dataKota[indexSelected]
    $('#ddlKota').find('option').remove().end().append('<option value="0">- Pilih Kota -</option>')
    $.each(listDataKota, (key, kota) => {
        $.each(kota, (id, val) => {
            $('#ddlKota').append(`<option value="${val}">${val}</option>`)
        })
    })
}