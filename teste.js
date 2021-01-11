var dados = []
const puppeteer = require('puppeteer');
let scrape = async () =>{
	link = 'https://indicadores.integrasus.saude.ce.gov.br/indicadores/indicadores-coronavirus/historico-internacoes-covid'
	
  const browser = await puppeteer.launch({
		headless: true,
    slowMo: 600
	})
	const page = await browser.newPage()
  await page.goto(link);
  await page.setDefaultTimeout(50000);
  var episodes_details = await page.evaluate(() => {
    var table = document.querySelector("table > tbody");
    var episode_panels = Array.from(table.children); 
    var episodes_info = episode_panels.map(episode_panel => {
      //Nome da unidade
      let unidade = episode_panel.querySelector(".mat-cell.cdk-cell.cdk-column-unidade.mat-column-unidade.ng-star-inserted").textContent; 
      //Leitos Ativos UTI 
      //.mat-cell.cdk-cell.cdk-column-leitosAtivosUti.mat-column-leitosAtivosUti.ng-star-inserted
      let qntd_leitos_ativos = episode_panel.querySelector(".mat-cell.cdk-cell.cdk-column-leitosAtivosUti.mat-column-leitosAtivosUti.ng-star-inserted").textContent;    
      //Leitos Ocupados UTI
      //.mat-cell.cdk-cell.cdk-column-leitosOcupadosUti.mat-column-leitosOcupadosUti.ng-star-inserted
      let qntd_leitos_ocupados = episode_panel.querySelector(".mat-cell.cdk-cell.cdk-column-leitosOcupadosUti.mat-column-leitosOcupadosUti.ng-star-inserted").textContent;
      //Taxa de Ocupação
      //.mat-cell.cdk-cell.cdk-column-taxaOcupacaoUti.mat-column-taxaOcupacaoUti.ng-star-inserted
      let taxa_de_ocupacao = episode_panel.querySelector(".mat-cell.cdk-cell.cdk-column-taxaOcupacaoUti.mat-column-taxaOcupacaoUti.ng-star-inserted").textContent;
      //Leitos Ativos Enfermaria
      //.mat-cell.cdk-cell.cdk-column-leitosAtivosEnfermaria.mat-column-leitosAtivosEnfermaria.ng-star-inserted
      let qntd_leitos_ativos_enfermaria = episode_panel.querySelector(".mat-cell.cdk-cell.cdk-column-leitosAtivosEnfermaria.mat-column-leitosAtivosEnfermaria.ng-star-inserted").textContent;       
      //Leitos Ocupados Enfermaria
      //.mat-cell.cdk-cell.cdk-column-leitosOcupadosEnfermaria.mat-column-leitosOcupadosEnfermaria.ng-star-inserted
      let qntd_leitos_ocupados_enfermaria = episode_panel.querySelector(".mat-cell.cdk-cell.cdk-column-leitosOcupadosEnfermaria.mat-column-leitosOcupadosEnfermaria.ng-star-inserted").textContent;
      //Taxa de Ocupação Enfermaria
      //.mat-cell.cdk-cell.cdk-column-taxaOcupacaoEnfermaria.mat-column-taxaOcupacaoEnfermaria.ng-star-inserted
      let taxa_de_ocupacao_enfermaria = episode_panel.querySelector(".mat-cell.cdk-cell.cdk-column-taxaOcupacaoEnfermaria.mat-column-taxaOcupacaoEnfermaria.ng-star-inserted").textContent;      
      //Data dessa ocorrido
      let data = document.querySelector('#mat-input-0').value
      //dados.append(data)
      teste = 1
      return {unidade, qntd_leitos_ativos, qntd_leitos_ocupados, taxa_de_ocupacao, qntd_leitos_ativos_enfermaria, qntd_leitos_ocupados_enfermaria, taxa_de_ocupacao_enfermaria, data};
    });
    return episodes_info;
  });
  
  Object.keys(episodes_details).forEach(function(item){
    dados.push(episodes_details[item])
  });
     
  
  console.log(dados)
  await browser.close()
  return episodes_details

};
scrape();
