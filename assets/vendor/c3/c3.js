c3.generate({
    bindto: '#chart-employment', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 2, 8, 6, 7, 14, 11],
          //  ['data2', 5, 15, 27, 15, 21, 25],
         //   ['data3', 17, 18, 21, 8, 30, 29]
        ],
        type: 'line', // default type of chart
        colors: {
            'data1': '#2dd8ff', // orange
            'data2': '#007FFF', // blue
            'data3': '#9367B4', // green
        },
        names: {
            // name of each serie
              'data1': 'Gross revenue ',
           //  'data2': 'Marketing',
           //  'data3': 'Sales'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['2014', '2015', '2016', '2017', '2018', '2019']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-grossrevenue', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 19, 7, 9, 14, 18, 21, 15, 17, 13, 18, 13, 9],
			['data2', 17, 36, 39, 14, 18, 21, 25, 26, 13, 18, 13, 18],
			['data3', 25, 16, 29, 34, 48, 41, 15, 16, 6, 8, 11, 13],
			['data4', 8, 13, 19, 14, 18, 21, 15, 36, 13, 14, 17, 28],
		 	['data5', 13, 14, 15, 18, 11, 15, 17, 16, 14, 10, 16, 14]
        ],
        labels: false,
        type: 'spline', // default type of chart
        colors: {
            'data1': '#2dd8ff', // orange
            'data2': '#FFC300', // green
			'data3': '#900C3F', // green
			'data4': '#3358FF', // green
			'data5': '#9367B4', // green
        },
        names: {
            // name of each serie
            'data1': '2015',
            'data2': '2016',
			'data3': '2017',
			'data4': '2018',
			'data5': '2019'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});


c3.generate({
    bindto: '#chart-grossrevenue-cogs', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 19, 7, 9, 14, 18, 21, 15, 17, 13, 18, 13, 9],
			['data2', 17, 36, 39, 14, 18, 21, 25, 26, 13, 18, 13, 18],
			['data3', 25, 16, 29, 34, 48, 41, 15, 16, 6, 8, 11, 13],
			['data4', 8, 13, 19, 14, 18, 21, 15, 36, 13, 14, 17, 28],
		 	['data5', 13, 14, 15, 18, 11, 15, 17, 16, 14, 10, 16, 14]
        ],
        labels: false,
        type: 'spline', // default type of chart
        colors: {
            'data1': '#2dd8ff', // orange
            'data2': '#FFC300', // green
			'data3': '#900C3F', // green
			'data4': '#3358FF', // green
			'data5': '#9367B4', // green
        },
        names: {
            // name of each serie
            'data1': '2015',
            'data2': '2016',
			'data3': '2017',
			'data4': '2018',
			'data5': '2019'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});


c3.generate({
    bindto: '#chart-dressprofit-entry-source', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 19, 7, 9, 14, 18, 21],
			['data2', 17, 36, 39, 14, 18, 21],
			['data3', 25, 16, 29, 34, 48, 41],
			['data4', 8, 13, 19, 14, 18, 21],
		 	['data5', 13, 14, 15, 18, 11, 15]
        ],
        labels: false,
        type: 'spline', // default type of chart
        colors: {
            'data1': '#2dd8ff', // orange
            'data2': '#FFC300', // green
			'data3': '#900C3F', // green
			'data4': '#3358FF', // green
			'data5': '#9367B4', // green
        },
        names: {
            // name of each serie
            'data1': 'Facebook',
            'data2': 'Google',
			'data3': 'Instagram',
			'data4': 'Word of mouth',
			'data5': 'Twitter'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['2014', '2015', '2016', '2017', '2018', '2019']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});


c3.generate({
    bindto: '#chart-entry-source-cogs', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 19, 7, 9, 14, 18, 21],
			['data2', 17, 26, 29, 14, 18,13],
			['data3', 25, 16, 29, 24, 28,11],
			['data4', 8, 13, 19, 14, 18,16],
		 	['data5', 13, 14, 15, 18, 9]
        ],
        labels: false,
        type: 'spline', // default type of chart
        colors: {
            'data1': '#2dd8ff', // orange
            'data2': '#FFC300', // green
			'data3': '#900C3F', // green
			'data4': '#3358FF', // green
			'data5': '#9367B4', // green
        },
        names: {
            // name of each serie
            'data1': 'Facebook',
            'data2': 'Google',
			'data3': 'Instagram',
			'data4': 'Word of mouth',
			'data5': 'Twitter'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['2014', '2015', '2016', '2017', '2018', '2019']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});


