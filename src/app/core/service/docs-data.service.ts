import { Injectable, signal, computed } from '@angular/core';
import { DocItemInterface } from '../interfaces/doc-item.interface';

@Injectable({
  providedIn: 'root'
})
export class DocsDataService {

  // Full-Stack Tool Database
  private docsState = signal<DocItemInterface[]>([
    //ENABLED ITEMS
    { id: '1', name: 'HTML', slug: 'html', type: 'language', isEnabled: true, icon: 'html5' },
    { id: '2', name: 'CSS', slug: 'css', type: 'language', isEnabled: true, icon: 'css3' },
    { id: '3', name: 'SCSS', slug: 'scss', type: 'language', isEnabled: true, icon: 'sass' },
    { id: '4', name: 'JavaScript', slug: 'javascript', type: 'language', isEnabled: true, icon: 'javascript' },
    { id: '5', name: 'TypeScript', slug: 'typescript', type: 'language', isEnabled: true, icon: 'typescript' },
    { id: '6', name: 'GitHub', slug: 'github', type: 'tool', isEnabled: true, icon: 'github' },
    { id: '7', name: 'Shell', slug: 'shell', type: 'environment', isEnabled: true, icon: 'shell' },
    { id: '8', name: 'Bash', slug: 'bash', type: 'language', isEnabled: true, icon: 'bash' },
    { id: '9', name: 'Python', slug: 'python', type: 'language', isEnabled: true, icon: 'python' },
    { id: '10', name: 'Python Environment', slug: 'python-env', type: 'environment', isEnabled: true, icon: 'python-env' },
    { id: '11', name: 'Django', slug: 'django', type: 'framework', isEnabled: true, icon: 'django' },
    { id: '12', name: 'Django REST Framework', slug: 'drf', type: 'framework', isEnabled: true, icon: 'drf' },
    { id: '13', name: 'Angular', slug: 'angular', version: '19.0.0', type: 'framework', isEnabled: true, icon: 'angular' },

    //DISABLED ITEMS
    { id: '14', name: 'HTTP', slug: 'http', type: 'protocol', isEnabled: false, icon: 'http' },
    { id: '15', name: 'Web APIs', slug: 'web-apis', type: 'reference', isEnabled: false, icon: 'web-apis' },
    { id: '16', name: 'Git', slug: 'git', type: 'tool', isEnabled: false, icon: 'git' },
    { id: '17', name: 'Node.js', slug: 'nodejs', type: 'runtime', isEnabled: false, icon: 'nodejs' },
    { id: '18', name: 'NPM', slug: 'npm', type: 'package-manager', isEnabled: false, icon: 'npm' },
    { id: '19', name: 'Yarn', slug: 'yarn', type: 'package-manager', isEnabled: false, icon: 'yarn' },
    { id: '20', name: 'Docker', slug: 'docker', type: 'tool', isEnabled: false, icon: 'docker' },
    { id: '21', name: 'REST', slug: 'rest', type: 'protocol', isEnabled: false, icon: 'rest' },
    { id: '22', name: 'Axios', slug: 'axios', version: '1.9.0', type: 'library', isEnabled: false, icon: 'axios' },
    { id: '23', name: 'Babel', slug: 'babel', type: 'tool', isEnabled: false, icon: 'babel' },
    { id: '24', name: 'Apache HTTP Server', slug: 'apache', version: '2.4.64', type: 'server', isEnabled: false, icon: 'apache' },
    { id: '25', name: 'Ansible', slug: 'ansible', type: 'tool', isEnabled: false, icon: 'ansible' },
    { id: '26', name: 'C', slug: 'c', type: 'language', isEnabled: false, icon: 'c' },
    { id: '27', name: 'C++', slug: 'cpp', type: 'language', isEnabled: false, icon: 'cpp' }
  ]);

  // Computed Lists
  enabledDocs = computed(() => this.docsState().filter(doc => doc.isEnabled));
  disabledDocs = computed(() => this.docsState().filter(doc => !doc.isEnabled));

  constructor() { }

  // Toggle item enable/disable
  toggleDocStatus(id: string) {
    this.docsState.update(docs =>
      docs.map(doc =>
        doc.id === id ? { ...doc, isEnabled: !doc.isEnabled } : doc
      )
    );
  }
}