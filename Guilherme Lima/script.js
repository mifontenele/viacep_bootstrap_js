
const INPUT_CEP = document.getElementById('cep');
const INPUT_LOGRADOURO = document.getElementById('logradouro')
const INPUT_NUMERO = document.getElementById('numero')
const INPUT_BAIRRO = document.getElementById('bairro')
const INPUT_CIDADE = document.getElementById('cidade')
const INPUT_UF = document.getElementById('uf')

INPUT_CEP.addEventListener('blur', () => {

    const url = `https://viacep.com.br/ws/${INPUT_CEP.value}/json/`
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(json => {
        INPUT_LOGRADOURO.value = json.logradouro
        INPUT_BAIRRO.value = json.bairro
        INPUT_CIDADE.value = json.localidade
        INPUT_NUMERO.value = json.numero
        INPUT_UF.value = json.uf
        })
        .catch(error => console.log(error))

    })






function getEndereco(cep) {

    const enderecoDados = fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => console.log(data.logradouro))
      .catch(error => console.log(error))
      console.log(this.data.logradouro)
      .finally(() => {})
}

