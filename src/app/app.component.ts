import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cleaning-list';

  // ng build --base-href "https://tyler-w-osborne.github.io/task-list/" && npx angular-cli-ghpages --dir=docs && git add . && git commit -m "changes" && git push origin main
}
