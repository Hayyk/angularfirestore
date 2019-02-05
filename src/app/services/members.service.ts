import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private members;

  constructor(db: AngularFirestore) {
    this.members = db.collection('members');
  }

  add(member: string[]) {
    return this.members.add(member);
  }
}
