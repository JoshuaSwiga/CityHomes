import { Component } from '@angular/core';

@Component({ 
  // This will allow you to include the component into other templates:
    // <selector-name></selector-name>
  selector: 'app-root',
  
  // These are used to locate the component html file and styling files. 
  // It is what allows communicaton from the TS file to the HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD-with-Dev';
}
