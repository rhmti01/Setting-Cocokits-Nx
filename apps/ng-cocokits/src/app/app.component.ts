import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonComponent, CheckboxComponent, FormFieldComponent, InputComponent, LabelComponent, OptionComponent, removeAmountFormat, SelectComponent, toAmountFormat, TrailingComponent } from '@cocokits/angular-components';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ButtonComponent,
    CheckboxComponent,
    FormFieldComponent,
    InputComponent,
    LabelComponent,
    OptionComponent,
    SelectComponent,
    TrailingComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-cocokits';

  protected value = signal("");

  protected onChange(event: Event) {
    this.value.set((event.currentTarget as HTMLInputElement).value);
  }

  protected onFocus() {
    this.value.set(removeAmountFormat(this.value()));
  }

  protected onBlur() {
    this.value.set(toAmountFormat(this.value()));
  }
}
