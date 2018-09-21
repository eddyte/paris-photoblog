const recup = () => {
  let request    = new XMLHttpRequest()
  // récupération des données du formulaire via son id
  let myFormData = new FormData(document.querySelector("#contact"))

  // Display the keys
  // ajout d'un champ de saisie fictif supplémentaire
  myFormData.append('key supplémentaire', 'valeur')
  for (let key of myFormData.keys())
    console.log(key, myFormData.get(key))
  
  // send data to server
  //request.open("POST", "submitform.php")
  //request.send(myFormData)
  console.log("Je suis dans la fonction lors du submit")
  return
}

$("#contact").on("submit", function (event){
    event.preventDefault();
    console.log($(this).serializeArray())})