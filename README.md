<h1>Modal React</h1>

Ce composant React crée une modale simple qui affiche un message prédéfini lorsqu'un employé est créé. La modal se ferme lorsque vous cliquez à l'extérieur de la zone de contenu ou sur une icône de fermeture.

Vous pouvez également modifier la largeur, la hauteur et le contenu du texte de la div contenant
la partie texte.

<h2>Version</h2> 

Version de la modale : 1.0.19

Prérequis
Assurez-vous d'avoir installé Node.js v20.12.1 ou posterieur et npm sur votre machine.

<h2>Installation</h2>
Clonez ce dépôt :

git clone https://github.com/damodred53/modale_module.git

Installez les dépendances npm :

npm install

<strong>Pensez bien aussi à installer React</strong>

<h2>Téléchargement depuis Npm<h2>

ligne de commande : npm i modal_florent_guyard

Une fois installé, vous pourrez retrouver le module dans votre dossier node_modules.

Vous pouvez ensuite importer le module directement dans votre code à la page nécessaire via un import classique.

<h2>Utilisation</h2>
Importez le composant Modal dans votre application et utilisez-le comme suit :

<img src="https://github.com/damodred53/modale_module/blob/main/sample_modale.png"/>

Afin de modifier l'interface de la modale, celle-ci prévoit des props afin de modifier le contenu du texte
la largeur et la hauteur. Les props sont nommés : textContent, width et height. 

Vous pouvez vous baser sur la capture d'écran ci-dessus pour comprendre le fonctionnement des props.

<img src="https://github.com/damodred53/modale_module/blob/main/capture_modal_activated.png" />

<h2>Fonctionnalités</h2>

Affiche un message prédéfini lorsqu'un employé est créé.
Ferme la modal lorsque vous cliquez à l'extérieur de la zone de contenu ou sur une icône de fermeture.
Structure des fichiers

<h2>Styles CSS</h2>

Le composant utilise des styles CSS pour styliser la modal. Les styles sont définis dans le fichier Modal.css.

<h2>Technologies utilisées</h2>

<ul>
  <li>React</li>
  <li>CSS</li>
</ul>


