function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6atMUKAPRat":
        Script1();
        break;
  }
}

function Script1()
{
  var timeleft =30;
function updateTimer() {
	var player = GetPlayer();
	console.log("Current Timer Value:", timeleft);
	
	if (timeleft>0) {
	timeleft--;
	player.SetVar("Timer", timeleft);

	setTimeout(function() {
	      updateTimer();
	}, 1000);
        } else {
	player.SetVar("Timer", 0);
	alert("Time Over!");
	}
}

updateTimer();
}

