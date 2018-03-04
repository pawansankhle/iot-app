import { AngularIotPage } from './app.po';

describe('angular-iot App', function() {
  let page: AngularIotPage;

  beforeEach(() => {
    page = new AngularIotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
