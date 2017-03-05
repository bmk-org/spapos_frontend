import { SpaposPage } from './app.po';

describe('spapos App', () => {
  let page: SpaposPage;

  beforeEach(() => {
    page = new SpaposPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
