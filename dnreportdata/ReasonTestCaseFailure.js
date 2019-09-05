Highcharts.setOptions({
    lang: {
        drillUpText: '< Back'
    }
});
Highcharts.chart('ReasonForTestCaseFailureContainer', {
    chart: {
        defaultSeriesType: 'column',
        zoomType: 'xy',
        marginRight: 50,
        paddingRight: 50
    },
    credits: {
        enabled: false
    },
    legend: {
        align: 'left',
        backgroundColor: '#FFFFFF',
        floating: true,
        layout: 'vertical',
        shadow: true,
        verticalAlign: 'bottom',
        x: 100,
        y: 70
    },
    plotOptions: {
        column: {
            cursor: 'pointer',
            dataLabels: {
                color: 'black',
                enabled: true,
            }
        },
        series: {
            color: 'firebrick'
        },
        drilldown: {
            series: {
                dataLabels: {
                    color: 'black',
                    enabled: false,
                    textDecoration: 'none'
                }
            },
        }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
        title: { text: 'Reason for test case failure ' },
        uniqueNames: false

    },
    yAxis: {
        title: { text: 'No. of failures ' },
        labels: {
            step: 1
        }
    },
    tooltip: {
        formatter: function () {
            return this.point.drilldown;
          
        },
        useHTML: true,
        style: {
            width:200
        }

    },
    /**/

    
    //****First Layer*************		

            series: [{
 data:[
{
name: ' -- failed to open c',
y: 1,
drilldown: ' -- failed to open com100'
},
{
name: '',
y: 3,
drilldown: ''
},
{
name: 'IpsCheckElog. Expect',
y: 1,
drilldown: 'IpsCheckElog. Expected elog: 13 error 3261 [clean0.mod, 7, SetTmSignal : cancelled]'
},
{
name: 'A1Needle/SetPoint (t',
y: 1,
drilldown: 'A1Needle/SetPoint (time-offtime): 11286.0 is not Equal to the expected value: 0'
},
{
name: 'Position change valu',
y: 1,
drilldown: 'Position change value is not as expected! Value expected: -100  Value got: 0'
},
{
name: '$0 was not received ',
y: 1,
drilldown: '$0 was not received when running command !ips A1Pump1 ws SetPoint 50.000 0'
},
{
name: 'TrigTimeMaster/TrigT',
y: 1,
drilldown: 'TrigTimeMaster/TrigTime: 57122.0 is not Equal to the expected value: 0'
},
{
name: 'A1ShapeFS/RawVal:  i',
y: 1,
drilldown: 'A1ShapeFS/RawVal: 0.000 is not Between 602 and 604'
},
{
name: 'A1AtomRS/MinVal: - i',
y: 1,
drilldown: 'A1AtomRS/MinVal: -1990.0 is not Equal to the expected value: 2010'
},
{
name: 'Pwm OFF value is not',
y: 1,
drilldown: 'Pwm OFF value is not as expected! Value expected: 0.000000 Value got: 1.000000'
},
{
name: 'SysLag time for atom',
y: 1,
drilldown: 'SysLag time for atom not as expected!: -114.000000 '
},
{
name: 'A1Brake/SetPoint:  i',
y: 1,
drilldown: 'A1Brake/SetPoint: 0.0 is not Equal to the expected value: 1'
},
{
name: 'A1ShapeIP/SetPoint: ',
y: 1,
drilldown: 'A1ShapeIP/SetPoint: 0.000 is not Between 4.85 and 4.87'
},
{
name: 'Current data compare',
y: 1,
drilldown: 'Current data compared to masterdata not equal'
},
{
name: 'No able to open com2',
y: 1,
drilldown: 'No able to open com200 used for axis-simulation'
},
{
name: 'Wrong ici buildname ',
y: 1,
drilldown: 'Wrong ici buildname (Win32): Test Buildname: paint.dev.embsw.ci20190904.4, ici.py buildname: bpaint.dev.embsw.ci20190724.7'
},
{
name: 'Failed to connect to',
y: 1,
drilldown: 'Failed to connect to ici, _ICI object has no attribute connection'
},
{
name: 'Error running InitTe',
y: 2,
drilldown: 'Error running InitTe'
},
{
name: 'Failed to write sign',
y: 1,
drilldown: 'Failed to write signal number 1 on: ba1hv'
},
{
name: 'Error running RunTes',
y: 2,
drilldown: 'Error running RunTes'
},
{
name: 'can1/mac7/ACU/Supply',
y: 1,
drilldown: 'can1/mac7/ACU/SupplyPress: 5.972 is not Between 6 and 10'
},
{
name: 'For A1HVOut, differe',
y: 1,
drilldown: 'For A1HVOut, different length of actual (28) and oracle (29)'
},
{
name: 'configfiles failed ',
y: 2,
drilldown: 'configfiles failed '
},
{
name: 'Initialization metho',
y: 1,
drilldown: 'Initialization method Abb.Robotics.Paint.Test.NastWrap.TestInitialize threw exception. System.Xml.XmlException: System.Xml.XmlException: Root element is missing..'
},
{
name: 'local variable testC',
y: 1,
drilldown: 'local variable testClass referenced before assignment Traceback (most recent call last):   File "d:\Bvt2-SysTestDisp\r1\a\Paint\NAST\TestTools\testframework\testrunner.py", line 210, in TestRunner     testLogsList = testClass.GetTestResult() UnboundLocalError: local variable testClass referenced before assignment '
},
]
}],drilldown: {
 activeAxisLabelStyle: { textDecoration: 'none', color: 'black'}, 
 series: [
{ id: ' -- failed to open com100',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Prepare test machine',
drilldown:'Prepare test machine;  125169' 
},]},
{ id: 'Spi1/Fosi1/Anin3/Wired: 1.0 is not Equal to the expected value: 0',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'ACU with FOSI test',
drilldown:'ACU with FOSI test;  179408' 
},]},
{ id: 'IpsCheckElog. Expected elog: 13 error 3261 [clean0.mod, 7, SetTmSignal : cancelled]',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of MCENGINE dev',
drilldown:'Test of MCENGINE device functions;  175400' 
},]},
{ id: 'A1Needle/SetPoint (time-offtime): 11286.0 is not Equal to the expected value: 0',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of LCM function',
drilldown:'Test of LCM functions;  198620' 
},]},
{ id: 'DO2/SetPoint: 1.0 is not Equal to the expected value: 0',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of PULSEMIXER D',
drilldown:'Test of PULSEMIXER Device functions;  132912' 
},]},
{ id: 'Position change value is not as expected! Value expected: -100  Value got: 0',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of CTM devices',
drilldown:'Test of CTM devices;  177052' 
},]},
{ id: '$0 was not received when running command !ips A1Pump1 ws SetPoint 50.000 0',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of Limit Alarm ',
drilldown:'Test of Limit Alarm functions;  112482' 
},]},
{ id: 'TrigTimeMaster/TrigTime: 57122.0 is not Equal to the expected value: 0',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of VARIABLEDEVI',
drilldown:'Test of VARIABLEDEVICE functions;  114747' 
},]},
{ id: 'A1ShapeFS/RawVal: 0.000 is not Between 602 and 604',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of VENTURISENSO',
drilldown:'Test of VENTURISENSOR device functions;  112492' 
},]},
{ id: 'A1ElogErr/ListSize: 4.0 is not Equal to the expected value: 5',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of ELOGCATCHER ',
drilldown:'Test of ELOGCATCHER device function;  168938' 
},]},
{ id: 'A1AtomRS/MinVal: -1990.0 is not Equal to the expected value: 2010',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of LINEARCURVE ',
drilldown:'Test of LINEARCURVE scaling functions;  183937' 
},]},
{ id: 'Pwm OFF value is not as expected! Value expected: 0.000000 Value got: 1.000000',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of PWM device f',
drilldown:'Test of PWM device functions;  120272' 
},]},
{ id: 'SysLag time for atom not as expected!: -114.000000 ',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of Brush device',
drilldown:'Test of Brush device functions;  112464' 
},]},
{ id: 'A1Brake/SetPoint: 0.0 is not Equal to the expected value: 1',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of Bell regulat',
drilldown:'Test of Bell regulator device functions;  112473' 
},]},
{ id: 'A1ShapeIP/SetPoint: 0.000 is not Between 4.85 and 4.87',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Test of REGULATOR de',
drilldown:'Test of REGULATOR device functions;  112486' 
},]},
{ id: 'Current data compared to masterdata not equal',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'HVC possible configs',
drilldown:'HVC possible configs test;  115312' 
},]},
{ id: 'No able to open com200 used for axis-simulation',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'PIB FirmWare test',
drilldown:'PIB FirmWare test;  185712' 
},]},
{ id: 'Wrong ici buildname (Win32): Test Buildname: paint.dev.embsw.ci20190904.4, ici.py buildname: bpaint.dev.embsw.ci20190724.7',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Check ici.py buildna',
drilldown:'Check ici.py buildname;  137645' 
},]},
{ id: 'Failed to connect to ici, _ICI object has no attribute connection',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Check ICI dll buildn',
drilldown:'Check ICI dll buildname;  137548' 
},]},
{ id: 'Error running InitTest() for test script SysTestShowcase error: Unable to reach IPS check connection to 192.168.126.200,Maybe check firewall',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'SysTestShowcase',
drilldown:'SysTestShowcase;  155609' 
},]},
{ id: 'Failed to write signal number 1 on: ba1hv',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'SysTestCfgBasic',
drilldown:'SysTestCfgBasic;  120375' 
},]},
{ id: 'Error running RunTest() for test script SysTestValves error: Unable to read signal can1/mac27/doport(1-7)/setpoint: Failed to read signal bsetpoint on: bdoport(1-7).',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'SysTestValves',
drilldown:'SysTestValves;  150612' 
},]},
{ id: 'Error running RunTest() for test script SysTestiDrive error: Unable to write parameter can1/mac54/idrive/idletmout: Failed to write parameter bidletmout on: bidrive.',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'SysTestiDrive',
drilldown:'SysTestiDrive;  149883' 
},]},
{ id: 'can1/mac7/ACU/SupplyPress: 5.972 is not Between 6 and 10',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'SysTestACU',
drilldown:'SysTestACU;  149886' 
},]},
{ id: 'For A1HVOut, different length of actual (28) and oracle (29)',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'SysTestTrig--Trig Er',
drilldown:'SysTestTrig--Trig Error on Ch3;  219893' 
},]},
{ id: '6 configfiles failed to load',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Dispense Rack Test: ',
drilldown:'Dispense Rack Test: iDrives and Motors;  244760' 
},]},
{ id: '2 configfiles failed to load',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Dispense Rack Test: ',
drilldown:'Dispense Rack Test: basic test with complex configuration;  244890' 
},]},
{ id: 'Initialization method Abb.Robotics.Paint.Test.NastWrap.TestInitialize threw exception. System.Xml.XmlException: System.Xml.XmlException: Root element is missing..',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Dispense Rack Test: ',
drilldown:'Dispense Rack Test: Pump Interface Modules (PIM);  244508' 
},]},
{ id: 'local variable testClass referenced before assignment Traceback (most recent call last):   File "d:\Bvt2-SysTestDisp\r1\a\Paint\NAST\TestTools\testframework\testrunner.py", line 210, in TestRunner     testLogsList = testClass.GetTestResult() UnboundLocalError: local variable testClass referenced before assignment ',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Dispense Rack Test: ',
drilldown:'Dispense Rack Test: Basic CSV file reading test;  246422' 
},]},
{ id: 'Error running InitTest() for test script DispTestDIB error: NoneType object is not subscriptable',
dataLabels: { enabled: false},
data: [
{ 
y: 1,
name: 'Dispense Rack Test: ',
drilldown:'Dispense Rack Test: Dispenser Interface Box (DIB);  244759' 
},]},
{
name: '',
id: '',
data: [
{
name: 'Spi1/Fosi1/Anin3/Wir',
drilldown: 'Spi1/Fosi1/Anin3/Wired: 1.0 is not Equal to the expected value: 0',
y: 1,
},
{
name: 'DO2/SetPoint: 1.0 is',
drilldown: 'DO2/SetPoint: 1.0 is not Equal to the expected value: 0',
y: 1,
},
{
name: 'A1ElogErr/ListSize: ',
drilldown: 'A1ElogErr/ListSize: 4.0 is not Equal to the expected value: 5',
y: 1,
},
]},
{
name: 'Error running InitTe',
id: 'Error running InitTe',
data: [
{
name: 'Error running InitTe',
drilldown: 'Error running InitTest() for test script SysTestShowcase error: Unable to reach IPS check connection to 192.168.126.200,Maybe check firewall',
y: 1,
},
{
name: 'Error running InitTe',
drilldown: 'Error running InitTest() for test script DispTestDIB error: NoneType object is not subscriptable',
y: 1,
},
]},
{
name: 'Error running RunTes',
id: 'Error running RunTes',
data: [
{
name: 'Error running RunTes',
drilldown: 'Error running RunTest() for test script SysTestValves error: Unable to read signal can1/mac27/doport(1-7)/setpoint: Failed to read signal bsetpoint on: bdoport(1-7).',
y: 1,
},
{
name: 'Error running RunTes',
drilldown: 'Error running RunTest() for test script SysTestiDrive error: Unable to write parameter can1/mac54/idrive/idletmout: Failed to write parameter bidletmout on: bidrive.',
y: 1,
},
]},
{
name: 'configfiles failed ',
id: 'configfiles failed ',
data: [
{
name: '6 configfiles failed',
drilldown: '6 configfiles failed to load',
y: 1,
},
{
name: '2 configfiles failed',
drilldown: '2 configfiles failed to load',
y: 1,
},
]},
]}
});
