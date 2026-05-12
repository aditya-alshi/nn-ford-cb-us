import { Client, Account } from 'react-native-appwrite';

let client;
let account;

client = new Client();
client
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('6a01b59a000be3753d8c')   // Your Project ID
  .setPlatform('dev.aditya.shelfie');   // Your package name / bundle identifier

account = new Account(client);


export {client, account};