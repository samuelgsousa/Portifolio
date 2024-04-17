const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

  // Função para verificar quando o elemento está visível
const checkVisible = () => { if ($('#warning').visible(true)){ 

    setTimeout(() =>  $('#warning').css("color", "rgba(255, 255, 255, 0.699)"), 800)
    setTimeout(() =>  $('#warning').css("opacity", 0), 1000)
    setTimeout(() =>  $('#warning').hide(), 3000)
}

} // Faz a mensagem desaparecer após 2 segundos


checkVisible()

  $(window).scroll(() => checkVisible())   // Verifica a visibilidade do elemento ao rolar a página


  //rgba(255, 255, 255, 0.699)