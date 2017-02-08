import { IjgwAppPage } from './app.po';

describe('ijgw-app App', function() {
  let page: IjgwAppPage;

  beforeEach(() => {
    page = new IjgwAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
