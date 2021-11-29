import { AppPage } from './app.po';

describe('Pagina ingreso', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('contiene titulo Ingreso', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Ingreso');
  });

});
