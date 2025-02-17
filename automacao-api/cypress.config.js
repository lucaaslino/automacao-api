const path = require('path');

module.exports = {
  projectId: 't8w5rm',
  e2e: {
    baseUrl: 'https://dogapi.dog/api/v2',
    setupNodeEvents(on, config) {
      // Não há mais necessidade de trabalhar com Mochawesome diretamente
      // Agora, o Cypress Dashboard irá lidar com a coleta de dados de execução de testes
      
      // Configuração para salvar resultados de teste em JSON (local)
      const reportDir = 'cypress/reports'; // Diretório de saída para JSON
      const reportJsonPattern = path.join(reportDir, 'results.json'); // Padrão para o arquivo JSON

      on('after:run', (results) => {
        // Salvar os resultados no arquivo JSON para visualização ou análise local
        const fs = require('fs');
        fs.writeFileSync(reportJsonPattern, JSON.stringify(results, null, 2));

        console.log('Resultados salvos no arquivo:', reportJsonPattern);
      });

      return config;
    },
    reporter: 'json', // Utilizando o reporter nativo do Cypress para gerar um arquivo JSON
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true, // Sobrescreve o arquivo de resultados JSON a cada execução
    },
  },
};
