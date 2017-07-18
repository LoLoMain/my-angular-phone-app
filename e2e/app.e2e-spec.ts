import { MyAngularPhoneAppPage } from './app.po';

describe('my-angular-phone-app App', () => {
  let page: MyAngularPhoneAppPage;

  beforeEach(() => {
    page = new MyAngularPhoneAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
