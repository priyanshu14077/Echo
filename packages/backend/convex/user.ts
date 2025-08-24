import { query, mutation } from "./_generated/server.js";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    // You need to return the result of the query and call collect()
    return await ctx.db.query("users").collect();
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    // You should also return the result of the insertion
    return await ctx.db.insert("users", { name: "Priyanshu" });
  },
});