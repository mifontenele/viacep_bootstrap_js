const limparFormulario = (endereco) =>{
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}

    const preencherFormulario = (endereco) =>{
        document.getElementById('endereco').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;

    }
    //aceitar somente número como valido
    const eNumero = (numero) => /^[0-9]+$/.test(numero);
    //aceitar somente ate 8 digitos para válido
    const cepValido = (cep) => cep.length === 8 && eNumero(cep);

    const pesquisarCep = async() => {
        limparFormulario()
        const cep = document.getElementById('cep').value;
        //Solicitar o cep para API
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        //Validam se o cep é valido se sim preenche o formulario se não "cep errado da não encontrado","cep com letras ou digitos errados da cep incorreto"
        if (cepValido(cep)){
            const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado!'
        }else {
            preencherFormulario(endereco);
        }
        }else{
            document.getElementById('endereco').value = 'CEP incorreto!'

        }
        
        
    }

    document.getElementById('cep')
    .addEventListener('focusout' ,pesquisarCep);


                      
   
   
   
   
   
   
   
  




  