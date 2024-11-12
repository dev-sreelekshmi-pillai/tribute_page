import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TributePageComponent } from "./components/tribute-page/tribute-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TributePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tribute-page';
}
