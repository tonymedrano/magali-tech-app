import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-toggle',
  templateUrl: './mt-toggle.component.html',
  styleUrls: ['./mt-toggle.component.css']
})
export class MtToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var checkbox = document.querySelector('input[name=mode]');

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            trans()
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            trans()
            document.documentElement.setAttribute('data-theme', 'light')
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    }
  }

}
