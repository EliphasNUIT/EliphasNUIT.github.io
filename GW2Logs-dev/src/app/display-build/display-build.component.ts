import { Component, OnInit, AfterViewChecked , Input, ElementRef } from '@angular/core';
import { ProfBuild } from '../helpers/profBuild';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-display-build',
  templateUrl: './display-build.component.html',
  styleUrls: ['./display-build.component.css']
})
export class DisplayBuildComponent implements OnInit, AfterViewChecked {
  display: string;

  @Input() build: ProfBuild;

  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef) {
   }

  ngOnInit() {
  }

  onSelectDisplay(display: string) {
    this.display = display;
  }

  ngAfterViewChecked() {
    const toDestroy = this.elementRef.nativeElement.querySelector('script[async]');
    if (toDestroy) {
      toDestroy.parentNode.removeChild(toDestroy);
    }
    const script = document.createElement('script');
    script.setAttribute('defer', '');
    script.setAttribute('src', 'https://unpkg.com/armory-embeds@^0.x.x/armory-embeds.js');
    this.elementRef.nativeElement.appendChild(script);
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
