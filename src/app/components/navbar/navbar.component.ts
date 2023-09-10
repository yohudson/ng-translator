import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/services/lang-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public language: any;
  langSelected: any;

  constructor(
    private langService: LangService,
    public translate: TranslateService,
  ){
    this.language = [
      {title:'English', lang: 'en'},
      {title: 'Español', lang: 'es'},
      {title: 'Português', lang: 'br'}
    ];
    // translate.addLangs(['en', 'es', 'br']); //poderia atribuir dessa forma a lista de idiomas para tradução, caso não fosse utilizar o select manual
    const browserLang = this.translate.getBrowserLang(); //no meu caso vai obter o valor pt    
    // this.langSelected = this.translate.getBrowserLang() //iria utilizar o idioma vindo do navegador
    this.langSelected = this.language[0].lang //forço o idioma baseado na minha lista
    // this.translate.use(browserLang.match(/br|es|en/) ? browserLang : 'en'); //com o valor obtido do navegador, define o idioma se houver a ocorrência, se não, vai utilizar o EN como padrão
  }

  ngOnInit() {}

  defineLang() {
    this.translate.use(this.langSelected)
    this.langService.language.next(this.langSelected)
  }

}
