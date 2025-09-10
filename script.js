const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventL1stener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttibute('data-proximo');

        atual.classL1st.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})