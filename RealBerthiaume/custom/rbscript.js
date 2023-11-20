(function (global) {

var dc = {};
var dvdno = "";

dc.x = function (){

	var cd1 = [
   "",   
   "leretour.mp3",        //Le Retour (Réal Berthiaume)
   "Focus1.mp3",          //Focus 1 (Focus)
   "histoire.mp3",        //Histoire sans paroles (Harmonium)
   "lallerona.mp3",       //La llerona
   "graciasalavida.mp3",  //Gracias a la vida (Violeta Parra)
   "astearsgoby.mp3",     //As tears go by (Rolling Stones)
   "",                    //Sealed with a kiss (Brian Hyland)",
   "devoted.mp3",         //Devoted to you (Everly Brothers)",
   "",                    //If I fell (Beatles)
   "ineedyouto.mp3",      //I need you to turn to (Elton John)",
   "scarboroughfair.mp3", //Scarborough fair (Simon & Garfunkel)",
   "",                    //Because (Beatles)
   "crepuscule.mp3",      //L'Oiseau du crépuscule (Réal Berthiaume)",
   "herethereand.mp3",    //Here, there and everywhere (Beatles)",
   "focus2.mp3",          //Focus 2 (Focus)",
   "laderniereneige.mp3", //La dernière neige (Réal Berthiaume)",
   "prelude20.mp3"        //Prélude #20 (Chopin)"
   ];

   var cd2 = [];
   var cdnoel = [];
   var repertoire = "";

   if (liste == "cd1") {
      repertoire="./songs/";
   } else 
      if (liste == "cd2") {
      repertoire="./songs2/";
   } else 
      if (liste == "cdnoel") {
      repertoire="./songs_noel/";
   } 


   var audio = new Audio(repertoire + cd1[no]);
   audio.play();
   

}
global.$dvdno = dvdno;
global.$dc = dc;


})(window); 
