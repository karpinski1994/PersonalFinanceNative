import Home from '../common/modules/home/Home';
import Outcomes from '../common/modules/outcomes/outcomes/Outcomes';
import Menu from '../common/modules/menu/Menu';
import Categories from '../common/modules/categories/categories/Categories';
import Category from '../common/modules/categories/category/Category';
export const appRouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  Outcomes: Outcomes,
  MainMenu: Menu,
  Categories: Categories,
  Category: {screen: Category}
};
