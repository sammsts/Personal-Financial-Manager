import { RootSiblingParent } from 'react-native-root-siblings';

import Routes from './src/routes';
export default function App() {
  return (
    <RootSiblingParent>
      <Routes />
    </RootSiblingParent>
  );
}
