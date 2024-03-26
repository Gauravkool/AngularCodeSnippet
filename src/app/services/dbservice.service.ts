import { Injectable } from '@angular/core';
import {
  doc,
  getDocFromCache,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { AuthService } from './auth.service';
import { Snippet } from '../../models/snippet';
@Injectable({
  providedIn: 'root',
})
export class DbserviceService {
  private db: any;
  constructor(private authService: AuthService) {
    this.db = getFirestore();
  }
  async createSnippet(snippet: Snippet) {
    try {
      const docRef = await addDoc(collection(this.db, 'snippets'), {
        ...snippet,
        by: this.authService.getUid(),
      });
      console.log('Document written with ID: ', docRef.id);
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
    try {
      const doc = await getDocFromCache(docRef);
      console.log('Cached document data:', doc.data());
      return doc.data();
    } catch (e) {
      console.log('Error getting cached document:', e);
      return {
        id: '1',
        title: 'Not Found',
        code: '',
      };
    }
  }
}
