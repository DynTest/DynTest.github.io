
var chart_pie_Agent;
$(document).ready(function() {
	var colors = Highcharts.getOptions().colors;
	var name = 'Unscheduled Test agents';
	var url = 'https://tfsb.abb.com/tfs/RobotProducts/Paint/';
	var data = { data: [{ color: 'firebrick', name: 'UnAvailable', y: 0, drilldown: { name: 'UnAvailable', data: { data: [] }, color: colors[0] } }, { color: 'forestgreen', name: 'Available', y: 0, drilldown: { name: 'Available', data: { data: [] }, color: colors[1] } }] };
	chart_pie_Agent = new Highcharts.Chart({
		chart: { renderTo:'chart_pie_Agent_container', options3d: { alpha: 45, enabled: true }, plotShadow: false, type: 'pie', zoomType: 'xy' }, 
		credits: { enabled: false }, 
		legend: { enabled: false }, 
		plotOptions: { pie: { cursor: 'pointer', dataLabels: { color: colors[1], enabled: true, formatter: function() {if( this.series.name!="Unscheduled TestAgents"){return 'TestAgent: '+this.key;}else{return this.point.name+' :'+this.y; } }, style: { fontWeight: 'bold' } }, depth: 35, point: { events: { click: PiePointClick_Agent } } } }, 
		title: { text: '' }, 
		exporting: { filename: 'test1234.jpg', type: 'image/jpeg' }, 
		series: [{ data: [{ color: 'firebrick', name: 'UnAvailable', y: 0, drilldown: { name: 'UnAvailable', data: { data: [] }, color: colors[0] } }, { color: 'forestgreen', name: 'Available', y: 0, drilldown: { name: 'Available', data: { data: [] }, color: colors[1] } }], name: 'Unscheduled TestAgents', color: 'white' }]
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

	function PiePointClick_Agent(){
		var drilldown = this.drilldown;
                              if (drilldown) { // drill down
                                setChart(drilldown.name, drilldown.categories, drilldown.data.data, drilldown.color);
                                var dvele = document.getElementById("dvBackButton_Agent");
                                if(dvele===null){
                                createBackButton();
                                document.getElementById("dvBackButton_Agent").style.display = "block";document.getElementById("dvBackButton_Agent").style.textAlign="center"}
                                else{ document.getElementById("dvBackButton_Agent").style.display = "block";document.getElementById("dvBackButton_Agent").style.textAlign="center"}
                              } else { // restore
//as discussed with Prashant,this URL redirection not required.
                               //window.open(url+ this.y,'_blank');
                             }
	}

	function createBackButton(){
		var dv = document.createElement("div");
                        dv.style.cssText = "text - align:center";
                        dv.id = "dvBackButton_Agent";
                        var btn = document.createElement("Button");
                        btn.id = "BackButton_Agent";
                        var t = document.createTextNode("Click to Return");
                        btn.appendChild(t);
                        dv.appendChild(btn);
                        document.getElementById("chart_pie_Agent_container").appendChild(dv);
                        var ele = document.getElementById("BackButton_Agent");
                        ele.onclick = function(){
                            chart_pie_Agent.series[0].remove();
                            chart_pie_Agent.addSeries({
                            name: name,
                            data: data.data,
                            color: 'white'
                            });
                        document.getElementById("dvBackButton_Agent").style.display = "none";
                        }
                    if(typeof (this.drilldown)!="undefined")
        {document.getElementById("dvBackButton_Agent").style.display = "block";document.getElementById("dvBackButton_Agent").style.textAlign="center"}
        else{ document.getElementById("dvBackButton_Agent").style.display = "none";}
	}

	function setChart(name, categories, data, color){
		chart_pie.xAxis[0].setCategories(categories);
                      chart_pie_Agent.series[0].remove();
                      chart_pie_Agent.addSeries({
                         name: name,
                         data: data,
                         color: color || 'white'
                      });
	}
});

