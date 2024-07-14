import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {
    const saved_cleaning_list = localStorage.getItem('CleaningList');
    if (!!saved_cleaning_list) {
      this.cleaning_list = JSON.parse(saved_cleaning_list) as string[];
    } else {
    localStorage.setItem('CleaningList', JSON.stringify(this.cleaning_list));
    }
  }
  cleaning_list = <string[]>[
    'Caulk Bathroom',
    'Clean Mirrors',
    'Dust walls and edges',
    'Vacuum (everything + under couch and chairs)',
    'Clean Vents',
    'Microwave'
  ];

  Selected = {
    Entry: <string>'',
    Delete: (entry: string) => {
      this.cleaning_list.splice(this.cleaning_list.findIndex(cleaning_entry => cleaning_entry === entry), 1)
      localStorage.setItem('CleaningList', JSON.stringify(this.cleaning_list))
    },
    Add: () => {
      this.cleaning_list.push(this.Selected.Entry);
      localStorage.setItem('CleaningList', JSON.stringify(this.cleaning_list));
      this.Selected.Entry = '';
    }
  }
}
