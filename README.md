<h1>Modal React</h1>

Ce composant React crée une modale simple qui affiche un message prédéfini lorsqu'un employé est créé. La modal se ferme lorsque vous cliquez à l'extérieur de la zone de contenu ou sur une icône de fermeture.

<h2>Version</h2> : 1.0.2

Prérequis
Assurez-vous d'avoir installé Node.js et npm sur votre machine.

<h2>Installation</h2>
Clonez ce dépôt :

git clone https://github.com/damodred53/modale_module.git

Installez les dépendances npm :

npm install

<strong>Pensez bien aussi à installer React</strong>

<h2>Utilisation</h2>
Importez le composant Modal dans votre application et utilisez-le comme suit :


import React from "react";
import Modal from "./Modal";

function App() {
  return (
    <div className="App">
      <h1>Application React avec Modal</h1>
      <Modal />
    </div>
  );
}

export default App;

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


 
 
