import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Coin} from '@models/vo/coin';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoinStoreActions} from '@root-store/coin-store';
import {JValidators, Opt} from '@core/utils/j-validators';


@Component({
  selector: 'app-coin-edit',
  templateUrl: './coin-edit.component.html',
  styles: [``]
})
export class CoinEditComponent extends PopUpBaseComponent<Coin> {

  form: FormGroup;

  id: FormControl;
  name: FormControl;
  value: FormControl;
  description: FormControl;

  setItemPerform(value: Coin): void {
   this.makeForm();
   this.form.reset(value);
  }

  acceptPerform(item: Coin): void {
    if (item.id) {
      this.store$.dispatch(CoinStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(CoinStoreActions.CreateRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    }
  }

  // cancel(): void {
  //   this.store$.dispatch(closePopUpAction(this.route));
  // }
  private makeForm(): void {
    this.id = this.fb.control({value: '', disabled: true});
    this.name = this.fb.control('', [JValidators.required(), JValidators.maxLength(10), JValidators.minLength(3)]);
    this.value = this.fb.control('', [JValidators.required(), JValidators.maxLength(2), JValidators.minLength(1), ]);
    const desc = new Opt();
    desc.message = 'Max value of description is {actualLength}/{requiredLength}';
    this.description = this.fb.control('', [JValidators.maxLength(100, desc ), JValidators.minWord(3)]);

    this.form = this.fb.group({ //form
      id: this.id, // attributo
      name: this.name, // attributo
      value: this.value, // attributo
      description: this.description // attributo
    });
  }
}
