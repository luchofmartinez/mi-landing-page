import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-landing-page');
}
