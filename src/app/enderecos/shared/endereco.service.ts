import { map } from 'rxjs/operators';
import { FirebasePath } from './../../core/shared/firebase-path';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  getEnderecosPath() {
    const path = `${FirebasePath.CLIENTES_ENDERECOS}${this.afAuth.auth.currentUser.uid}`
    return path;
  }

  getEnderecosRef() {
    const path = this.getEnderecosPath();
    return this.db.list(path);
  }

  getAll() {
    return this.getEnderecosRef().snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }))
      })
    )
  }

  getByKey(key: string) {
    const path = `${this.getEnderecosPath()}/${key}`;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, ...change.payload.val() });
      })
    );
  }

  insert(endereco: any) {
    return this.save(endereco, null);
  }

  update(endereco: any, key: string) {
    return this.save(endereco, key);
  }

  private save(endereco: any, key: string) {
    return new Promise((resolve, reject) => {
      const enderecoRef = this.getEnderecosRef();

      if (key) {
        enderecoRef.update(key, endereco)
          .then(() => resolve(key))
          .catch(() => reject());
      } else {
        enderecoRef.push(endereco)
          .then((result: any) => resolve(result.key));
      }
    });
  }

  remove(key: string) {
    return this.getEnderecosRef().remove(key);
  }
}
