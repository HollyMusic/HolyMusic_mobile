import React from 'react';

import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux';
import routes from './routes';

export default AppRoutes = () => (
  <Router>
    <Stack key='root'>
      {
        routes.map(route =>
          <Scene
            key={route.key}
            title={route.title}
            initial={route.initial}
            component={route.component}
            headerMode={route.modal ? 'screen' : 'none'}
            hideNavBar
            modal={route.modal}
          />
        )
      }
    </Stack>
  </Router>
)