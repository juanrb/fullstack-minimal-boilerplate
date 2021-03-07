// These lines to /frontend/config/AppRouter/AppRouter.js
import ___Scene___ from '../../scenes/___Scene___/___Scene___';
<Route exact path={routes.___scene___} render={props => <Admin {...props}><___Scene___ {...props} /></Admin>} />

// Add this property to the frontend routes in /frontend/config/settings
settings.routes = {
	___scene___: '/___scene___', // add this prop to the object
}

[
	// Add add this array element to defaultMenuItems array in /frontend/components/layout/SidebarNav/SidebarNav.js
	{ title: '___scene___', alt: '___scene___ alt', iconClass: 'icon-___scene___', className: '___scene___-class-name', route: settings.routes.___scene___ }
]
