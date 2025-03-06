import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/dark-mode.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  imports: [RouterLink],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  isDarkMode$: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.isDarkMode$ = this.themeService.darkMode$;
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

}
