import { column, defineDb, defineTable } from 'astro:db';

const user = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text(),
    userName: column.text(),
    phoneNumber: column.text(),
  },
})



// https://astro.build/db/config
export default defineDb({
  tables: {
    user,
  }
});
