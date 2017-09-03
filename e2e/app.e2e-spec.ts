import { FilePortalMeanPage } from './app.po';

describe('file-portal-mean App', () => {
  let page: FilePortalMeanPage;

  beforeEach(() => {
    page = new FilePortalMeanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
