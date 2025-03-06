import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatComponent } from './chat/chat/chat.component';

export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        title: 'tailWindTuto',
      },
      {
        path: 'chat',
        component: ChatComponent,
        title: 'Chat',
      },
];
