'use strict';

angular.module('app').component('mailsPanel', {
  templateUrl: 'app/mail/mailsPanel.html',
  bindings: {
    mails: '<',
    folder: '<',
    composing: '<',
    onMailComposed: '&',
    onCancelComposing: '&'
  },
  controller: function() {
    this.selectMail = mail => this.selectedMail = mail;
    this.clearMailSelection = () => this.selectedMail = null;

    this.create = (mail) => this.onMailComposed({mail: mail});
  }
});