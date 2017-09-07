
class UI 
{
	// Create a message tag to add at the section "messagesList"
	static postMessage (message) 
	{
		var liTag = document.createElement("li");
		liTag.setAttribute("id", message.id);
		liTag.className = this.getClassFromMessageType(message.displayType);;

		liTag.innerHTML = message.sender + ": <br/>" + message.content;

		document.getElementById("messagesList").appendChild(liTag);		
	}


	// Create options and the onCLick event on them to add at the end of the message content
	static createOptions(message, callback) 
	{
		// alert(message.length);

		//for (var i=0; i< message.options.length; i++)
		//{
			var linkTag = document.createElement("pre");
			linkTag.addEventListener("click", function() {callback(message.options[0].nodeId); }, false);
			linkTag.innerHTML = "<br/>" + message.options[0].textToDisplay;

			var parentMessageTag = document.getElementById(message.id);
			parentMessageTag.appendChild(linkTag);
		//}

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