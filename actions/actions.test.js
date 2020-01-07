import {
  setSelectedCategories,
  setAllResources,
  setAllCategories
} from './index';

describe('action creators', () => {
  it('setSelectedCategories should return the correct opbject', () => {
    const category = "Baby Food"
    const expected = {
      type: 'CATEGORY',
      category
    };
    const results = setSelectedCategories(category);
    expect(results).toEqual(expected);
  });

  it('setAllResources should return the correct opbject', () => {
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
    const expected = {
      type: 'ALL_RESOURCES',
      resources
    };
    const results = setAllResources(resources);
    expect(results).toEqual(expected);
  });

  it('setAllCategories should return the correct opbject', () => {
    const categories = ["Disability Services",
    "Dental",
    "Clothing"
  ]
    const expected = {
      type: 'ALL_CATEGORIES',
      resources: categories
    };
    const results = setAllCategories(categories);
    expect(results).toEqual(expected);
  });
});


