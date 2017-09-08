
class UI 
{
	// Create a message tag to add at the section "messagesList"
	static postMessage (message) 
	{
		var articleTag = document.createElement("article");
		articleTag.setAttribute("id", message.id);
		articleTag.className = this.getClassFromMessageType(message.displayType);

		articleTag.innerHTML = message.sender + ": <br/>" + message.content;

		document.getElementById("storyscreen").appendChild(articleTag);		
	}


	// Create options and the onCLick event on them to add at the end of the message content
	static createOptions(message, callback) 
	{
		var linkTag; var parentMessageTag; var nodeId;

		// POUR PROTOTYPE
		if (message.sender == "Octave")
			message.displayType = 2;
		//

		for (var i=0; i< message.options.length; i++)
		{
								
			parentMessageTag = document.getElementById(message.id);
			parentMessageTag.appendChild(document.createElement("br"));
			parentMessageTag.appendChild(document.createElement("br"));		
			linkTag = document.createElement("div");
			linkTag.className = "optionlink";
						
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
		if (displayType == 3)
			return "bloc-tacita";	
		else if (displayType == 1)
			return "messageLeft";	
		else if (displayType == 2)
			return "messageRight";
		else
			return "bloc-narration bn1";
	}

}