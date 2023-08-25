import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as ace from 'ace-builds';

import { slideInAnimation } from '../../../shared/animations/modules/angularAnimations.module';
import { ScrollReavealService } from '../../../shared/animations/services/scroll-reaveal.service';
import { EditorService } from './editor.service';




@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css'],
   animations: [slideInAnimation],
})
export class CodeEditorComponent implements AfterViewInit, OnInit {
  showIcons = false;

  constructor(private scrollReavealService: ScrollReavealService, private editorService : EditorService){}

  ngOnInit(): void {
    this.showIcons = !this.showIcons;
    this.scrollReavealService.init();

}


    editorHtml?: ace.Ace.Editor;
    editorCss?: ace.Ace.Editor;
    editorTs?: ace.Ace.Editor;
    isTsOpen: boolean = true;
    isHtmlOpen: boolean = false;
    isCssOpen: boolean = false;




    ngAfterViewInit(): void {
      this.editorTs = this.editorService.createEditor('editorTs');
      this.editorService.simulateTyping('editorTs', `${this.dynamicTextTs}` );

    }


  dynamicTextTs: string = `import * as cssSkills from 'CSS'\nimport * as htmlSkills from 'HTML'\nimport * as tsSkills from 'TypeScript'\nimport * as jsSkills from 'JavaScript'\nimport * as softSkills from 'lifeExperiences'`;

  dynamicTextHTML: string = `<!--Me mande uma Mensagem-->
  <nav>\n<a href="https://www.linkedin.com/in/lfsilvaferreira/"> LinkedIn </a>\n</nav>`;


  dynamicTextCss = `.luizFernando {\nidade : 23anos;\nexperiencia: 1.5anos;\ncargo : frontEndDeveloper;\n}`





  tsView() {
    this.isHtmlOpen = false;
    this.isCssOpen = false;
    this.isTsOpen = true;
    this.editorHtml = this.editorService.createEditor('editorTs');
    this.editorService.simulateTyping('editorTs', `${this.dynamicTextTs}` );
  }





  htmlView() :void {
      this.isTsOpen = false;
      this.isCssOpen = false;
      this.isHtmlOpen = true;
      this.editorHtml = this.editorService.createEditor('editorHtml');
      this.editorService.simulateTyping('editorHtml', `${this.dynamicTextHTML}` );
  }


  cssView() :void {
    this.isTsOpen = false;
    this.isHtmlOpen = false;
    this.isCssOpen = true;
    this.editorCss = this.editorService.createEditor('editorCss');
    this.editorService.simulateTyping('editorCss', `${this.dynamicTextCss}` );
  }

}



