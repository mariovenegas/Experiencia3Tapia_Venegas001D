import {browser, element, by } from 'protractor';
 
describe('Pruebas 1 y 2', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");

    });
    // PRUEBA1
    it("Pagina contiene boton Registrar", async()=>{
        expect(element(by.css("ion-button")).getText()).toContain("Registrar");
    });  
    // PRUEBA2
    it("El usuario puede navegar hacia Registro", async()=>{

        await browser.driver.sleep(5000);
        await element(by.css(".botonregistrar")).click();
        await browser.driver.sleep(5000);
        expect(element(by.css("ion-title")).getText()).toContain("Registro");
    
    });
});