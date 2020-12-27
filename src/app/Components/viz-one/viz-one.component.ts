import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-viz-one',
  templateUrl: './viz-one.component.html',
  styleUrls: ['./viz-one.component.css']
})

export class VizOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // axios.get('http://localhost:5000', {})
    // .then((response) => {
    //   console.log(response)
    // })
    console.log("running connection to backend")
  }

}
