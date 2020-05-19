describe("GMDB Home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    /*
    Story (Example): As a Chef, I want to store my recipes so I can keep track of them
    Gherkin Syntax: (behavior descriptions) - removes logic details from behavior tests
    Scenario: ==> (story)
    Given (And): ==> some precondition(s)
    When (And):  ==> some action(s) by the actor
    Then (And): ==> some testable outcome is achieved
    */

    /*
    Browse Movies Anonomously
    1. As a user, I want to see a list/image of movies so that I can browse information about those movies
    Given I am on the landing page, When the page loads, Then I should see an image of the movie posters 
    */

    // Tests 

    // page loads
    it("landing page loads a image for a set of movies", () => {
        cy.get('.App-header').should('contain', 'GMDB')
        cy.get('h1').should('contain', 'GMDB')
    })

    // show message if no movies are available
    it ("header cotains GMDB with a message that there are no movies to view", () => {
        cy.get('.App-header').should('contain', 'GMDB')
        cy.get('p').should('contain', 'There are no movies to view')
    })

    // query the back-end for a list of movies

    // show the movies and show poster image

    
   // it("page shows list of movies", () => {
        // "poster" = "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"
   //})

   /*
    Browse Movies Anonomously
    2. As a user, I want to see a list/image of movies so that I can browse information about those movies
    Given I am on the landing page, When the page loads, Then I should see an image of the movie posters 
    */

})

