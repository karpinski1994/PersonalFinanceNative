import Home from '../common/modules/home/Home';
import AddOutcome from '../common/modules/home/add-outcome/AddOutcome';
import Menu from '../common/modules/menu/Menu';
import Categories from '../common/modules/menu/categories/categories/Categories';

export const appRouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  AddOutcome: AddOutcome,
  MainMenu: Menu,
  Categories: Categories,
};
