import { ConsentData, ContactPayload } from "@elasticemail/elasticemail-client-ts-axios";

enum ContactStatusEnum {
   Transactional = 'Transactional',
   Engaged = 'Engaged',
   Active = 'Active',
   Bounced = 'Bounced',
   Unsubscribed = 'Unsubscribed',
   Abuse = 'Abuse',
   Inactive = 'Inactive',
   Stale = 'Stale',
   NotConfirmed = 'NotConfirmed'
}

export interface IContact extends ContactPayload {
   'Email': string;
   'Status'?: ContactStatusEnum;
   'FirstName'?: string;
   'LastName'?: string;
   'CustomFields'?: {
       [key: string]: string;
   };
   'Consent'?: ConsentData;
}

export const contactsMocks = [{
   Email: "example@address.com",
   FirstName: "John",
   LastName: "Smith",
   "CustomFields": {
      "Phone": "31",
   }
 },
//  {
//    Email: "test@address.com",
//    FirstName: "Test",
//    LastName: "Test"
//  }
]

export const listNames = ["lancamento1"]; // string[]