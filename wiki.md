# what did i learn ?

## What is the inset property in CSS?

The inset property in CSS is a shorthand for the four inset properties, top, right, bottom and left in one declaration.

# How to does next/theme work?

basically to make theme with css you need variables, a root one which is the default and any other you want like 

``` css
.red {
  --foreground:...;
  --background:...;
  --other-var:...;
}
```

then you update your body to have this class and it will take thoses variables and apply them.