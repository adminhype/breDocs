import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { WelcomePlaceholderComponent } from './features/content/welcome-placeholder/welcome-placeholder.component';
import { DocViewerComponent } from './features/content/doc-viewer/doc-viewer.component';

export const routes: Routes = [
    {path: '',component: MainLayoutComponent,children: [
        {
            path: '',
            component: WelcomePlaceholderComponent
        },
        {
            path: ':slug',
            component: DocViewerComponent
        }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];