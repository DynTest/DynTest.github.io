Highcharts.chart('DeviationTimeContainer', {
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
            return '<b>Test Case Title:</b> ' + this.point.testTitle +
                '<br><b>Test Case ID:</b> ' + this.point.name +
                '<br><b>Agent:</b> ' + this.point.agent +
                '<br><b>Actual Duration:</b> ' + this.point.actualDuration +
                '<br><b>Expected Duration:</b> ' + this.point.expectedDuration +
                '<br><b>Time Deviaton:</b> ' + this.point.deviation;
        }
    },
    colorAxis: {
        stops: [
            [0, '#2f7ed8'],
            [0.5, '#ffffff'],
            [1, '#ED561B']
        ],
        min: -100,
        max: 100,
        labels: {
            step: 2,
            format: '{value}%'
        }
    },
    legend: {
        verticalAlign: 'bottom',
        width: 400,
        symbolWidth: 390
    },
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: [{
            id: 'passed',
            name: 'Expected failed',
            color: "#00AA00"
        }, {
            id: 'failed',
            name: 'Expected passed',
            color: "#CC0000"
        }, {
	testTitle: 'ACU with VCBI test',
	name: '179411',
	value: 1,
	colorValue: 17,
	actualDuration: '00:03:22',
	expectedDuration: '00:02:53',
	agent: 'Bvt1-UnitTest',
	deviation: '17,28 %',
	runID: '125705',
	resultID: '100005'
}
, {
	testTitle: 'Test of STROBE device functions',
	name: '112489',
	value: 1,
	colorValue: -10,
	actualDuration: '00:02:37',
	expectedDuration: '00:02:55',
	agent: 'Bvt1-UnitTest',
	deviation: '-9,77 %',
	runID: '125705',
	resultID: '100111'
}
, {
	testTitle: 'SysTestTrig--Plain',
	name: '219857',
	value: 1,
	colorValue: -41,
	actualDuration: '00:05:03',
	expectedDuration: '00:08:33',
	agent: 'Bvt3-SysTestEth',
	deviation: '-40,81 %',
	runID: '125708',
	resultID: '100016'
}
]
}]
});
