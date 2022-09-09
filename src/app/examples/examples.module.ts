import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ExponentialStrengthPipe } from './pipe/exponential-strength.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { PowerBoostCalculatorComponent } from './pipe/power-boost-calculator.component';
import { InputOutputComponent } from './input-output/input-output.component';
//import { PowerBoostCalculatorComponent } from './pipe/power-boost-calculator.component';
import { ItemDetailComponent } from './input-output/item-detail/item-detail.component';
import { InTheMetadataComponent } from './input-output/in-the-metadata/in-the-metadata.component';
import { AliasingComponent } from './input-output/aliasing/aliasing.component';
import { ItemOutputComponent } from './input-output/item-output/item-output.component';
import { InputOutputTogetherComponent } from './input-output/input-output-together/input-output-together.component';




const productRoutes: Routes = [

];

@NgModule({
  imports: [SharedModule],
  declarations: [
    PipeComponent,
    ExponentialStrengthPipe,
    PowerBoostCalculatorComponent,
    InputOutputComponent,
    ItemOutputComponent,
    InputOutputTogetherComponent,
    ItemDetailComponent,
    InTheMetadataComponent,
    AliasingComponent
  ],
})
export class ExamplesModule { }
