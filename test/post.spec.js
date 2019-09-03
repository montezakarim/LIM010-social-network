import MockFirebase from 'mock-cloud-firestore';
import { addPost, getPost } from '../src/module/controllerdata.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        1234: {
          notes: 'hola',
          user: '12345',
          userName: 'meliza',
          privacity: 'publico',
        },
        1235: {
          notes: 'chau',
          user: '67891',
          userName: 'karina',
          privacity: 'privado',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('lista de posts', () => {
  it('Debería poder agregar un post', done => addPost('comprar frutas', '121314', 'gaby', 'public')
    .then(() => getPost(
      (data) => {
        const result = data.find(posts => posts.notes === 'comprar frutas');
        expect(result.notes).toBe('comprar frutas');
        done();
      },
    )));
});
