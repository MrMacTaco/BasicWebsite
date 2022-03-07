//JavaScript methods to add functionality to webpages!

//Helper function that retrives value from radio buttons
function radioValue(name)
{
	var result = document.getElementsByName(name);

	for (i = 0; i < result.length; i++)
	{
		if(result[i].checked)
		{
			return result[i].value
		}
	}
}

//Generates MadLib using entries from MadLib.html
function generateMadLib()
{
	//Create variables to story madlib entries
	var name = document.getElementById("name").value;
	var color = document.getElementById("color").value;
	var number = document.getElementById("number").value;
	var height = document.getElementById("height").value;
	var friend = document.getElementById("friend").value;
	var adj1 = document.getElementById("adj1").value;
	var adj2 = document.getElementById("adj2").value;
	var verb = document.getElementById("verb").value;
	var ship = document.getElementById("ship").value;
	var planet = document.getElementById("planet").value;
	var favChar = radioValue("favChar");

	if (name==""||color==""||number==""||height==""||friend==""||adj1==""||adj2==""||verb==""||ship==""||planet==""||favChar=="")
	{
		alert("Please check that all forms are filled.");
	}
	else if(isNaN(number) || isNaN(height))
	{
		alert("Please enter valid numbers for relivent fields.")
	}
	else
	{
		//Create story and save in vaiable
		var totalNum = Number(number) + Number(height);
		var story = "A long time ago, in a galaxy far, far away there lived a Jedi named " + name +". They were "
					+ "consider by many to be the greatest Jedi of all time. One day, when " + name + " was out "
					+ "flying their " + ship + " over the planet " + planet + ", a voice filled their cockpit."
					+ '\n"Hello? This is Commander ' + friend + "! We're being over run by " + height + " " + adj1
					+ " Stormtroopers" + " and " + number + " " + adj2 + ' Imperial troopers! We need help!"'
					+ "\n Without hesitation, " + name + " swoops into " + planet + "'s automsphere to help the "
					+ "commander. Flying over the battlefield, " + name + " leaps from the cockpit of their " + ship
					+ " and with a 'Schvrmmmmm', ignites their " + color + " lightsaber. " + name + " begins "
					+ verb + " towards the quickly approching Imperials. After a heroic battle, " + name 
					+ " is able to defeat all " + String(totalNum) + " troopers!" + " As " + name + " returns to "
					+ "where their ship landed, a worse for wear " + favChar + " emerges to offer their thanks "
					+ "before " + name + " takes off, in search of more adventures!";
		document.getElementById("storyText").innerHTML = story;

		//Reset form entires after story creating
		document.getElementById("name").value = "";
		document.getElementById("color").value = "";
		document.getElementById("number").value = "";
		document.getElementById("height").value = "";
		document.getElementById("friend").value = "";
		document.getElementById("adj1").value = "";
		document.getElementById("adj2").value = "";
		document.getElementById("verb").value = "";
		document.getElementById("ship").value = "";
		document.getElementById("planet").value = "";
	}
}