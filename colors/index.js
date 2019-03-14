// On récupère tous les boutons "apply"
const btnsApply = document.getElementsByClassName('apply-color');

// On parcours tous les boutons pour leur appliquer l'écoute à l'évènement du clic
for (let i = 0; i < btnsApply.length; i++) {
  const btn = btnsApply[i];

  // Ajout de l'écoute
  btn.addEventListener('click', function() {
    // Récupération de la couleur, 
    const sampleColor = this.getAttribute('data-color');
    
    // Application de la couleur au "body"
    document.body.style.backgroundColor = sampleColor;
  });
}