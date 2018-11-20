var egal = "égalité";
    var gagne = "gagné";
    var perd = "perdu";
    var txt_egal = "égalité";
    var txt_gagne = "Vous gagnez !";
    var tex_gagnej1 = "Le joeur 1 gagne !";
    var tex_gagnej2 = "Le joeur 2 gagne !";
    var txt_perd = "Vous avez perdu.";
    var user_point = 0;
    var user2_point = 0;
    var ia_point = 0;
    var choisit = ["1 joueur", "2 joueurs"]
    var joue = ["pierre", "feuille", "ciseaux"];
    var result = document.getElementById("PFC_show_result");
    result.innerHTML = '';
    var txt_result = '';
    var mode;

    var joueur1;
    var joueur2;

    var btn1;

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }


    function PFC() {
      var i = Number(joueur1);
      var k = mode==0?getRandomInt(3):Number(joueur2);
      // console.log(k);
      if (user_point < 3 && user2_point < 3) { 
        result.innerHTML += "(Joueur1) <b>" + joue[i] + "</b> - (Joueur2) <b>" + joue[k] + "</b> : ";
        if (i === k) {
          result.innerHTML += egal + "<br />";
        } else if ((i == 0 && k == 2) || (i == 1 && k == 0) || (i == 2 && k == 1)) {
          result.innerHTML += gagne + "<br />";
          user_point++;
        } else {
          result.innerHTML += perd + "<br />";
          user2_point++;
        }
        result.innerHTML += "Score : " + user_point + " - " + user2_point + "<br />";
      }
      if ( (user_point >= 3 || user2_point >= 3) && txt_result == '' ) {
        if( user_point==user2_point ){
          txt_result = txt_egal;
        } else if( user_point>user2_point ){
          txt_result = tex_gagnej1;
        } else {
          txt_result = tex_gagnej2;
        }
        result.innerHTML += "<h4>Résultat final : <b>"+txt_result+"</b></h4>";
        result.innerHTML += "<button type=\"button\" onclick=\"PFC_reset();\">Rejouer ?</button><br />";

        // btn2 removeAttribute disabled
      }
      joueur1 = joueur2 = undefined;

    }

    var pfcbtn = document.querySelectorAll("button.PFC_btn");

    for (var pfc of pfcbtn){
      pfc.addEventListener("click", function(){
        if(this.id == "J1pierre" || this.id == "J1feuille" || this.id == "J1ciseaux"){
          joueur1 = this.value;
          if(mode==1 && typeof joueur2 !== "undefined"){
            PFC();
          } else if (mode == 0){
            PFC();
          }

        }
        if(this.id == "J2pierre" || this.id == "J2feuille" || this.id == "J2ciseaux"){
          joueur2 = this.value;
          if(mode==1 && typeof joueur1 !== "undefined"){
            PFC();
          } 
        }

      });
    } 

    
    var M1J = document.querySelector("#M1J");
    var M2J = document.querySelector("#M2J");
      M1J.addEventListener("click", function(){
        mode = this.value;
          if (M1J == true){
            M2J.setAttribute("disabled", "")
          }
          // btn2 setAttribute disabled
      });

        

      M2J.addEventListener("click", function(){
        mode = this.value;
        if (M2J == true){
            M1J.setAttribute("disabled", "")
          }
          //if btn 1 cliqué
          // btn2 setAttribute disabled
      });

    function PFC_reset(){
      txt_result = '';
      result.innerHTML = '';
      user_point = 0;
      user2_point = 0;
      ia_point = 0;
    }
  </script>