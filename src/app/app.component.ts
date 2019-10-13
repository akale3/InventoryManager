import { Component } from '@angular/core';

export type EditorType = 'retailer' | 'wholesaler' | 'inventory' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InventoryManager';

  editor: EditorType;

  ngOnInit() {
    this.editor = 'retailer';
  }

 get showRetailerEditor() {
    return this.editor === 'retailer';
  }

  get showWholesalerEditor() {
    return this.editor === 'wholesaler';
  }

  get showInventoryEditor() {
    return this.editor === 'inventory';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

}
