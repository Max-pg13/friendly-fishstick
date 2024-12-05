//Harry Potter e o Prisioneiro de Azkaban//10 anos  Infantil/Fantasia
//Hereditário// 16 anos idade Terror, Drama, Suspense
//Clube da Luta//18 anos ação, suspene
//Deadpool & Wolverine// 18 anosação,comédia
//O Senhor dos Anéis: A Sociedade do Anel// 12 anos fantaia, aventura
//Arremessando Alto// 12 anos Esporte,Comédia
//As Vantagens de Ser Invisível// 14 anos Romance,Drama
//Divertida Mente 2// livre Infantil/Comédia
//Psicopata Americano// 18 anos, terror, comédia
//O Iluminado// 14 anos  Terror, Mistério
//A Viagem de Chihiro// Livre Fantasia,Aventura


let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
}

function draw() {
  background("rgb(0,0,0)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia,);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "As Vantagens de Ser Invisível";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Harry Potter e o Prisioneiro de Azkaban";
        }
      } else {
        if (gostaDeFantasia) {
          return "A Viagem de Chihiro";
        } else {
          return "Indiana Jones";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "O Senhor dos Anéis: A Sociedade do Anel";
    }
  }
}