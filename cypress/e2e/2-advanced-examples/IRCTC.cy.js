describe('IRCTC', () => {
    it('Verifying that user able to login into the IRCTC', () => {
      cy.visit('https://www.irctc.co.in/nget/train-search').viewport(2560, 1080)
   
   cy.get("a[aria-label='Click here to Login in application']").click()
   
   
   
    })
})