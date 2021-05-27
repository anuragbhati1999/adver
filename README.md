This application is created using create-react-app puresly with React.js
It has homepage which lists the user data
Homepage : 1) takes data from usefetch hook inside usefetch.js file 
           2) send data fetched with help of props  to useList for diaplayin data
           
           
Usefetch: 1) it uses fetch api inside useffect hook
          2) useState hook for dynamic data, error
          3) it export three properties : data, error, isPendig
          
          
 UseList :1) reaturnig list of user
         2) I have used react-bootsrap for layout
         3) Accordion from react-boostrap for email, so if we click on email, it gives email of that user
         4) installled copy-mail-to module using npm so that we can easily copy mail of that user
         
         
NotFound.js: 1)If user goes to any other url, it says sorry not found and provide link to home page


Navbar : it contains brand(Advertyzement) and link to get user
