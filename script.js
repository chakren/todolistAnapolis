    function click() {
    if (event.button==2) {
    alert('Não é possivel clicar com o botão direito do mouse!')
    }
    }
    document.onmousedown=click
   
    function confirmBox() {
        if (confirm("Voce deseja mesmo enviar as informações?")) {
        location.href="http://127.0.0.1:5500/";}
        }

    function habilitar(selecionado) {
        document.getElementById('textArea').disabled = selecionado;
        }

        function habilitar(){  
            if(document.getElementById('check').checked){  
                document.getElementById('textArea').disabled = false;  
            } else {  
                document.getElementById('textArea').disabled = true;  
            }  
        }