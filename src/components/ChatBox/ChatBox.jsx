  window.watsonAssistantChatOptions = {
    integrationID: "30524ee5-165f-4adc-b01a-157bb7ac489a", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "072ad677-c172-4321-9e2e-bbcd264b9786", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
