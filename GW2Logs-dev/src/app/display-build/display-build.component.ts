import { Component, OnInit, AfterViewChecked, Input, ChangeDetectionStrategy } from '@angular/core';
import { ProfBuild } from '../helpers/profBuild';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

(<any>document).GW2A_EMBED_OPTIONS = {
  lang: 'en',
  persistToLocalStorage: true
};

/**
 * Build display component
 */
@Component({
  selector: 'app-display-build',
  templateUrl: './display-build.component.html',
  styleUrls: ['./display-build.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayBuildComponent implements OnInit, AfterViewChecked {

  /**
   * Input build data
   */
  @Input() build: ProfBuild = null;
  /**
   * Input main override - generaly for build database
   */
  @Input() mainOverride: string = null;
  /**
   * Input specialized override - generaly for composition
   */
  @Input() specializedOverride: {
    armor: string,
    consumable: string,
    trinket: string,
    wep1: string,
    wep2: string,
    specialization: string,
    profSkills: string,
    skills: string
  } = null;

  /**
   * Create a build diplay component
   * @param sanitizer Dom sanitizer
   */
  constructor(private sanitizer: DomSanitizer) {
  }

  /**
   * Todo on init
   */
  ngOnInit() {
  }

  /**
   * Todo after view checked - delete remnants of gw2armory css and scripts
   */
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
      for (let i = toDestroyDiv.length - 1; i >= 0; i--) {
        const divToRemove = toDestroyDiv[toDestroyDiv.length - 1];
        if (divToRemove.innerHTML.indexOf('react') !== -1 || divToRemove.innerHTML.length === 0) {
          divToRemove.remove();
        } else {
          break;
        }
      }

    }
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('src', 'https://unpkg.com/armory-embeds@^0.x.x/armory-embeds.js');
    document.head.appendChild(script);
  }

  /**
   * Get traits html
   */
  traits(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.build.getSpecializations(this.mainOverride ||
      (this.specializedOverride && this.specializedOverride.specialization)));
  }
  /**
   * Get skills html
   */
  skills(): SafeHtml {
    let res = '';
    const overrideValue = this.mainOverride ||
    (this.specializedOverride && this.specializedOverride.skills);
    if (this.build.hasSkills(overrideValue)) {
      const skills = this.build.getSkills(overrideValue);
      res += skills.heal;
      res += skills.utilities;
      res += skills.elite;
    }
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }
  /**
   * Get profession skills html
   */
  profSkills(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.build.getProfessionSkills(this.mainOverride ||
      (this.specializedOverride && this.specializedOverride.profSkills)));
  }
  /**
   * Get pets html
   */
  pets(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.build.getPets());
  }
  /**
   * Get armor html
   */
  armor(): SafeHtml {
    let res = '';
    const equipement = this.build.getArmor(this.mainOverride ||
      (this.specializedOverride && this.specializedOverride.armor));
    res += equipement.armor;
    res += equipement.rune;
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }
  /**
   * Get consumables html
   */
  consumables(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.build.getConsumable(this.mainOverride ||
      (this.specializedOverride && this.specializedOverride.consumable)));
  }
  /**
   * Get trinket html
   */
  trinket(): SafeHtml {
    let res = '';
    const trinket = this.build.getTrinket(this.mainOverride ||
      (this.specializedOverride && this.specializedOverride.trinket));
    res += trinket.BA;
    res += trinket.AR;
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }
  /**
   * Get primary weapon set html
   */
  wep1(): SafeHtml {
    let res = '';
    const wep1 = this.build.getWeapon1(this.mainOverride ||
      (this.specializedOverride && this.specializedOverride.wep1));
    res += wep1.wep;
    res += wep1.sig;
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }
  /**
   * Get secondary weapon set html
   */
  wep2(): SafeHtml {
    let res = '';
    const overrideValue = this.mainOverride ||
    (this.specializedOverride && this.specializedOverride.wep2);
    if (!this.build.isSingleWeapon(overrideValue)) {
      const wep2 = this.build.getWeapon2(overrideValue);
      res += wep2.wep;
      res += wep2.sig;
    }
    return this.sanitizer.bypassSecurityTrustHtml(res);
  }

}
