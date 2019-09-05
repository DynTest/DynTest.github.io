var testCases = "<b>No of test cases participated:</b> 159"
var totalPassed = "<b>No of test cases passed:</b> 129"
var testAgents = "<b>No of test agents participated:</b> 4"
var buildUsed = "<b>Build used:</b> Paint.Dev.EmbSw.CI20190904.4"
var sitesParticipated = "<b>Sites participated:</b> Norway"
var startDate = "<b>Started date:</b> 04.09.2019 16:08:13"
var endDate = "<b>End date:</b> 04.09.2019 22:53:11"
var execTime = "<b>Total execution time:</b> 6:44:57"

$(function () {
    document.getElementById("testCases").innerHTML=testCases;
    document.getElementById("totalPassed").innerHTML=totalPassed;
    document.getElementById("testAgents").innerHTML = testAgents;
    document.getElementById("buildUsed").innerHTML = buildUsed;
    document.getElementById("sitesParticipated").innerHTML = sitesParticipated;
    document.getElementById("startDate").innerHTML = startDate;
    document.getElementById("endDate").innerHTML = endDate;
    document.getElementById("execTime").innerHTML = execTime;
})
