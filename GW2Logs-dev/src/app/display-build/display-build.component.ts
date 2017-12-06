import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { ProfBuild } from '../helpers/profBuild';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

(<any>document).GW2A_EMBED_OPTIONS = {
  lang: 'fr',
  persistToLocalStorage: true,
};

@Component({
  selector: 'app-display-build',
  templateUrl: './display-build.component.html',
  styleUrls: ['./display-build.component.css']
})
export class DisplayBuildComponent implements OnInit, AfterViewChecked {

  @Input() build: ProfBuild;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }


  ngAfterViewChecked() {
    const toDestroyScript = document.head.querySelectorAll('script');
    if (toDestroyScript.length > 0) {
      for (let i = 0; i < toDestroyScript.length; i++) {
        const scriptToRemove = toDestroyScript[i];
        if (scriptToRemove.src.indexOf('armory') !== -1) {
          scriptToRemove.remove();
        }
      }
    }
    const toDestroyLink = document.head.querySelectorAll('link');
    if (toDestroyLink.length > 0) {
      for (let i = 0; i < toDestroyLink.length; i++) {
        const linkToRemove = toDestroyLink[i];
        if (linkToRemove.href.indexOf('armory') !== -1) {
          linkToRemove.remove();
        }
      }
    }
    const toDestroyStyle = document.head.querySelectorAll('style');
    if (toDestroyStyle.length > 0) {
      for (let i = 0; i < toDestroyStyle.length; i++) {
        const styleToRemove = toDestroyStyle[i];
        if (styleToRemove.innerHTML.indexOf('gw2a') !== -1) {
          styleToRemove.remove();
        }
      }
    }
    const toDestroyDiv = document.body.querySelectorAll('div');
    if (toDestroyDiv.length > 0) {
        const divToRemove = toDestroyDiv[toDestroyDiv.length - 1];
        if (divToRemove.innerHTML === '') {
          divToRemove.remove();
        }
    }
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('src', 'https://unpkg.com/armory-embeds@^0.x.x/armory-embeds.js');
    document.head.appendChild(script);
  }

  traits(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.build.getSpecializations());
  }
  skills(): SafeHtml {
    let res = '';
    if (this.build.skills !== null) {
      const skills = this.build.getSkills();
      res += skills.heal;
      res += skills.utilities;
      res += skills.elite;
    }
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }
  profSkills(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.build.getProfessionSkills());
  }
  pets(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.build.getPets());
  }
  armor(): SafeHtml {
    let res = '';
    const equipement = this.build.getArmor();
    res += equipement.armor;
    res += equipement.rune;
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }
  consumables(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.build.getConsumable());
  }
  trinket(): SafeHtml {
    let res = '';
    const trinket = this.build.getTrinket();
    res += trinket.BA;
    res += trinket.AR;
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }

  wep1(): SafeHtml {
    let res = '';
    const wep1 = this.build.getWeapon1();
    res += wep1.wep;
    res += wep1.sig;
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }
  wep2(): SafeHtml {
    let res = '';
    if (this.build.wep2 !== null) {
      const wep2 = this.build.getWeapon2();
      res += wep2.wep;
      res += wep2.sig;
    }
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }

}
