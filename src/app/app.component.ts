import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  postCol: AngularFirestoreCollection<Post>;
  //posts: Observable<Post[]>;
  posts: any;

  title: string;
  content: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postCol = this.afs.collection('posts');
    //this.posts = this.postCol.valueChanges();
    this.posts = this.postCol.snapshotChanges()
        .map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.id;
            const id = a.payload.doc.id;
            return { id, data};
          });
        });
  }

  addPost() {
    //this.afs.collection('posts').add({'title': this.title, 'content': this.content});
    this.afs.collection('posts').doc('my-custom-id').set({'title': this.title, 'content': this.content});
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }
}
