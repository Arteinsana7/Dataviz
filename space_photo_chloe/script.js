const url = "https://api.nasa.gov/planetary/apod";
const api_key = "nyAfB7JXz5pufTPcJBHue2c8DBILeTaHZviBTzEU";

fetch(`${url}?api_key=${api_key}`)
 .then(response => {
  console.log('Response:', response);
  return response.json();
 })
 .then(data => {
    console.log('Data:', data);

    spaceURL = data.url

    document.getElementById('image-space').src = spaceURL
   
    //Pour display la description
    const description = data.explanation //ici, on va chercher le description dans l'objet 'data'
    const addDescriptif = document.getElementById('descriptif')//on return la valeur 'addDescriptif' là où il y a l'id 'descriptif'
    addDescriptif.innerHTML = description // on dit que 'description' représente 'addDescriptif' et on va avec innerHTLM, l'écrire sur la page html
   
    const titre = data.title
    const addTitre = document.getElementById('title')
    addTitre.innerHTML = titre

    const publication = data.date
    const addDate = document.getElementById('date')
    addDate.innerHTML= publication
 })
 .catch(error => {
  console.error('Error:', error);
 });

 function popupImage(imageUrl) {
   // Créer une fenêtre pop-up
   var popup = window.open('', 'Image Pop-up', 'width=600,height=400');

   // Insérer le code HTML dans la fenêtre pop-up pour afficher l'image
   popup.document.write('<html><head><title>Image Pop-up</title></head><body style="margin:0;text-align:center;background: #111">');
   popup.document.write('<img src="' + imageUrl + '" alt="Image" style="width:100%; height:auto; display:block;">');
   popup.document.write('</body></html>');

   // Fermer le document de la fenêtre pop-up pour éviter tout problème potentiel
   popup.document.close();
 }

popupImage(image-space);