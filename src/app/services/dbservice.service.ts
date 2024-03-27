import { Injectable } from '@angular/core';
import {
  doc,
  getDoc,
  getDocFromCache,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { AuthService } from './auth.service';
import { Snippet } from '../../models/snippet';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class DbserviceService {
  private db: any;
  constructor(private authService: AuthService, private router: Router) {
    this.db = getFirestore();
  }
  async createSnippet(snippet: Snippet) {
    try {
      const docRef = await addDoc(collection(this.db, 'snippets'), {
        ...snippet,
        by: this.authService.getUid(),
      });
      console.log('Document written with ID: ', docRef.id);
      this.router.navigate(['/']);
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Error while creating');
    }
  }

  async getAllSnippets() {
    let result: any[] = [];
    const querySnapshot = await getDocs(collection(this.db, 'snippets'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      result.push({ id: doc.id, ...doc.data() });
    });
    return result;
  }

  async getSnippetById(docId: string) {
    const docRef = doc(this.db, 'snippets', docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      console.log('No such document!');
      return {
        id: '1',
        title: 'Not Found',
        code: 'Not Found',
      };
    }
  }
}
