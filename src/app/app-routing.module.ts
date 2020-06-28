import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  {
    path: 'shopping-list',
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule'
  },
  {
    path: 'tutorials',
    loadChildren: './pages/tutorials/tutorials.module#TutorialsModule'
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule'
  },
  {
    path: 'blog',
    loadChildren: './pages/blog/blog.module#BlogModule'
  },
  {
    path: 'contact',
    loadChildren: './pages/contact/contact.module#ContactModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
