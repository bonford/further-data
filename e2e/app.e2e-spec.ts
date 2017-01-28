import { FurtherDataPage } from './app.po';

describe('further-data App', function() {
  let page: FurtherDataPage;

  beforeEach(() => {
    page = new FurtherDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
