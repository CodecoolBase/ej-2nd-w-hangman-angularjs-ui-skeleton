import { HangmanAngularjsUiPage } from './app.po';

describe('hangman-angularjs-ui App', () => {
  let page: HangmanAngularjsUiPage;

  beforeEach(() => {
    page = new HangmanAngularjsUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
