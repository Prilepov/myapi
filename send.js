function f(){
    let send_id=document.getElementById('id_id').value;
    let send_title=document.getElementById('id_title').value;
    let send_post=document.getElementById('id_post').value;

    var formData = new FormData();

    formData.append("fields[NAME]", send_id);
    
    console.log(formData);

    $.ajax({
        url: "https://samcorp.bitrix24.ru/rest/1/pdc55j0gh5l79klf/crm.product.add.json",
        type: "post", 
        dataType: "json", 
        processData: false,
        contentType: false,
        data: formData,
        error:function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
  };



