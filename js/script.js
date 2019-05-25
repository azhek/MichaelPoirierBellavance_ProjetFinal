
$('#imageMedecine').click(function(){
   window.location = 'page2.html'
});

if($(window).width() < 1200){
    $('.paragrapheMedecinePage2').html("La technologie est en train de transformer les soins de santé. Les appareils et les applications de santé mobiles donnent de nouveaux moyens de surveiller l’état des patients et de promouvoir la santé.")
}
else
{
    $('.paragrapheMedecinePage2').html("La technologie est en train de transformer les soins de santé. Les appareils et les applications de santé mobiles donnent de nouveaux moyens de surveiller l’état des patients et de promouvoir la santé. Les innovations en soins virtuels aident les médecins à atteindre les patients des collectivités éloignées. Les mégadonnées et l’analytique produisent des connaissances approfondies sur la santé des populations, les facteurs de morbidité, l’efficacité clinique et bien plus. En outre, la robotique, l’impression 3D, la nanotechnologie, l’Internet des objets et la réalité virtuelle et la réalité augmentée introduiront d’autres possibilités.")
};

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
});

$('#twitterMedical').click(function(){
    window.open('https://twitter.com/MedtronicFR/status/1005115345739210752')
});

var nbAppuie = 0;


$('#boutonRobot').click(function(){
    if(nbAppuie%2 === 0)
    {
        $('.backgroundRobotique2').css('background-image','url(img/loiRobotique.jpg)')
    }

    else
    {
        $('.backgroundRobotique2').css('background-image','url(img/loiRobotique2.jpg)')
    }
    nbAppuie++;
});



$('#boutonUbisoft').click(function(){
   $('.imageCompagnieChange').attr("src","img/assassinCreedImage.jpg")
    $('#titreCompagnie').html('ASSASSIN CREED')
    $('#paragrapheCompagnie').html('Assassin\'s Creed (littéralement « le Credo de l\'Assassin ») est une série de jeux vidéo historique d\'action-aventure et d\'infiltration en monde ouvert, développée et éditée par Ubisoft. Les titres principaux développés par Ubisoft Montréal sortent sur les consoles de 7e (Xbox 360 et PlayStation 3) et 8e génération (Xbox One, PlayStation 4 et Wii U) ainsi que sur PC, tandis que les épisodes secondaires sortent sur consoles portables (Nintendo DS, PlayStation Portable, PlayStation Vita) et sur téléphones portables (Java, Android, iOS).')
});

$('#boutonCapcom').click(function(){
    $('.imageCompagnieChange').attr("src","img/streetFighterImage.jpg")
    $('#titreCompagnie').html('STREET FIGHTER')
    $('#paragrapheCompagnie').html('Street Fighter II: The World Warrior (ストリートファイターⅡ, Sutorîto Faitâ Tsū?) est un jeu vidéo de combat développé et édité par Capcom, sorti en 1991 sur système d\'arcade CP System, et sujet à diverses adaptations, dont la plus célèbre, sur Super Nintendo. Le jeu fait s\'affronter plusieurs personnages dans des combats en un-contre-un. Le premier joueur mettant KO son adversaire par deux fois, sort victorieux du combat')
});

$('#boutonBethesda').click(function(){
    $('.imageCompagnieChange').attr("src","img/skyrimImage.jpg")
    $('#titreCompagnie').html('SKYRIM')
    $('#paragrapheCompagnie').html('The Elder Scrolls V: Skyrim (souvent abrégé en Skyrim) est un jeu vidéo de rôle et d\'action développé par Bethesda Game Studios et édité par Bethesda Softworks, sorti le 11 novembre 2011 sur PlayStation 3, Xbox 360 et Microsoft Windows. C\'est le cinquième opus de la série de jeux The Elder Scrolls, après Arena, Daggerfall, Morrowind et Oblivion.')
});

$('#boutonBlizzard').click(function(){
    $('.imageCompagnieChange').attr("src","img/worldofwarcraftImage.jpg")
    $('#titreCompagnie').html('WORLD OF WARCRAFT')
    $('#paragrapheCompagnie').html('World of Warcraft (abrégé WoW) est un jeu vidéo de type MMORPG (jeu de rôle en ligne massivement multijoueur) développé par la société Blizzard Entertainment. C\'est le 4e jeu de l\'univers médiéval-fantastique Warcraft, introduit par Warcraft: Orcs and Humans en 1994. World of Warcraft prend place en Azeroth, près de quatre ans après les événements de la fin du jeu précédent, Warcraft III: The Frozen Throne1 Blizzard Entertainment annonce World of Warcraft le 2 septembre 20012. Le jeu est sorti en Amérique du Nord le 23 novembre 2004, pour les 10 ans de la franchise Warcraft.')
});