c3.generate({
    bindto: '#chart-designer', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 14, 17, 19, 13, 11, 26],
			['data2', 14, 16, 24, 17, 18, 11],
			['data3', 25, 16, 29, 24, 28, 21],
			['data4', 8, 13, 19, 14, 18, 21],
		 	['data5', 13, 14, 15, 18, 11, 15]
        ],
        labels:false,
        type: 'spline', // default type of chart
        colors: {
            'data1': '#2dd8ff', // orange
            'data2': '#FFC300', // green
			'data3': '#900C3F', // green
			'data4': '#3358FF', // green
			'data5': '#9367B4', // green
        },
        names: {
            // name of each serie
            'data1': 'Designer 1',
            'data2': 'Designer 2',
			'data3': 'Designer 3',
			'data4': 'Designer 4',
			'data5': 'Designer 5'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['2014', '2015', '2016', '2017', '2018', '2019']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});


c3.generate({
    bindto: '#chart-designer-cogs', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 14, 17, 19, 13, 11, 26],
			['data2', 14, 16, 24, 17, 18, 11],
			['data3', 25, 16, 29, 24, 28, 21],
			['data4', 8, 13, 19, 14, 18, 21],
		 	['data5', 13, 14, 15, 18, 11, 15]
        ],
        labels:false,
        type: 'spline', // default type of chart
        colors: {
            'data1': '#2dd8ff', // orange
            'data2': '#FFC300', // green
			'data3': '#900C3F', // green
			'data4': '#3358FF', // green
			'data5': '#9367B4', // green
        },
        names: {
            // name of each serie
            'data1': 'Designer 1',
            'data2': 'Designer 2',
			'data3': 'Designer 3',
			'data4': 'Designer 4',
			'data5': 'Designer 5'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['2014', '2015', '2016', '2017', '2018', '2019']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});






c3.generate({
    bindto: '#chart-area', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'area', // default type of chart
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#9367B4', // pink
        },
        names: {
            // name of each serie
            'data1': 'Maximum',
            'data2': 'Minimum'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-area-spline', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'area-spline', // default type of chart
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#9367B4', // pink            
        },
        names: {
            // name of each serie
            'data1': 'Maximum',
            'data2': 'Minimum'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-area-spline-sracked', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'area-spline', // default type of chart
        groups: [
            ['data1', 'data2']
        ],
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#9367B4', // pink
        },
        names: {
            // name of each serie
            'data1': 'Maximum',
            'data2': 'Minimum'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-spline', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6],
            ['data2', 0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
        ],
        labels: true,
        type: 'spline', // default type of chart
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#9367B4', // green
        },
        names: {
            // name of each serie
            'data1': 'Hestavollane',
            'data2': 'Vik'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-spline-rotated', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'spline', // default type of chart
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#9367B4', // pink
        },
        names: {
            // name of each serie
            'data1': 'Maximum',
            'data2': 'Minimum'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        rotated: true,
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-step', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'step', // default type of chart
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#9367B4', // pink
        },
        names: {
            // name of each serie
            'data1': 'Maximum',
            'data2': 'Minimum'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-area-step', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'area-step', // default type of chart
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#9367B4', // pink
        },
        names: {
            // name of each serie
            'data1': 'Maximum',
            'data2': 'Minimum'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-bar', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17, 11, 8, 15, 18, 19, 17],
           // ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'bar', // default type of chart
        colors: {
            'data1': '#007FFF', // blue
           // 'data2': '#9367B4', // pink
        },
        names: {
            // name of each serie
            'data1': 'Maximum',
           // 'data2': 'Minimum'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        },
    },
    bar: {
        width: 16
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-bar-rotated', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'bar', // default type of chart
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#9367B4', // pink
        },
        names: {
            // name of each serie
            'data1': 'Maximum',
            'data2': 'Minimum'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        rotated: true,
    },
    bar: {
        width: 16
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-bar-stacked', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'bar', // default type of chart
        groups: [
            ['data1', 'data2']
        ],
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#9367B4', // pink
        },
        names: {
            // name of each serie
            'data1': 'Maximum',
            'data2': 'Minimum'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
    },
    bar: {
        width: 16
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-pie', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 63],
            ['data2', 44],
            ['data3', 12],
            ['data4', 14]
        ],
        type: 'pie', // default type of chart
        colors: {
            'data1': '#1c3353', // blue darker
            'data2': '#007FFF', // blue
            'data3': '#c8d9f1', // blue lighter
            'data4': '#7ea5dd', // blue light            
        },
        names: {
            // name of each serie
            'data1': 'darker',
            'data2': 'blue',
            'data3': 'lighter',
            'data4': 'light',
        }
    },
    axis: {
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-donut', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 63],
            ['data2', 37]
        ],
        type: 'donut', // default type of chart
        colors: {
            'data1': '#6574cd', // indigo
            'data2': '#939edc', // indigo light
        },
        names: {
            // name of each serie
            'data1': 'indigo',
            'data2': 'indigo light'
        }
    },
    axis: {
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});
c3.generate({
    bindto: '#chart-scatter', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'scatter', // default type of chart
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#9367B4', // pink
        },
        names: {
            // name of each serie
            'data1': 'Maximum',
            'data2': 'Minimum'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});

