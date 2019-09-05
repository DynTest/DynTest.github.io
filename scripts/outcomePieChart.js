
var chart_OutcomePieChartReport;
$(document).ready(function() {
	var colors = Highcharts.getOptions().colors;
	var name = 'OutcomePieChart';
	var url = 'https://tfsb.abb.com/tfs/RobotProducts/Paint/';
	var data = { data: [{ color: 'forestgreen', name: 'PASSED', y: 129, drilldown: { name: 'PASSED', data: { data: [{ y: 112489 }, { y: 115815 }, { y: 112284 }, { y: 112289 }, { y: 112180 }, { y: 179411 }, { y: 179409 }, { y: 112175 }, { y: 194034 }, { y: 131226 }, { y: 114053 }, { y: 120273 }, { y: 112484 }, { y: 113352 }, { y: 115204 }, { y: 198675 }, { y: 198694 }, { y: 198695 }, { y: 112485 }, { y: 137900 }, { y: 112488 }, { y: 113234 }, { y: 198674 }, { y: 198679 }, { y: 112483 }, { y: 112487 }, { y: 198677 }, { y: 198691 }, { y: 112472 }, { y: 112480 }, { y: 112491 }, { y: 198678 }, { y: 198692 }, { y: 198693 }, { y: 112481 }, { y: 112461 }, { y: 112477 }, { y: 112479 }, { y: 147668 }, { y: 178862 }, { y: 198676 }, { y: 198680 }, { y: 112433 }, { y: 112471 }, { y: 112478 }, { y: 112490 }, { y: 113793 }, { y: 115922 }, { y: 115918 }, { y: 187833 }, { y: 187842 }, { y: 115917 }, { y: 115921 }, { y: 115912 }, { y: 115911 }, { y: 115920 }, { y: 187836 }, { y: 187840 }, { y: 115909 }, { y: 115868 }, { y: 115913 }, { y: 115919 }, { y: 114402 }, { y: 115910 }, { y: 115914 }, { y: 114685 }, { y: 114759 }, { y: 114909 }, { y: 114635 }, { y: 114854 }, { y: 115004 }, { y: 114982 }, { y: 115001 }, { y: 115003 }, { y: 115189 }, { y: 115158 }, { y: 115161 }, { y: 115188 }, { y: 115154 }, { y: 115249 }, { y: 115229 }, { y: 115250 }, { y: 115280 }, { y: 115286 }, { y: 115291 }, { y: 115293 }, { y: 115289 }, { y: 115285 }, { y: 115294 }, { y: 115370 }, { y: 115368 }, { y: 115365 }, { y: 136391 }, { y: 159771 }, { y: 196610 }, { y: 196620 }, { y: 196621 }, { y: 150944 }, { y: 196611 }, { y: 196615 }, { y: 196614 }, { y: 196617 }, { y: 196618 }, { y: 196622 }, { y: 196625 }, { y: 196626 }, { y: 148910 }, { y: 196616 }, { y: 196619 }, { y: 196623 }, { y: 198063 }, { y: 156009 }, { y: 219891 }, { y: 219900 }, { y: 219892 }, { y: 219890 }, { y: 219899 }, { y: 219901 }, { y: 219902 }, { y: 239740 }, { y: 219857 }, { y: 219894 }, { y: 219895 }, { y: 174659 }, { y: 219896 }, { y: 219897 }, { y: 219898 }, { y: 193565 }, { y: 174657 }] }, color: 'forestgreen' } }, { color: 'firebrick', name: 'FAILED', y: 28, drilldown: { name: 'FAILED', data: { data: [{ y: 179408 }, { y: 175400 }, { y: 198620 }, { y: 132912 }, { y: 177052 }, { y: 112482 }, { y: 114747 }, { y: 112492 }, { y: 168938 }, { y: 183937 }, { y: 120272 }, { y: 112464 }, { y: 112473 }, { y: 112486 }, { y: 185712 }, { y: 137645 }, { y: 137548 }, { y: 155609 }, { y: 120375 }, { y: 150612 }, { y: 149883 }, { y: 149886 }, { y: 219893 }, { y: 244760 }, { y: 244890 }, { y: 244508 }, { y: 246422 }, { y: 244759 }] }, color: 'firebrick' } }, { color: 'black', name: 'BLOCKED', y: 0, drilldown: { name: 'BLOCKED', data: { data: [] }, color: 'black' } }, { color: 'blue', name: 'ERROR', y: 0, drilldown: { name: 'ERROR', data: { data: [] }, color: 'blue' } }, { color: 'brown', name: 'BLANK', y: 0, drilldown: { name: 'BLANK', data: { data: [] }, color: 'brown' } }, { color: 'lightpink', name: 'INCONCLUSIVE', y: 0, drilldown: { name: 'INCONCLUSIVE', data: { data: [] }, color: 'lightpink' } }, { color: 'darkorchid', name: 'ABORTED', y: 0, drilldown: { name: 'ABORTED', data: { data: [] }, color: 'darkorchid' } }] };
	chart_OutcomePieChartReport = new Highcharts.Chart({
		chart: { renderTo:'chart_OutcomePieChartReport_container', options3d: { alpha: 45, enabled: true }, plotShadow: false, type: 'pie', zoomType: 'xy' }, 
		credits: { enabled: false }, 
		legend: { enabled: false }, 
		plotOptions: { pie: { cursor: 'auto', dataLabels: { color: colors[1], enabled: true, formatter: function() {if (this.series.name !="OutcomePieChart"){return 'TestCaseId: '+this.y;}else{return this.point.name+' :'+this.y; } }, style: { fontWeight: 'bold' } }, depth: 35, point: { events: { click: "" } } } }, 
		title: { text: '' }, 
		exporting: { filename: 'test1234.jpg', type: 'image/jpeg' }, 
		series: [{ data: [{ color: 'forestgreen', name: 'PASSED', y: 129, drilldown: { name: 'PASSED', data: { data: [{ y: 112489 }, { y: 115815 }, { y: 112284 }, { y: 112289 }, { y: 112180 }, { y: 179411 }, { y: 179409 }, { y: 112175 }, { y: 194034 }, { y: 131226 }, { y: 114053 }, { y: 120273 }, { y: 112484 }, { y: 113352 }, { y: 115204 }, { y: 198675 }, { y: 198694 }, { y: 198695 }, { y: 112485 }, { y: 137900 }, { y: 112488 }, { y: 113234 }, { y: 198674 }, { y: 198679 }, { y: 112483 }, { y: 112487 }, { y: 198677 }, { y: 198691 }, { y: 112472 }, { y: 112480 }, { y: 112491 }, { y: 198678 }, { y: 198692 }, { y: 198693 }, { y: 112481 }, { y: 112461 }, { y: 112477 }, { y: 112479 }, { y: 147668 }, { y: 178862 }, { y: 198676 }, { y: 198680 }, { y: 112433 }, { y: 112471 }, { y: 112478 }, { y: 112490 }, { y: 113793 }, { y: 115922 }, { y: 115918 }, { y: 187833 }, { y: 187842 }, { y: 115917 }, { y: 115921 }, { y: 115912 }, { y: 115911 }, { y: 115920 }, { y: 187836 }, { y: 187840 }, { y: 115909 }, { y: 115868 }, { y: 115913 }, { y: 115919 }, { y: 114402 }, { y: 115910 }, { y: 115914 }, { y: 114685 }, { y: 114759 }, { y: 114909 }, { y: 114635 }, { y: 114854 }, { y: 115004 }, { y: 114982 }, { y: 115001 }, { y: 115003 }, { y: 115189 }, { y: 115158 }, { y: 115161 }, { y: 115188 }, { y: 115154 }, { y: 115249 }, { y: 115229 }, { y: 115250 }, { y: 115280 }, { y: 115286 }, { y: 115291 }, { y: 115293 }, { y: 115289 }, { y: 115285 }, { y: 115294 }, { y: 115370 }, { y: 115368 }, { y: 115365 }, { y: 136391 }, { y: 159771 }, { y: 196610 }, { y: 196620 }, { y: 196621 }, { y: 150944 }, { y: 196611 }, { y: 196615 }, { y: 196614 }, { y: 196617 }, { y: 196618 }, { y: 196622 }, { y: 196625 }, { y: 196626 }, { y: 148910 }, { y: 196616 }, { y: 196619 }, { y: 196623 }, { y: 198063 }, { y: 156009 }, { y: 219891 }, { y: 219900 }, { y: 219892 }, { y: 219890 }, { y: 219899 }, { y: 219901 }, { y: 219902 }, { y: 239740 }, { y: 219857 }, { y: 219894 }, { y: 219895 }, { y: 174659 }, { y: 219896 }, { y: 219897 }, { y: 219898 }, { y: 193565 }, { y: 174657 }] }, color: 'forestgreen' } }, { color: 'firebrick', name: 'FAILED', y: 28, drilldown: { name: 'FAILED', data: { data: [{ y: 179408 }, { y: 175400 }, { y: 198620 }, { y: 132912 }, { y: 177052 }, { y: 112482 }, { y: 114747 }, { y: 112492 }, { y: 168938 }, { y: 183937 }, { y: 120272 }, { y: 112464 }, { y: 112473 }, { y: 112486 }, { y: 185712 }, { y: 137645 }, { y: 137548 }, { y: 155609 }, { y: 120375 }, { y: 150612 }, { y: 149883 }, { y: 149886 }, { y: 219893 }, { y: 244760 }, { y: 244890 }, { y: 244508 }, { y: 246422 }, { y: 244759 }] }, color: 'firebrick' } }, { color: 'black', name: 'BLOCKED', y: 0, drilldown: { name: 'BLOCKED', data: { data: [] }, color: 'black' } }, { color: 'blue', name: 'ERROR', y: 0, drilldown: { name: 'ERROR', data: { data: [] }, color: 'blue' } }, { color: 'brown', name: 'BLANK', y: 0, drilldown: { name: 'BLANK', data: { data: [] }, color: 'brown' } }, { color: 'lightpink', name: 'INCONCLUSIVE', y: 0, drilldown: { name: 'INCONCLUSIVE', data: { data: [] }, color: 'lightpink' } }, { color: 'darkorchid', name: 'ABORTED', y: 0, drilldown: { name: 'ABORTED', data: { data: [] }, color: 'darkorchid' } }], name: 'OutcomePieChart', color: 'white' }]
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
                        var dvele = document.getElementById("dvBackButton_TotalPassFail");
                        if(dvele===null){
                        createBackButton();
                        document.getElementById("dvBackButton_TotalPassFail").style.display = "block";document.getElementById("dvBackButton_TotalPassFail").style.textAlign="center"}
                        else{ document.getElementById("dvBackButton_TotalPassFail").style.display = "block";document.getElementById("dvBackButton_TotalPassFail").style.textAlign="center"}
                      } else { // restore
                       window.open(url+ this.y,'_blank');
                     }
	}

	function createBackButton(){
		var dv = document.createElement("div");
                dv.style.cssText = "text - align:center";
                dv.id = "dvBackButton_TotalPassFail";
                var btn = document.createElement("Button");
                btn.id = "backButton_totalPassFail";
                var t = document.createTextNode("Click to Return");
                btn.appendChild(t);
                dv.appendChild(btn);
                document.getElementById("chart_OutcomePieChartReport_container").appendChild(dv);
                var ele = document.getElementById("backButton_totalPassFail");
                ele.onclick = function(){
                    chart_OutcomePieChartReport.series[0].remove();
                    chart_OutcomePieChartReport.addSeries({
                    name: name,
                    data: data.data,
                    color: 'white'
                    });
                document.getElementById("dvBackButton_TotalPassFail").style.display = "none";
                }
            if(typeof (this.drilldown)!="undefined")
{document.getElementById("dvBackButton_TotalPassFail").style.display = "block";document.getElementById("dvBackButton_TotalPassFail").style.textAlign="center"}
else{ document.getElementById("dvBackButton_TotalPassFail").style.display = "none";}
	}

	function setChart(name, categories, data, color){
		chart_OutcomePieChartReport.xAxis[0].setCategories(categories);
                      chart_OutcomePieChartReport.series[0].remove();
                      chart_OutcomePieChartReport.addSeries({
                         name: name,
                         data: data,
                         color: color || 'white'
                      });
	}
});

