
var chart_pie;
$(document).ready(function() {
	var colors = Highcharts.getOptions().colors;
	var name = 'Unscheduled Test Cases';
	var url = 'https://tfsb.abb.com/tfs/RobotProducts/Paint/';
	var data = { data: [{ color: colors[0], dataLabels: 'test', name: 'NotReady', y: 37 }, { color: colors[1], dataLabels: 'test', name: 'Blocked', y: 0 }, { color: colors[2], dataLabels: 'test', name: 'Executed', y: 159 }, { color: colors[3], dataLabels: 'test', name: 'MissingAgent', y: 0 }] };
	chart_pie = new Highcharts.Chart({
		chart: { renderTo:'chart_pie_container', options3d: { alpha: 45, enabled: true }, plotShadow: false, type: 'pie', zoomType: 'xy' }, 
		credits: { enabled: false }, 
		legend: { enabled: false }, 
		plotOptions: { pie: { cursor: 'auto', dataLabels: { color: colors[1], enabled: true, formatter: function() {if( this.series.name!="Unscheduled Test cases"){return 'TestCaseId: '+this.y;}else{return this.point.name+' :'+this.y; } }, style: { fontWeight: 'bold' } }, depth: 35, point: { events: { click: "" } } } }, 
		title: { text: '' }, 
		exporting: { filename: 'test1234.jpg', type: 'image/jpeg' }, 
		series: [{ data: [{ color: colors[0], dataLabels: 'test', name: 'NotReady', y: 37 }, { color: colors[1], dataLabels: 'test', name: 'Blocked', y: 0 }, { color: colors[2], dataLabels: 'test', name: 'Executed', y: 159 }, { color: colors[3], dataLabels: 'test', name: 'MissingAgent', y: 0 }], name: 'Unscheduled Test cases', color: 'white' }]
	});

	function TooltipFormatter(){
		var point = this.point, s = '';
                      if (point.drilldown) {
                        s += point.drilldown.name +':<b>'+ this.y +'<br/>'
                        s += 'Click to view '+ point.drilldown.name;
                      } else {
                        s += 'Click for details';
                      }
                      return s;
	}

	function PiePointClick(){
		var drilldown = this.drilldown;
                          if (drilldown) { // drill down
                            setChart(drilldown.name, drilldown.categories, drilldown.data.data, drilldown.color);
                            var dvele = document.getElementById("dvBackButton");
                            if(dvele===null){
                            createBackButton();
                            document.getElementById("dvBackButton").style.display = "block";document.getElementById("dvBackButton").style.textAlign="center"}
                            else{ document.getElementById("dvBackButton").style.display = "block";document.getElementById("dvBackButton").style.textAlign="center"}
                          } else { // restore
                           window.open(url+ this.y,'_blank');
                         }
	}

	function PiePointTestCaseClick(){
		
                       window.open('https://tfsb.abb.com/tfs/RobotProducts/Paint/_testManagement/runs?_a=runCharts&runId=62280','_blank');
	}

	function createBackButton(){
		var dv = document.createElement("div");
                dv.style.cssText = "text - align:center";
                dv.id = "dvBackButton";
                var btn = document.createElement("Button");
                btn.id = "backButton";
                var t = document.createTextNode("Click to Return");
                btn.appendChild(t);
                dv.appendChild(btn);
                document.getElementById("chart_pie_container").appendChild(dv);
                var ele = document.getElementById("backButton");
                ele.onclick = function(){
                    chart_pie.series[0].remove();
                    chart_pie.addSeries({
                    name: name,
                    data: data.data,
                    color: 'white'
                    });
                document.getElementById("dvBackButton").style.display = "none";
                }
            if(typeof (this.drilldown)!="undefined")
{document.getElementById("dvBackButton").style.display = "block";document.getElementById("dvBackButton").style.textAlign="center"}
else{ document.getElementById("dvBackButton").style.display = "none";}
	}

	function setChart(name, categories, data, color){
		chart_pie.xAxis[0].setCategories(categories);
                      chart_pie.series[0].remove();
                      chart_pie.addSeries({
                         name: name,
                         data: data,
                         color: color || 'white'
                      });
	}
});

