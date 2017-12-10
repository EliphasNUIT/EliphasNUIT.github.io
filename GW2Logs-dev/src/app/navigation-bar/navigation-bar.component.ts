import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  Addons = [
    {
      text: 'Arc DPS',
      ref: 'https://www.deltaconnected.com/arcdps/',
      target: 'Arc'
    },
    {
      text: 'Parseur arc dps',
      ref: 'https://raidheroes.tk/',
      target: 'Parseur'
    },
    {
      text: 'Parseur auto',
      ref: 'https://github.com/M4xZ3r0/GW2RaidTool',
      target: 'RaidTool'
    },
    {
      text: 'Plugin',
      ref: 'http://martionlabs.com/arcdps-mechanics-log-plugin/',
      target: 'RaidPlg'
    },
    {
      text: 'TacO',
      ref: 'http://gw2taco.blogspot.fr/',
      target: 'TacO'
    }
  ];

  Builds = [
    {
      text: 'Metabattle',
      ref: 'http://metabattle.com/wiki/MetaBattle_Wiki',
      target: 'Metabattle'
    },
    {
      text: 'qT',
      ref: 'http://qtfy.eu/',
      target: 'qT'
    },
    {
      text: 'SC',
      ref: 'https://snowcrows.com/',
      target: 'SC'
    },
    {
      text: 'LN',
      ref: 'https://lucky-noobs.com/',
      target: 'LN'
    },
    {
      text: 'Ez',
      ref: 'https://docs.google.com/spreadsheets/d/1phzuqND5_rWfx9dqrU0KaCyukEzWg_icTrEM4GdehEY/edit#gid=0',
      target: 'Ez'
    }
  ];

  Strats = [
    {
      text: 'TCI',
      ref: 'https://discord.gg/nZg52r3',
      target: 'TCI'
    },
    {
      text: 'Wiki officiel',
      ref: 'https://wiki.guildwars2.com/wiki/Raid/',
      target: 'Wiki'
    },
    {
      text: 'Dulfy',
      ref: 'http://dulfy.net/category/gw2/raid-guides/',
      target: 'Dulfy'
    },
    {
      text: 'LBM',
      ref: 'http://www.lebusmagique.fr/pages/gw2-hearth-of-thorns/les-raids/',
      target: 'LBM'
    },
    {
      text: 'dT',
      ref: 'http://discretize.eu/',
      target: 'dT'
    }
  ];

  Divers = [
    {
      text: 'ID des buffs',
      ref: 'https://wiki.guildwars2.com/wiki/User:Frvwfr2/buffids',
      target: 'ID'
    },
    {
      text: 'Gw2 Raidar',
      ref: 'https://www.gw2raidar.com/info-help',
      target: 'Raidar'
    },
    {
      text: 'Gw2 Armory',
      ref: 'https://gw2armory.com',
      target: 'Armory'
    },
    {
      text: 'Law Lulles',
      ref: 'https://oopsy.enjin.com/forum/m/41271713/viewthread/28848825-law-lulles-advanced-worldcompletion-guide',
      target: 'Law Lulles'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
