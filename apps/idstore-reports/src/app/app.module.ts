import { TodosState } from './store/todos/todos.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiLayoutModule } from '@idstore/ui/components/molecules/layout/layout.module';
import { UiMenuModule } from '@idstore/ui/components/molecules/menu/menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoPage } from './pages/todo/todo.page';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ProductCategoryPage } from './pages/product-category/product-category.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductCategoryChartComponent } from './components/product-category-chart/product-category-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    TodoPage,
    TodoFormComponent,
    TodoListComponent,
    ProductCategoryPage,
    ProductCategoryChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UiLayoutModule,
    UiMenuModule,
    NgxsModule.forRoot([TodosState], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
    NgxsLoggerPluginModule.forRoot({disabled: environment.production}),
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
