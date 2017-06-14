import { WebpackTestPage } from './app.po';

describe('webpack-test App', () => {
  let page: WebpackTestPage;

  beforeEach(() => {
    page = new WebpackTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
