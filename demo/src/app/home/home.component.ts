import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatChipInputEvent, ThemePalette} from '@angular/material';
import {NgxCombinationGeneratorService} from 'ngx-combination-generator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  min = 1;
  max = 2;
  unique = false;
  selectedChars: string;
  charsList: string[] = [];
  combinationsList: string[] = [];
  color: ThemePalette = 'primary';

  constructor(private titleService: Title,
              public generator: NgxCombinationGeneratorService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-combination-generator');
  }

  add(event: MatChipInputEvent): void {
    const {input, value} = event;

    // Add our person
    if ((value || '').trim()) {
      this.charsList.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(char: string): void {
    const index = this.charsList.indexOf(char);

    if (index >= 0) {
      this.charsList.splice(index, 1);
    }
  }

  reset() {
    this.combinationsList = [];
  }

  generate() {
    this.combinationsList = this.generator.loadCombinationList(this.charsList, this.min, this.max, this.unique);
  }

}
