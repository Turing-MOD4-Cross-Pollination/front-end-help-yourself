import selectedCategories from './selectedCategories';
import allResources from './allResources';
import allCategories from './allCategories';

describe('selectedCategories', ()=>{
  it('selectedCategories should return the initial state', () => {
    const expected = [];
    const result = selectedCategories(undefined, {});
    expect(result).toEqual(expected)
  });

  it('selectedCategories should return state with ', ()=>{
    const category = "Baby Food"
    const action = {
      type: 'CATEGORY',
      category
    };
    const result = selectedCategories([], action);
    expect(result).toEqual([category]);
  })
})

describe('allResources', ()=>{
  it('allResources should return the initial state', () => {
    const expected = [];
    const result = allResources(undefined, {});
    expect(result).toEqual(expected)
  });

  it('allResources should return state with ', ()=>{
    const resources = [
      {
        "id": "1",
        "name": "Wee Cycle",
        "website": "http://www.weecycle.org/",
        "street": "789 Sherman Street #250",
        "city": "Denver",
        "state": "CO",
        "zip_code": "80203",
        "contact": "720-319-7792",
        "notes": "Provides new or gently used baby gear for low-income families with infants and toddlers.",
        "category": "Baby Items",
        "subcategory": ""
      },
      {
        "id": "2",
        "name": "Clayton Family Futures",
        "website": "http://www.claytonearlylearning.org/",
        "street": "3801 Martin Luther King Blvd.",
        "city": "Denver",
        "state": "CO",
        "zip_code": "80205",
        "contact": "(303) 355-4411",
        "notes": "Prenatal intervention & child development services",
        "category": "Child Care",
        "subcategory": "Preschools"
      }
    ]
    const action = {
      type: 'ALL_RESOURCES',
      resources
    };

    const result = allResources([], action);
    expect(result).toEqual(resources);
  })
})

describe('allCategories', ()=>{
  it('allCategories should return the initial state', () => {
    const expected = [];
    const result = allCategories([], {});
    expect(result).toEqual(expected)
  });

  it('allCategories should return state with ', ()=>{
    const categories = [
      {
        "id": "1",
        "name": "Wee Cycle",
        "website": "http://www.weecycle.org/",
        "street": "789 Sherman Street #250",
        "city": "Denver",
        "state": "CO",
        "zip_code": "80203",
        "contact": "720-319-7792",
        "notes": "Provides new or gently used baby gear for low-income families with infants and toddlers.",
        "category": "Baby Items",
        "subcategory": ""
      },
      {
        "id": "2",
        "name": "Clayton Family Futures",
        "website": "http://www.claytonearlylearning.org/",
        "street": "3801 Martin Luther King Blvd.",
        "city": "Denver",
        "state": "CO",
        "zip_code": "80205",
        "contact": "(303) 355-4411",
        "notes": "Prenatal intervention & child development services",
        "category": "Child Care",
        "subcategory": "Preschools"
      }
    ]
    const action = {
      type: 'ALL_CATEGORIES',
      resources: categories
    };
    const expected = ['Baby Items', "Child Care"]
    const result = allCategories([], action);
    expect(result).toEqual(expected);
  })
})