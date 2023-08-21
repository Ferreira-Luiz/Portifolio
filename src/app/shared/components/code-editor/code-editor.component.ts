import { Component, AfterViewInit, OnInit } from '@angular/core';
import { slideInAnimation } from '../../animations/modules/angularAnimations.module';

import { ScrollReavealService } from '../../animations/services/scroll-reaveal.service';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/mode-html';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css'],
   animations: [slideInAnimation],
})
export class CodeEditorComponent implements AfterViewInit, OnInit {
  showHtmlCode: boolean = false;
  linkUrl:string  = 'https://www.linkedin.com/in/lfsilvaferreira/'
  showIcons = false;

  constructor(private scrollReavealService: ScrollReavealService){ }





  ngOnInit(): void {
      this.showIcons = !this.showIcons;
      this.scrollReavealService.init();
  }

  editorHtml?: ace.Ace.Editor;
  editor?: ace.Ace.Editor;


  tsView() {
    this.showHtmlCode = false;
    this.editor?.resize();
  }




  dynamicText: string = `import * as cssSkills from 'CSS'\nimport * as htmlSkills from 'HTML'\nimport * as tsSkills from 'TypeScript'\nimport * as jsSkills from 'JavaScript'\nimport * as softSkills from 'lifeExperiences'`;

  dynamicTextHTML: string =`<!--Me mande uma Mensagem-->
  <nav>
    <a href="https://www.linkedin.com/in/lfsilvaferreira/" target="_blank"> LinkedIn </a>
    <a href="https://github.com/LFzinn" target="_blank"> GitHub </a>
  </nav>`;


  typingSpeed: number = 30;

  ngAfterViewInit(): void {
    this.editor = ace.edit('editor');
    if (this.editor) {
      this.editor.setTheme('ace/theme/dracula');
      this.editor.getSession().setMode('ace/mode/typescript');
      this.editor.setOptions({
        fontSize: '20px',
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;',
      });
      this.editor.renderer.setShowPrintMargin(false);
      this.editor.setOption("highlightActiveLine", false);

      const simulateTyping = () => {
        let currentIndex = 0;
        const textToType = this.dynamicText;
        const interval = setInterval(() => {
          if (currentIndex < textToType.length) {
            this.editor?.insert(textToType.charAt(currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, this.typingSpeed);
      };

      this.editor.setValue('');

      simulateTyping();

    }
  }

    htmlView() :void {
      this.showHtmlCode = true;
      this.editorHtml?.resize();
      this.editorHtml = ace.edit('editor-html');
      this.editorHtml.setTheme('ace/theme/dracula');
      this.editorHtml.getSession().setMode('ace/mode/html');
      this.editorHtml.setOptions({
        fontSize: '20px',
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;',
      });
      this.editorHtml.renderer.setShowPrintMargin(false);
      this.editorHtml.setOption("highlightActiveLine", false);

    }

}



