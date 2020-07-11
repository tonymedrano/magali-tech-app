import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  features:Array<any> = [
    {
      title: "3:16 First featurette heading. ",
      mutedtitle: "It'll blow your mind.",
      description: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
      image: "https://msaf.com.fj/wp-content/uploads/2017/06/500x500.png",
      alt: "Generic placeholder image"
    },
    {
      title: "3:16 First featurette heading. ",
      mutedtitle: "It'll blow your mind.",
      description: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
      image: "https://msaf.com.fj/wp-content/uploads/2017/06/500x500.png",
      alt: "Generic placeholder image"
    },
    {
      title: "3:16 First featurette heading. ",
      mutedtitle: "It'll blow your mind.",
      description: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
      image: "https://msaf.com.fj/wp-content/uploads/2017/06/500x500.png",
      alt: "Generic placeholder image"
    },
    {
      title: "3:16 First featurette heading. ",
      mutedtitle: "It'll blow your mind.",
      description: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
      image: "https://msaf.com.fj/wp-content/uploads/2017/06/500x500.png",
      alt: "Generic placeholder image"
    },
    {
      title: "3:16 First featurette heading. ",
      mutedtitle: "It'll blow your mind.",
      description: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
      image: "https://msaf.com.fj/wp-content/uploads/2017/06/500x500.png",
      alt: "Generic placeholder image"
    },
  ];


  marketing:Array<any> = [
    {
      title: "Heading 1. ",
      description: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
      image: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
      alt: "Generic placeholder image",
      button: "View details"
    },
    {
      title: "Heading 2. ",
      description: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
      image: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
      alt: "Generic placeholder image",
      button: "View details"
    },
    {
      title: "Heading 3. ",
      description: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
      image: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
      alt: "Generic placeholder image",
      button: "View details"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
