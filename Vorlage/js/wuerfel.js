//Hinzufügen von 'Eventlisteners' beim Seitenstart
function init() {
	//wenn auf das DIV mit der ID 'rollButton' geklickt wird, soll die Funktion 'rollDice1' ausgeführt werden
	/* ... hier kommt dein Code */
	
	document.getElementById('rollButton').addEventListener('click', rollDice1);
	document.getElementById('rollButton').addEventListener('touchstart', rollDice1);
}

//Einfache Würfelfunktion
function rollDice1() {
	//In das DIV mit der ID 'dice' soll ein 'X' geschrieben werden
	/* ... hier kommt dein Code */
	document.getElementById('dice').innerHTML =  Math.ceil(Math.random()*6);
	
}

//Mit Hilfe von 'setInterval' soll die Funktion 'animDice' mehrmals hintereinander (mit einer kurzen Pause) ausgeführt werden.
function rollDice2() {
	//damit während der "Animation" keine klicks die Funktion stören, wird der Eventlistener anfangs entfernt und zum Schluss wieder hinzugefügt.
	document.getElementById('rollButton').removeEventListener('click', rollDice2);
	
	<script>
      function myFunction() {
        var x = 0;
        var repeatedFunction = function () {
          x++;
          alert(x);
          if (x == 10) {
            clearInterval(timer);
            alert('1000ms=1s');
          }
        }
        timer = setInterval(repeatedFunction, 1000);
      }
    </script>
}



//(optional) Würfel SVG-Grafiken
/*
var num1 = '<circle cx="200" cy="200" r="40" fill="black"/>';
var num2 = '<circle cx="100" cy="100" r="40" fill="black"/><circle cx="300" cy="300" r="40" fill="black"/>';
var num3 = num1 + num2;
var num4 = num2 + '<circle cx="100" cy="300" r="40" fill="black"/><circle cx="300" cy="100" r="40" fill="black"/>';
var num5 = num4 + num1;
var num6 = num4 + '<circle cx="100" cy="200" r="40" fill="black"/><circle cx="300" cy="200" r="40" fill="black"/>';
var diceSVG = [num1, num2, num3, num4, num5, num6];
*/
