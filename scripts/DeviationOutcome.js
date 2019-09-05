Highcharts.chart('DeviationOutcomeContainer', {
		title: {
      text: ''
    },
    plotOptions: {
        series: {
            allowPointSelect: false, cursor: 'pointer', point: {
                events: {
                    click: function () {
                        window.open('https://sevsttfs.se.abb.com/tfs/robotproducts/RobotWare/_TestManagement/Runs?_a=resultSummary&runId=' + this.runID + '&resultId=' + this.resultID)
                    }
                }
            }
        }
    },
    credits: false,
    tooltip: {
        formatter: function () {
            var returnString = '<b>Test Case Title:</b> ' + this.point.testTitle +
                '<br><b>Test Case ID:</b> ' + this.point.name +
                '<br><b>Agent:</b> ' + this.point.agent +
                '<br><b>Actual Duration:</b> ' + this.point.actualDuration +
                '<br><b>Expected Duration:</b> ' + this.point.expectedDuration +
                '<br><b>Actual Result:</b> ' + this.point.outcome +
                '<br><b>Expected Result:</b> ' + this.point.expected;
            if (this.point.error != null)
            {
                returnString += '<br><b>Error Message:</b> ' + this.point.error;
            }
            if (this.point.outcome != null)
            {
                return returnString
            }
        }
    },
    series: [{
        type: "treemap",
        layoutAlgorithm: 'squarified',
        alternateStartingDirection: false,
        levels: [{
            level: 1,
            borderWidth: 6,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '13px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: 'passed',
            name: 'Expected failed',
            color: "#00AA00"
        }, {
            id: 'failed',
            name: 'Expected passed',
            color: "#CC0000"
        }, {
id: 'Bvt2-SysTestDisp passed',
name: 'Bvt2-SysTestDisp',
color: '#00AA00'}, {
id: 'Bvt2-SysTestDisp failed',
name: 'Bvt2-SysTestDisp',
color: '#AA0000'}, {
id: 'Bvt1-UnitTest passed',
name: 'Bvt1-UnitTest',
color: '#00AA00'}, {
id: 'Bvt1-UnitTest failed',
name: 'Bvt1-UnitTest',
color: '#AA0000'}, {
	testTitle: 'Test of PULSEMIXER Device functions',
	name: '132912',
	parent: 'Bvt1-UnitTest failed',
	value: 1,
	actualDuration: '00:07:18',
	expectedDuration: '00:07:18',
	expected: 'passed',
	outcome: 'failed',
	error: 'Assert.Fail failed. DO2/SetPoint: 1.0 is not Equal to the expected value: 0',
	agent: 'Bvt1-UnitTest',
	runID: '125705',
	resultID: '100054'
}
, {
id: 'Bvt3-SysTestEth passed',
name: 'Bvt3-SysTestEth',
color: '#00AA00'}, {
id: 'Bvt3-SysTestEth failed',
name: 'Bvt3-SysTestEth',
color: '#AA0000'}, {
	testTitle: 'SysTestTrig--Trig Error on Ch3',
	name: '219893',
	parent: 'Bvt3-SysTestEth failed',
	value: 1,
	actualDuration: '00:05:05',
	expectedDuration: '00:05:05',
	expected: 'passed',
	outcome: 'failed',
	error: 'Assert.Fail failed. For A1HVOut, different length of actual (28) and oracle (29)',
	agent: 'Bvt3-SysTestEth',
	runID: '125708',
	resultID: '100011'
}
, {
id: 'Bvt1-SysTestDevNet passed',
name: 'Bvt1-SysTestDevNet',
color: '#00AA00'}, {
id: 'Bvt1-SysTestDevNet failed',
name: 'Bvt1-SysTestDevNet',
color: '#AA0000'}]
}]
});
