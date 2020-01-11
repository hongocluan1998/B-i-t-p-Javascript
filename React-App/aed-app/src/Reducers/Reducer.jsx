const stateDefault = {data: [
    {
      id: 0,
      name: "Hello React"
    },
    {
      id: 1,
      name: "Hi Redux"
    },
    {
      id: 2,
      name: "Hello State"
    }
  ]};
export function reducer (state=stateDefault, action) {
    return state;
}