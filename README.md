# Angular CLI Universal template

This is a template for development of Angular Universal apps with support for Angular CLI and Node.js server.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:4000/`. The app will automatically reload if you change any of the source files. Reload is done with HMR: `https://webpack.github.io/docs/hot-module-replacement.html`.

## Code scaffolding

* Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

* Run `ng g component _NAME_` and `ng g module --routing true _NAME_` if generating new lazy loaded modules with routing.
 * Edit `_NAME_-routing.module.ts` to load `_NAME_.component`.

### Example routing module

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { _NAME_Component } from './_NAME_.component';

const routes: Routes = [
    {
        path: "",
        component: _NAME_Component
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class _NAME_RoutingModule { }
```

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
