1. Remove Youtube and Shop links from header and moved into navigation itself - understandably this may have undesired affects such as less people visiting those links, im not sure how integral they are to the site.
2. Animate burger menu - as another visual indicator that they're now in the nav menu.
3. Navigation is now sticky - the user no longer has to scroll to the top of the page to navigate elsewhere.
4. I've moved presenters into an accordion - less scrolling for the user.
5. I've moved social icons into the navigation - to make way for the search button.
6. Moved the search button into the sticky navigation - this way the user doesn't have to scroll to the top of the page to search.


**Notes:**

The API didn't allow me to fetch data as there is a CORS issue.

As time was limited, here are a few things I didn't do:

1. I didn't implement the search dropdown but this would work similarly to the presenter dropdown.
2. I didn't move the dropdown into its own component, which is something I'd usually do as it doesn't need to be coupled to the navigation. (Doing this would also improve performance, as the navigation wouldn't need to completely re-render)
3. I didn't implement the navigation correctly on desktop, some things are broken, but as mentioned I was to focus on mobile.