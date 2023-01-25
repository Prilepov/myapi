function f(){
    let send_id=document.getElementById('id_id').value;
    let send_title=document.getElementById('id_title').value;
    let send_post=document.getElementById('id_post').value;
    var allData= {
        "NAME": send_id,
        "ANOTHER": send_title,
        "ANOTHER2": send_post
    };
    
    console.log(allData);

    $.ajax({
        url: "https://samcorp.bitrix24.ru/rest/1/qlsvk0nj5fwemx01/crm.product.add.json",
        type: "post", 
        dataType: "json", 
        processData: false,
        contentType: false,
        data: allData,
        error:function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
  };



