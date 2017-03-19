import { XtnoteAppPage } from './app.po';

describe('xtnote-app App', () => {
  let page: XtnoteAppPage;

  beforeEach(() => {
    page = new XtnoteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
