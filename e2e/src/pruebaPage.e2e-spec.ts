import { browser } from 'protractor';
import { AppPage  } from './app.po';

describe('prueba de pagina inicial', () => {
  let page: AppPage;


  beforeEach(() => {
    page =new AppPage();
  });

  //creación de prueba 1
it("pagina por defecto", ()=>{
  console.log('AQUI');
  browser.driver.sleep(10000);
  page.navigateTo();
  browser.driver.sleep(10000);
  expect (page.getPageTitle()).toContain("Ingreso");
  }); //fin de prueba 1
  
});
