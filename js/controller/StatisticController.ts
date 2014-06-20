/// <reference path="../_all.ts" />

module forum {
	export class StatisticController {
		constructor(private $scope: IStatisticScope) {
			this.$scope.vm = this;
			var chartData = [];
			var counter = [];
			for(var i=0 ; i<=10 ; i++) {
				chartData[i] = 0;
				counter[i] = i;
			}
			var threads = Storage.getThread();
			for(var i=0 ; i<threads.length ; i++) {
				chartData[Post.getPostByThread(threads[i].id).length]++;
			}
			var cnt = 0;

			//horizontal chart
			var scale = d3.scale.linear()
						.domain([0, d3.max(chartData)])
						.range([0, 500]);

			var hChart = d3.select("#post-count-chart")
							.selectAll("div")
								.data(chartData)
							.enter().append("div")
								.attr("class", "row");
			hChart.append("div")
					.attr("class", "col-md-1 text-right")
					.text(function(d) {return cnt++});
			hChart.append("div")
					.attr("class", "bar col-md-11")
					.style("width", function(d) {return scale(d) + "px"})
					.text(function(d) {return d;});

			//vertical chart
			var margin = {left: 25, right: 5, top: 20, bottom: 20};
			var width = 550 - margin.right - margin.left;
			var height = 300 - margin.left - margin.right;

			var x = d3.scale.ordinal()
						.domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
						.rangeRoundBands([0,width], .1);

			var y = d3.scale.linear()
						.domain([0, d3.max(chartData)])
						.range([height, 0]);

			var xAxis = d3.svg.axis()
							.scale(x)
							.orient("bottom");

			var yAxis = d3.svg.axis()
							.scale(y)
							.orient("left");

			var vChart = d3.select("#vertical-chart")
						    .attr("width", width + margin.left + margin.right)
						    .attr("height", height + margin.top + margin.bottom)
						.append("g")
							.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

			vChart.selectAll(".bar")
					.data(chartData)
				.enter().append("rect")
					.attr("class", ".bar")
					.attr("x", function(d, i) { return x(i); })
					.attr("y", function(d) {return y(d);})
					.attr("height", function(d) { return height - y(d); })
					.attr("width", x.rangeBand());

			vChart.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0, " + height + ")")
				.call(xAxis);

			vChart.append("g")
				.attr("class", "y axis")
				.call(yAxis);
		}

		updateAlphabet() {
			//compute data
			var alphaCount = [];
			for(var i=0 ; i<26 ; i++) {
				alphaCount[i] = 0;
			}

			var result = this.$scope.textarea.toUpperCase();
			for(var i=0 ; i<result.length ; i++) {
				var ascii = result.charCodeAt(i) - 65;
				if((ascii >= 0) && (ascii < 26)) {
					alphaCount[ascii]++;
				}
			}

			//draw chart
			var margin = {left: 30, right: 30, top: 20, bottom: 20};
			var width = 960 - margin.left - margin.right;
			var height = 500 - margin.top - margin.bottom;

			var character = [];
			for(var i=0 ; i<26 ; i++) {
				character.push(String.fromCharCode(65 + i));
			}

			var x = d3.scale.ordinal()
						.domain(character)
						.rangeRoundBands([0, width], .1);

			var y = d3.scale.linear()
						.domain([0, d3.max(alphaCount)])
						.range([height, 0]);

			var xAxis = d3.svg.axis()
							.scale(x)
							.orient("bottom");

			var yAxis = d3.svg.axis()
							.scale(y)
							.orient("left");

			//delete old svg
			d3.select("#alphabet-chart").select("svg").remove();

			var div = d3.select("#alphabet-chart").append("svg");
			var alphaChart = div
								.attr("width", width + margin.left + margin.right)
								.attr("height", height + margin.top + margin.bottom)
							.append("g")
								.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

			alphaChart.selectAll(".bar")
					.data(alphaCount)
				.enter().append("rect")
					.attr("class", "bar")
					.attr("x", function(d, i) { return x(String.fromCharCode(i + 65)) })
					.attr("y", function(d) { return y(d) })
					.attr("height", function(d) { return height - y(d); })
					.attr("width", x.rangeBand());

			alphaChart.append("g")
					.attr("class", "x axis")
					.attr("transform", "translate(0, " + height + ")")
					.call(xAxis);

			alphaChart.append("g")
					.attr("class", "y axis")
					.call(yAxis);
		}
	}
}