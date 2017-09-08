
class UI 
{
	// Create a message tag to add at the section "messagesList"
	static postMessage (message) 
	{
		var liTag = document.createElement("li");
		liTag.setAttribute("id", message.id);
		liTag.className = this.getClassFromMessageType(message.displayType);

		liTag.innerHTML = message.sender + ": <br/>" + message.content;

		document.getElementById("messagesList").appendChild(liTag);		
	}


	// Create options and the onCLick event on them to add at the end of the message content
	static createOptions(message, callback) 
	{
		var linkTag; var parentMessageTag; var nodeId;

		for (var i=0; i< message.options.length; i++)
		{
			// Cas d'une réponse en messagerie
			if (message.options[i].textToDisplay == "...")
			{
				alert("passing here !");
				parentMessageTag = document.getElementById("messagesList");
				linkTag = document.createElement("li");
				linkTag.className = this.getClassFromMessageType(message.displayType);
			}
			else
			{						
				parentMessageTag = document.getElementById(message.id);
				parentMessageTag.appendChild(document.createElement("br"));
				parentMessageTag.appendChild(document.createElement("br"));
				
				linkTag = document.createElement("div");
				linkTag.className = "optionlink";
			}
			
			nodeId = message.options[i].nodeId;

			linkTag.addEventListener("click", this.getCallbackOptionFunction(callback, nodeId), false);

			linkTag.innerHTML = message.options[i].textToDisplay;
			parentMessageTag.appendChild(linkTag);
		}
	}

	// Retourne la fonction de callback avec paramètre
	static getCallbackOptionFunction(callback, nodeId)
	{
		return function() {
			callback(nodeId)
		}
	}

	// Obtient la classe à utiliser en fonction du type de message (narration, pensée d'Octave, autre ...)
	static getClassFromMessageType(displayType)
	{
		if (displayType == 0)
			return "message messageCenter";
		else if (displayType == 2)
			return "message messageRight";
		else
			return "message messageLeft"
	}

}