const $ = document.querySelector.bind(document)

function TabNavigation() {
const html = {
    links: [...$('.tab-links').children],
    content: [...$('.tab-content').children],
    openTab: $('[data-open]')
}
// sumir com as sections

function hideAllTabContent(){
   
    html.content.forEach(section => {
        section.style.display = "none"
    })
}  // esconde as sections
function removeAllActiveClass(){
    html.links.forEach(tab => {
        tab.className = className.replace(" active", "")
    })
} // remove as classes ativas
function showCurrentTab(id){
    const tabcontent = $('#' + id)
    tabcontent.style.display = "block"
}  // mostra o que foi ckicado
function selectTab(event) {
    hideAllTabContent()

    const target = event.currentTarget
    showCurrentTab(target.dataset.id)

    target.className += " active"
}

function listenForChange(){
    html.links.forEach(tab => {
        tab.addEventListener('click', selectTab )
    })
} // ouvindo as mudanças
function init (){  // iniciar os passos
    hideAllTabContent()
    listenForChange() 

    html.openTab.click()
}

return {
    init
}

}
 window.addEventListener('load', () =>{  // carrega a window
    const tabNavigation = TabNavigation() //pegou
    tabNavigation.init() // deu init
 })

 function mascara_cpf() {
    const valorCpf = document.getElementById('cpf').value 
    
    cpf.addEventListener('keypress' ,() => {
        let cpfLength = cpf.value.length
    
        if (cpfLength === 3 || cpfLength === 7){
            cpf.value += '.'
        } else if (cpfLength === 11){
            cpf.value += '-'
        }
    
    })
    
    };

    function limpa_formulário_cep() {
        
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");  
}

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
        
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        
       
    } 
    else {
        
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    
    var cep = valor.replace(/\D/g, '');

    
    if (cep != "") {

        
        var validacep = /^[0-9]{8}$/;

       
        if(validacep.test(cep)) {

            
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
           

           
            var script = document.createElement('script');

            
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

          
            document.body.appendChild(script);

        } 
        else {
           
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
        
        limpa_formulário_cep();
    }
};

 function limpa_formulário_cep() {
        
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");  
}

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
        
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        
       
    } 
    else {
        
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    
    var cep = valor.replace(/\D/g, '');

    
    if (cep != "") {

        
        var validacep = /^[0-9]{8}$/;

       
        if(validacep.test(cep)) {

            
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
           

           
            var script = document.createElement('script');

            
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

          
            document.body.appendChild(script);

        } 
        else {
           
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
        
        limpa_formulário_cep();
    }
};

 function limpa_formulário_cep() {
        
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");  
}

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
        
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        
       
    } 
    else {
        
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    
    var cep = valor.replace(/\D/g, '');

    
    if (cep != "") {

        
        var validacep = /^[0-9]{8}$/;

       
        if(validacep.test(cep)) {

            
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
           

           
            var script = document.createElement('script');

            
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

          
            document.body.appendChild(script);

        } 
        else {
           
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
        
        limpa_formulário_cep();
    }
};



