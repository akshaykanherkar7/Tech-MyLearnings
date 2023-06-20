import { defineFeature, loadFeature } from 'jest-cucumber';
import { BuyingTicketStatus } from '../../src/BuyingTicket';


const feature = loadFeature('./specs/features/Gourav-GoingHome.feature');


defineFeature(feature, (test) => {
    let BuyingTicketS = new BuyingTicketStatus();
    let status = false;
  
    beforeEach(() => {
        BuyingTicketS = new BuyingTicketStatus();
    });
  
    test('Gourav will not go home', ({ given, when, then }) => {
      given('I have money to purchase train ticket', () => {
        BuyingTicketS.BuyingTicket("fail");
      });
  
      when('I not get train ticket', () => {
        status = BuyingTicketS.BuyingTicketStats("fail");
      });
  
      then('It should not grant', () => {
        expect(status).toBe(true);
      });
    });

    test('Gourav will go home', ({ given, when, then }) => {
        given('I have money to purchase train ticket', () => {
          BuyingTicketS.BuyingTicket("success");
        });
    
        when('I have got the train ticket', () => {
          status = BuyingTicketS.BuyingTicketStats("success");
        });
    
        then('It should grant', () => {
          expect(status).toBe(true);
        });
      });


  });