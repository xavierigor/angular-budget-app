import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from '../models/budget-item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item)
  }

}
