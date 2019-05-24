



$('#imageMedecine').click(function(){
   window.location = 'page2.html'
});

if ($(window).width() > 1199) {
    $('#imageMedecine').hover(function(){
        $('#imageMedecine').attr("src","img/oeilBionique.jpg");
        $('#paragrapheMedecine').html("Une médecine moderne et de qualité nécessite un traitement rationnel et sûr de l'information médicale. En effet, la complexité croissante de la médecine occidentale actuelle (spécialisation des médecins, quantité d'information à traiter, optimisation de la posologie des médicaments, guides de bonnes pratiques, etc.) pousse de manière naturelle à la mise en place de systèmes d'informations robustes étant capable d'aider le praticien dans ses tâches quotidiennes.")

    });

    $('#imageMedecine').mouseleave(function(){
        $('#imageMedecine').attr("src","img/neuroProthese.jpg");
        $('#paragrapheMedecine').html("Les technologies médicales font partie intégrante de notre quotidien. Plus qu’un simple utilisateur, le médecin a un rôle capital à jouer dans l’innovation de ces technologies. Par l’évaluation de nouveaux instruments, il peut guider les industriels vers des solutions amenant à un réel impact clinique. De plus, par sa pratique quotidienne, il a la capacité d’identifier les réels besoins non comblés par les technologies actuelles. Cependant, l’innovation et le développement ne font pas partie de la formation médicale actuelle. Afin de combler ce manque, de nouveaux centres de formation en innovation dans les technologies médicales fleurissent en Europe, suivant le succès de centres américains. Ces nouveaux programmes de formation peuvent nous permettre de devenir acteurs et initiateurs des inventions qui changeront notre pratique médicale dès demain.")
    });
} else {
    $('#imageMedecine').attr("src","img/oeilBionique.jpg");
    $('#paragrapheMedecine').html("Une médecine moderne et de qualité nécessite un traitement rationnel et sûr de l'information médicale. En effet, la complexité croissante de la médecine occidentale actuelle (spécialisation des médecins, quantité d'information à traiter, optimisation de la posologie des médicaments, guides de bonnes pratiques, etc.) pousse de manière naturelle à la mise en place de systèmes d'informations robustes étant capable d'aider le praticien dans ses tâches quotidiennes.");
};

$('#imageRobotique').click(function(){
    window.location = 'page3.html'
});

$('#imageVideo').click(function(){
    window.location = 'page4.html'
});

$('#facebookMedical').click(function(){
    window.open('https://www.facebook.com/BrainMachineInterfaceNews/')
})

$('#twitterMedical').click(function(){
    window.open('https://twitter.com/MedtronicFR/status/1005115345739210752')
})