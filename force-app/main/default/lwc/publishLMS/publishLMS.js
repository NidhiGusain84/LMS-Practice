import { LightningElement, wire } from "lwc";
import { publish, MessageContext } from "lightning/messageService";
import Message from "@salesforce/messageChannel/sendMessage__c";

export default class PublishLMS extends LightningElement {
  @wire(MessageContext)
  messageContext;

  publishMessage() {
    const payload = {
      lmsData: "Welcome to learn LMS."
    };
    publish(this.messageContext, Message, payload);
  }
}
