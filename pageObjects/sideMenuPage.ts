import { ElementFinder, element, by } from "protractor";

export class sideMenuPage{
    
    statusMenu : ElementFinder;
    mailingMenu : ElementFinder;
    novoMailingMenu : ElementFinder;
    historicoMenu : ElementFinder;
    contasMenu : ElementFinder;
    projetosMenu : ElementFinder;
    gruposMenu : ElementFinder;
    dialogosMenu : ElementFinder;
    visualizarHsmMenu : ElementFinder;
    cadastrarHsmMenu : ElementFinder;
    sandboxMenu : ElementFinder;
    usuariosMenu : ElementFinder;
    docPushMenu : ElementFinder;
    docMailingMenu : ElementFinder;
    perfilMenu : ElementFinder;

    constructor(){
        
        this.statusMenu = element(by.css("a[href='/status']"));
        this.mailingMenu = element(by.css("a[href='/status-mailing'"));
        this.novoMailingMenu = element(by.css("a[href='/file']"));
        this.historicoMenu = element(by.css("a[href='/history'"));
        this.contasMenu = element(by.css("a[href='/contas'"));
        this.projetosMenu = element(by.css("a[href='/projetos'"));
        this.gruposMenu = element(by.css("a[href='/grupos'"));
        this.dialogosMenu = element(by.css("a[href='/dialogos'"));
        this.visualizarHsmMenu = element(by.css("a[href='/templates'"));
        this.cadastrarHsmMenu = element(by.css("a[href='/templates/create'"));
        this.sandboxMenu = element(by.css("a[href='/sandbox'"));
        this.usuariosMenu = element(by.css("a[href='/usuarios'"));
        this.docPushMenu = element(by.css("a[href='/doc'"));
        this.docMailingMenu = element(by.css("a[href='/doc-mailing'"));
        this.perfilMenu = element(by.css("a[href='/user-edit'"));
    }

}