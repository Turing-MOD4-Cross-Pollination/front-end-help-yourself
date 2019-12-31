export const setSelect = data => ({
  type: 'OBJECT',
  data
});

export const setSelectedResources = resource => ({
  type:'RESOURCE',
  resource
})

export const setAllResources = (resources) => ({
  type:"ALL_RESOURCES",
  resources
})