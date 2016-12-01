import { ROnakDeomPage } from './app.po';

describe('ronak-deom App', function() {
  let page: ROnakDeomPage;

  beforeEach(() => {
    page = new ROnakDeomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
