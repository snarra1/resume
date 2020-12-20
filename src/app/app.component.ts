import { Component } from '@angular/core';
import { ResumeData } from './ResumeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineResume';
  data = new ResumeData(); 

}
