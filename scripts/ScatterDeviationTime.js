Highcharts.chart('ScatterDeviationTimeContainer', {
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
        },
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
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
    chart: {
            type: 'scatter',
            zoomType: 'xy',
            inverted: true
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        title: {
            text: 'Time Deviation %'
        }
    },

    series: [{
        color: 'rgba(223, 83, 83, .5)',
        data: [{
            id: 'passed',
            name: 'Expected failed',
            color: "#00AA00"
        }, {
                id: 'failed',
                name: 'Expected passed',
                color: "#CC0000"
        }, {
	testTitle: 'Verify IPS simple dispense test works',
	name: '174657',
	value: 1,
	colorValue: -2,
	actualDuration: '00:08:12',
	expectedDuration: '00:08:20',
	agent: 'Bvt2-SysTestDisp',
	deviation: '-1,54 %',
	runID: '125707',
	resultID: '100001',
	x: 2,
	y: -2
}
, {
	testTitle: 'Cycle unit-test-rack power',
	name: '115815',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:04',
	expectedDuration: '00:02:05',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,06 %',
	runID: '125705',
	resultID: '100001',
	x: 0,
	y: 0
}
, {
	testTitle: 'Test of different trig functions',
	name: '112490',
	value: 1,
	colorValue: 1,
	actualDuration: '00:05:10',
	expectedDuration: '00:05:09',
	agent: 'Bvt1-UnitTest',
	deviation: '0,60 %',
	runID: '125705',
	resultID: '100002',
	x: 1,
	y: 1
}
, {
	testTitle: 'ACU digio test',
	name: '112289',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:21',
	expectedDuration: '00:02:21',
	agent: 'Bvt1-UnitTest',
	deviation: '0,17 %',
	runID: '125705',
	resultID: '100003',
	x: 0,
	y: 0
}
, {
	testTitle: 'ACU intdigin test',
	name: '112180',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:00',
	expectedDuration: '00:03:01',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,43 %',
	runID: '125705',
	resultID: '100004',
	x: 0,
	y: 0
}
, {
	testTitle: 'ACU with VCBI test',
	name: '179411',
	value: 1,
	colorValue: 17,
	actualDuration: '00:03:22',
	expectedDuration: '00:02:53',
	agent: 'Bvt1-UnitTest',
	deviation: '17,28 %',
	runID: '125705',
	resultID: '100005',
	x: 17,
	y: 17
}
, {
	testTitle: 'ACU with IMS test',
	name: '179409',
	value: 1,
	colorValue: 0,
	actualDuration: '00:05:05',
	expectedDuration: '00:05:04',
	agent: 'Bvt1-UnitTest',
	deviation: '0,34 %',
	runID: '125705',
	resultID: '100006',
	x: 0,
	y: 0
}
, {
	testTitle: 'ACU possible configs test',
	name: '112284',
	value: 1,
	colorValue: -1,
	actualDuration: '00:02:19',
	expectedDuration: '00:02:20',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,71 %',
	runID: '125705',
	resultID: '100007',
	x: 1,
	y: -1
}
, {
	testTitle: 'ACU default parameters test',
	name: '112175',
	value: 1,
	colorValue: 1,
	actualDuration: '00:02:21',
	expectedDuration: '00:02:20',
	agent: 'Bvt1-UnitTest',
	deviation: '1,31 %',
	runID: '125705',
	resultID: '100008',
	x: 1,
	y: 1
}
, {
	testTitle: 'ACU Firmware simple test',
	name: '194034',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:11',
	expectedDuration: '00:03:12',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,48 %',
	runID: '125705',
	resultID: '100009',
	x: 0,
	y: 0
}
, {
	testTitle: 'Test of PID device functions',
	name: '120273',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:29',
	expectedDuration: '00:02:29',
	agent: 'Bvt1-UnitTest',
	deviation: '0,47 %',
	runID: '125705',
	resultID: '100012',
	x: 0,
	y: 0
}
, {
	testTitle: 'Model based trig test, trigg error on channel 1',
	name: '198675',
	value: 1,
	colorValue: 1,
	actualDuration: '00:02:49',
	expectedDuration: '00:02:49',
	agent: 'Bvt1-UnitTest',
	deviation: '0,51 %',
	runID: '125705',
	resultID: '100013',
	x: 1,
	y: 1
}
, {
	testTitle: 'Test of Potlife Alarm functions',
	name: '112485',
	value: 1,
	colorValue: 0,
	actualDuration: '00:13:04',
	expectedDuration: '00:13:04',
	agent: 'Bvt1-UnitTest',
	deviation: '0,05 %',
	runID: '125705',
	resultID: '100014',
	x: 0,
	y: 0
}
, {
	testTitle: 'Test of SENSOR device functions',
	name: '112488',
	value: 1,
	colorValue: 1,
	actualDuration: '00:04:06',
	expectedDuration: '00:04:05',
	agent: 'Bvt1-UnitTest',
	deviation: '0,78 %',
	runID: '125705',
	resultID: '100015',
	x: 1,
	y: 1
}
, {
	testTitle: 'Test of special trig functions',
	name: '112491',
	value: 1,
	colorValue: 0,
	actualDuration: '00:05:20',
	expectedDuration: '00:05:20',
	agent: 'Bvt1-UnitTest',
	deviation: '0,16 %',
	runID: '125705',
	resultID: '100016',
	x: 0,
	y: 0
}
, {
	testTitle: 'Test of BATCHENGINE functions',
	name: '115204',
	value: 1,
	colorValue: 0,
	actualDuration: '00:04:16',
	expectedDuration: '00:04:16',
	agent: 'Bvt1-UnitTest',
	deviation: '0,30 %',
	runID: '125705',
	resultID: '100018',
	x: 0,
	y: 0
}
, {
	testTitle: 'Model based trig test, no error, Force Fixed Delay No AirDelay',
	name: '137900',
	value: 1,
	colorValue: 1,
	actualDuration: '00:02:48',
	expectedDuration: '00:02:47',
	agent: 'Bvt1-UnitTest',
	deviation: '1,00 %',
	runID: '125705',
	resultID: '100019',
	x: 1,
	y: 1
}
, {
	testTitle: 'Model based trig test, trigg error on channel 2',
	name: '198691',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:46',
	expectedDuration: '00:02:47',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,42 %',
	runID: '125705',
	resultID: '100020',
	x: 0,
	y: 0
}
, {
	testTitle: 'Test of PEAKDETECTALARM functions',
	name: '113793',
	value: 1,
	colorValue: 1,
	actualDuration: '00:03:21',
	expectedDuration: '00:03:19',
	agent: 'Bvt1-UnitTest',
	deviation: '1,26 %',
	runID: '125705',
	resultID: '100021',
	x: 1,
	y: 1
}
, {
	testTitle: 'Test of status for different devices',
	name: '112479',
	value: 1,
	colorValue: 2,
	actualDuration: '00:03:40',
	expectedDuration: '00:03:36',
	agent: 'Bvt1-UnitTest',
	deviation: '2,23 %',
	runID: '125705',
	resultID: '100023',
	x: 2,
	y: 2
}
, {
	testTitle: 'Test of Deviation Alarm functions',
	name: '112478',
	value: 1,
	colorValue: 1,
	actualDuration: '00:04:37',
	expectedDuration: '00:04:35',
	agent: 'Bvt1-UnitTest',
	deviation: '0,73 %',
	runID: '125705',
	resultID: '100024',
	x: 1,
	y: 1
}
, {
	testTitle: 'Model based trig test, trigg error on channel 3',
	name: '198692',
	value: 1,
	colorValue: -1,
	actualDuration: '00:02:46',
	expectedDuration: '00:02:48',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,96 %',
	runID: '125705',
	resultID: '100026',
	x: 1,
	y: -1
}
, {
	testTitle: 'Test of INTERLOCKER function',
	name: '112481',
	value: 1,
	colorValue: 1,
	actualDuration: '00:04:05',
	expectedDuration: '00:04:03',
	agent: 'Bvt1-UnitTest',
	deviation: '0,92 %',
	runID: '125705',
	resultID: '100027',
	x: 1,
	y: 1
}
, {
	testTitle: 'Test of CONNECTION functions',
	name: '112477',
	value: 1,
	colorValue: 2,
	actualDuration: '00:02:47',
	expectedDuration: '00:02:45',
	agent: 'Bvt1-UnitTest',
	deviation: '1,51 %',
	runID: '125705',
	resultID: '100028',
	x: 2,
	y: 2
}
, {
	testTitle: 'Model based trig test, trigg error on channel 6',
	name: '198695',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:48',
	expectedDuration: '00:02:49',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,32 %',
	runID: '125705',
	resultID: '100029',
	x: 0,
	y: 0
}
, {
	testTitle: 'Model based trig test, no error Force Fixed Delay No AirDelay',
	name: '198677',
	value: 1,
	colorValue: 1,
	actualDuration: '00:02:48',
	expectedDuration: '00:02:46',
	agent: 'Bvt1-UnitTest',
	deviation: '1,23 %',
	runID: '125705',
	resultID: '100030',
	x: 1,
	y: 1
}
, {
	testTitle: 'Test of Actuator device functions',
	name: '112472',
	value: 1,
	colorValue: 0,
	actualDuration: '00:04:24',
	expectedDuration: '00:04:24',
	agent: 'Bvt1-UnitTest',
	deviation: '0,30 %',
	runID: '125705',
	resultID: '100031',
	x: 0,
	y: 0
}
, {
	testTitle: 'Model based trig test, trigg error on channel 4',
	name: '198693',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:00',
	expectedDuration: '00:03:01',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,30 %',
	runID: '125705',
	resultID: '100032',
	x: 0,
	y: 0
}
, {
	testTitle: 'Test of INDEXTABLE functions',
	name: '178862',
	value: 1,
	colorValue: 2,
	actualDuration: '00:03:41',
	expectedDuration: '00:03:38',
	agent: 'Bvt1-UnitTest',
	deviation: '1,72 %',
	runID: '125705',
	resultID: '100034',
	x: 2,
	y: 2
}
, {
	testTitle: 'Test of PULSEMIXER Device',
	name: '131226',
	value: 1,
	colorValue: -1,
	actualDuration: '00:07:07',
	expectedDuration: '00:07:11',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,71 %',
	runID: '125705',
	resultID: '100035',
	x: 1,
	y: -1
}
, {
	testTitle: 'Test of LOGICDEVICE function',
	name: '112483',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:25',
	expectedDuration: '00:03:25',
	agent: 'Bvt1-UnitTest',
	deviation: '0,28 %',
	runID: '125705',
	resultID: '100037',
	x: 0,
	y: 0
}
, {
	testTitle: 'Test of PARTLOGGER functions',
	name: '114053',
	value: 1,
	colorValue: 0,
	actualDuration: '00:07:20',
	expectedDuration: '00:07:19',
	agent: 'Bvt1-UnitTest',
	deviation: '0,39 %',
	runID: '125705',
	resultID: '100038',
	x: 0,
	y: 0
}
, {
	testTitle: 'Test of SELECTOR device functions',
	name: '112487',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:08',
	expectedDuration: '00:03:09',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,02 %',
	runID: '125705',
	resultID: '100039',
	x: 0,
	y: 0
}
, {
	testTitle: 'Model based trig test, no error Force Fixed Delay With Air Delay',
	name: '198678',
	value: 1,
	colorValue: -1,
	actualDuration: '00:02:47',
	expectedDuration: '00:02:50',
	agent: 'Bvt1-UnitTest',
	deviation: '-1,35 %',
	runID: '125705',
	resultID: '100040',
	x: 1,
	y: -1
}
, {
	testTitle: 'Test of SELECTORFILTER function',
	name: '112480',
	value: 1,
	colorValue: 1,
	actualDuration: '00:04:45',
	expectedDuration: '00:04:44',
	agent: 'Bvt1-UnitTest',
	deviation: '0,60 %',
	runID: '125705',
	resultID: '100041',
	x: 1,
	y: 1
}
, {
	testTitle: 'Test of CoarseEncoder device function',
	name: '147668',
	value: 1,
	colorValue: 0,
	actualDuration: '00:04:20',
	expectedDuration: '00:04:19',
	agent: 'Bvt1-UnitTest',
	deviation: '0,43 %',
	runID: '125705',
	resultID: '100042',
	x: 0,
	y: 0
}
, {
	testTitle: 'Model based trig test, no error  Force Linear Delay With AirDelay',
	name: '198676',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:47',
	expectedDuration: '00:02:48',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,19 %',
	runID: '125705',
	resultID: '100043',
	x: 0,
	y: 0
}
, {
	testTitle: 'Test of MIXER device function',
	name: '112484',
	value: 1,
	colorValue: 1,
	actualDuration: '00:03:01',
	expectedDuration: '00:03:00',
	agent: 'Bvt1-UnitTest',
	deviation: '0,59 %',
	runID: '125705',
	resultID: '100045',
	x: 1,
	y: 1
}
, {
	testTitle: 'Model based trig test, no error, Force No Delay With Air Delay',
	name: '198680',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:47',
	expectedDuration: '00:02:47',
	agent: 'Bvt1-UnitTest',
	deviation: '0,37 %',
	runID: '125705',
	resultID: '100046',
	x: 0,
	y: 0
}
, {
	testTitle: 'Test of Applicator device functions',
	name: '112471',
	value: 1,
	colorValue: 0,
	actualDuration: '00:04:42',
	expectedDuration: '00:04:41',
	agent: 'Bvt1-UnitTest',
	deviation: '0,36 %',
	runID: '125705',
	resultID: '100047',
	x: 0,
	y: 0
}
, {
	testTitle: 'Default signals tests for different IPS devices',
	name: '112461',
	value: 1,
	colorValue: 1,
	actualDuration: '00:03:20',
	expectedDuration: '00:03:18',
	agent: 'Bvt1-UnitTest',
	deviation: '1,10 %',
	runID: '125705',
	resultID: '100050',
	x: 1,
	y: 1
}
, {
	testTitle: 'Model based trig test, trigg error on channel 5',
	name: '198694',
	value: 1,
	colorValue: 1,
	actualDuration: '00:02:50',
	expectedDuration: '00:02:48',
	agent: 'Bvt1-UnitTest',
	deviation: '1,47 %',
	runID: '125705',
	resultID: '100051',
	x: 1,
	y: 1
}
, {
	testTitle: 'Test of CONVEYOR tracking functions',
	name: '113234',
	value: 1,
	colorValue: 0,
	actualDuration: '00:01:59',
	expectedDuration: '00:02:00',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,02 %',
	runID: '125705',
	resultID: '100052',
	x: 0,
	y: 0
}
, {
	testTitle: 'Test of FILTERDEVICE functions',
	name: '113352',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:32',
	expectedDuration: '00:03:33',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,10 %',
	runID: '125705',
	resultID: '100055',
	x: 0,
	y: 0
}
, {
	testTitle: 'Model based trig test, no error, Plain',
	name: '198674',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:46',
	expectedDuration: '00:02:47',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,34 %',
	runID: '125705',
	resultID: '100057',
	x: 0,
	y: 0
}
, {
	testTitle: 'Model based trig test, no error Force No Delay No AirDelay',
	name: '198679',
	value: 1,
	colorValue: 1,
	actualDuration: '00:02:48',
	expectedDuration: '00:02:47',
	agent: 'Bvt1-UnitTest',
	deviation: '1,02 %',
	runID: '125705',
	resultID: '100058',
	x: 1,
	y: 1
}
, {
	testTitle: 'HVC default parameters test - G1CopesWater',
	name: '115920',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:45',
	expectedDuration: '00:03:45',
	agent: 'Bvt1-UnitTest',
	deviation: '0,37 %',
	runID: '125705',
	resultID: '100059',
	x: 0,
	y: 0
}
, {
	testTitle: 'HVC default parameters test - G1CopesSolvent',
	name: '115919',
	value: 1,
	colorValue: 1,
	actualDuration: '00:03:47',
	expectedDuration: '00:03:46',
	agent: 'Bvt1-UnitTest',
	deviation: '0,68 %',
	runID: '125705',
	resultID: '100060',
	x: 1,
	y: 1
}
, {
	testTitle: 'HVC default parameters test - CartridgeGun',
	name: '115911',
	value: 1,
	colorValue: 1,
	actualDuration: '00:03:46',
	expectedDuration: '00:03:45',
	agent: 'Bvt1-UnitTest',
	deviation: '0,78 %',
	runID: '125705',
	resultID: '100061',
	x: 1,
	y: 1
}
, {
	testTitle: 'HVC default parameters test - CartridgeBell',
	name: '115910',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:45',
	expectedDuration: '00:03:45',
	agent: 'Bvt1-UnitTest',
	deviation: '0,39 %',
	runID: '125705',
	resultID: '100062',
	x: 0,
	y: 0
}
, {
	testTitle: 'HVC default parameters test - RoboBell951',
	name: '115914',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:47',
	expectedDuration: '00:03:47',
	agent: 'Bvt1-UnitTest',
	deviation: '0,09 %',
	runID: '125705',
	resultID: '100063',
	x: 0,
	y: 0
}
, {
	testTitle: 'HVC default parameters test - RoboBel1000iExt',
	name: '187833',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:45',
	expectedDuration: '00:03:46',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,06 %',
	runID: '125705',
	resultID: '100064',
	x: 0,
	y: 0
}
, {
	testTitle: 'HVC default parameters test - RoboBel1000iZ2',
	name: '187842',
	value: 1,
	colorValue: -1,
	actualDuration: '00:03:45',
	expectedDuration: '00:03:47',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,52 %',
	runID: '125705',
	resultID: '100065',
	x: 1,
	y: -1
}
, {
	testTitle: 'HVC default parameters test - CartridgeHF',
	name: '115912',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:46',
	expectedDuration: '00:03:46',
	agent: 'Bvt1-UnitTest',
	deviation: '0,06 %',
	runID: '125705',
	resultID: '100066',
	x: 0,
	y: 0
}
, {
	testTitle: 'HVC default parameters test - RoboBell625',
	name: '115868',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:45',
	expectedDuration: '00:03:46',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,21 %',
	runID: '125705',
	resultID: '100067',
	x: 0,
	y: 0
}
, {
	testTitle: 'HVC default parameters test - CleanCoat',
	name: '115921',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:45',
	expectedDuration: '00:03:47',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,44 %',
	runID: '125705',
	resultID: '100068',
	x: 0,
	y: 0
}
, {
	testTitle: 'HVC default parameters test - RoboBel1000CE',
	name: '187836',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:45',
	expectedDuration: '00:03:46',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,08 %',
	runID: '125705',
	resultID: '100069',
	x: 0,
	y: 0
}
, {
	testTitle: 'HVC default parameters test - RoboBellHF',
	name: '115913',
	value: 1,
	colorValue: 1,
	actualDuration: '00:03:47',
	expectedDuration: '00:03:46',
	agent: 'Bvt1-UnitTest',
	deviation: '0,72 %',
	runID: '125705',
	resultID: '100070',
	x: 1,
	y: 1
}
, {
	testTitle: 'HVC default parameters test - RoboBell1000Ext',
	name: '115922',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:46',
	expectedDuration: '00:03:46',
	agent: 'Bvt1-UnitTest',
	deviation: '0,24 %',
	runID: '125705',
	resultID: '100071',
	x: 0,
	y: 0
}
, {
	testTitle: 'HVC default parameters test - RoboGun611',
	name: '115918',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:47',
	expectedDuration: '00:03:48',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,13 %',
	runID: '125705',
	resultID: '100072',
	x: 0,
	y: 0
}
, {
	testTitle: 'HVC default parameters test - RoboBel1000iZ1',
	name: '187840',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:46',
	expectedDuration: '00:03:46',
	agent: 'Bvt1-UnitTest',
	deviation: '0,25 %',
	runID: '125705',
	resultID: '100073',
	x: 0,
	y: 0
}
, {
	testTitle: 'HVC default parameters test - RoboGun925',
	name: '115909',
	value: 1,
	colorValue: -1,
	actualDuration: '00:03:46',
	expectedDuration: '00:03:48',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,77 %',
	runID: '125705',
	resultID: '100074',
	x: 1,
	y: -1
}
, {
	testTitle: 'HVC default parameters test - RoboGun625',
	name: '115917',
	value: 1,
	colorValue: 1,
	actualDuration: '00:03:47',
	expectedDuration: '00:03:46',
	agent: 'Bvt1-UnitTest',
	deviation: '0,70 %',
	runID: '125705',
	resultID: '100075',
	x: 1,
	y: 1
}
, {
	testTitle: 'HVC default parameters test - RoboBell925',
	name: '114402',
	value: 1,
	colorValue: 3,
	actualDuration: '00:03:52',
	expectedDuration: '00:03:47',
	agent: 'Bvt1-UnitTest',
	deviation: '2,60 %',
	runID: '125705',
	resultID: '100076',
	x: 3,
	y: 3
}
, {
	testTitle: 'MCOB02 possible configs test',
	name: '114685',
	value: 1,
	colorValue: 1,
	actualDuration: '00:02:19',
	expectedDuration: '00:02:19',
	agent: 'Bvt1-UnitTest',
	deviation: '0,56 %',
	runID: '125705',
	resultID: '100078',
	x: 1,
	y: 1
}
, {
	testTitle: 'MCOB02 board specific values',
	name: '114759',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:20',
	expectedDuration: '00:02:20',
	agent: 'Bvt1-UnitTest',
	deviation: '0,20 %',
	runID: '125705',
	resultID: '100079',
	x: 0,
	y: 0
}
, {
	testTitle: 'MCOB02 IntDigin Test',
	name: '114909',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:59',
	expectedDuration: '00:02:59',
	agent: 'Bvt1-UnitTest',
	deviation: '0,04 %',
	runID: '125705',
	resultID: '100080',
	x: 0,
	y: 0
}
, {
	testTitle: 'MCOB02 default parameters test',
	name: '114635',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:26',
	expectedDuration: '00:02:26',
	agent: 'Bvt1-UnitTest',
	deviation: '0,08 %',
	runID: '125705',
	resultID: '100081',
	x: 0,
	y: 0
}
, {
	testTitle: 'MCOB02 IO test',
	name: '114854',
	value: 1,
	colorValue: -1,
	actualDuration: '00:02:42',
	expectedDuration: '00:02:43',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,57 %',
	runID: '125705',
	resultID: '100082',
	x: 1,
	y: -1
}
, {
	testTitle: 'PPRU verify possible configs',
	name: '115001',
	value: 1,
	colorValue: -1,
	actualDuration: '00:02:19',
	expectedDuration: '00:02:20',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,54 %',
	runID: '125705',
	resultID: '100083',
	x: 1,
	y: -1
}
, {
	testTitle: 'PPRU digio test',
	name: '115004',
	value: 1,
	colorValue: 1,
	actualDuration: '00:02:20',
	expectedDuration: '00:02:19',
	agent: 'Bvt1-UnitTest',
	deviation: '1,32 %',
	runID: '125705',
	resultID: '100084',
	x: 1,
	y: 1
}
, {
	testTitle: 'PPRU default parameters test',
	name: '114982',
	value: 1,
	colorValue: 1,
	actualDuration: '00:02:20',
	expectedDuration: '00:02:19',
	agent: 'Bvt1-UnitTest',
	deviation: '1,28 %',
	runID: '125705',
	resultID: '100085',
	x: 1,
	y: 1
}
, {
	testTitle: 'PPRU intdigin test',
	name: '115003',
	value: 1,
	colorValue: 1,
	actualDuration: '00:02:59',
	expectedDuration: '00:02:59',
	agent: 'Bvt1-UnitTest',
	deviation: '0,51 %',
	runID: '125705',
	resultID: '100086',
	x: 1,
	y: 1
}
, {
	testTitle: 'MCOB01 possible configs test',
	name: '115158',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:21',
	expectedDuration: '00:02:21',
	agent: 'Bvt1-UnitTest',
	deviation: '0,05 %',
	runID: '125705',
	resultID: '100087',
	x: 0,
	y: 0
}
, {
	testTitle: 'MCOB01 IO test',
	name: '115188',
	value: 1,
	colorValue: 0,
	actualDuration: '00:04:16',
	expectedDuration: '00:04:17',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,08 %',
	runID: '125705',
	resultID: '100088',
	x: 0,
	y: 0
}
, {
	testTitle: 'MCOB01 Intdigin test',
	name: '115189',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:01',
	expectedDuration: '00:03:01',
	agent: 'Bvt1-UnitTest',
	deviation: '0,48 %',
	runID: '125705',
	resultID: '100089',
	x: 0,
	y: 0
}
, {
	testTitle: 'MCOB01 board values test',
	name: '115161',
	value: 1,
	colorValue: 1,
	actualDuration: '00:02:21',
	expectedDuration: '00:02:20',
	agent: 'Bvt1-UnitTest',
	deviation: '0,79 %',
	runID: '125705',
	resultID: '100090',
	x: 1,
	y: 1
}
, {
	testTitle: 'MCOB01 default parameters test',
	name: '115154',
	value: 1,
	colorValue: 2,
	actualDuration: '00:02:25',
	expectedDuration: '00:02:23',
	agent: 'Bvt1-UnitTest',
	deviation: '1,62 %',
	runID: '125705',
	resultID: '100091',
	x: 2,
	y: 2
}
, {
	testTitle: 'MCB possible configs test',
	name: '115249',
	value: 1,
	colorValue: -1,
	actualDuration: '00:02:20',
	expectedDuration: '00:02:22',
	agent: 'Bvt1-UnitTest',
	deviation: '-1,04 %',
	runID: '125705',
	resultID: '100092',
	x: 1,
	y: -1
}
, {
	testTitle: 'MCB IO test',
	name: '115280',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:23',
	expectedDuration: '00:02:23',
	agent: 'Bvt1-UnitTest',
	deviation: '0,11 %',
	runID: '125705',
	resultID: '100093',
	x: 0,
	y: 0
}
, {
	testTitle: 'MCB default parameters test',
	name: '115229',
	value: 1,
	colorValue: -1,
	actualDuration: '00:02:22',
	expectedDuration: '00:02:24',
	agent: 'Bvt1-UnitTest',
	deviation: '-1,22 %',
	runID: '125705',
	resultID: '100094',
	x: 1,
	y: -1
}
, {
	testTitle: 'MCB intdigin test',
	name: '115250',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:13',
	expectedDuration: '00:03:13',
	agent: 'Bvt1-UnitTest',
	deviation: '0,26 %',
	runID: '125705',
	resultID: '100095',
	x: 0,
	y: 0
}
, {
	testTitle: 'MCB board values test',
	name: '115286',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:20',
	expectedDuration: '00:02:21',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,02 %',
	runID: '125705',
	resultID: '100096',
	x: 0,
	y: 0
}
, {
	testTitle: 'PIO board values test',
	name: '115293',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:19',
	expectedDuration: '00:02:20',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,37 %',
	runID: '125705',
	resultID: '100097',
	x: 0,
	y: 0
}
, {
	testTitle: 'PIO intdigin test',
	name: '115294',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:12',
	expectedDuration: '00:03:13',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,04 %',
	runID: '125705',
	resultID: '100098',
	x: 0,
	y: 0
}
, {
	testTitle: 'PIO possible configs test',
	name: '115291',
	value: 1,
	colorValue: 1,
	actualDuration: '00:02:20',
	expectedDuration: '00:02:20',
	agent: 'Bvt1-UnitTest',
	deviation: '0,60 %',
	runID: '125705',
	resultID: '100099',
	x: 1,
	y: 1
}
, {
	testTitle: 'PIO Default values test',
	name: '115289',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:24',
	expectedDuration: '00:02:24',
	agent: 'Bvt1-UnitTest',
	deviation: '0,17 %',
	runID: '125705',
	resultID: '100100',
	x: 0,
	y: 0
}
, {
	testTitle: 'PIO IO test',
	name: '115285',
	value: 1,
	colorValue: 0,
	actualDuration: '00:02:22',
	expectedDuration: '00:02:23',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,27 %',
	runID: '125705',
	resultID: '100101',
	x: 0,
	y: 0
}
, {
	testTitle: 'PIB board values test',
	name: '115370',
	value: 1,
	colorValue: -1,
	actualDuration: '00:01:30',
	expectedDuration: '00:01:31',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,51 %',
	runID: '125705',
	resultID: '100102',
	x: 1,
	y: -1
}
, {
	testTitle: 'PIB Possible Configs test',
	name: '115368',
	value: 1,
	colorValue: -1,
	actualDuration: '00:01:30',
	expectedDuration: '00:01:31',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,55 %',
	runID: '125705',
	resultID: '100103',
	x: 1,
	y: -1
}
, {
	testTitle: 'Default parameters test',
	name: '112433',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:47',
	expectedDuration: '00:03:47',
	agent: 'Bvt1-UnitTest',
	deviation: '0,18 %',
	runID: '125705',
	resultID: '100105',
	x: 0,
	y: 0
}
, {
	testTitle: 'PIB Default values test',
	name: '115365',
	value: 1,
	colorValue: 0,
	actualDuration: '00:01:32',
	expectedDuration: '00:01:33',
	agent: 'Bvt1-UnitTest',
	deviation: '-0,02 %',
	runID: '125705',
	resultID: '100106',
	x: 0,
	y: 0
}
, {
	testTitle: 'PIB Test Scmc',
	name: '136391',
	value: 1,
	colorValue: 0,
	actualDuration: '00:01:30',
	expectedDuration: '00:01:30',
	agent: 'Bvt1-UnitTest',
	deviation: '0,28 %',
	runID: '125705',
	resultID: '100108',
	x: 0,
	y: 0
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
	resultID: '100111',
	x: 10,
	y: -10
}
, {
	testTitle: 'SysTestTrig--Force Fixed Delay No Air Delay',
	name: '219899',
	value: 1,
	colorValue: 0,
	actualDuration: '00:08:33',
	expectedDuration: '00:08:34',
	agent: 'Bvt3-SysTestEth',
	deviation: '-0,13 %',
	runID: '125708',
	resultID: '100000',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Trig Error on Ch6',
	name: '219890',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:29',
	expectedDuration: '00:03:29',
	agent: 'Bvt3-SysTestEth',
	deviation: '0,00 %',
	runID: '125708',
	resultID: '100001',
	x: 0,
	y: 0
}
, {
	testTitle: 'Systemtest MIB switch',
	name: '239740',
	value: 1,
	colorValue: 0,
	actualDuration: '00:04:37',
	expectedDuration: '00:04:37',
	agent: 'Bvt3-SysTestEth',
	deviation: '0,20 %',
	runID: '125708',
	resultID: '100002',
	x: 0,
	y: 0
}
, {
	testTitle: 'Verify IPS simple Ethernet test works',
	name: '174659',
	value: 1,
	colorValue: 0,
	actualDuration: '00:03:29',
	expectedDuration: '00:03:29',
	agent: 'Bvt3-SysTestEth',
	deviation: '0,23 %',
	runID: '125708',
	resultID: '100003',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Force Linear Delay No Air Delay',
	name: '219901',
	value: 1,
	colorValue: 0,
	actualDuration: '00:04:57',
	expectedDuration: '00:04:59',
	agent: 'Bvt3-SysTestEth',
	deviation: '-0,44 %',
	runID: '125708',
	resultID: '100004',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Trig Error on Ch1',
	name: '219895',
	value: 1,
	colorValue: 0,
	actualDuration: '00:05:14',
	expectedDuration: '00:05:16',
	agent: 'Bvt3-SysTestEth',
	deviation: '-0,41 %',
	runID: '125708',
	resultID: '100005',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Force No Delay No Air Delay',
	name: '219897',
	value: 1,
	colorValue: 1,
	actualDuration: '00:04:58',
	expectedDuration: '00:04:57',
	agent: 'Bvt3-SysTestEth',
	deviation: '0,55 %',
	runID: '125708',
	resultID: '100006',
	x: 1,
	y: 1
}
, {
	testTitle: 'SysTestTrig--Force No Delay With Air Delay',
	name: '219896',
	value: 1,
	colorValue: 0,
	actualDuration: '00:04:56',
	expectedDuration: '00:04:57',
	agent: 'Bvt3-SysTestEth',
	deviation: '-0,12 %',
	runID: '125708',
	resultID: '100007',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Force Fixed Delay With Air Delay',
	name: '219898',
	value: 1,
	colorValue: -1,
	actualDuration: '00:05:01',
	expectedDuration: '00:05:03',
	agent: 'Bvt3-SysTestEth',
	deviation: '-0,63 %',
	runID: '125708',
	resultID: '100008',
	x: 1,
	y: -1
}
, {
	testTitle: 'Performance test of IPS over Ethernet - Time',
	name: '193565',
	value: 1,
	colorValue: 1,
	actualDuration: '00:01:26',
	expectedDuration: '00:01:26',
	agent: 'Bvt3-SysTestEth',
	deviation: '0,74 %',
	runID: '125708',
	resultID: '100009',
	x: 1,
	y: 1
}
, {
	testTitle: 'SysTestTrig--Force Linear Delay With Air Delay',
	name: '219900',
	value: 1,
	colorValue: 0,
	actualDuration: '00:04:58',
	expectedDuration: '00:04:59',
	agent: 'Bvt3-SysTestEth',
	deviation: '-0,08 %',
	runID: '125708',
	resultID: '100010',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Trig Error on Ch5',
	name: '219891',
	value: 1,
	colorValue: -1,
	actualDuration: '00:05:01',
	expectedDuration: '00:05:03',
	agent: 'Bvt3-SysTestEth',
	deviation: '-0,65 %',
	runID: '125708',
	resultID: '100012',
	x: 1,
	y: -1
}
, {
	testTitle: 'SysTestTrig--Trig Error on Ch4',
	name: '219892',
	value: 1,
	colorValue: -1,
	actualDuration: '00:05:19',
	expectedDuration: '00:05:23',
	agent: 'Bvt3-SysTestEth',
	deviation: '-0,94 %',
	runID: '125708',
	resultID: '100013',
	x: 1,
	y: -1
}
, {
	testTitle: 'SysTestTrig--Plain No Air Delay',
	name: '219902',
	value: 1,
	colorValue: 0,
	actualDuration: '00:05:03',
	expectedDuration: '00:05:03',
	agent: 'Bvt3-SysTestEth',
	deviation: '0,27 %',
	runID: '125708',
	resultID: '100014',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Trig Error on Ch2',
	name: '219894',
	value: 1,
	colorValue: 0,
	actualDuration: '00:05:09',
	expectedDuration: '00:05:10',
	agent: 'Bvt3-SysTestEth',
	deviation: '-0,16 %',
	runID: '125708',
	resultID: '100015',
	x: 0,
	y: 0
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
	resultID: '100016',
	x: 41,
	y: -41
}
, {
	testTitle: 'Cycle system-test-rack power',
	name: '159771',
	value: 1,
	colorValue: 1,
	actualDuration: '00:01:05',
	expectedDuration: '00:01:05',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '1,31 %',
	runID: '125706',
	resultID: '100000',
	x: 1,
	y: 1
}
, {
	testTitle: 'SysTestTrig--Force No Delay With Air Delay',
	name: '196619',
	value: 1,
	colorValue: 0,
	actualDuration: '00:07:06',
	expectedDuration: '00:07:06',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '0,22 %',
	runID: '125706',
	resultID: '100003',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Trig Error on Ch4',
	name: '196623',
	value: 1,
	colorValue: -1,
	actualDuration: '00:05:31',
	expectedDuration: '00:05:36',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '-1,49 %',
	runID: '125706',
	resultID: '100004',
	x: 1,
	y: -1
}
, {
	testTitle: 'SysTestTrig--Force Fixed Delay With Air Delay',
	name: '196617',
	value: 1,
	colorValue: -1,
	actualDuration: '00:05:09',
	expectedDuration: '00:05:12',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '-0,65 %',
	runID: '125706',
	resultID: '100005',
	x: 1,
	y: -1
}
, {
	testTitle: 'SysTestTrig--Trig Error on Ch3',
	name: '196622',
	value: 1,
	colorValue: 0,
	actualDuration: '00:05:13',
	expectedDuration: '00:05:14',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '-0,02 %',
	runID: '125706',
	resultID: '100006',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Large',
	name: '198063',
	value: 1,
	colorValue: 0,
	actualDuration: '00:06:32',
	expectedDuration: '00:06:34',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '-0,43 %',
	runID: '125706',
	resultID: '100007',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Plain',
	name: '196610',
	value: 1,
	colorValue: 0,
	actualDuration: '00:05:12',
	expectedDuration: '00:05:11',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '0,38 %',
	runID: '125706',
	resultID: '100008',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Force Fixed Delay No Air Delay',
	name: '196616',
	value: 1,
	colorValue: 1,
	actualDuration: '00:05:12',
	expectedDuration: '00:05:10',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '0,75 %',
	runID: '125706',
	resultID: '100009',
	x: 1,
	y: 1
}
, {
	testTitle: 'SysTestTrig--Trig Error on Ch1',
	name: '196620',
	value: 1,
	colorValue: 1,
	actualDuration: '00:05:24',
	expectedDuration: '00:05:22',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '0,75 %',
	runID: '125706',
	resultID: '100010',
	x: 1,
	y: 1
}
, {
	testTitle: 'SysTestTrig--Trig Error on Ch2',
	name: '196621',
	value: 1,
	colorValue: 0,
	actualDuration: '00:05:18',
	expectedDuration: '00:05:18',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '0,12 %',
	runID: '125706',
	resultID: '100011',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Force Linear Delay No Air Delay',
	name: '196614',
	value: 1,
	colorValue: 0,
	actualDuration: '00:05:07',
	expectedDuration: '00:05:08',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '-0,05 %',
	runID: '125706',
	resultID: '100012',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Force No Delay No Air Delay',
	name: '196618',
	value: 1,
	colorValue: 0,
	actualDuration: '00:05:06',
	expectedDuration: '00:05:06',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '0,14 %',
	runID: '125706',
	resultID: '100013',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Trig Error on Ch6',
	name: '196626',
	value: 1,
	colorValue: 0,
	actualDuration: '00:05:07',
	expectedDuration: '00:05:08',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '-0,06 %',
	runID: '125706',
	resultID: '100014',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestHvcPower',
	name: '148910',
	value: 1,
	colorValue: 0,
	actualDuration: '00:11:38',
	expectedDuration: '00:11:39',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '-0,13 %',
	runID: '125706',
	resultID: '100016',
	x: 0,
	y: 0
}
, {
	testTitle: 'SysTestTrig--Trig Error on Ch5',
	name: '196625',
	value: 1,
	colorValue: 1,
	actualDuration: '00:07:11',
	expectedDuration: '00:07:07',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '1,04 %',
	runID: '125706',
	resultID: '100017',
	x: 1,
	y: 1
}
, {
	testTitle: 'SysTestDevNetMSCan2',
	name: '156009',
	value: 1,
	colorValue: 1,
	actualDuration: '00:05:23',
	expectedDuration: '00:05:22',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '0,52 %',
	runID: '125706',
	resultID: '100018',
	x: 1,
	y: 1
}
, {
	testTitle: 'SysTestTrig--Force Linear Delay With Air Delay',
	name: '196615',
	value: 1,
	colorValue: 1,
	actualDuration: '00:05:07',
	expectedDuration: '00:05:06',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '0,60 %',
	runID: '125706',
	resultID: '100019',
	x: 1,
	y: 1
}
, {
	testTitle: 'SysTestHVC',
	name: '150944',
	value: 1,
	colorValue: 1,
	actualDuration: '00:05:18',
	expectedDuration: '00:05:17',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '0,62 %',
	runID: '125706',
	resultID: '100022',
	x: 1,
	y: 1
}
, {
	testTitle: 'SysTestTrig--Plain No Air Delay',
	name: '196611',
	value: 1,
	colorValue: 0,
	actualDuration: '00:07:11',
	expectedDuration: '00:07:10',
	agent: 'Bvt1-SysTestDevNet',
	deviation: '0,27 %',
	runID: '125706',
	resultID: '100023',
	x: 0,
	y: 0
}
]
}]
});
