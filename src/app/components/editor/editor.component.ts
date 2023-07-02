import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from "@angular/core";
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import klay from 'cytoscape-klay'
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit {

  public cy;
  public layout = 'klay'
  public showFiller = false;

  ngAfterViewInit(): void {
    cytoscape.use(klay)
    this.cy = cytoscape({
      container: document.getElementById('cf'), // container to render in
    
     
      boxSelectionEnabled: false,
      autounselectify: true,

      layout: {
        name: this.layout
      },

      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#11479e',
            'size' : 1
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 1,
            'target-arrow-shape': 'triangle',
            'line-color': '#9dbaea',
            'target-arrow-color': '#9dbaea',
            'curve-style': 'bezier'
          }
        }
      ],

      elements: {
        nodes: [
          { data: { id: 'n0' } },
          { data: { id: 'n1' } },
          { data: { id: 'n2' } },
          { data: { id: 'n3' } },
          { data: { id: 'n4' } },
          { data: { id: 'n5' } },
          { data: { id: 'n6' } },
          { data: { id: 'n7' } },
          { data: { id: 'n8' } },
          { data: { id: 'n9' } },
          { data: { id: 'n10' } },
          { data: { id: 'n11' } },
          { data: { id: 'n12' } },
          { data: { id: 'n13' } },
          { data: { id: 'n14' } },
          { data: { id: 'n15' } },
          { data: { id: 'n16' } }
        ],
        edges: [
          { data: { source: 'n0', target: 'n1' } },
          { data: { source: 'n1', target: 'n2' } },
          { data: { source: 'n1', target: 'n3' } },
          { data: { source: 'n4', target: 'n5' } },
          { data: { source: 'n4', target: 'n6' } },
          { data: { source: 'n6', target: 'n7' } },
          { data: { source: 'n6', target: 'n8' } },
          { data: { source: 'n8', target: 'n9' } },
          { data: { source: 'n8', target: 'n10' } },
          { data: { source: 'n11', target: 'n12' } },
          { data: { source: 'n12', target: 'n13' } },
          { data: { source: 'n13', target: 'n14' } },
          { data: { source: 'n13', target: 'n15' } },
        ]
      }
    });

  

 
 
  this.cy.on('tap', 'node', function(evt){
    var node = evt.target;
    console.log(evt)
    console.log( 'tapped ' + node.id() );
  });


  }

  addNode() {
    console.log(this.cy.nodes().forEach(ele => {
      console.log(ele.id())
    }))
    

    console.log(this.cy.attr())
  }

  changeLayout() {
    if (this.layout==='klay') {
      cytoscape.use(dagre)
      this.cy.layout({
        name : 'dagre'
      }).run()
      this.layout='dagre'
    }
    else {
      cytoscape.use(klay)
      this.cy.layout({
        name : 'klay'
      }).run()
      this.layout='klay'

    }
  }



}


