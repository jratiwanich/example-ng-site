import { ExampleNgSitePage } from './app.po';

describe('example-ng-site App', () => {
  let page: ExampleNgSitePage;

  beforeEach(() => {
    page = new ExampleNgSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
