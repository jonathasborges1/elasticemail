import { Configuration, ContactsApi } from '@elasticemail/elasticemail-client-ts-axios';
import { IContact } from './IContactPayload';
import appConfig from '../../config';

const config = new Configuration({
   apiKey: appConfig.api.key,
});

const contactsApi = new ContactsApi(config);

export const addContacts = (contacts: IContact[], listName: string[]): void => {
   contactsApi.contactsPost(contacts, listName).then((response) => {
       console.log('API called successfully.');
       console.log(response.data);
   }).catch((error) => {
       console.error(error);
   });
}