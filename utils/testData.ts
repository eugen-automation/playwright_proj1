export const TestData = {
  users: {
    validUser: {
      email: 'test@example.com',
      password: 'TestPassword123!',
      firstName: 'John',
      lastName: 'Doe'
    },
    invalidUser: {
      email: 'invalid@email',
      password: '123'
    }
  },
  products: {
    searchTerms: ['laptop', 'phone', 'headphones'],
    categories: ['Electronics', 'Clothing', 'Books'],
    sortOptions: ['price-low-high', 'price-high-low', 'name-a-z']
  }
};