import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent , SvgIconComponent , FormFieldComponent ,
  InputComponent,
  PrefixComponent,
  SuffixComponent,
  } from '@cocokits/angular-components';
import { Icons } from "@cocokits/common-icons";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , IconButtonComponent , SvgIconComponent ,   FormFieldComponent,
    InputComponent,
    PrefixComponent,
    SuffixComponent,
    SvgIconComponent, ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly Icons = Icons;
}
