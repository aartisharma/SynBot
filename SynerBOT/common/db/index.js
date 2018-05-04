import Realm from 'realm';
import { ConversationDetail } from '../schema';

export const saveConversationData = (result) => new Promise((resolve, reject) => {
    var string = JSON.stringify(result)
  Realm.open({ schema: [ConversationDetail] })
      .then((realm) => {
        realm.write(() => {
          const conversationData = {
            conversationDetailId: 1,
            conversationArray: string
          };
          realm.create('ConversationDetail', conversationData, true);
          resolve();
        });
      })
      .catch((error) => {
        reject(error);
      });
});

export const getConversationData = () => new Promise((resolve, reject) => {
  Realm.open({ schema: [ConversationDetail] })
      .then((realm) => {
        //  var data = realm.objectForPrimaryKey('ConversationDetail', 1)['conversationArray']
          var parsedData = JSON.parse(realm.objectForPrimaryKey('ConversationDetail', 1)['conversationArray'])
        resolve(parsedData);
      })
      .catch((error) => {
        reject(error);
      });
});


