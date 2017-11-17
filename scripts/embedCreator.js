

define(['professionBuilds/dataBuilds', 'professionBuilds/professions/total'], function(buildData, total) {
	'use strict';
	document.GW2A_EMBED_OPTIONS = {
		lang: 'fr'
	};

	var builds = buildData.builds;

	var nBox = 0;

	function traitBox(div, build) {
		var traitBoxId = 'traitBox' + nBox++;
		div.innerHTML += '<div id=\'' + traitBoxId + '\' traitBox></div>';
		var traitDiv = document.getElementById(traitBoxId);
		traitDiv.innerHTML += '<div center bold>Aptitudes</div>';
		traitDiv.innerHTML += build.getSpecializations();
	}

	function skillBox(div, build) {
		var skillBoxId = 'skillBox' + nBox++;
		div.innerHTML += '<div id=\'' + skillBoxId + '\' skillBox></div>';
		{
			var skillDiv = document.getElementById(skillBoxId);
			skillDiv.innerHTML += '<div center bold>Compétences</div>';
			var profSkill = build.getProfessionSkills();
			skillDiv.innerHTML += profSkill;
			if (build.skills === null) {
				return;
			}
			var skillListID = 'skillList' + nBox++;
			skillDiv.innerHTML += '<div id=\'' + skillListID + '\' skillList></div>';
			var skillListDiv = document.getElementById(skillListID);
			var skills = build.getSkills();
			{
				skillListDiv.innerHTML += skills.heal;
				skillListDiv.innerHTML += skills.utilities;
				skillListDiv.innerHTML += skills.elite;
			}

			skillDiv.innerHTML += build.getPets();
		}
	}

	function armorBox(equipementDiv, build) {
		var armorTitleId = 'armorTitle' + nBox++;
		equipementDiv.innerHTML += '<div id=\'' + armorTitleId + '\' armorTitle></div>';
		{
			var armorDiv = document.getElementById(armorTitleId);
			armorDiv.innerHTML += '<div center bold>Armure</div>';
			var armorBoxId = 'armorBox' + nBox++;
			armorDiv.innerHTML += '<div id=\'' + armorBoxId + '\' armorBox></div>';
			{
				var armorBox = document.getElementById(armorBoxId);
				var equipement = build.getArmor();
				armorBox.innerHTML += equipement.armor;
				armorBox.innerHTML += equipement.rune;
			}
		}
	}

	function weaponsBox(wepTrinketDiv, build) {
		wepTrinketDiv.innerHTML += '<div center bold>Armes</div>';
		var wepsBoxId = 'wepsBox' + nBox++;
		wepTrinketDiv.innerHTML += '<div id=\'' + wepsBoxId + '\' wepsBox></div>';
		var wepsBox = document.getElementById(wepsBoxId);
		{
			var wepBox1Id = 'wepBox1' + nBox++;

			wepsBox.innerHTML += '<div id=\'' + wepBox1Id + '\' wepBox1></div>';
			{
				var wepBox1 = document.getElementById(wepBox1Id);
				if (build.wep2 !== null) {
					wepBox1.innerHTML += '<div center bold>Set 1</div>';
				}
				var wep1 = build.getWeapon1();
				wepBox1.innerHTML += wep1.wep;
				wepBox1.innerHTML += wep1.sig;
			}

			if (build.wep2 !== null) {
				var wepBox2Id = 'wepBox2' + nBox++;
				wepsBox.innerHTML += '<div id=\'' + wepBox2Id + '\' wepBox2></div>';
				{
					var wepBox2 = document.getElementById(wepBox2Id);
					wepBox2.innerHTML += '<div center bold>Set 2</div>';
					var wep2 = build.getWeapon2();
					wepBox2.innerHTML += wep2.wep;
					wepBox2.innerHTML += wep2.sig;
				}
			}
		}
	}

	function trinketBox(wepTrinketDiv, build) {
		var trinketBoxId = 'trinketBox' + nBox++;
		wepTrinketDiv.innerHTML += '<div id=\'' + trinketBoxId + '\' trinketBox></div>';
		var trinket = build.getTrinket();
		document.getElementById(trinketBoxId).innerHTML += trinket.BA;
		document.getElementById(trinketBoxId).innerHTML += trinket.AR;
	}

	function displayBuild(divID, buildId) {
		var div = document.getElementById(divID);
		var visibility = div.style.display === 'block';
		if (visibility) {
			div.style.display = 'none';
		} else {
			div.style.display = 'block';
		}
		var init = div.getAttribute('init') === 'true';
		if (!init && builds.has(buildId)) {
			var build = builds.get(buildId);
			traitBox(div, build);
			skillBox(div, build);
			// equipement
			var equipementBoxId = 'equipementBox' + nBox++;
			div.innerHTML += '<div id=\'' + equipementBoxId + '\' equipementBox></div>';
			var equipementDiv = document.getElementById(equipementBoxId);
			{
				armorBox(equipementDiv, build);
				var wepTrinketTitleId = 'wepTrinketTitle' + nBox++;
				equipementDiv.innerHTML += '<div id=\'' + wepTrinketTitleId + '\' wepTrinketTitle></div>';
				var wepTrinketDiv = document.getElementById(wepTrinketTitleId);
				wepTrinketDiv.innerHTML += '<div center bold>Bijoux</div>';
				{
					trinketBox(wepTrinketDiv, build);
					weaponsBox(wepTrinketDiv, build);
					// Food
					wepTrinketDiv.innerHTML += '<div center bold>Consommables</div>';
					wepTrinketDiv.innerHTML += build.getConsumable();
				}
			}
			var script = document.createElement('script');
			script.setAttribute('async','');
			script.setAttribute('src','https://unpkg.com/armory-embeds@^0.x.x/armory-embeds.js');
			div.appendChild(script);
			div.setAttribute('init', 'true');
		}
	}

	window.displayBuild = displayBuild;
});
