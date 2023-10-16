const buscar = async() => {
    const response = await fetch(`https:viacep.com.br/ws/${cep.value}/json/`)
    const data = await response.json()
    cep.value = cep.value;
    logradouro.value = data.logradouro;
    // PROBLEMA NO NÚMERO
    numero.value = data.numero;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    uf.value = data.uf;  
    return data;
}
