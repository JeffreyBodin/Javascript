// 2021-05-13 Gmail - Filter - Ebay


/* 
  SCHEMA 
  && 
  DESIGN METHODOLOGY

```  
/* Filter -> "call n (1) here" -> "nxt call n(IterativeIO)" */
// (1)
// '  "thing"  ' | '  "Class" of thing filtering here  ' Filter

// ln 
'string n(1) here' || 'string n(2) here' || 'string n(3) here'

// ls
'string n(1) here'
'string n(2) here'
'string n(3) here'


// ----- //
```

  1. Each filter is classed by its function as a method.

  2. Each filter has sub-filters "(1), (2), (3), (4), n (etc)".

  3. Each sub-filter is classed by its function as a method.

  4. Each sub-filter has a "ln" OR "single line" ver. (Called)

  5. Each sub-filter has a "ls" OR string literal list. (dev | NOT Called)

  6. Each sub-filter is followed by a new line && (n) sub-filter.

  7. Each filter is followed by two new lines && pagination.

  8. Each pagination is followed by five new lines && next filter.

  SCHEMA 
  && 
  DESIGN METHODOLOGY
*/


// ----- //

# v1.0.0
