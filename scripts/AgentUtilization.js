
var chart_TestAgentUtilizationChartReport;
$(document).ready(function() {
	chart_TestAgentUtilizationChartReport = new Highcharts.Chart({
		chart: { renderTo:'chart_TestAgentUtilizationChartReport_container', className: 'chart', defaultSeriesType: 'area', zoomType: 'xy' }, 
		credits: { enabled: false }, 
		plotOptions: { area: { marker: { enabled: false }, stacking: 'normal' } }, 
		title: { text: '' }, 
		tooltip: { formatter: function() { return '<b>'+ this.series.name +': '+ this.y +' </b>no of testcases on: '+this.x;} }, 
		xAxis: { categories: ['26.07.2019', '23.08.2019', '26.08.2019', '27.08.2019', '28.08.2019', '29.08.2019', '30.08.2019', '02.09.2019', '03.09.2019', '04.09.2019'] }, 
		yAxis: { plotLines: [{ value: 0, width: 1 }], title: { text: 'No Of Test Cases' } }, 
		series: []
	});
});

