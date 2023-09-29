var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando...")
    
    var xhr = new XMLHttpRequest() // XML é um objeto no JS resposável por fazer requisições HTTP

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText
        var pacientes = JSON.parse(resposta)
      
        pacientes.forEach(function(paciente){
            adcionaPacienteNaTabela(paciente)
        })
    })
    xhr.send()
})