import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Clipboard, ClipboardModule} from '@angular/cdk/clipboard';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClipboardModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private clipboard: Clipboard) {
    const saved_cleaning_list = localStorage.getItem('CleaningList');
    if (!!saved_cleaning_list) {
      this.cleaning_list = JSON.parse(saved_cleaning_list) as string[];
    } else {
    localStorage.setItem('CleaningList', JSON.stringify(this.cleaning_list));
    }
  }
  cleaning_list = <string[]>[
    "Caulk Bathroom",
    "Clean Mirrors",
    "Dust walls and edges",
    "Vacuum (everything + under couch and chairs)",
    "Clean Vents",
    "Microwave",
    "Clean Kitchen Counters Off",
    "Shampoo Floors",
    "Rearrange Living Room",
    "Declutter Bedrooms",
    "Declutter Living Room",
    "Move Sewing Machine and Iron Board",
    "Clean Fridge",
    "Make Food to Freeze",
    "Get Shower Chair",
    "Clean Truffles Cage",
    "wash curtains",
    "buy shower chair",
    "dust blinds",
    "ceiling fans"
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

  get copy_string(): string {
    return JSON.stringify(this.cleaning_list)
  }

  paste(event: any) {
console.log(event)
  }
}
