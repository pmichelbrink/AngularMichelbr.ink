import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-portfolio-carousel',
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.scss']
})
export class PortfolioCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  
  public carouselOptions: NguCarousel;
  public portfolios = [ {
    photo: 'assets/images/sq-12.jpg',
    text: `I needed a way to communicate with Amazon's AWS via Push Notifications in the C# application.
    Since the .NET AWS IoT SDK supports publishing messages but doesn't support subscribing to topics
    or receiving messages, I created a Node.js application and hosted it in the C# app. `,
    title: 'Using AWS IoT to Send and Receive Push Notifications in .NET.',
  }, 
  {
    photo: 'assets/images/sq-9.jpg',
    text: `A website that allows administrators to add, update, and discharge patients. Users can track everything 
    from appointments and medications all the way down to food intake. It also provides staff and Human Resources 
    functionality.`,
    title: 'Patient Tracking and Management Website built on ASP .NET Core MVC.',
  }, 
  {
    photo: 'assets/images/sq-13.jpg',
    text: `Create a C# WPF client that connects to server and provides the ability to work with documents.
    This client can search, add, scan, and preform numerous other operations.`,
    title: 'ECM Client Application that consumes Web APIs',
  }, {
    photo: 'assets/images/sq-15.jpg',
    text: `This application can display almost any type of document. From Microsoft® Office documents to
    AutoCAD® drawings, this viewer and display them all. In addition to viewing and signing documents, this app can 
    insert, reorder, and delete pages.`,
    title: 'Document Viewer created with WPF and WinForms',
  }, {
    photo: 'assets/images/sq-16.jpg',
    text: `A WPF app that allows users to move documents through a workflow process. It displays a list of
    operations that can/need to be completed, and allows the user to route the document through the workflow.`,
    title: 'Workflow Client Application',
  },
  {
    photo: 'assets/images/sq-17.jpg',
    text: `A WinForms app that helps users create a workflow process and adjust the routing from inception
    to completion. It provides many unique options including branching out to multiple users and holding the
    process until all users finish their work.`,
    title: 'Workflow Designer Application',
  }, 
  {
    photo: 'assets/images/sq-11.jpg',
    text: `I have used InstallShield to build many installers, managed Team Foundation Server (TFS) for 
    source control, Agile software management, and continuous integration builds.`,
    title: 'Installer, Builds, and Source Control',
  },
  {
    photo: 'assets/images/sq-10.jpg',
    text: `This app scans all drives connected to the machine and looks of digital movies stored on them. 
    It builds a list of all movies found on a per-drive basis. These lists are written to the disk in XML
    and plain text format. Each movie also written contains it's location and size (in GB). The app can also
    combine all text files into on alphabetically sorted file.`,
    title: 'Scan for Movies',
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
