function loading(){
  document.getElementsByClassName("box-load") [0].style.display = "none";
  document.getElementsByClassName('content') [0].style.display = "block";
}
const cep = document.querySelector("#cep")

const showData = (result)=>{
  for(const campo in result){
      if(document.querySelector("#"+campo)){
          document.querySelector('#'+campo).value = result[campo]

      }
  }
}

verificar.onclick = function(){
  let search = cep.value.replace("-","")
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
  .then(response =>{ response.json()
    .then( data => showData(data)) 
  })
  .catch(e => showData('ERROR'+ e,message))

}
limpar.onclick = function(){
  document.getElementById("cep").value = null;
  document.getElementById("logradouro").value = null;
  document.getElementById("complemento").value = null;
  document.getElementById("bairro").value = null;
  document.getElementById("localidade").value = null;
  document.getElementById("uf").value = null;
  document.getElementById("ddd").value = null;
}
