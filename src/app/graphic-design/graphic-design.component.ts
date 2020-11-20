import { Component, OnInit } from "@angular/core";
import { Lightbox } from "ngx-lightbox";
import { CartService } from "../cart.service";
@Component({
  selector: "app-graphic-design",
  templateUrl: "./graphic-design.component.html",
  styleUrls: ["./graphic-design.component.css"]
})
export class GraphicDesignComponent implements OnInit {
  constructor(private cartService: CartService, private _lightbox: Lightbox) {}

  ngOnInit() {}
}
