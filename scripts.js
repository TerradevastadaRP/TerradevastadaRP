
// Simple menu toggle and whitelist helper
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if(btn){
    btn.addEventListener('click', function(){ nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex'; });
  }
});

function openGitHubIssue(e){
  e.preventDefault();
  var nick = encodeURIComponent(document.getElementById('nick').value || 'NICK');
  var age = encodeURIComponent(document.getElementById('age').value || 'IDADE');
  var exp = encodeURIComponent(document.getElementById('exp').value || 'EXPERIENCIA');
  var why = encodeURIComponent(document.getElementById('why').value || 'MOTIVO');
  // User must replace the URL below with: https://github.com/SEU_USUARIO/SEU_REPOSITORIO/issues/new?title=Whitelist%20-%20NICK&body=...
  var repoExample = 'https://github.com/SEU_USUARIO/SEU_REPOSITORIO/issues/new?title=Whitelist%20-%20'+nick+'&body=Nick:%20'+nick+'%0AIdade:%20'+age+'%0AExperiencia:%20'+exp+'%0AMotivo:%20'+why;
  window.open(repoExample, '_blank');
}

function copyTemplate(){
  var text = document.getElementById('issue-link').innerText;
  navigator.clipboard && navigator.clipboard.writeText(text);
  alert('Modelo copiado para a área de transferência. Substitua SEU_USUARIO/SEU_REPOSITORIO pelo seu repo.');
}