c3.generate({
    bindto: '#chart-combination', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 30, 20, 50, 40, 60, 50, 30, 25, 50, 40, 64, 52],
            ['data2', 200, 130, 90, 240, 130, 220, 39, 20, 56, 48, 60, 56],
            ['data3', 300, 200, 160, 400, 250, 250, 30, 20, 50, 40, 60, 70],
            ['data4', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220]
        ],
        type: 'bar', // default type of chart
        types: {
            'data2': "line",
            'data3': "spline",
			'data4': "spline",
			'data1': "spline",
        },
        groups: [
            ['data1', 'data4']
        ],
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#2dd8ff', // orange            
            'data3': '#9367B4', // pink
            'data4': '#129b0f', // green

        },
        names: {
            // name of each serie
            'data1': '2016',
            'data2': '2017',
            'data3': '2018',
            'data4': '2019'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        },
    },
    bar: {
        width: 16
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});

c3.generate({
    bindto: '#chart-cogs-stylist', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 30, 20, 50, 40, 60, 50, 30, 25, 50, 40, 64, 52],
            ['data2', 200, 130, 90, 240, 130, 220, 39, 20, 56, 48, 60, 56],
            ['data3', 300, 200, 160, 400, 250, 250, 30, 20, 50, 40, 60, 70],
            ['data4', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220]
        ],
        type: 'bar', // default type of chart
        types: {
            'data2': "line",
            'data3': "spline",
			'data4': "spline",
			'data1': "spline",
        },
        groups: [
            ['data1', 'data4']
        ],
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#2dd8ff', // orange            
            'data3': '#9367B4', // pink
            'data4': '#129b0f', // green

        },
        names: {
            // name of each serie
            'data1': 'Stylist 1',
            'data2': 'Stylist 2',
            'data3': 'Stylist 3',
            'data4': 'Stylist 4'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec']
        },
    },
    bar: {
        width: 16
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});


c3.generate({
    bindto: '#chart-dress-profit-by-stylist', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 30, 20, 50, 40, 60, 50, 30, 25, 50, 40, 64, 52],
            ['data2', 200, 130, 90, 240, 130, 220, 39, 20, 56, 48, 60, 56],
            ['data3', 300, 200, 160, 400, 250, 250, 30, 20, 50, 40, 60, 70],
            ['data4', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220]
        ],
        type: 'bar', // default type of chart
        types: {
            'data2': "line",
            'data3': "spline",
			'data4': "spline",
			'data1': "spline",
        },
        groups: [
            ['data1', 'data4']
        ],
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#2dd8ff', // orange            
            'data3': '#9367B4', // pink
            'data4': '#129b0f', // green

        },
        names: {
            // name of each serie
            'data1': 'Stylist 1',
            'data2': 'Stylist 2',
            'data3': 'Stylist 3',
            'data4': 'Stylist 4'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec']
        },
    },
    bar: {
        width: 16
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});

c3.generate({
    bindto: '#number-of-sales-by-stylist', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 30, 20, 50, 40, 60, 50, 30, 25, 50, 40, 64, 52],
            ['data2', 200, 130, 90, 240, 130, 220, 39, 20, 56, 48, 60, 56],
            ['data3', 300, 200, 160, 400, 250, 250, 30, 20, 50, 40, 60, 70],
            ['data4', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220]
        ],
        type: 'bar', // default type of chart
        types: {
            'data2': "line",
            'data3': "spline",
			'data4': "spline",
			'data1': "spline",
        },
        groups: [
            ['data1', 'data4']
        ],
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#2dd8ff', // orange            
            'data3': '#9367B4', // pink
            'data4': '#129b0f', // green

        },
        names: {
            // name of each serie
            'data1': 'Stylist 1',
            'data2': 'Stylist 2',
            'data3': 'Stylist 3',
            'data4': 'Stylist 4'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec']
        },
    },
    bar: {
        width: 16
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});

