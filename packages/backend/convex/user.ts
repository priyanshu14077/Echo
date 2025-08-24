import { query, mutation } from "./_generated/server.js";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    
    return await ctx.db.query("users").collect();
  },
});

export const add = mutation({
  args: {},
  // You should also return the result of the insertion
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not authenticated");
    }
    return await ctx.db.insert("users", { name: "Priyanshu" });
  },
});