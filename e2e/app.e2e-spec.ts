import { Ng4CribsPage } from './app.po';

describe('ng4-cribs App', () => {
  let page: Ng4CribsPage;

  beforeEach(() => {
    page = new Ng4CribsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
