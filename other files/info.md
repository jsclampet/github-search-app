## Github Search App

-Github API:    https://docs.github.com/en/rest/reference/users#get-a-user 

## The Plan

[MobileFirst](375x777px)
-Light Mode
-Dark Mode

**Structure**
-HTML first
-CSS next
-JS last
-Could try outer to inner approach

[HTML-first]
-Main Container for uniform width
-Heading div with light/dark switch
-Header container (search), input with search btn
-User Info container with:
-- User-Profile div to show pic, name, tag, date joined
-- Paragraph underneath (relevant info, maybe status?)
-- follower div to show Repos Followers Following
-- contact div to show location, blog, twitter, github tag

[CSS-next]
-specify 'darkmode' classes
-Mobile First
-Show location, github blog, twitter, github tag

[JS-last]
-Dynamic data sections:
--Dark/light button
--Search field
--User profile Div (pic || name, tag, joined)

## Colors 

[LightMode]
-#0079FF  (bright blue)
-#697C9A  (grayish)
-#4B6A9B (gray blue)
-#2B3442 (dark gray / light black)
-#F6F8FF (white blue)
-#FEFEFE (white)

[DarkMode]
-#0079FF  (bright blue)
-#FFFFFF (whitest white)
-#141D2F (Light Black)
-#1E2A47 (gray)



## Expected behaviour

- On first load, show the profile information for Octocat.
- Display an error message (as shown in the design) if no user is found when a new search is made.
- If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
- If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
- If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
- Website, twitter, and company information should all be links to those resaources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.