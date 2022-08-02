import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', data => {
  const { name, number } = data;
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});
export const deleteContact = createAction('contacts/delete');
// export default { addContact };
// const addContact = data => {
//   const { name, number } = data;
//   return {
//     type: 'contacts/add',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };
