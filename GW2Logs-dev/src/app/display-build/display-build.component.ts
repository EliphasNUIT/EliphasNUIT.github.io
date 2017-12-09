import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { ProfBuild } from '../helpers/profBuild';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

(<any>document).GW2A_EMBED_OPTIONS = {
  lang: 'fr',
  persistToLocalStorage: true,
};

// let armoryScriptPut = false;

@Component({
  selector: 'app-display-build',
  templateUrl: './display-build.component.html',
  styleUrls: ['./display-build.component.css']
})
export class DisplayBuildComponent implements OnInit, AfterViewChecked/*, OnDestroy /*, DoCheck, OnChanges*/ {

  @Input() build: ProfBuild;
  oldName = '';
  cacheArray = ['traits', 'profSkills', 'skills', 'pets', 'armor', 'trinket', 'wep1', 'wep2', 'consum'];
  currentCache: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  /*ngOnChanges() {
    this.currentCache = (<any>window).myBuildCache[this.build.name];
  }

  ngOnDestroy() {
    this.build = null;
  }

  /*cacheBuild() {
    if (!(<any>window).myBuildCache[this.oldName]) {
      const oldValue = {};
      let aux: HTMLDivElement;
      for (let i = 0; i < this.cacheArray.length; i++) {
        const cacheValue = this.cacheArray[i];
        aux = <HTMLDivElement>document.getElementById(cacheValue);
        if (aux === null && cacheValue !== 'wep2') {
          return;
        }
        oldValue[cacheValue] = aux === null ? ''
          : aux.innerHTML;
      }
      (<any>window).myBuildCache[this.oldName] = oldValue;
      console.log('cached ' + this.oldName);
    }
  }

  ngDoCheck() {
    this.cacheBuild();
    this.currentCache = (<any>window).myBuildCache[this.build.name];
  }*/

  ngAfterViewChecked() {
    /*this.oldName = this.build.name;
    if ((<any>window).myBuildCache[this.build.name] && armoryScriptPut) {
      return;
    }
    armoryScriptPut = true;*/
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
      if (divToRemove.innerHTML.indexOf('react') !== -1) {
        divToRemove.remove();
      }
    }
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('src', 'https://unpkg.com/armory-embeds@^0.x.x/armory-embeds.js');
    document.head.appendChild(script);
  }

  traits(): SafeHtml {
    /*if (this.currentCache && this.currentCache.traits) {
      return this.sanitizer.bypassSecurityTrustHtml(this.currentCache.traits);
    }*/
    return this.sanitizer.bypassSecurityTrustHtml(this.build.getSpecializations());
  }
  skills(): SafeHtml {
    /*if (this.currentCache && this.currentCache.skills) {
      return this.sanitizer.bypassSecurityTrustHtml(this.currentCache.skills);
    }*/
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
    /*if (this.currentCache && this.currentCache.profSkills) {
      return this.sanitizer.bypassSecurityTrustHtml(this.currentCache.profSkills);
    }*/
    return this.sanitizer.bypassSecurityTrustHtml(this.build.getProfessionSkills());
  }
  pets(): SafeHtml {
    /*if (this.currentCache && this.currentCache.pets) {
      return this.sanitizer.bypassSecurityTrustHtml(this.currentCache.pets);
    }*/
    return this.sanitizer.bypassSecurityTrustHtml(this.build.getPets());
  }
  armor(): SafeHtml {
    /*if (this.currentCache && this.currentCache.armor) {
      return this.sanitizer.bypassSecurityTrustHtml(this.currentCache.armor);
    }*/
    let res = '';
    const equipement = this.build.getArmor();
    res += equipement.armor;
    res += equipement.rune;
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }
  consumables(): SafeHtml {
    /*if (this.currentCache && this.currentCache.consum) {
      return this.sanitizer.bypassSecurityTrustHtml(this.currentCache.consum);
    }*/
    return this.sanitizer.bypassSecurityTrustHtml(this.build.getConsumable());
  }
  trinket(): SafeHtml {
    /*if (this.currentCache && this.currentCache.trinket) {
      return this.sanitizer.bypassSecurityTrustHtml(this.currentCache.trinket);
    }*/
    let res = '';
    const trinket = this.build.getTrinket();
    res += trinket.BA;
    res += trinket.AR;
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }

  wep1(): SafeHtml {
    /*if (this.currentCache && this.currentCache.wep1) {
      return this.sanitizer.bypassSecurityTrustHtml(this.currentCache.wep1);
    }*/
    let res = '';
    const wep1 = this.build.getWeapon1();
    res += wep1.wep;
    res += wep1.sig;
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }
  wep2(): SafeHtml {
    /*if (this.currentCache && this.currentCache.wep2) {
      return this.sanitizer.bypassSecurityTrustHtml(this.currentCache.wep2);
    }*/
    let res = '';
    if (this.build.wep2 !== null) {
      const wep2 = this.build.getWeapon2();
      res += wep2.wep;
      res += wep2.sig;
    }
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }

}
