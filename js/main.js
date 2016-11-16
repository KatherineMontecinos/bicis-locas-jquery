function validateForm(){
    /*var inputname = document.getElementById("name").value;
    var inputlastname = document.getElementById("lastname").value;
    var inputemail = document.getElementById("input-email").value;
    var inputpassword = document.getElementById("input-password").value;
    var listabici = document.querySelector("select").value;*/

    /*var inputname = $("#name").attr("value");
    var inputlastname = $("#lastname").attr("value");
    var inputemail = $("#input-email").attr("value");
    var inputpassword = $("#input-password").attr("value");
    var listabici = $("select").attr("value");*/

    var inputname = $("#name").val();
    var inputlastname = $("#lastname").val();
    var inputemail = $("#input-email").val();
    var inputpassword = $("#input-password").val();
    var listabici = $("select").val();


    (function validateName(){
        if( inputname == null || inputname.length == 0 || /^\s+$/.test(inputname) || /^[a-zA-Z]*$/.test(inputname) == false || inputname.charAt(0).toUpperCase() !== inputname.charAt(0) ) {
            /*var contname = document.querySelector('.name-container');
            var span = document.createElement('span');
            var alerta = document.createTextNode('Error! debe comenzar en mayuscula y usar solo letras'); 
            span.appendChild(alerta);
            contname.appendChild(span);*/
            
            var mensaje = "Error! debe comenzar en mayuscula y usar solo letras";
            //var elementoNuevo = "<span>" + mensaje + "</span>";
            // var span = $('.name-container').parent().append(elementoNuevo);
            $("#name").parent().append("<span>" + mensaje + "</span>");

            return false;

        }
    }) ();

    (function validateLastname(){
        if( inputlastname == null || inputlastname.length == 0 || /^\s+$/.test(inputlastname) || /^[a-zA-Z]*$/.test(inputlastname) == false ||  inputlastname.charAt(0).toUpperCase() !== inputlastname.charAt(0)) {
            /*var contlastname = document.querySelector('.lastname-container');
            var span = document.createElement('span');
            var alerta = document.createTextNode('Error! debe comenzar con mayusculas y usar solo letras');
            span.appendChild(alerta);
            contlastname.appendChild(span);*/
            
            var mensaje = "Error! debe comenzar en mayuscula y usar solo letras";
            //var elementoNuevo = "<span>" + mensaje + "</span>";
            //$('.lastname-container').append(elementoNuevo);
            $("#lastname").parent().append("<span>" + mensaje + "</span>");

            return false;
         }
    }) ();

    (function validateEmail(){
        if( inputemail == null || inputemail.length == 0 || /^\s+$/.test(inputemail) || /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/.test(inputemail) == false ) {
            /*var contemail = document.querySelector('.email-container');
            var span = document.createElement('span');
            var alerta = document.createTextNode('Correo inválido');
            span.appendChild(alerta);
            contemail.appendChild(span);*/
            
            var mensaje = "Correo inválido";
            //var elementoNuevo = "<span>" + mensaje + "</span>";
            //$('.email-container').append(elementoNuevo);
            $("#input-email").parent().append("<span>" + mensaje + "</span>");

            return false;
        }
    }) ();

    (function validatePassword() {
        if( inputpassword == null || inputpassword  == 0 || /^\s+$/.test(inputpassword) || inputpassword.length < 6 || /123456/.test(inputpassword) == true || /098754/.test(inputpassword) || /password/.test(inputpassword)) {
            /*var contpassword = document.getElementById('input-password').parentNode;
            var span = document.createElement('span');
            var alerta = document.createTextNode('Password inválido');
            span.appendChild(alerta);
            contpassword.appendChild(span);*/
            
            var mensaje = "Password inválido";
            //var elementoNuevo = "<span>" + mensaje + "</span>";
          // $('#input-password').append(elementoNuevo);
            $("#input-password").parent().append("<span>" + mensaje + "</span>");

            return false;
        }
    }) ();

    (function validatelista(){
        if( listabici == 0 ){
            /*var contlistabici = document.querySelector('select').parentNode;
            var span = document.createElement('span');
            var alerta = document.createTextNode('Selecciona una opción');
            span.appendChild(alerta);
            contlistabici.appendChild(span);*/
            
            var mensaje = "Selecciona una opción";
            //var elementoNuevo = "<span>" + mensaje + "</span>";
            //$('select').append(elementoNuevo);
            $("select").parent().append("<span>" + mensaje + "</span>");

            return false;
        }
    }) ();

    return true;
}