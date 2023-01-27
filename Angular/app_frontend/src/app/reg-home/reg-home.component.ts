import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import * as AOS from 'aos';
//@ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-reg-home',
  templateUrl: './reg-home.component.html',
  styleUrls: ['./reg-home.component.css']
})
export class RegHomeComponent implements OnInit{
  
  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    AOS.init();
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      typeSpeed: 80,
      loop: false,
      typeColor: 'black'
    })
    
    writer
      .type('A Dedicated Placement Environment.')
      .rest(500)
      .start()
  }

  /* 'viewportScroller' is the angular class which contains the 'scrollToAnchor()' function required for 
  scrolling to a specific element whenever the following 'onClick()' function is executed. */
  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
