import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Station } from '../../model/station';

@Component({
  selector: 'app-anouncement-item',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './anouncement-item.component.html',
  styleUrl: './anouncement-item.component.css'
})
export class AnouncementItemComponent {
  @Input() row?: Station;
  @Input() columns: any[] = [];
}
