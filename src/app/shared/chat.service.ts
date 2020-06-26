import { Injectable } from '@angular/core';
import { Discussion } from '../models/discussion';
import { DiscussionService } from './discussion.service';

// Declare SockJS and Stomp
declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  discussionService: any;


  constructor() {
    this.initializeWebSocketConnection();
  }

  public stompClient;
  public msg = [];
  private discussion = new Discussion();


  initializeWebSocketConnection() {

    const serverUrl = 'http://localhost:8081/socket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/message', (message) => {
        if (message.body) {
          that.msg.push(message.body);
          this.discussion.message.push(this.msg);
        }
      });

    });
//    this.postMessage(discussion.message);
}

  sendMessage(message) {
    this.stompClient.send('/app/send/message', {}, message);
  }

  postMessage(mess){
    const doc = this.discussionService.putDiscussion(mess).subscribe( data => {
      console.log(data);
    });
}

}
