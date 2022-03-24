# GraphQL Intro

## Schema

typeDefs will be right here. Where inside of typeDefs will consist of:

- **Query type** -> list of query instruction to get data
- **Mutation type** -> list of mutation instruction to mutate data
- **Item type** -> list of diverse type of object (table or model)
- **Item input** -> list of input use as kind of type for input in mutation

**Note**:  
! (exclamation mark) in schema is to identify that the object cannot be null or must be present. Where if there is no exclamation mark that mean null can be an option

## Resolvers

resolvers will be where all the logic for Query, Mutation, or the other item will be.

### Resolvers Parameter

Inside of resolvers function there are 3 parameter we can use:

1. **parent** -> parent is like a parent of the item (ex: every product have a review, so in this case the parent of review is producrt)
2. **args** -> args will be use to access argument when query or mutate. Where for example when query for a single item, an id will need to be provided and it can be access through args
3. **context** -> context in kind of like something we provide to use in every resolvers function. Where context will be set through server creation in this repository case is the data.
