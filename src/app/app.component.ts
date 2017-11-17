import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heading = 'Frappe-Charts with Angular 5';

  data = [
    {
      title: "Some Data",
      color: "light-blue",
      values: [25, 40, 30, 35, 8, 52, 17, -4]
    },
    {
      title: "Another Set",
      color: "violet",
      values: [25, 50, -10, 15, 18, 32, 27, 14]
    }
  ];

  dataSet = {
    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am", "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"],
    datasets: this.data
  };

  chart: any;

  ngOnInit() {

  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  getRandomInt(min, max) {    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getChartData(min, max, len = 7) {
    let result = [];
    for (let i = 0; i < len; i++) {
      //const element = array[index];
      
    }
  }

}
