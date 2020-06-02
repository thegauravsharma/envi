import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // Setted the text as it would be fetched from the respective service or API
  // I kept the header static due to lack of time
  // Header component could get the data in the same way the card component has
  feeds: any = [
    {
      heading: 'Reduced Emissions from deforestation',
      offset: '957,842 lbs offset',
      description: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.',
      location: 'KARIBA REDD - ZIMBABWE',
      imageUrl: 'assets/image-placeholder.jpg',
      price: '$7.50 / ton'
    },
    {
      heading: 'Improved Forest Management',
      offset: '710,093 lbs offset',
      description: 'Preservation of large tract of coastal Redwood and Dauglas fir that were slated for harvesting by the timber company.',
      location: 'ARCATA SUNNYBRAE TRACT - USA',
      imageUrl: 'assets/image-placeholder.jpg',
    },
    {
      heading: 'Landfill Methane Gas Capture',
      offset: '2,005,214 lbs offset',
      description: 'Landfill methane gas-to-energy facility that provides significant environmental benefits to the surrounding area.',
      location: 'WOLF CREEK LANDFILL - USA',
      imageUrl: 'assets/image-placeholder.jpg',
    },
    {
      heading: 'Mixed',
      offset: '241,967 lbs offset',
      description: 'Greenhouse gas reductions made at a variety of projects, including: reforestation, methane capture, and renewable energy.',
      location: 'TERRAPASS MIXED PORTFOLIO - MIXED',
      imageUrl: 'assets/image-placeholder.jpg',
    },
    {
      heading: 'Landfill Methane Gas Capture',
      offset: '721,663 lbs offset',
      description: 'Voluntary collection and destruction of landfill methane in two open flares and three internal combustion engine generators.',
      location: 'GASTON COUNTY LANDFILL - USA',
      imageUrl: 'assets/image-placeholder.jpg',
    },
    {
      heading: 'Reforestation & Hyrdopower',
      offset: '995,908 lbs offset',
      description: 'Supporting biodiversity and reforestration in Victoria, Australia; along with carbon reduction from a hyrdopower plant in Vietnam.',
      location: 'MYAMYN CONSERVATION - AUSTRALIA',
      imageUrl: 'assets/image-placeholder.jpg',
      price: '$7.50 / ton'
    },
    {
      heading: 'Reforestation through Land Art',
      offset: '327 lbs offset',
      description: 'Unique "land art" reforestation and conservation of forests that extend an important biological corridor for many endangered species.',
      location: 'NATURAL PACT LAND ART - COSTA RICA',
      imageUrl: 'assets/image-placeholder.jpg',
    },
    {
      heading: 'Urban Reforestation',
      offset: '13,033 lbs offset',
      description: 'Rehabilitating degraded urban and sub-urban areas through reforestation, adding significant greenery and restoring biodiversity.',
      location: 'NATURE LAB URBAN FORESTRY - CANADA',
      imageUrl: 'assets/image-placeholder.jpg',
      price: '$22.50 / ton'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    alert('Thanks for showing interest!');
  }  
}
