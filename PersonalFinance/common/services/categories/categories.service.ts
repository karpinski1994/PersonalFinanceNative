import {Category} from '../../models/Category';

class Categories {
  categories: Array<Category>  = [];

  addCategory = (category: Category) => {
    const catId = this.categories.findIndex((c) => c.id === category.id);
    const isRedundant = catId > -1;
    if (!isRedundant) {
      this.categories.push(category);
    }
  }
}