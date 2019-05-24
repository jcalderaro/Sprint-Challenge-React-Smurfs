## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1.  Explain the differences between `client-side routing` and `server-side routing`.

Client Side Routing: when the page refreshes, only partial areas of it will. Since less data is processed, or being re-rendered,
routing between views is generally faster. However the down side is that the entire page must load on the first request, which
may be slower overall. In addition to requiring more setup time in the library with not as optimized, search-enginge-crawling.

Server Side Routing: This has been standard practice for a long time, meaning most if not all search engines are optimized for
this setup. Every request results in a full page restore, sometimes filled in or unnecessary data will be lost in the process. 
Essentially the document upon hitting refresh is purged, deleted, and a new one is generated and rendered for the user. 

1.  What does HTTP stand for?

HTTP means HyperText Transfer Protocol. HTTP is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.

1.  What does CRUD stand for?

CRUD stands for Create, Read, Update and Delete. (Retrieve may occasionally be substituted for Read.) These functions are also descriptive of the data life cycle. Different users may have different CRUD cycles based upon the requirements of the system.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

I do not know the answer personally, this answer is sourced from: 
https://stackoverflow.com/questions/6203231/which-http-methods-match-up-to-which-crud-methods

Create = PUT with a new URI
         POST to a base URI returning a newly created URI
Read   = GET
Update = PUT with an existing URI
Delete = DELETE

1.  Mention three tools we can use to make AJAX requests
    a. Fetch
    b. Request
    c. Super(agent)


/* Clear */