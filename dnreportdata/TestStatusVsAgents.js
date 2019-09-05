
var chart_TestStatusVsAgentsReport;
$(document).ready(function() {
	var colors = Highcharts.getOptions().colors;
	var name = 'TestAgents';
	var url = 'https://tfsb.abb.com/tfs/RobotProducts/Paint/';
	var categories = ];
	var data = [{ data: [], name: 'FAILED', color: 'firebrick' }, { data: [], name: 'PASSED', color: 'forestgreen' }, { data: [], name: 'BLOCKED', color: 'black' }, { data: [], name: 'ERROR', color: 'blue' }, { data: [], name: 'INCONCLUSIVE', color: 'lightpink' }, { data: [], name: 'ABORTED', color: 'darkorchid' }];
	chart_TestStatusVsAgentsReport = new Highcharts.Chart({
		chart: { renderTo:'chart_TestStatusVsAgentsReport_container', defaultSeriesType: 'column', zoomType: 'xy' }, 
		credits: { enabled: false }, 
		plotOptions: { column: { cursor: 'pointer', dataLabels: { color: 'black', enabled: true, formatter: function() { if(this.y != 167437) return this.y; else return this.point.id; }, style: { fontWeight: 'bold' } }, point: { events: { click: ColumnPointClick } } } }, 
		title: { text: '' }, 
		tooltip: { formatter: function(){if(this.point.drilldown){return this.series.name}else{return this.key}} }, 
		xAxis: { categories: [], title: { text: 'Test Status Vs Agents' } }, 
		yAxis: { title: { text: 'No. of Testcases ' } }, 
		series: [{ data: [], name: 'FAILED', color: 'firebrick' }, { data: [], name: 'PASSED', color: 'forestgreen' }, { data: [], name: 'BLOCKED', color: 'black' }, { data: [], name: 'ERROR', color: 'blue' }, { data: [], name: 'INCONCLUSIVE', color: 'lightpink' }, { data: [], name: 'ABORTED', color: 'darkorchid' }]
	});

	function TooltipFormatter(){
		var point = this.point, s = this.x +':<b>'+ this.y+'</b><br/>';
                  if (point.drilldown) {
                    s += 'Click to view '+ point.category;
                  } else {
                    s += 'Click to return';
                  }
                  return s;
	}

	function ColumnPointClick(){
		var drilldown = this.drilldown;
                  if (drilldown) { // drill down
                    setChart(drilldown.name, drilldown.categories, drilldown.data.data, drilldown.color);
                   var dvele = document.getElementById("dvBackButton_TestStatus");
                        if (dvele === null)
                            {
                                createBackButton();
                                document.getElementById("dvBackButton_TestStatus").style.display = "block"; document.getElementById("dvBackButton_TestStatus").style.textAlign = "center"}
                        else { document.getElementById("dvBackButton_TestStatus").style.display = "block"; document.getElementById("dvBackButton_TestStatus").style.textAlign = "center"}
                             }
                        else { //redirect to test case
                                //window.open(url+ this.y,'_blank');
                                window.open(url+"_TestManagement/Runs?_a=resultSummary&runId="+ this.dataLabels.split(":")[0]+"&resultId="+this.dataLabels.split(":")[1],'_blank');
                            }
	}

	function createBackButton(){
		var dv = document.createElement("div");
                dv.style.cssText = "text - align:center";
            dv.id = "dvBackButton_TestStatus";
            var btn = document.createElement("Button");
            btn.id = "backButton_TestStatus";
            var t = document.createTextNode("Click to Return");
            btn.appendChild(t);
            dv.appendChild(btn);
            document.getElementById("chart_TestStatusVsAgentsReport_container").appendChild(dv);
            var ele = document.getElementById("backButton_TestStatus");
            ele.onclick = function(){
                chart_TestStatusVsAgentsReport.series[0].remove();
                for(var i=0;i<data.length;i++){
					 chart_TestStatusVsAgentsReport.addSeries({
                    name: data[i].name,
                    data: data[i].data,
                    color: data[i].color
                    });
				};
                chart_TestStatusVsAgentsReport.xAxis[0].setCategories(categories);
                chart_TestStatusVsAgentsReport.yAxis[0].update({labels:{enabled:true}});
                chart_TestStatusVsAgentsReport.xAxis[0].update({labels:{enabled:true}});
                chart_TestStatusVsAgentsReport.yAxis[0].axisTitle.attr({text:'No. of Testcases'});
                document.getElementById("dvBackButton_TestStatus").style.display = "none";
            }
            if (typeof(this.drilldown)!= "undefined")
{ document.getElementById("dvBackButton_TestStatus").style.display = "block"; document.getElementById("dvBackButton_TestStatus").style.textAlign = "center"}
else{ document.getElementById("dvBackButton_TestStatus").style.display = "none"; }
            
	}

	function setChart(name, categories, data, color){
		chart_TestStatusVsAgentsReport.xAxis[0].setCategories(categories);
                   chart_TestStatusVsAgentsReport.xAxis[0].axisTitle.attr({text:'Testcase Name'});
                chart_TestStatusVsAgentsReport.yAxis[0].axisTitle.attr({text:'Testcase Id'});
                chart_TestStatusVsAgentsReport.yAxis[0].update({labels:{enabled:false}});
                chart_TestStatusVsAgentsReport.xAxis[0].update({labels:{enabled:false}});
                chart_TestStatusVsAgentsReport.xAxis[0].axisTitle.attr({text:''});
                    chart_TestStatusVsAgentsReport.yAxis[0].axisTitle.attr({text:''});
                  while (chart_TestStatusVsAgentsReport.series.length>0)
				  chart_TestStatusVsAgentsReport.series[0].remove();
                  chart_TestStatusVsAgentsReport.addSeries({
                     name: name,
                     data: data,
                     color: color || 'white'
                  });
	}
});

