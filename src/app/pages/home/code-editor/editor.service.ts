import { Injectable } from '@angular/core';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-vibrant_ink';



@Injectable({
  providedIn: 'root'
})
export class EditorService {

constructor() { }

  createEditor(elementId : string, mode : string ) : ace.Ace.Editor {
    const editor = ace.edit(elementId);
    editor.getSession().setMode(`ace/mode/${mode}`);
    editor.setOptions({
      fontSize: '20px',
      fontFamily:
        'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;',
    });
    editor.renderer.setShowPrintMargin(false);
    editor.setOption('highlightActiveLine', false);
    editor.resize();
    return editor;
  }
}



