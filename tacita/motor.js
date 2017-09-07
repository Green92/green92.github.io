
"use strict";


window.onload = function() 
{
	var hasMessageToDisplay = true;

	var Message = function(id, sender, content, displayType, options) 
	{		
		this.id = id;
		this.sender = sender;
		this.content = content;
		this.displayType = displayType;
		this.options = options;			
	};


	game();


	// Main function to run the game
	function game()
	{
		var isGameFinished = false;
		var nodeID = 0;

		//loadJSONfile();

		while(!isGameFinished)
		{

			if (hasMessageToDisplay)
			{
				var message = getMessage(nodeID);

				//ui.postMessage(message.sender, message.content);

				// TEST
					document.getElementById("sender").innerHTML = message.sender;
					document.getElementById("content").innerHTML = message.content ;
					document.getElementById("options").innerHTML = message.options[0].textToDisplay + "<br/>" + ((message.length > 1 ) ? message.options[1].textToDisplay : "");

				//ui.createOptions(message.options, optionCallback);

				hasMessageToDisplay = false;

				isGameFinished = true;
			}
		}
	}



	// To load all messages from the JSON file "dialogues.json"
	function loadJSONfile () 
	{

		alert("Loading JSON file");

		//dialoguesList = JSON.parse("dialoguesList");

		alert("JSON file loaded");
	}


	// Get the sender and the dialogue content of a message
	function getMessage (nodeID)
	{
		if (nodeID >= dialoguesList.length)
			alert ("Impossible to get message with ID : " + nodeID);

		return new Message(
			dialoguesList[nodeID].id,
			dialoguesList[nodeID].sender,
			dialoguesList[nodeID].content, 
			dialoguesList[nodeID].displayType,
			dialoguesList[nodeID].options
			);
	}


	// Callback when there is a click on one of the options
	function optionCallback(optionId) 
	{
		nodeID = optionId;
		hasMessageToDisplay = true;
	}

}

