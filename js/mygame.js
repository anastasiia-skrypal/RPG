window.onload = function() {

	var heroClass;
	var heroName;
	var hero;
	var form = gid("create_name");
	var barbarian = getclass("barbarian")[0];
	var paladin = getclass("paladin")[0];
	var create = gid("create");
	var game = gid("game");
	var but = gid("create_button");
	var inp = gid("create_name");

	function random (min, max) {
	  return Math.floor(Math.random() * (max - min) + min);
	}

	game.style.display = "none";

	barbarian.onclick = function () {
		this.style.border = "5px solid #fedc3f";
		paladin.style.border = "none";
		this.setAttribute("id", "active");
		paladin.removeAttribute("id");
	}	

	paladin.onclick = function () {
		this.style.border = "5px solid #fedc3f";
		barbarian.style.border = "none";
		this.setAttribute("id", "active");
		barbarian.removeAttribute("id");
	}

	but.onclick = function() {
		heroName = inp.value;
		if (paladin.id == "active") {
			heroClass = "paladin";
		}
		else {
			heroClass = "barbarian";
		}

		create.style.display = "none";
		game.style.display = "flex";

		gid("game_img").appendChild(gid("active").querySelector("img"));

		gid("game_title").innerText = heroName;
		gid("game_subtitle").innerText = heroClass;

		var heroCharacteristics = (gid("active").querySelectorAll("span"));
		var heroHealth = gid("health").innerText = heroCharacteristics[0].innerText;
		var heroAttack = gid("attack").innerText = heroCharacteristics[1].innerText;
		var heroMorality = gid("moral").innerText = heroCharacteristics[2].innerText;
	}

	// GAME

	var enemy = function(a, b, c) {
		this.class = a;
		this.damage = b;
		this.health = c;
	}


	var gameAction = gid("game_action");
	var buttonSubmit = gid("button_submit");
	var buttonCancel = gid("button_cancel");

	gameAction.innerText = "Do you want to go to the forest or back home?";
	buttonSubmit.setAttribute("value", "Go to the forest");
	buttonCancel.setAttribute("value", "Back home");

	buttonCancel.onclick = function butCancel() {
		gid("game_action").innerText = "Game over";
		buttonSubmit.style.display = "none";
		buttonCancel.style.display = "none";  
	}	
	buttonSubmit.onclick = function butSubmit() {

		var heroHealth = gid("health").innerText;
		var heroAttack = gid("attack").innerText;
		var heroMorality = gid("moral").innerText;

		while (heroMorality > 0) {

			// CHOSING AN ENEMY

			var enemyRandom = Math.floor( Math.random() * Math.floor(100));

			if (enemyRandom <= 70) {
				var enemyDamage = random(4, 17);
				var enemyHealth = random(20, 80);
				var enemyChosen = new enemy("Orc", enemyDamage, enemyHealth);
				gameAction.innerText = "Your enemy is Orc";
				
			}
			else {
				var enemyChosen = new enemy("Forest Troll", 5, 20);
				gameAction.innerText = "Your enemy is Forest Troll";
			}
			buttonSubmit.setAttribute("value", "Fight");
			buttonCancel.setAttribute("value", "Run away");


			// MORALITY-1

			buttonCancel.onclick = function runAway() {
				
				var enemyRandom = Math.floor( Math.random() * Math.floor(100));

				if (enemyRandom <= 70) {
					var enemyDamage = random(4, 17);
					var enemyHealth = random(20, 80);
					var enemyChosen = new enemy("Orc", enemyDamage, enemyHealth);
					gameAction.innerText = "Your enemy is Orc";	
				}
				else {
					var enemyChosen = new enemy("Forest Troll", 5, 20);
					gameAction.innerText = "Your enemy is Forest Troll";
				}

				heroMorality = heroMorality - 1;
				gid("moral").innerText = heroMorality;
				
				if (heroMorality == 0) {
					gid("game_action").innerText = "Game over";
					buttonSubmit.style.display = "none";
					buttonCancel.style.display = "none";  
				}
			}

			buttonSubmit.onclick = function fight() {

				while (enemyChosen.health > 0 && heroHealth > 0) {
			
					enemyChosen.health -= heroAttack;

					gid("game_action").innerText = "Enemy health: " + enemyChosen.health + "\r\n";
					if (enemyChosen.health <= 0) {
						gid("game_action").innerText = "You win!";
						heroMorality = 0;
						buttonSubmit.style.display = "none";
						buttonCancel.style.display = "none";
						break;
					}

					heroHealth -= enemyChosen.damage;
					gid("health").innerText = heroHealth;

					gid("game_action").innerText = gid("game_action").innerText + "Hero health: " + heroHealth + "\r\n";
					if (heroHealth <= 0) {
						heroMorality = 0;
						gid("game_action").innerText = "Game over";
						buttonSubmit.style.display = "none";
						buttonCancel.style.display = "none";
						break;
					}

					gid("game_action").innerText = gid("game_action").innerText + "Do you want to continue or run away?";
					break;
				}
			}
			break;
		}
	}
}	