c3.generate({
    bindto: '#dress-profit-by-stylist', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 30, 20, 50, 40, 60, 50, 30, 25, 50, 40, 64, 52],
            ['data2', 200, 130, 90, 240, 130, 220, 39, 20, 56, 48, 60, 56],
            ['data3', 300, 200, 160, 400, 250, 250, 30, 20, 50, 40, 60, 70],
            ['data4', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220]
        ],
        type: 'bar', // default type of chart
        types: {
            'data2': "line",
            'data3': "spline",
			'data4': "spline",
			'data1': "spline",
        },
        groups: [
            ['data1', 'data4']
        ],
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#2dd8ff', // orange            
            'data3': '#9367B4', // pink
            'data4': '#129b0f', // green

        },
        names: {
            // name of each serie
            'data1': 'Stylist 1',
            'data2': 'Stylist 2',
            'data3': 'Stylist 3',
            'data4': 'Stylist 4'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec']
        },
    },
    bar: {
        width: 16
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});


c3.generate({
    bindto: '#chart-top-selling-dresses-admin', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 30, 20, 50, 40, 60, 50, 30, 25, 50, 40, 64, 52],
            ['data2', 200, 130, 90, 240, 130, 220, 39, 20, 56, 48, 60, 56],
            ['data3', 300, 200, 160, 400, 250, 250, 30, 20, 50, 40, 60, 70],
            ['data4', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220]
        ],
        type: 'bar', // default type of chart
        types: {
            'data2': "line",
            'data3': "spline",
			'data4': "spline",
			'data1': "spline",
        },
        groups: [
            ['data1', 'data4']
        ],
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#2dd8ff', // orange            
            'data3': '#9367B4', // pink
            'data4': '#129b0f', // green

        },
        names: {
            // name of each serie
            'data1': 'SKU826',
            'data2': 'SKU856',
            'data3': 'SKU586',
            'data4': 'SKU236'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec']
        },
    },
    bar: {
        width: 16
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});

c3.generate({
    bindto: '#chart-top-selling-dresses', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 30, 20, 50, 40, 60, 50, 30, 25, 50, 40, 64, 52],
            ['data2', 200, 130, 90, 240, 130, 220, 39, 20, 56, 48, 60, 56],
            ['data3', 300, 200, 160, 400, 250, 250, 30, 20, 50, 40, 60, 70],
            ['data4', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220]
        ],
        type: 'bar', // default type of chart
        types: {
            'data2': "line",
            'data3': "spline",
			'data4': "spline",
			'data1': "spline",
        },
        groups: [
            ['data1', 'data4']
        ],
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#2dd8ff', // orange            
            'data3': '#9367B4', // pink
            'data4': '#129b0f', // green

        },
        names: {
            // name of each serie
            'data1': 'SKU826',
            'data2': 'SKU856',
            'data3': 'SKU586',
            'data4': 'SKU236'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec']
        },
    },
    bar: {
        width: 16
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});

c3.generate({
    bindto: '#chart-dress-profit-by-stylist-cog', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 30, 20, 50, 40, 60, 50, 30, 25, 50, 40, 64, 52],
            ['data2', 200, 130, 90, 240, 130, 220, 39, 20, 56, 48, 60, 56],
            ['data3', 300, 200, 160, 400, 250, 250, 30, 20, 50, 40, 60, 70],
            ['data4', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220]
        ],
        type: 'bar', // default type of chart
        types: {
            'data2': "line",
            'data3': "spline",
			'data4': "spline",
			'data1': "spline",
        },
        groups: [
            ['data1', 'data4']
        ],
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#2dd8ff', // orange            
            'data3': '#9367B4', // pink
            'data4': '#129b0f', // green

        },
        names: {
            // name of each serie
            'data1': 'Stylist 1',
            'data2': 'Stylist 2',
            'data3': 'Stylist 3',
            'data4': 'Stylist 4'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec']
        },
    },
    bar: {
        width: 16
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});


