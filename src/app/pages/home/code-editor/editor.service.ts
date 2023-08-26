import { Injectable } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-dracula';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  constructor() { }

  createEditor(elementId: string): ace.Ace.Editor {
    const editor = ace.edit(elementId);
    editor.getSession().setMode(`ace/mode/typescript`);
    editor.setTheme('ace/theme/dracula');
    this.setEditorOptions(editor);
    this.Responsive(editor);
    return editor;
  }

  private setEditorOptions(editor: ace.Ace.Editor) {
    editor.setOptions({
      fontSize: '20px',
      fontFamily: 'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
    });
    editor.renderer.setShowPrintMargin(false);
    editor.setOption('highlightActiveLine', false);
    editor.resize();
    editor.setReadOnly(true);
  }



  private Responsive(editor: ace.Ace.Editor) {
    const setEditorFontSize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 600) {
        editor.setFontSize('16px');
      } else {
        editor.setFontSize('20px');
      }
    };

    setEditorFontSize();

    window.addEventListener('resize', () => {
      setEditorFontSize();
    });
  }

  typingSpeed: number = 10;

  simulateTyping(element: string, text: string) {
    const editorType = ace.edit(element);
    let currentIndex = 0;
    const textToType = `${text}`;
    const interval = setInterval(() => {
      if (currentIndex < textToType.length) {
        editorType?.insert(textToType.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, this.typingSpeed);
    editorType.setReadOnly(true);
    editorType?.setValue('');
  }
}
