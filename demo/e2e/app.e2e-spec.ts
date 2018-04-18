import { NgxCombinationGeneratorDemoPage } from './app.po';

describe('ngx-combination-generator-demo App', () => {
  let page: NgxCombinationGeneratorDemoPage;

  beforeEach(() => {
    page = new NgxCombinationGeneratorDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
