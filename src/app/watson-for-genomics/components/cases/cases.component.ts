import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  @ViewChild("container") container;
  constructor() { }

  ngOnInit() {
  }
  

	onWhiteChange() {
		this.container.nativeElement.classList.add("carbon--theme--white");
		this.container.nativeElement.classList.remove("carbon--theme--g10");
		this.container.nativeElement.classList.remove("carbon--theme--g100");
		this.container.nativeElement.classList.remove("carbon--theme--g90");
	}
	onG10Change() {
		this.container.nativeElement.classList.add("carbon--theme--g10");
		this.container.nativeElement.classList.remove("carbon--theme--white");
		this.container.nativeElement.classList.remove("carbon--theme--g100");
		this.container.nativeElement.classList.remove("carbon--theme--g90");
	}
	onG100Change() {
		this.container.nativeElement.classList.add("carbon--theme--g100");
		this.container.nativeElement.classList.remove("carbon--theme--g10");
		this.container.nativeElement.classList.remove("carbon--theme--white");
		this.container.nativeElement.classList.remove("carbon--theme--g90");
	}
	onG90Change() {
		this.container.nativeElement.classList.add("carbon--theme--g90");
		this.container.nativeElement.classList.remove("carbon--theme--g10");
		this.container.nativeElement.classList.remove("carbon--theme--g100");
		this.container.nativeElement.classList.remove("carbon--theme--white");
	}
}
