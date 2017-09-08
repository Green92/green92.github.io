
"use strict";


window.onload = function() 
{
	var hasMessageToDisplay = true;
	var nodeID = 7;
	var isGameFinished = false;
	var alreadyDisplayedNodes = new Array();

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

		//while(!isGameFinished)
		//{

		setInterval(function() 
		{
			if (!isGameFinished && hasMessageToDisplay)
			{
				var message = getMessage(nodeID);

				UI.postMessage(message);
				UI.createOptions(message, optionCallback);

				hasMessageToDisplay = false;
			}

		}, 500);

		//}
	}


	// Get the sender and the dialogue content of a message
	function getMessage (nodeID)
	{
		if (nodeID >= dialoguesList.length)
		{
			isGameFinished = true;
			alert ("Impossible to get message with ID : " + nodeID);
		}

		return new Message(
			dialoguesList[nodeID].id,
			dialoguesList[nodeID].sender,
			dialoguesList[nodeID].content, 
			dialoguesList[nodeID].displayType,
			dialoguesList[nodeID].options
			);
	}


	// Callback when there is a click on one of the options
	function optionCallback(nextNodeId) 
	{
		// Fin 
		if(nextNodeId == 999)
		{
			alert("L'histoire est terminée.");
			isGameFinished = true;
		}

		// Do not display two time a same message
		for(var i=0; i< alreadyDisplayedNodes.length; i++)
		{
			if (alreadyDisplayedNodes[i] == nextNodeId)
				return;
		}

		nodeID = nextNodeId;
		alreadyDisplayedNodes[alreadyDisplayedNodes.length] = nextNodeId;
		hasMessageToDisplay = true;
	}

}

