
import { Injectable } from '@angular/core';
import { DiscussionService } from './discussion.service';
import { Discussion } from '../models/discussion';
// Declare SockJS and Stomp
declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public stompClient;
  public msg = [];
  constructor(private discussionService: DiscussionService) {

    this.initializeWebSocketConnection();

  }

  initializeWebSocketConnection() {
    const discussion = new Discussion();

    const serverUrl = 'http://localhost:8081/socket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/message', (message) => {
        if (message.body) {
          that.msg.push(message.body);
          discussion.message.push(this.msg);
          this.postMessage(that.msg);
        }
      });
      console.log(this.stompClient.connected);

    });
  }

  sendMessage(message) {
    this.stompClient.send('/app/send/message', {}, message);
  }
  postMessage(message) {

      this.discussionService.putDiscussion(message).subscribe( data => {
        console.log(data);
      });


  }
}
