//document.querySelector('table > tbody > tr').innerText
//body > int-root > mat-sidenav-container > mat-sidenav-content > int-internacoes-covid-hist > div > div > div:nth-child(6) > int-internacoes-covid-hist-unidade > mat-card > mat-card-content > div > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-unidade.mat-column-unidade.ng-star-inserted
//document.querySelector('body > int-root > mat-sidenav-container > mat-sidenav-content > int-internacoes-covid-hist > div > div > div:nth-child(6) > int-internacoes-covid-hist-unidade > mat-card > mat-card-content > div > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-unidade.mat-column-unidade.ng-star-inserted').innerText
//for (let i in datas)
const datas = ['29/04/2020', '30/04/2020', '01/05/2020', '02/05/2020', '03/05/2020', '04/05/2020', '05/05/2020', '06/05/2020', '07/05/2020', '08/05/2020', '09/05/2020', '10/05/2020', '11/05/2020', '12/05/2020', '13/05/2020', '14/05/2020', '15/05/2020', '16/05/2020', '17/05/2020', '18/05/2020', '19/05/2020', '20/05/2020', '21/05/2020', '22/05/2020', '23/05/2020', '24/05/2020', '25/05/2020', '26/05/2020', '27/05/2020', '28/05/2020', '29/05/2020', '30/05/2020', '31/05/2020', '01/06/2020', '02/06/2020', '03/06/2020', '04/06/2020', '05/06/2020', '06/06/2020', '07/06/2020', '08/06/2020', '09/06/2020', '10/06/2020', '11/06/2020', '12/06/2020', '13/06/2020', '14/06/2020', '15/06/2020', '16/06/2020', '17/06/2020', '18/06/2020', '19/06/2020', '20/06/2020', '21/06/2020', '22/06/2020', '23/06/2020', '24/06/2020', '25/06/2020', '26/06/2020', '27/06/2020', '28/06/2020', '29/06/2020', '30/06/2020', '01/07/2020', '02/07/2020', '03/07/2020', '04/07/2020', '05/07/2020', '06/07/2020', '07/07/2020', '08/07/2020', '09/07/2020', '10/07/2020', '11/07/2020', '12/07/2020', '13/07/2020', '14/07/2020', '15/07/2020', '16/07/2020', '17/07/2020', '18/07/2020', '19/07/2020', '20/07/2020', '21/07/2020', '22/07/2020', '23/07/2020', '24/07/2020', '25/07/2020', '26/07/2020', '27/07/2020', '28/07/2020', '29/07/2020', '30/07/2020', '31/07/2020', '01/08/2020', '02/08/2020', '03/08/2020', '04/08/2020', '05/08/2020', '06/08/2020', '07/08/2020', '08/08/2020', '09/08/2020', '10/08/2020', '11/08/2020', '12/08/2020', '13/08/2020', '14/08/2020', '15/08/2020', '16/08/2020', '17/08/2020', '18/08/2020', '19/08/2020', '20/08/2020', '21/08/2020', '22/08/2020', '23/08/2020', '24/08/2020', '25/08/2020', '26/08/2020', '27/08/2020', '28/08/2020', '29/08/2020', '30/08/2020', '31/08/2020', '01/09/2020', '02/09/2020', '03/09/2020', '04/09/2020', '05/09/2020', '06/09/2020', '07/09/2020', '08/09/2020', '09/09/2020', '10/09/2020', '11/09/2020', '12/09/2020', '13/09/2020', '14/09/2020', '15/09/2020', '16/09/2020', '17/09/2020', '18/09/2020', '19/09/2020', '20/09/2020', '21/09/2020', '22/09/2020', '23/09/2020', '24/09/2020', '25/09/2020', '26/09/2020', '27/09/2020', '28/09/2020', '29/09/2020', '30/09/2020', '01/10/2020', '02/10/2020', '03/10/2020', '04/10/2020', '05/10/2020', '06/10/2020', '07/10/2020', '08/10/2020', '09/10/2020', '10/10/2020', '11/10/2020', '12/10/2020', '13/10/2020', '14/10/2020', '15/10/2020', '16/10/2020', '17/10/2020', '18/10/2020', '19/10/2020', '20/10/2020', '21/10/2020', '22/10/2020', '23/10/2020', '24/10/2020', '25/10/2020', '26/10/2020', '27/10/2020', '28/10/2020', '29/10/2020', '30/10/2020', '31/10/2020', '01/11/2020', '02/11/2020', '03/11/2020', '04/11/2020', '05/11/2020', '06/11/2020', '07/11/2020', '08/11/2020', '09/11/2020', '10/11/2020', '11/11/2020', '12/11/2020', '13/11/2020', '14/11/2020', '15/11/2020']
var dados = []
const fs = require('fs')
//const {Parser} = require('json2csv')
const puppeteer = require('puppeteer');
//const json2csvParser = new Parser();
var csv = [];
var teste = 0
//var stream = fs.createWriteStream("./dados-covid-hospitais3.csv");
//
let scrape = async () =>{
	link = 'https://indicadores.integrasus.saude.ce.gov.br/indicadores/indicadores-coronavirus/historico-internacoes-covid'
	
  const browser = await puppeteer.launch({
		headless: true,
    slowMo: 600
	})
	const page = await browser.newPage()
  //await page.setDefaultTimeout(50000);
 // await page.setDefaultNavigationTimeout(10000);
  await page.goto(link);
	//await page.waitForXPath('//table');
  //await page.waitFor(1000)
	//await page.waitFor('#mat-input-0')
	//await page.click("#mat-input-0", {clickCount: 3})//selecionado o campo de data, para remover o que tem nele, depois.
	//await page.type('#mat-input-0', data, {delay: 300})
	//await page.waitForSelector('body > int-root > mat-sidenav-container > mat-sidenav-content > int-internacoes-covid-hist > div > div > div:nth-child(6) > int-internacoes-covid-hist-unidade > mat-card > mat-card-content > div > table > tbody')
  //await page.waitForSelector('table > tbody', { timeout: 5000 })
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
  
  //dados.push({episodes_details[0].unidade})
  Object.keys(episodes_details).forEach(function(item){
    dados.push(episodes_details[item])
    //console.log(item + " = " + episodes_details[item]);
  });
     
  
  console.log(dados)
	/*
	
	const data = await page.evaluate(() => {
    	const tds = Array.from(document.querySelectorAll('table > tbody > tr'))
    	return tds.map(td => td.innerText)
  	});

  	//You will now have an array of strings
  	//[ 'One', 'Two', 'Three', 'Four' ]
  	console.log(data);
	*/
	//await page.screenshot({path: 'meugit.png'})
	//const json2csvParser = new Parser();
  //csv.push(json2csvParser.parse(dados))
  //fs.writeFileSync('./dados-covid-hospitais2.csv', csv,'utf8')
  //await page.waitFor(1500)
  
  //console.log(episodes_details)
  //fs.writeFileSync('./dados-covid-hospitais7.csv', csv,'utf8')
  //const json2csvParser = new Parser();
  //const csv = json2csvParser.parse(dados)
  //fs.writeFileSync('./dados-covid-hospitaisof.csv', csv,'utf-8')
  await browser.close()
  //console.log(episodes_details);
  return episodes_details
  //console.log(result)

};
scrape(datas[0]);
//if(teste) console.log(scrape(nada));
