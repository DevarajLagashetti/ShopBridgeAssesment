/*=========================================================================================
[Custom Chart Javascript]

Project	     : Seipkon - Responsive Admin Template
Author       : Hassan Rasu
Author URL   : https://themeforest.net/user/themescare
Version      : 1.0
Primary use  : Seipkon - Responsive Admin Template

Only Use For Demo Purposes.

==========================================================================================*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		/* 
		=================================================================
		LineChart JS
		=================================================================	
		*/

		var ctx = document.getElementById("lineChart").getContext('2d');
		var myChart = new Chart(ctx, {
		    type:'line',
			data: {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [{
					label: 'Attendance/Month',
					data: [40,43,43,42,40,38,43],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				legend: {
					display: false
				}
			}
		});

		/* 
		=================================================================
		BarChart JS
		=================================================================	
		*/

		var ctx = document.getElementById("barChart").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [{
					label: '# of Leaves',
					data: [5,1,2,5,6,4,5],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
						'rgba(182, 255, 64, 0.28)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
						'rgba(135, 201, 28, 0.92)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				legend: {
					display: false
				}
			}
		});

		/* 
		=================================================================
		RradarChart JS
		=================================================================	
		*/

		var ctx = document.getElementById("radarChart").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'radar',
			data: {
			    labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [{
					label: "Approvals 1st Level",
					backgroundColor: "rgba(255, 99, 132, 0.2)",
					borderColor: "rgba(255, 99, 132, 0.92)",
					pointBorderColor: "rgba(244, 58, 97, 0.2)",
					pointBackgroundColor: "rgba(255, 99, 132, 0.2)",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					data: [65, 59, 90, 81, 56, 55, 40]
				}, {
				    label: "Approvals 2nd Level",
					backgroundColor: "rgba(38, 185, 154, 0.2)",
					borderColor: "rgba(38, 185, 154, 0.85)",
					pointColor: "rgba(38, 185, 154, 0.85)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(151,187,205,1)",
					data: [28, 48, 40, 19, 96, 27, 100]
				}]
			},
			options: {
				legend: {
					display: false
				        }
			         }
		});
        


		/* 
		=================================================================
		DonutChart JS
		=================================================================	
		*/

		var ctx = document.getElementById("DonutChart").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'doughnut',
			data: {
			    labels: ["CL", "EL", "SL", "April", "May", "June", "July"],
				datasets: [{
					data: [14000, 18000, 5000, 12000],
					backgroundColor: ["#fac64c", "#47debe", "#fc5378", "#47b2f8", ],
					hoverBackgroundColor: ["#FFC233", "#26B99A", "#FF3D67", "#059BFF"]
				}]
			},
			options: {
				legend: {
					display: false
				}
			}
		});


		/* 
		=================================================================
		PieChart JS
		=================================================================	
		*/

		var ctx = document.getElementById("pieChart").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["Yellow", "Blue", "Red", "Green"],
				datasets: [{
					data: [140, 180, 50, 120],
					backgroundColor: ["#fac64c", "#47debe", "#fc5378", "#47b2f8"],
					hoverBackgroundColor: ["#FFC233", "#26B99A", "#FF3D67", "#059BFF"]
				}]
			},
			options: {
				legend: {
					display: false
				}
			}
		});


		/* 
		=================================================================
		PolarChart JS
		=================================================================	
		*/

		var ctx = document.getElementById("polarChart").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'polarArea',
			data: {
				datasets: [{
					data: [120, 50, 140, 180, 100],
					backgroundColor: ["#c785e2", "#fac64c", "#47debe", "#fc5378", "#47b2f8", ]
				}],
				labels: ["Purple" , "Yellow" , "Green" , "Red", "Blue"]

			},
			options: {
				legend: {
					display: false
				}
			}
		});


	});


}(jQuery));