import { ProjectorMixin } from '@dojo/framework/widget-core/mixins/Projector';
import { Registry } from '@dojo/framework/widget-core/Registry';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';

import App from './widgets/App';

const root = document.querySelector('my-app') || undefined;

const routingConfig = [
	{
		path: 'directory',
		outlet: 'directory',
		children: [
			{
				path: '{filter}',
				outlet: 'filter'
			}
		]
	},
	{
		path: 'new-worker',
		outlet: 'new-worker'
	},
	{
		path: '/',
		outlet: 'home',
		defaultRoute: true
	}
];

const registry = new Registry();
registerRouterInjector(routingConfig, registry);

const Projector = ProjectorMixin(App);
const projector = new Projector();
projector.setProperties({ registry });

projector.append(root);
