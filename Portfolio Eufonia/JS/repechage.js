
    var json=[
        {
            "img":"../imagenes/Repechage/producto-a.jpg",
            "h3":"C-Serum",
            "p1":"Lorem Ipsum Mask Lorem",
            "p2":"$15.00"
        },
        {
            "img":"../imagenes/Repechage/producto-b.jpg",
            "h3":"C-Serum",
            "p1":"Lorem Ipsum Mask Lorem",
            "p2":"$15.00"
        },
        {
            "img":"../imagenes/Repechage/producto-c.jpg",
            "h3":"C-Serum",
            "p1":"Lorem Ipsum Mask Lorem",
            "p2":"$15.00"
        },
        {
            "img":"../imagenes/Repechage/producto-d.jpg",
            "h3":"C-Serum",
            "p1":"Lorem Ipsum Mask Lorem",
            "p2":"$15.00"
        },
        {
            "img":"../imagenes/Repechage/producto-a.jpg",
            "h3":"C-Serum",
            "p1":"Lorem Ipsum Mask Lorem",
            "p2":"$15.00"
        },
        {
            "img":"../imagenes/Repechage/producto-b.jpg",
            "h3":"C-Serum",
            "p1":"Lorem Ipsum Mask Lorem",
            "p2":"$15.00"
        },
        {
            "img":"../imagenes/Repechage/producto-c.jpg",
            "h3":"C-Serum",
            "p1":"Lorem Ipsum Mask Lorem",
            "p2":"$15.00"
        },
        {
            "img":"../imagenes/Repechage/producto-d.jpg",
            "h3":"C-Serum",
            "p1":"Lorem Ipsum Mask Lorem",
            "p2":"$15.00"
        },
    ]
    var contenedorJson=document.getElementById("contenedor-json");
    for(let i=0;i<json.length;i++){
        var div= `<div id="img${i}">` + `<img src="${json[i].img}"class="img-dinamic">`+ 
        `<h3>${json[i].h3}</h3>`+ `<p>${json[i].p1}</p>` +`<p>${json[i].p2}</p>`+"</div>";
        div.id="img"+i;
        contenedorJson.insertAdjacentHTML("beforeend",div);
        var stringId=  `img${i}`;
        var divInside=document.getElementById(stringId);
        divInside.style.display="inline-block";
        divInside.style.width="24%";
        divInside.style.textAlign="center";
    }
    

