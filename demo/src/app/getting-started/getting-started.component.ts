import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatChipInputEvent, MatSnackBar, ThemePalette} from '@angular/material';
import {NgxCombinationGeneratorService} from '../../../../dist';


@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GettingStartedComponent implements OnInit {

  ngVersion = `    _                      _                 ____ _     ___
                 / \\   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
                / △ \\ | '_ \\ / _\` | | | | |/ _\` | '__|   | |   | |    | |
               / ___ \\| | | | (_| | |_| | | (_| | |      | |___| |___ | |
              /_/   \\_\\_| |_|\\__, |\\__,_|_|\\__,_|_|       \\____|_____|___|
                             |___/

              Angular CLI: 1.7.3
              Node: 8.11.1
              OS: darwin x64
              Angular:`;

  systemJSModuleImport = `map: {
  'ngx-combination.generator': 'node_modules/ngx-combination.generator/bundles/ngx-combination.generator.umd.js',
  }`;

  importNgxCombinationGeneratorModule = `import { NgxCombinationGeneratorModule } from 'ngx-combination.generator';`;

  importNgxCombinationGeneratorModuleInAppModule = `import { NgxCombinationGeneratorModule } from 'ngx-combination.generator';
                                              import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                              @NgModule({
                                                declarations: [AppComponent, ...],
                                                imports: [NgxCombinationGeneratorModule.forRoot(),
                                                BrowserAnimationsModule,
                                                 ...],
                                                bootstrap: [AppComponent]
                                              })
                                              export class AppModule {
                                              }`;

  importNgxCombinationGeneratorModuleInOtherModule = `import { NgxCombinationGeneratorModule } from 'ngx-combination.generator';

                                                @NgModule({
                                                  declarations: [OtherComponent, ...],
                                                  imports: [NgxCombinationGeneratorModule, ...],
                                                })
                                                export class OtherModule {
                                                }`;

  example = `import {Component, OnInit} from '@angular/core';
             import {NgxCombinationGeneratorService} from 'ngx-combination-generator';

             @Component({
               selector: 'app-your-component',
               templateUrl: './your.component.html',
               styleUrls: ['./your.component.scss']
             })
             export class YourComponent implements OnInit {

               min = 1;
               max = 2;
               selectedChars: string;
               charsList: string[] = ['a', 'b', 'c', '1', '2', '3'];
               combinationsList: string[] = [];

               constructor(public generator: NgxCombinationGeneratorService) {
               }

               generate() {
                 this.combinationsList = this.generator.loadCombinationList(this.charsList, this.min, this.max);
                 console.log("this.combinationsList = ", this.combinationsList);
                 // output = ["a", "b", "c", "1", "2", "3", "aa", "ab", "ac", "a1", "a2", "a3", "ba", "bb", "bc", "b1", "b2", "b3", "ca",
                 // " cb", "cc", "c1", "c2", "c3", "1a", "1b", "1c", "11", "12", "13", "2a", "2b", "2c", "21", "22", "23", "3a", "3b", "3c",
                 // " 31", "32", "33"]
               }

             }
             `;

  min = 1;
  max = 2;
  unique = false;
  selectedChars: string;
  charsList: string[] = ['a', 'b', 'c', '1', '2', '3'];
  combinationsList: string[] = [];
  color: ThemePalette = 'primary';

  constructor(private titleService: Title,
              public snackBar: MatSnackBar,
              public generator: NgxCombinationGeneratorService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Getting Started | ngx-combination-generator');
    this.generate();
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
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
