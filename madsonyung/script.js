const INPUT_CEP = document.getElementById('cep');
const INPUT_END = document.getElementById('endereco');
const INPUT_NUMERO = document.getElementById('numero');
const INPUT_BAIRRO = document.getElementById('bairro');
const INPUT_CIDADE = document.getElementById('cidade');
const INPUT_UF = document.getElementById('uf');

// funcao que habilita somente a entrada de numeros no input

function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }
}

// testa e valida quantidade de numeros inseridos no cep
// o evento addEventListener (blur) aciona função quando o input cep sai de foco

INPUT_CEP.addEventListener('blur', () => {
    let cep=INPUT_CEP.value;
    console.log(cep);
    if (cep.length !== 8) {
        alert('cep invalido');
        return;      
    }
            
// insere os dados coletados do ViaCep no nosso formuário
    fetch (`http://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(json => {
            INPUT_END.value = json.logradouro;
            INPUT_CIDADE.value = json.localidade;
            INPUT_BAIRRO.value = json.bairro;
            INPUT_UF.value = json.uf;
            INPUT_NUMERO.focus();
        })
        .catch(error => {
            console.log(error.message,);
          });
       
        
})