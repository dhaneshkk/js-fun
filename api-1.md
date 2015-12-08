#The Hikikomori's Guide to JavaScript#
You start with an idea, extract the key components of that idea (primitives), 
provide combinators to compose ideas together, and only then provide additional transformations for the user-facing interface.

1. Start with an API to manipulate your data, not with an Application.
  -The API defines how your application (and other computer things) can interact with the data you're interested in.
    -My usual design approach is to examine the inputs and outputs of the application, 
    -and then design an API that handles such data. 
    -Later I'll stack the user experience and the “glue” code on top of such API to form an actual application
2. Extract the most basic, orthogonal concepts, and provide primitives to encode them. 
3. Provide “glue” code to compose concepts together and create big things.
4. Work with structured data.
5. Write the actual application using your API.


-If you want people to actually use your API in a meaningful way, you must work with structured data.

-Strings might be easy, but we don't
-want easy when designing an API, we want simple 2. 
-Simple stuff sometimes means you get to write more, 
-but also means that you get something that's more meaningful overall, 
-that's extensible and that composes well with other things without randomly breaking for no good reason. 



