import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udmey_app';

  storedPosts :any =[];

  onPostAdded(post:any){
    this.storedPosts.push(post)
  }


}
