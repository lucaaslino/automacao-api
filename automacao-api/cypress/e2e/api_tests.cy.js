import BreedsApi from "../support/api/breedsApi";

describe("Testes Positivos da Dog API", () => {
    describe('GET /breeds', () => {
        it('Deve retornar uma lista de raças de cães com status 200', () => {
          cy.request('GET', '/breeds') // Remove a URL completa, usando o baseUrl
            .its('status')
            .should('equal', 200);
      
          cy.request('GET', '/breeds') // Usando o baseUrl configurado
            .its('body.data')
            .should('have.length.greaterThan', 0); // Verifica se há raças retornadas
        });
    });
  
    describe('GET /breeds/{id}', () => {
        const breedId = '68f47c5a-5115-47cd-9849-e45d3c378f12'; // Exemplo de ID de raça
      
        it('Deve retornar os detalhes da raça com status 200', () => {
          cy.request('GET', `/breeds/${breedId}`) // Usando o baseUrl configurado
            .its('status')
            .should('equal', 200);
      
          cy.request('GET', `/breeds/${breedId}`) // Usando o baseUrl configurado
            .its('body.data')
            .should('have.property', 'id', breedId); // Verifica se o ID retornado é o esperado
        });
    });
      
    describe('GET /facts', () => {
        it('Deve retornar uma lista de fatos com status 200', () => {
          cy.request('GET', '/facts') // Usando o baseUrl configurado
            .its('status')
            .should('equal', 200);
      
          cy.request('GET', '/facts') // Usando o baseUrl configurado
            .its('body.data')
            .should('have.length.greaterThan', 0); // Verifica se há fatos retornados
        });
    });

    describe('GET /groups', () => {
        it('Deve retornar uma lista de grupos de raças com status 200', () => {
          cy.request('GET', '/groups') // Usando o baseUrl configurado
            .its('status')
            .should('equal', 200);
      
          cy.request('GET', '/groups') // Usando o baseUrl configurado
            .its('body.data')
            .should('have.length.greaterThan', 0); // Verifica se há grupos retornados
        });
    });
      
    describe('GET /groups/{id}', () => {
        const groupId = '8000793f-a1ae-4ec4-8d55-ef83f1f644e5'; // Exemplo de ID de grupo
      
        it('Deve retornar os detalhes do grupo com status 200', () => {
          cy.request('GET', `/groups/${groupId}`) // Usando o baseUrl configurado
            .its('status')
            .should('equal', 200);
      
          cy.request('GET', `/groups/${groupId}`) // Usando o baseUrl configurado
            .its('body.data')
            .should('have.property', 'id', groupId); // Verifica se o ID retornado é o esperado
        });
    });
});

describe("Testes Negativos da Dog API", () => {
  it("Deve retornar 404 para um breed inexistente", () => {
    BreedsApi.getInvalidBreed(9999).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("Deve retornar 404 para um grupo inexistente", () => {
    cy.request({
      url: "/groups/9999", // Usando o baseUrl configurado
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
