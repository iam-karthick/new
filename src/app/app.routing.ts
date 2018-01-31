import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'user',
        component: UsersComponent ,
    },
    {
        path: 'usersearch',
        component: UserSearchComponent,
    },
    {
        path: 'user/:id',
        component: UserDetailComponent,
    },
];
@NgModule({
    imports: [RouterModule.forRoot( routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
