export const breedsSelectTemplate = cats => {
  return cats
    .map(cat => `<option value='${cat.id}'>${cat.name}</option>`)
    .join('');
};
