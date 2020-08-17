(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"bio1":"Hi there! My name is John and I\'m a full stack web developer based in New Hampshire with a preference towards back end development. I\'m currently enrolled in the coding bootcamp through the University of New Hampshire. I decided to pursue a career in software development because I enjoy the challenge of working through a problem. That feeling you get after you spend loads of time working through a problem and finally coming to a solution can definitely become addicting.","bio2":"My current career in retail has given me plenty of experience in customer service. As a framing department manager I\'ve also had experience running a team of employees as well as making sure business goals are met. Even in my retail career I would always take a problem solving approach to any challenges I would come across. Over time I realized that my favorite orders to work on were the ones that challenged me to think outside the box to solve the problem. This lead me to software development. Feel free to scroll through my site here to see some of the projects I\'ve worked on. If you have any questions don\'t hesitate to reach out to me. Check out the link to my contacts page and message me if you\'d like.","img":"../../assets/images/IMG_2633.jpg","alt":"john bouchard"}')},,,,,,,function(e){e.exports=JSON.parse('[{"linkRoute":"https://github.com/jbouchard13","icon":"fab fa-github icon","linkName":"Github"},{"linkRoute":"https://www.linkedin.com/in/johnbouchard94","icon":"fab fa-linkedin-in icon","linkName":"Linkedin"},{"linkRoute":"../../assets/pdfs/Resume-7-27-20.pdf","icon":"fas fa-file icon","linkName":"Resume"}]')},function(e){e.exports=JSON.parse('[{"name":"Food Guru","description":"An app to help you find and keep track of recipes. Create your own account and save recipes to each day of the week. Also, all saved recipes for the week will have their ingredients added to the user\'s shopping list.","role":"Backend developer","tech":"HTML, CSS, Bootstrap, jQuery, Node, Express, MySQL with Sequelize, Passport.js for authentication","github":"https://github.com/gavinspotter/project2","deployed":"https://arcane-coast-86770.herokuapp.com/search","img":"../../assets/images/foodguru-ss-resize.png","alt":"food guru home page"},{"name":"Employee Directory","description":"A small full stack app build with React, keep track of employees and add new ones to the database. Users can also sort the results by category alphabetically.","role":"Full Stack Developer","tech":"HTML, CSS, Bootstrap, React, Node, Express, MongoDB with Mongoose","github":"https://github.com/jbouchard13/react-employee-directory","deployed":"https://evening-headland-87761.herokuapp.com/","img":"../../assets/images/employee-ss-rezize.png","alt":"employee directory home page"},{"name":"Fitness Tracker","description":"An app using a prebuilt frontend that required me to add a backend with Express and MongoDB. Users can create and add their own exercises and see their stats on the Dashboard page. The Dashboard page displays all of their info with stylized graphs.","role":"Backend developer","tech":"HTML, CSS, JavaScript, Node, Express, MongoDB with Mongoose","github":"https://github.com/jbouchard13/mongodb-fitness-tracker","deployed":"https://radiant-dawn-83466.herokuapp.com/","img":"../../assets/images/tracker-ss-resize.png","alt":"fitness tracker creating new exercise"},{"name":"Burger Logger","description":"A fun full stack app that allows users to add burgers they\'d like to eat, and eat them when they choose to. Uses server side rendering with Handlebars for the HTML.","role":"Full Stack Developer","tech":"HTML, CSS, Javascript, Handlebars, Node, Express, MySQL with Sequelize","github":"https://github.com/jbouchard13/node-burger-logger","deployed":"https://murmuring-sea-84963.herokuapp.com/","img":"../../assets/images/burger-ss-resize.png","alt":"burger logger home page"}]')},,,function(e,a,t){e.exports=t(44)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(14),l=t.n(r),s=(t(24),t(25),t(17)),c=t(1),i=t(15);t(26);function m(e){return o.a.createElement("li",{className:"nav-bar-item"},o.a.createElement("a",{className:"nav-bar-link",href:e.linkRoute,target:""},o.a.createElement("i",{className:e.icon}),o.a.createElement("span",{className:"link-text"},e.linkName)))}t(27);function p(){return o.a.createElement("nav",{className:"nav-bar"},o.a.createElement("ul",{className:"nav-bar-nav"},o.a.createElement("li",{className:"nav-logo"},o.a.createElement("a",{href:"/",className:"nav-bar-link"},o.a.createElement("span",{className:"link-text logo-text"},"Links"),o.a.createElement("i",{className:"fas fa-angle-double-right logo-icon"}))),i.map((function(e){return o.a.createElement(m,{linkRoute:e.linkRoute,icon:e.icon,linkName:e.linkName})})),o.a.createElement("li",{className:"nav-bar-item"},o.a.createElement("a",{className:"nav-bar-link",href:"/contacts"},o.a.createElement("i",{className:"far fa-envelope-open icon"}),o.a.createElement("span",{className:"link-text"},"Contacts")))))}var u=t(8);t(28);function d(e){return o.a.createElement("img",{className:"profile-photo",src:e.img,alt:e.alt})}t(29);function h(e){return o.a.createElement("div",{className:"bio-wrapper"},o.a.createElement("p",{className:"bio-text"},e.bio1),o.a.createElement("p",{className:"bio-text"},e.bio2))}t(30);function g(){return o.a.createElement("div",{className:"row profile-wrapper"},o.a.createElement("div",{className:"col-lg-4 photo-wrapper"},o.a.createElement(d,{img:u.img,alt:u.alt})),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement(h,{bio1:u.bio1,bio2:u.bio2})))}t(31);function f(e){return o.a.createElement("img",{className:"project-photo",src:e.img,alt:e.alt})}t(32);function b(e){return o.a.createElement("div",{className:"project-bio"},o.a.createElement("h4",{className:"project-title bold"},e.name),o.a.createElement("p",{className:"project-text"},o.a.createElement("span",{className:"bold"},"About:")," ",e.description),o.a.createElement("p",null,o.a.createElement("span",{className:"bold"},"Tech used:")," ",e.tech),o.a.createElement("p",null,o.a.createElement("span",{className:"bold"},"Role:")," ",e.role),o.a.createElement("p",null,o.a.createElement("span",{className:"bold"},"See it in action:")," ",o.a.createElement("a",{href:e.deployed,target:"_blank"},"Link")),o.a.createElement("p",null,o.a.createElement("span",{className:"bold"},"See the code:")," ",o.a.createElement("a",{href:e.github,target:"_blank"},"Github Repo")))}t(33);function E(e){return o.a.createElement("div",{className:"row project-wrapper"},o.a.createElement("div",{className:"col-lg-3"},o.a.createElement(f,{img:e.img,alt:e.alt})),o.a.createElement("div",{className:"col-lg-9"},o.a.createElement(b,{name:e.name,description:e.description,role:e.role,tech:e.tech,deployed:e.deployed,github:e.github})))}var k=t(16);t(34);function v(){return o.a.createElement("section",{id:"projects"},o.a.createElement("h2",{className:"project-section-title"},"Projects"),k.map((function(e){return o.a.createElement(E,{name:e.name,description:e.description,role:e.role,tech:e.tech,github:e.github,deployed:e.deployed,img:e.img,alt:e.alt})})))}t(35);function N(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid intro"},o.a.createElement("div",{className:"text-wrapper"},o.a.createElement("h1",{className:"jumbo-text"},"John Bouchard"),o.a.createElement("p",null,"Full Stack Web Developer")))}t(36);function y(){return o.a.createElement("div",{className:"main"},o.a.createElement(N,null),o.a.createElement(g,null),o.a.createElement(v,null))}t(37);function w(){return o.a.createElement("form",{action:"https://formspree.io/xvowdyvo",method:"POST"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{for:"_replyto"},"Your Email:"),o.a.createElement("input",{className:"email",name:"_replyto",type:"text",placeholder:"YourEmailHere@email.com"}),o.a.createElement("label",{for:"message"},"Your Message:"),o.a.createElement("textarea",{className:"message-box",name:"message",placeholder:"Your message here!"}),o.a.createElement("div",{className:"center"},o.a.createElement("button",{className:"btn submit-btn",type:"submit"},"Send Message"))))}t(38);function x(){return o.a.createElement("div",{className:"background"},o.a.createElement("div",{className:"contacts-wrapper"},o.a.createElement("h2",{className:"title"},"How to reach me"),o.a.createElement("p",{className:"contact-text"},"Feel free to leave me a message here. Whatever you leave goes to my email. If you'd prefer to reach out with other means, my phone number is 603-793-8457 or check out the links in the navbar."),o.a.createElement(w,null)))}var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement(s.a,null,o.a.createElement(c.a,{exact:!0,path:"/",component:y}),o.a.createElement(c.a,{exact:!0,path:"/contacts",component:x})))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.89f57f3a.chunk.js.map