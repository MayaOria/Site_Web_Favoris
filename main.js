document.getElementById("coeur").addEventListener("click", (e) => {
  let id = e.target.dataset.id;
  console.log(e.target);
  console.log("id: " + id);
  let form = new FormData();
  form.append('id', id );

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (event) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 304) {

        let p = document.getElementById("coeur");
        console.log(xhr.responseText);
        
        let reponse = JSON.parse(xhr.responseText);
        // console.log(reponse);
        // console.log(reponse.statut);
        if (reponse.statut == "off"){
            p.innerHTML = "";
            p.innerHTML =  "&#10085;";
        }
        else {
            p.innerHTML = "";
            p.innerHTML =  "&#10084;";
        }
      }

      else console.log("error: " + xhr.status);

    }



  };

  xhr.open("POST", "./favoriTraitement.php");
  xhr.send(form);
  
});


