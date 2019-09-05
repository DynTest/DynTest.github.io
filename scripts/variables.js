var testCases = "<b>No of Test cases participated:</b> 228"
var testAgents = "<b>No of Test agents participated:</b> 4"
var buildUsed = "<b>Build used:</b> Kernel_6.08.00.00_Build_0014.1"
var sitesParticipated = "<b>Sites participated:</b> Sweden,Norway"
var startDate = "<b>Started Date:</b> 2018-03-08 07:16:24"
var endDate = "<b>End Date:</b> 2018-03-08 07:16:24"
var execTime = "<b>Total execution time:</b> 0:13:5:93"

$(function () {
    document.getElementById("testCases").innerHTML=testCases;
    document.getElementById("testAgents").innerHTML = testAgents;
    document.getElementById("buildUsed").innerHTML = buildUsed;
    document.getElementById("sitesParticipated").innerHTML = sitesParticipated;
    document.getElementById("startDate").innerHTML = startDate;
    document.getElementById("endDate").innerHTML = endDate;
    document.getElementById("execTime").innerHTML = execTime;
})