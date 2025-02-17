// Em breedsApi.js
class BreedsApi {
    getAllBreeds() {
      return cy.request("/breeds");
    }
  
    getBreedById(id) {
      return cy.request(`/breeds/${id}`);
    }
  
    getInvalidBreed(id) {
      return cy.request({ url: `/breeds/${id}`, failOnStatusCode: false });
    }
  
    getAllGroups() {
      return cy.request("/groups");
    }
  }
  
  export default new BreedsApi();
  