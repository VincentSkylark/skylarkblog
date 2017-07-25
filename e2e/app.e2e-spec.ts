import { RssFeedPage } from './app.po';

describe('rss-feed App', () => {
  let page: RssFeedPage;

  beforeEach(() => {
    page = new RssFeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
