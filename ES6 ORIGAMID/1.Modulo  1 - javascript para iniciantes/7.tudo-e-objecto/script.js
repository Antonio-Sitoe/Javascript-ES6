/*
$( "button:first" ).click(function() {
update( $( "span:first" ) );
});

$( "button:last" ).click(function() {
$( "button:first" ).trigger( "click" );
update( $( "span:last" ) );
});

function update( j ) {
var n = parseInt( j.text(), 10 );
j.text( n + 1 );
}
*/
//Copiar
var copyTextareaBtn = document.querySelector('.copiar');

copyTextareaBtn.addEventListener('click', function(event) {
var copyTextarea = document.querySelector('.textarea');
copyTextarea.select();
alert("selecionei");
try {
var successful = document.execCommand('copy');
alert("executei o comando");
var msg = successful ? 'sim!' : 'não!';
alert('Texto copiado? ' + msg);
} catch (err) {
alert('Opa, Não conseguimos copiar o texto, é possivel que o seu navegador não tenha suporte, tente usar Crtl+C.');
}
});
function primeclick() {
alert("entrei");
setTimeout("executaclick()",30000);
alert("praparei");
}
function executaclick(){
clearTimeout();
$( "#btncp" ).trigger( "click" );
}